import * as azmaps from 'azure-maps-control';
import * as azmapsrest from 'azure-maps-rest';
import { Utils } from "../../helpers/Utils";

export interface RouteUIOptions {
    map?: azmaps.Map;

    instructionsContainerID?: string;

    /**
     * The unit of measurement displayed. Default: metric
     * - metric: specifies usage of the metric system. Distances are shown using kilometers and meters.
     * - imperial: specifies usage of the Imperial (English) system. Distances are shown using miles and feet.
     */
    units?: 'metric' | 'imperial';
}

export class RouteUIManager {
    private _service: azmapsrest.RouteURL;

    private _options: RouteUIOptions = {
        units: 'metric'
    };

    private _lastRouteDirectionsOptions: azmapsrest.CalculateRouteDirectionsOptions;

    private _instructionsDiv: HTMLDivElement;
    private _langauge: string;
    private _lastResponse: azmapsrest.CalculateRouteDirectionsResponse;


    constructor(service: azmapsrest.RouteURL, options?: RouteUIOptions) {

        this._service = service;

        if (options) {
            this.setOptions(options);
        }
    }

    //Public functions

    public clear() {
        //Clear current container.
        if (this._instructionsDiv) {
            this._instructionsDiv.innerHTML = '';
        }
    }

    public calculateRouteDirections(aborter: azmapsrest.Aborter, waypoints: azmaps.data.Position[], options?: azmapsrest.CalculateRouteDirectionsOptions) {
        this._langauge = Utils.detectLanguage(this._langauge, options);
        this._lastRouteDirectionsOptions = options;
        this._lastResponse = null;

        this._service.calculateRouteDirections(aborter, waypoints, options).then(this._directionsCalculated).catch(this._directionsError);
    }

    public getService(): azmapsrest.RouteURL {
        return this._service;
    }

    public setOptions(options: RouteUIOptions) {

        if (options.instructionsContainerID === null || (options.instructionsContainerID && options.instructionsContainerID !== this._options.instructionsContainerID)) {

            //Remove current container.
            if (this._instructionsDiv) {
                this._instructionsDiv.remove();
            }

            if (options.instructionsContainerID) {
                this._instructionsDiv = document.createElement('div');

                this._options.instructionsContainerID = options.instructionsContainerID;
            }
        }
    }

    //Private functions

    private _directionsCalculated = (response: azmapsrest.CalculateRouteDirectionsResponse) => {
        this._lastResponse = response;

        if (response && response.routes && response.routes.length > 0) {

            var route = response.routes[0];

            if (this._instructionsDiv) {

                //Add summary
                if (route.summary) {
                    // route.summary.lengthInMeters / travelTimeInSeconds / trafficDelayInSeconds / departureTime / arrivalTime / noTrafficTravelTimeInSeconds / historicTrafficTravelTimeInSeconds / liveTrafficIncidentsTravelTimeInSeconds
                }

                //Generate instructions.
                if (route.guidance && route.guidance.instructions) {

                    var traveledDistance = 0;
                    var traveledTime = 0;

                    for (var i = 0, len = route.guidance.instructions.length; i < len; i++) {
                        var ins = route.guidance.instructions[i];
                        var insElm = document.createElement('div');
                        insElm.className = 'azure-maps-route-instruction';
                        insElm.innerHTML = ins.message;

                        if (ins.routeOffsetInMeters > 0) {
                            insElm.innerHTML += `<br/>${Utils.formatDistance(ins.routeOffsetInMeters - traveledDistance, this._options.units)}`;

                            traveledDistance = ins.routeOffsetInMeters;
                            traveledTime = ins.travelTimeInSeconds;
                        }
                    }
                }
            }

            if (this._options.map) {
                //Get the route data as GeoJSON and add it to the data source.
                // var data = directions.geojson.getFeatures();
                //datasource.add(data);
            }
        } else {
            this._directionsError();
        }
    };

    private _directionsError = (error?: any) => {
        var msg: string;

        if (error.msg) {

        } else if (error.code) {

        }

        if (msg && this._instructionsDiv) {

        }
    };
}
