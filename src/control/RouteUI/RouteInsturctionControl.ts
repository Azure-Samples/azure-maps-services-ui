import * as azmaps from "azure-maps-control";
import * as azmapsrest from "azure-maps-rest";
import { RouteInsturctionControlOptions } from "./RouteInsturctionControlOptions";
import { Utils } from '../../helpers/Utils';
import { Localization, Resource } from '../../helpers/Localization';
import { EmbeddedIcons } from '../../helpers/EmbeddedIcons';

/** A control for rendering route instructions. */
export class RouteInsturctionControl implements azmaps.Control {

    /** The control element. */
    private _control: HTMLElement;

    /** A container for the control if added to the map. */
    private _mapControlConatiner: HTMLElement;

    /** Control options. */
    private _options: RouteInsturctionControlOptions = {
        displayDisclaimer: true,
        // displayRouteSelector: true,
        groupInstructions: false,
        routeIndex: 0,
        style: 'light',
        units: 'auto',
        waypointTextFormat: 'letter'
    };

    /** A map that the control is attached to. */
    private _map: azmaps.Map;

    /** The route response being rendered. */
    private _routeResponse: azmapsrest.CalculateRouteDirectionsResponse;

    /** Localization resources. */
    private _resources: Resource;

    /** Character representation for waypoint indices 1 through 150. */
    private _waypointIndices = [
        '', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB',
        'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN',
        'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ',
        'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL',
        'BM', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BV', 'BW', 'BX',
        'BY', 'BZ', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ',
        'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV',
        'CW', 'CX', 'CY', 'CZ', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH',
        'DI', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DO', 'DP', 'DQ', 'DR', 'DS', 'DT',
        'DU', 'DV', 'DW', 'DX', 'DY', 'DZ', 'EA', 'EB', 'EC', 'ED', 'EE', 'EF',
        'EG', 'EH', 'EI', 'EJ', 'EK', 'EL', 'EM', 'EN', 'EO', 'EP', 'EQ', 'ER',
        'ES', 'ET'
    ];

    /**
     * A control for rendering route instructions.
     * @param options Options for the control.
     */
    constructor(options?: RouteInsturctionControlOptions) {
        if (options) {
            this.setOptions(options);

            if (!this._options.langauge) {
                this._options.langauge = Utils.detectLanguage();
                this._resources = Localization.getResource(this._options.langauge);
            }
        }
    }

    /**
     * Clears the route instructions from the control. 
     */
    public clear(): void {
        if (this._control) {
            this._control.remove();
        }

        this._routeResponse = null;
    }

    /**
     * Gets the options of the route instruction control.
     */
    public getOptions(): RouteInsturctionControlOptions {
        return Object.assign({}, this._options);
    }

    /**
    * Sets the options of the route instruction control.
    */
    public setOptions(options: RouteInsturctionControlOptions): void {
        if (options) {
            if (typeof options.containerId !== 'undefined' && this._options.containerId !== options.containerId) {
                if (this._control) {
                    this._control.remove();
                }

                if (this._mapControlConatiner && options.containerId !== null) {
                    this._mapControlConatiner.remove();
                }

                this._options.containerId = options.containerId;
            }

            if (typeof options.displayDisclaimer === 'boolean' && this._options.displayDisclaimer !== options.displayDisclaimer) {
                this._options.displayDisclaimer = options.displayDisclaimer;
            }

            /* if (typeof options.displayRouteSelector === 'boolean' && this._options.displayRouteSelector !== options.displayRouteSelector) {
                 this._options.displayRouteSelector = options.displayRouteSelector;
             }*/

            if (typeof options.routeIndex === 'boolean' && this._options.routeIndex !== options.routeIndex) {
                this._options.routeIndex = options.routeIndex;
            }

            if (typeof options.groupInstructions === 'boolean' && this._options.groupInstructions !== options.groupInstructions) {
                this._options.groupInstructions = options.groupInstructions;
            }

            if (options.waypointTextFormat && this._options.waypointTextFormat !== options.waypointTextFormat) {
                this._options.waypointTextFormat = options.waypointTextFormat;
            }

            if (options.langauge && this._options.langauge !== options.langauge) {
                this._options.langauge = options.langauge;
                this._resources = Localization.getResource(options.langauge);
            }

            if (options.style && this._options.style !== options.style) {
                this._options.style = options.style;
            }

            if (options.units && this._options.units !== options.units) {
                this._options.units = options.units;
            }
        }

        this._renderRoute();
    }

