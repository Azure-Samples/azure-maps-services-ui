import * as azmaps from 'azure-maps-control';
import * as azmapsrest from 'azure-maps-rest';

declare namespace atlas {

    /////////////////////////////
    // Controls
    /////////////////////////////

    export module control {

        /** A control for rendering route instructions. */
        export class RouteInsturctionControl implements azmaps.Control {
            /**
             * A control for rendering route instructions.
             * @param options Options for the control.
             */
            constructor(options?: RouteInsturctionControlOptions);

            /**
             * Clears the route instructions from the control. 
             */
            public clear(): void;

            /**
             * Gets the options of the route instruction control.
             */
            public getOptions(): RouteInsturctionControlOptions;

            /**
            * Sets the options of the route instruction control.
            */
            public setOptions(options: RouteInsturctionControlOptions): void;
            /**
             * Gets the route response information used in the instruction control.
             */
            public getRoute(): azmapsrest.CalculateRouteDirectionsResponse;

            /**
            * Sets the route response information used in the instruction control.
            */
            public setRoute(routeResponse: azmapsrest.CalculateRouteDirectionsResponse): void;

            /**
             * Initialization method for the control which is called when added to a map.
             * @return An HTMLElement to be placed on the map for the control.
             */
            public onAdd(map: azmaps.Map, options?: azmaps.ControlOptions): HTMLElement;

            /**
             * Method that is called when the control is removed from a map. Should perform any necessary cleanup for the control.
             */
            public onRemove(): void;
        }
    }

    /////////////////////////////
    // Interfaces
    /////////////////////////////

    /**
     * Options for the route instuction control.
     */
    export interface RouteInsturctionControlOptions {

        /**
         * The ID of a div element to render the instructions in.
         */
        containerId?: string;

        /**
         * A boolean indicating whether to display a disclaimer about the accuracy of the route instructions. 
         * @default true
         */
        displayDisclaimer?: boolean;

        /**
         * A boolean indicating whether to display a control to select between alternative routes.
         * @default true
         */
        // displayRouteSelector?: boolean;

        /**
         * Specifies if instruction should be broken up into groups.
         * @default false
         */
        groupInstructions?: boolean;

        /**
         * A language to localize to. If not specified, will try and detect an appropriate language.
         */
        langauge?: string;

        /**
         * Specifies which route instructions to display when there are alternative routes.
         */
        routeIndex?: number;

        /** 
         * The style to apply to the control. This will be ignored when screen in high contrast mode. 
         * @default 'light'
        */
        style?: 'light' | 'dark';

        /**
         * The distance units to display. 
         * - auto: will try and detect an appropriate unit.
         * - metric: specifies usage of the metric system. Distances are shown using kilometers and meters.
         * - imperial: specifies usage of the Imperial (English) system. Distances are shown using miles and feet.
         * @default 'auto'
         */
        units?: 'auto' | 'metric' | 'imperial';

        /**
         * Specifies the format of the waypoint label text over the manuever icon. 
         * - number: A value between 1 and 150 will be displayed.
         * - letter: A letter representation between A and ET (index 150), will be displayed.
         * @default 'letter'
         */
        waypointTextFormat?: 'number' | 'letter';
    }
}