import * as azmapsrest from "azure-maps-rest";

/** Embedded SVG icons that can easily be styled using CSS. Also faster than making a bunch of HTTP requests. */
export class EmbeddedIcons {

    /**
     * Retrieves an SVG icon for a route instruction.
     * @param instruction The route instruction to get the icon for.
     * @returns An SVG icon for a route instruction.
     */
    public static getRouteInstructionIcon(instruction?: azmapsrest.Models.RouteResultInstruction): string {
        var ds = instruction.drivingSide || 'RIGHT';
        var m: string = instruction.maneuver;
        var icon: string;

        if (m) {

            //Override maneuver with alternate icon.
            switch (m) {
                case 'TRY_MAKE_UTURN':
                    m = 'MAKE_UTURN';
                    break;
                case 'FOLLOW':
                    m = 'STRAIGHT';
                    break;
                case 'DEPART':
                case 'ARRIVE':
                    m = 'WAYPOINT_REACHED';
                    break;
                case 'ARRIVE_LEFT':
                    m = 'WAYPOINT_LEFT';
                    break;
                case 'ARRIVE_RIGHT':
                    m = 'WAYPOINT_RIGHT';
                    break;
                case 'ENTER_MOTORWAY':
                case 'ENTER_FREEWAY':
                case 'ENTRANCE_RAMP':
                    m = 'ENTER_HIGHWAY';
                    break;
                case 'TAKE_EXIT':
                    if (ds === 'LEFT') {
                        m = 'MOTORWAY_EXIT_LEFT';
                    } else {
                        m = 'MOTORWAY_EXIT_RIGHT';
                    }
                    break;
                case 'SWITCH_PARALLEL_ROAD':
                    m = 'SWITCH_MAIN_ROAD';
                    break;
            }

            if (ds === 'LEFT') {
                icon = this.RouteIconsLeft[m];
            }

            if (!icon) {
                icon = this.RouteIcons[m];
            }
        }

        if (icon && icon !== '') {
            return icon;
        }

        return null;
    }