    /**
     * Gets the route response information used in the instruction control.
     */
    public getRoute(): azmapsrest.CalculateRouteDirectionsResponse {
        return this._routeResponse;
    }

    /**
    * Sets the route response information used in the instruction control.
    */
    public setRoute(routeResponse: azmapsrest.CalculateRouteDirectionsResponse): void {
        this._routeResponse = routeResponse;
        this._renderRoute();
    }

    /**
     * Initialization method for the control which is called when added to a map.
     * @return An HTMLElement to be placed on the map for the control.
     */
    public onAdd(map: azmaps.Map, options?: azmaps.ControlOptions): HTMLElement {
        this._map = map;

        //Remove the control from the map incase it has been added previously.
        if (this._mapControlConatiner) {
            this._mapControlConatiner.remove();
        }

        if (!this._options.containerId) {
            //Create the container for display on the map. 

            this._mapControlConatiner = document.createElement('div');
            this._mapControlConatiner.classList.add('route-instruction-map-container');
            // this._mapControlConatiner.setAttribute('aria-label', this._resource.title);
            this._mapControlConatiner.style.flexDirection = 'column';
        }

        this._renderRoute();
        return this._mapControlConatiner;
    }

    /**
     * Method that is called when the control is removed from a map. Should perform any necessary cleanup for the control.
     */
    public onRemove(): void {
        this._map = null;

        if (this._control) {
            this._control.remove();
            delete this._control;
        }

        if (this._mapControlConatiner) {
            this._mapControlConatiner.remove();
            delete this._mapControlConatiner;
        }
    }

    /////////////////////////////
    // Private functions
    /////////////////////////////

    /**
     * Generates the HTML instructions for rendering.
     */
    private _renderRoute() {
        if (this._routeResponse
            && this._routeResponse.routes
            && this._routeResponse.routes.length > 0
            && (this._options.containerId || this._map)) {

            if (this._control) {
                this._control.remove();
            }

            var elpasedDistance = 0;
            var elpasedTime = 0;

            var route = this._routeResponse.routes[0];

            if (this._options.routeIndex > 0 && this._routeResponse.routes.length > this._options.routeIndex) {
                route = this._routeResponse.routes[this._options.routeIndex];
            }

            var hasIns = route.guidance && route.guidance.instructions && route.guidance.instructions.length > 0;

            var distanceUnits = this._options.units;

            if (!distanceUnits || distanceUnits === 'auto') {
                var p = (hasIns) ? route.guidance.instructions[0].point : ((route.legs && route.legs.length > 0) ? route.legs[0].points[0] : null);
                var coord = (p) ? [p.longitude, p.latitude] : null;

                distanceUnits = Utils.detectDistanceUnits((hasIns) ? route.guidance.instructions[0].countryCode : null, this._options.langauge, coord);
            }

            var insElm: HTMLElement;

            insElm = document.createElement('div');
            insElm.classList.add('route-instruction-container');

            //Summary
            if (route.summary) {
                var summary = document.createElement('div');
                summary.classList.add('route-summary');

                var d = Utils.formatDistance(route.summary.lengthInMeters, distanceUnits);
                var t = Utils.formatTimespan(route.summary.travelTimeInSeconds);

                var s = `<span class="route-summary-time">${t}</span> <span class="route-summary-distance">${d}</span>`;

                var delayRatio = route.summary.trafficDelayInSeconds / route.summary.travelTimeInSeconds;
                if (delayRatio > 0.05 && route.summary.trafficDelayInSeconds > 60) {
                    var tt = Utils.formatTimespan(route.summary.trafficDelayInSeconds);
                    var trafficCss: string;
                    var trafficMsg: string;

                    //0.05 > ratio < 0.1 => light traffic.
                    //ratio < 0.2 => Moderate traffic.
                    //ratio > 0.2 => heavy traffic.

                    if (delayRatio > 0.2) {
                        trafficCss = 'route-summary-traffic-heavy';
                        trafficMsg = this._resources.hTraffic;
                    } else if (delayRatio > 0.1) {
                        trafficCss = 'route-summary-traffic-moderate';
                        trafficMsg = this._resources.mTraffic;
                    } else {
                        trafficCss = 'route-summary-traffic-light';
                        trafficMsg = this._resources.lTraffic;
                    }

                    s += `<span class="route-summary-traffic-time"><span class="${trafficCss}">${trafficMsg}</span> - ${tt} ${this._resources.delay}</span>`;
                }

                //TODO: add logic.
                var arrive = Utils.formatArriveDateTime(route.summary.arrivalTime);

                s += `<span class="route-summary-arrive-by"><span class="route-summary-arrive-by-label">${this._resources.arriveBy}:</span> ${arrive}</span>`

                summary.innerHTML = s;

                insElm.appendChild(summary);
            }

            //Instructions
            if (route.guidance && route.guidance.instructions) {
                var ins = route.guidance.instructions;
                var waypointIdx = 0;
                var waypointText: string;
                var insItemElm: HTMLElement;
                var i: number;
                var insTime: number;

                if (this._options.groupInstructions && route.guidance.instructionGroups) {
                    var insGroup = route.guidance.instructionGroups;
                    var insGroupElm: HTMLElement;
                    var groupDescElm: HTMLElement;
                    var groupTime: number;
                    var msg: string;

                    for (var g = 0; g < insGroup.length; g++) {
                        groupTime = 0;

                        insGroupElm = document.createElement('div');
                        insGroupElm.classList.add('route-instruction-group');

                        //Instruction group.
                        for (i = insGroup[g].firstInstructionIndex; i <= insGroup[g].lastInstructionIndex; i++) {
                            waypointText = '';

                            if (this._isWaypoint(ins[i])) {
                                waypointIdx++;
                                waypointText = (this._options.waypointTextFormat === 'number') ? waypointIdx.toString() : this._waypointIndices[waypointIdx];
                            }

                            insTime = ins[i].travelTimeInSeconds - elpasedTime;

                            insItemElm = this._createInstruction(ins[i],
                                i,
                                insTime,
                                ins[i].routeOffsetInMeters - elpasedDistance,
                                distanceUnits,
                                waypointText);

                            insGroupElm.appendChild(insItemElm);

                            elpasedDistance = ins[i].routeOffsetInMeters;
                            elpasedTime = ins[i].travelTimeInSeconds;

                            groupTime += insTime;
                        }

                        groupDescElm = document.createElement('div');
                        groupDescElm.classList.add('route-instruction-group-desc');

                        msg = `<span class="route-instruction-group-msg">${this._styleTaggedMessage(insGroup[g].groupMessage)}</span> `;

                        if (groupTime > 30) {
                            msg += `<span class="route-instruction-group-time">${Utils.formatTimespan(groupTime)}</span> `;
                        }

                        if (insGroup[g].groupLengthInMeters > 0) {
                            msg += `<span class="route-instruction-group-distance">${Utils.formatDistance(insGroup[g].groupLengthInMeters, distanceUnits)}</span>`;
                        }
                        groupDescElm.innerHTML = msg;

                        insGroupElm.insertBefore(groupDescElm, insGroupElm.childNodes[0]);
                        insElm.appendChild(insGroupElm);
                    }
                } else {
                    for (i = 0; i < ins.length; i++) {
                        waypointText = '';

                        if (this._isWaypoint(ins[i])) {
                            waypointIdx++;
                            waypointText = (this._options.waypointTextFormat === 'number') ? waypointIdx.toString() : this._waypointIndices[waypointIdx];
                        }

                        insTime = ins[i].travelTimeInSeconds - elpasedTime;

                        insItemElm = this._createInstruction(ins[i],
                            i,
                            insTime,
                            ins[i].routeOffsetInMeters - elpasedDistance,
                            distanceUnits,
                            waypointText);

                        insElm.appendChild(insItemElm);

                        elpasedDistance = ins[i].routeOffsetInMeters;
                        elpasedTime = ins[i].travelTimeInSeconds;
                    }
                }

                //Disclaimer
                if (this._options.displayDisclaimer) {
                    var disElm = document.createElement('div');
                    disElm.classList.add('route-disclaimer');
                    disElm.innerHTML = this._resources.rDisclaimer;
                    insElm.appendChild(disElm);
                }
            }

            this._control = insElm;

            //Check for high contrast, or set the dark style
            if (Utils.highContrastStyle() === 'dark' || this._options.style === 'dark') {
                insElm.classList.add('route-instruction-dark');
            }

            //Render in user specified container.
            if (this._options.containerId) {
                document.getElementById(this._options.containerId).appendChild(this._control);
            } else if (this._map && this._mapControlConatiner) { //Render as a control in the map. 
                this._mapControlConatiner.appendChild(this._control);
            }
        }
    }