    /** Route manuever icons. */
    private static RouteIcons = {
        WAYPOINT_REACHED: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.5 36.5"><g stroke="none"><path d="M12.25.25a12.2543,12.2543,0,0,0-12,12.4937c0,6.4436,6.4879,12.1093,11.059,22.5641.5493,1.2563,1.3327,1.2563,1.882,0C17.7621,24.8529,24.25,19.1857,24.25,12.7437A12.2543,12.2543,0,0,0,12.25.25Z"/></g></svg>',
        WAYPOINT_LEFT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.5 36.5"><g stroke="none"><path d="M12.25.25a12.2543,12.2543,0,0,0-12,12.4937c0,6.4436,6.4879,12.1093,11.059,22.5641.5493,1.2563,1.3327,1.2563,1.882,0C17.7621,24.8529,24.25,19.1857,24.25,12.7437A12.2543,12.2543,0,0,0,12.25.25Z"/><polygon points="6,28 6,36 0,32"/></g></svg>',
        WAYPOINT_RIGHT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.5 36.5"><g stroke="none"><path d="M12.25.25a12.2543,12.2543,0,0,0-12,12.4937c0,6.4436,6.4879,12.1093,11.059,22.5641.5493,1.2563,1.3327,1.2563,1.882,0C17.7621,24.8529,24.25,19.1857,24.25,12.7437A12.2543,12.2543,0,0,0,12.25.25Z"/><polygon points="18,28 18,36 24,32"/></g></svg>',
        STRAIGHT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M13.4 11.6h3.2v13.6h-3.2z"/><path d="M9.4 14.4l5.6-2.5 5.6 2.5-5.7-9.6z"/></g></svg>',
        KEEP_RIGHT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M10.6 25.6H7.4V20c0-.7.5-1.3 1.1-1.5l6.9-2.1v-5.2h3.2v6.4c0 .7-.5 1.3-1.1 1.5l-6.9 2.1v4.4z"/><path d="M17 11.5L11.4 14l5.7-9.6 5.5 9.6z"/></g></svg>',
        BEAR_RIGHT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M14.2 25.1H11V21c0-2.9.4-4.8 1.7-7.1.5-1 2.8-4.5 3.1-4.9l2.7 1.8c-.9 1.4-2.6 4-2.9 4.6-1 1.9-1.3 3.3-1.3 5.7v4h-.1z"/><path d="M19.9 16l-3.6-5-6.2-.6 9.8-5.5z"/></g></svg>',
        TURN_RIGHT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M8.6 23.8H5.4v-5.6c0-4.4 3.6-8 8-8h4.8v3.2h-4.8c-2.6 0-4.8 2.2-4.8 4.8v5.6z"/><path d="M17.5 11.8L15 6.2l9.6 5.7-9.6 5.5z"/></g></svg>',
        SHARP_RIGHT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M10.3 24.95H7.1V8.15c0-.8.4-1.6 1-2.2 1.2-1.2 3.2-1.2 4.5 0l8.9 8.9-2.3 2.3-8.9-8.9v16.7z"/><path d="M17.9 13.55l2.2-5.8 2.8 10.8-10.7-2.9z"/></g></svg>',
        KEEP_LEFT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M19.4 25.6h3.2V20c0-.7-.5-1.3-1.1-1.5l-6.9-2.1v-5.2h-3.2v6.4c0 .7.5 1.3 1.1 1.5l6.9 2.1v4.4z"/><path d="M18.6 14l-5.7-9.6L7.4 14l5.6-2.5z"/></g></svg>',
        BEAR_LEFT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M15.8 25.1H19V21c0-2.9-.4-4.8-1.7-7.1-.5-1-2.8-4.5-3.1-4.9l-2.7 1.8c.9 1.4 2.6 4 2.9 4.6 1 1.9 1.3 3.3 1.3 5.7v4h.1z"/><path d="M13.7 11l6.2-.6-9.8-5.5V16z"/></g></svg>',
        TURN_LEFT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M21.4 23.8h3.2v-5.6c0-4.4-3.6-8-8-8h-4.8v3.2h4.8c2.6 0 4.8 2.2 4.8 4.8v5.6z"/><path d="M15 6.2l-9.6 5.7 9.6 5.5-2.5-5.6z"/></g></svg>',
        SHARP_LEFT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M19.7 24.95h3.2V8.15c0-.8-.4-1.6-1-2.2-1.2-1.2-3.2-1.2-4.5 0l-8.9 8.9 2.3 2.3 8.9-8.9v16.7z"/><path d="M9.9 7.75l-2.8 10.8 10.7-2.9-5.7-2.1z"/></g></svg>',
        MAKE_UTURN: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M21 25.4h3.2V11.8c0-4-3.2-7.2-7.2-7.2s-7.2 3.2-7.2 7.2v3.6H13v-3.6c0-2.2 1.8-4 4-4s4 1.8 4 4v13.6z"/><path d="M5.8 11.4l5.7 9.6 5.5-9.6-5.6 2.5z"/></g></svg>',
        MOTORWAY_EXIT_LEFT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 312"><path d="M200 46 200 266.235" stroke-width="40" stroke-miterlimit="8" fill="none"/><path d="M108.387 104.558C161.11 114.911 198.856 154.622 199.975 200.912" stroke-width="40" stroke-miterlimit="8" fill="none"/><path d="M111.686 146.196 55.5742 96.7993 123.702 66.0224Z"/></svg>',
        MOTORWAY_EXIT_RIGHT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 312"><path d="M0 0 0.000104987 220.235" stroke-width="40" stroke-miterlimit="8" fill="none" fill-rule="evenodd" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 112 54)"/><path d="M144.387 2.5577C197.11 12.9113 234.856 52.6223 235.975 98.9118" stroke-width="40" stroke-miterlimit="8" fill="none" fill-rule="evenodd" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 348 110)"/><path d="M0 62.8137 40.5345 0 81.0691 62.8137Z" fill-rule="evenodd" transform="matrix(-0.148216 -0.988955 -0.988955 0.148216 261.65 145.004)"/></svg>',
        TAKE_FERRY: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path stroke="none" d="M23.4 22.784s-3.1 3.1-8.4.2c-5.3-3-8.4.2-8.4.2" style="fill:none;stroke:#00e9ff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="M14 4.784h2v2h-2zM15 9.884v-.6.6c1.2 1.4 3.9 2.5 6 2.7v-4.8H9v4.8c2.2-.2 4.8-1.3 6-2.7z"/><path d="M11 18.784c1.5 0 3.1.5 4.7 1.5 1 .6 2 .9 2.9 1 2-2.6 3.3-4.6 3.3-6.6-2.2-.1-5.5-1-7-2.6-1.5 1.6-4.8 2.6-7 2.6 0 1.5.7 2.4 1.8 4.3.4-.1.9-.2 1.3-.2z"/></svg>',
        ROUNDABOUT_CROSS: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M11.15 19.25v-6.6c-2.3 1.3-3.8 3.8-3.8 6.6s1.5 5.3 3.8 6.6v-6.6z" style="fill:#cecece"/><path d="M14.95 11.65c-.7 0-1.3.1-1.9.3v4.1c.6-.3 1.2-.5 1.9-.5 2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8-.7 0-1.4-.2-1.9-.5v4.1c.6.2 1.3.3 1.9.3 4.2 0 7.7-3.4 7.7-7.7 0-4.3-3.5-7.7-7.7-7.7z"/><path d="M13.05 26.05h3.8v2.9h-3.8zM14.95 8.15l-5.8 2.5 5.9-9.6 5.7 9.6z"/></g></svg>',
        ROUNDABOUT_RIGHT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M5.6 17.35c0-1.1.5-2.2 1.3-2.9-.8-.7-1.3-1.7-1.3-2.9 0-2.1 1.7-3.8 3.8-3.8 1.1 0 2.2.5 2.9 1.3.5-.5 1.1-.9 1.8-1.1.4-.1.8-.2 1.2-.2h.8c-1.3-2.3-3.8-3.8-6.6-3.8-4.3 0-7.7 3.4-7.7 7.7 0 2.8 1.5 5.3 3.8 6.6v-.9z" style="fill:#cecece"/><path d="M11.4 26.05H7.6v-8.6c0-1.1.9-1.9 1.9-1.9 1.1 0 2.2-.5 3-1.4.6-.7.9-1.5.9-2.4 0-.5.2-1 .6-1.4.4-.4.8-.6 1.4-.6h6v3.8h-4.3c-.3 1.1-.8 2.1-1.5 3-1 1.3-2.4 2.1-4 2.5v7h-.2z"/><path d="M18.6 17.35l2.5-5.7-2.5-5.8 9.6 5.8z"/></g></svg>',
        ROUNDABOUT_LEFT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M22.4 26h-3.8v-8.6c0-1.1.9-1.9 1.9-1.9 2.1 0 3.8-1.7 3.8-3.8 0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8 0 1.1-.9 1.9-1.9 1.9h-6V9.8h4.3C14 6.5 17 4 20.5 4c4.2 0 7.7 3.4 7.7 7.7 0 3.6-2.5 6.6-5.8 7.4V26z"/><path d="M8.9 11.6l2.5-5.8-9.6 5.8 9.6 5.7z"/></g></svg>',
        ROUNDABOUT_BACK: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M15.049 2.3c-4.2 0-7.7 3.4-7.7 7.7 0 4.3 3.4 7.7 7.7 7.7.7 0 1.3-.1 1.9-.3v-4.1c-.6.3-1.2.5-1.9.5-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8v6.6c2.3-1.3 3.8-3.8 3.8-6.6.1-4.3-3.4-7.7-7.6-7.7z"/><path d="M13.149 15.7h3.8V21h-3.8z"/><path d="M15.049 20.7l-5.8-2.6 5.9 9.6 5.7-9.5z"/></g></svg>',
        SWITCH_MAIN_ROAD: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"><path stroke="none" d="m12.2 1.4l-12 17c-0.2 0.3-0.2 0.7-0.1 1 0.2 0.3 0.5 0.5 0.9 0.5h6v3c0 7.4 3.2 14.5 8.8 19.4l2.5 2.2c3 2.6 4.7 6.4 4.7 10.4v3c0 0.6 0.4 1 1 1h10c0.6 0 1-0.4 1-1v-3c0-7.4-3.2-14.5-8.8-19.4l-2.5-2.1c-3-2.6-4.7-6.4-4.7-10.4v-3h6c0.4 0 0.7-0.2 0.9-0.5s0.1-0.7-0.1-1l-12-17c-0.2-0.3-0.5-0.4-0.8-0.4s-0.6 0.2-0.8 0.4Z"/><path stroke="none" d="m32 19c0 0.3 0.1 0.5 0.3 0.7 0.2 0.2 0.4 0.3 0.7 0.3h6v3c0 4-1.7 7.8-4.7 10.4l-2.5 2.2c-0.5 0.5-1 0.9-1.5 1.4 0.1 0.1 0.1 0.2 0.2 0.2 2.9 3.4 4.9 7.5 5.8 11.9 0.8-1.7 2-3.2 3.4-4.5l2.5-2.1c5.6-4.9 8.8-12 8.8-19.4v-3h6c0.4 0 0.7-0.2 0.9-0.5s0.1-0.7-0.1-1l-12-17c-0.2-0.3-0.5-0.4-0.8-0.4s-0.6 0.2-0.8 0.4l-12 17c-0.1 0.2-0.2 0.4-0.2 0.6Z"/></svg>',
        ENTER_HIGHWAY: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path stroke="none" d="M9.6 15L8 21.5c0 .3.1.5.4.5h5l.6-7H9.6zM20.7 15h-4.4l.2 7h5.1c.3 0 .4-.2.4-.5L20.7 15zM26 14v-1H4v1h19.9zM13.8 12l.2-4h-2.8c-.3 0-.5.2-.6.5L9.9 12h3.9zM16.2 12L16 8h2.8c.3 0 .5.2.6.5l.7 3.5h-3.9z"/><path d="M6 13.6h1V16H6zM23 13.6h1V16h-1z"/></svg>',
    };

    /** Route icons that are unique to driving on the left side of the road. */
    private static RouteIconsLeft = {
        ROUNDABOUT_CROSS: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M18.85 19.25v-6.6c2.3 1.3 3.8 3.8 3.8 6.6s-1.5 5.3-3.8 6.6v-6.6z" style="fill:#cecece"/><path d="M15.05 11.65c.7 0 1.3.1 1.9.3v4.1c-.6-.3-1.2-.5-1.9-.5-2.1 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8.7 0 1.4-.2 1.9-.5v4.1c-.6.2-1.3.3-1.9.3-4.2 0-7.7-3.4-7.7-7.7 0-4.3 3.5-7.7 7.7-7.7z"/><path d="M16.95 26.05h-3.8v2.9h3.8zM20.85 10.65l-5.9-9.6-5.7 9.6 5.8-2.5z"/></g></svg>',
        ROUNDABOUT_RIGHT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M7.6 26h3.8v-8.6c0-1.1-.9-1.9-1.9-1.9-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8 0 1.1.9 1.9 1.9 1.9h6V9.8h-4.3C16 6.5 13 4 9.5 4c-4.2 0-7.7 3.4-7.7 7.7 0 3.6 2.5 6.6 5.8 7.4V26z"/><path d="M18.6 5.8l9.6 5.8-9.6 5.7 2.5-5.7z"/></g></svg>',
        ROUNDABOUT_LEFT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M24.4 17.35c0-1.1-.5-2.2-1.3-2.9.8-.7 1.3-1.7 1.3-2.9 0-2.1-1.7-3.8-3.8-3.8-1.1 0-2.2.5-2.9 1.3-.5-.5-1.1-.9-1.8-1.1-.4-.1-.8-.2-1.2-.2h-.8c1.3-2.3 3.8-3.8 6.6-3.8 4.3 0 7.7 3.4 7.7 7.7 0 2.8-1.5 5.3-3.8 6.6v-.9z" style="fill:#cecece"/><path d="M18.6 26.05h3.8v-8.6c0-1.1-.9-1.9-1.9-1.9-1.1 0-2.2-.5-3-1.4-.6-.7-.9-1.5-.9-2.4 0-.5-.2-1-.6-1.4-.4-.4-.8-.6-1.4-.6h-6v3.8h4.3c.3 1.1.8 2.1 1.5 3 1 1.3 2.4 2.1 4 2.5v7h.2z"/><path d="M8.9 11.65l2.5-5.8-9.6 5.8 9.6 5.7z"/></g></svg>',
        ROUNDABOUT_BACK: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M14.951 2.3c4.2 0 7.7 3.4 7.7 7.7 0 4.3-3.4 7.7-7.7 7.7-.7 0-1.3-.1-1.9-.3v-4.1c.6.3 1.2.5 1.9.5 2.1 0 3.8-1.7 3.8-3.8 0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v6.6c-2.3-1.3-3.8-3.8-3.8-6.6-.1-4.3 3.4-7.7 7.6-7.7z"/><path d="M16.851 15.7h-3.8V21h3.8z"/><path d="M20.751 18.1l-5.9 9.6-5.7-9.5 5.8 2.5z"/></g></svg>',
        MAKE_UTURN: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M9 25.4H5.8V11.8c0-4 3.2-7.2 7.2-7.2s7.2 3.2 7.2 7.2v3.6H17v-3.6c0-2.2-1.8-4-4-4s-4 1.8-4 4v13.6z"/><path d="M18.6 13.9l5.6-2.5-5.7 9.6-5.5-9.6z"/></g></svg>'
    };

    //Temp icons - May be used in the future.
    /* private static TempIcons = {
         SearchIcon: '<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M21.6 14.7c4.3 0 7.9 3.5 7.9 7.9s-3.5 7.9-7.9 7.9c-4.3 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9m0-2.5c-5.7 0-10.4 4.6-10.4 10.4S15.8 33 21.6 33 32 28.4 32 22.6s-4.7-10.4-10.4-10.4zM31.7 30c-1 .5-1.8 1.3-2.3 2.3l3.4 3.4c.3.3.7.5 1.2.5.4 0 .8-.2 1.2-.5.6-.6.6-1.7 0-2.3L31.7 30z"/></svg>',
         RulerIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 18.343L5.656 24 24 5.657 18.343 0 0 18.343zM21.171 5.657L5.657 21.171l-2.829-2.829 1.04-1.008 2.122 2.122.707-.707-2.122-2.122 1.414-1.414 1.414 1.414.708-.708-1.414-1.414 1.414-1.414 1.414 1.414.707-.707-1.414-1.414 1.414-1.414 2.122 2.122.707-.708-2.121-2.122 1.414-1.414 1.414 1.414.707-.707-1.414-1.414 1.414-1.414 1.414 1.414.707-.707-1.414-1.414 1.414-1.415 2.121 2.122.707-.707-2.121-2.122 1.039-1.071 2.829 2.83z"/></svg>',
         CarIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M23.437 13.125l-.606-.606a2.38 2.38 0 0 1-.48-.78l-1.13-3.4c-.33-.99-1.43-1.78-2.47-1.78h-7.5c-1.03 0-2.14.79-2.46 1.78l-1.13 3.4a2.364 2.364 0 0 1-.48.77l-.603.6c-.52.52-.937 1.777-.937 2.812v5.627c0 .52.42.94.936.94h1.87a.937.937 0 0 0 .936-.936v-.938h11.25v.937c0 .52.42.94.937.94h1.873a.937.937 0 0 0 .935-.937v-5.62c0-1.036-.42-2.295-.94-2.813zM7.97 17.812a1.407 1.407 0 1 1 0-2.813 1.407 1.407 0 0 1 0 2.81zm10.31.938h-6.56a.47.47 0 0 1 0-.938h6.56a.47.47 0 0 1 0 .938zm-9.32-6.562c-.26 0-.403-.2-.32-.445l1.03-3.105c.197-.596.95-1.138 1.578-1.138h7.5c.628 0 1.38.542 1.578 1.138l1.035 3.105c.08.245-.06.445-.32.445H8.96zm13.073 5.624a1.407 1.407 0 1 1 0-2.812 1.407 1.407 0 0 1 0 2.812z" fill="#bdd731"></path></svg>',
         Add: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 10, 10"><path d="M9 4H6V1c0-.5-.4-1-1-1-.5 0-1 .4-1 1v3H1c-.6 0-1 .5-1 1 0 .3.1.5.3.7.2.1.4.3.7.3h3v3c0 .3.1.5.3.7.2.2.4.3.7.3.5 0 1-.4 1-1V6h3c.5 0 1-.4 1-1 0-.5-.4-1-1-1z" fill="#000"></path></svg>',
         Accident: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M18.54 6.61h-.856a2.38 2.38 0 0 1-.888-.21L13.59 4.798c-.926-.463-2.27-.245-3.003.487l-5.303 5.303c-.732.732-.95 2.078-.488 3.003L6.4 16.8c.115.23.21.63.21.888v.857c0 .732.593 1.92 1.325 2.65l3.315 3.316.663.666a.937.937 0 0 0 1.326 0l1.32-1.323a.937.937 0 0 0 0-1.327l-.664-.664 7.955-7.955.664.665a.937.937 0 0 0 1.324 0l1.325-1.326a.937.937 0 0 0 0-1.327l-3.976-3.98c-.733-.73-1.92-1.326-2.653-1.325zm-7.62 14.252a1.407 1.407 0 1 1-1.99-1.99 1.407 1.407 0 0 1 1.99 1.99zm7.955-6.63l-4.64 4.64a.47.47 0 0 1-.664-.662l4.64-4.64a.47.47 0 0 1 .67.663zM7.64 16.187c-.183.183-.426.143-.54-.088l-1.466-2.93c-.282-.56-.133-1.48.31-1.92l5.304-5.308c.444-.444 1.36-.594 1.92-.31L16.095 7.1c.23.114.272.356.088.54L7.64 16.186zm13.22-5.268a1.407 1.407 0 1 1-1.987-1.99 1.407 1.407 0 0 1 1.988 1.99z"></path></svg>'
     };*/
}