    /** 
     * Checks to see if an instruction if for a waypoint/depart/arrive.
     * @param instruction A route instruction.
     * @returns A boolean indicating if the instruction is for a waypoint.
     */
    private _isWaypoint(instruction: azmapsrest.Models.RouteResultInstruction): boolean {
        var m: string = instruction.maneuver;
        switch (m) {
            case 'ARRIVE':
            case 'ARRIVE_LEFT':
            case 'ARRIVE_RIGHT':
            case 'DEPART':
            case 'WAYPOINT_REACHED':
            case 'WAYPOINT_LEFT':
            case 'WAYPOINT_RIGHT':
                return true;
        }

        return false;
    }

    /**
     * Generates a HTML element for a route instruction. 
     * @param instruction The route instruction.
     * @param idx The index of the instruction.
     * @param time The time span from the last instruction.
     * @param distance The distance of the instruction from the last instruction.
     * @param distanceUnits The distance units to use.
     * @param waypointText The text to display if the instruction is for a waypoint/arrive/depart.
     */
    private _createInstruction(
        instruction: azmapsrest.Models.RouteResultInstruction,
        idx: number,
        time: number,
        distance: number,
        distanceUnits: 'metric' | 'imperial',
        waypointText: string): HTMLDivElement {

        //Item container
        var insItemElm = document.createElement('div');
        insItemElm.classList.add('route-instruction');

        //Maneuver icon
        var icon = EmbeddedIcons.getRouteInstructionIcon(instruction);

        var maneuver = document.createElement('div');
        maneuver.classList.add('route-maneuver');
        maneuver.setAttribute('aria-hidden', 'true');

        //Add a unqiue CSS class for the maneuver type. 
        maneuver.classList.add('route-maneuver-' + instruction.maneuver);

        if (icon) {
            maneuver.innerHTML = icon;
        }

        insItemElm.appendChild(maneuver);

        if (waypointText) {
            var waypointTextElm = document.createElement('span');
            waypointTextElm.classList.add('route-maneuver-text');
            waypointTextElm.innerText = waypointText;
            insItemElm.appendChild(waypointTextElm);
        }

        //Message
        var insText = document.createElement('div');
        insText.classList.add('route-instruction-msg');

        var msg = instruction.message;


        msg = this._styleTaggedMessage(msg);

        insText.innerHTML = msg;
        insItemElm.appendChild(insText);

        //Distance
        if (distance > 0) {
            var disText = document.createElement('div');
            disText.classList.add('route-instruction-distance');
            disText.innerHTML = Utils.formatDistance(distance, distanceUnits);

            insItemElm.appendChild(disText);
        }

        /* insItemElm.addEventListener('mouseenter', () => {
             this._invokeEvent('mouseenter', instruction);
         });
 
         insItemElm.addEventListener('mouseout', () => {
             this._invokeEvent('mouseout', instruction);
         });
 
         insItemElm.addEventListener('click', () => {
             this._invokeEvent('click', instruction);
         });*/

        return insItemElm;
    }

    /**
     * Adds css class styles to instructions by replacing coded tags to HTML spans and css classes.
     * @param msg A tagged message.
     * @returns A styled message.
     */
    private _styleTaggedMessage(msg: string): string {
        return msg.replace(/<(street|roadNumber|exitNumber|signpostText|roundaboutExitNumber)>/gi, '<span class="route-instruction-$1">').
            replace(/<\/(street|roadNumber|exitNumber|signpostText|roundaboutExitNumber)>/gi, '</span>');
    }

    //TODO: events, collapsible instruction groups, route selector/alternative routes
    //Walking warning?

}