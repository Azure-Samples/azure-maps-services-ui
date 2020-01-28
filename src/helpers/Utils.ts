import * as azmaps from "azure-maps-control";
import * as azmapsrest from "azure-maps-rest";
import { Localization, Resource } from './Localization';

export class Utils {

    private static _currentScriptPath = document.currentScript['src'];

    /** 
     * Detects if High Contrast mode is enabled and the style that should be used. Possible values:
     * none: High contrast no detected.
     * light: black text on white background.
     * dark: white text on black background.
     * When hcl mode is active but style not known, will default to dark. 
     * @returns The high contrast style to apply.
     */
    public static highContrastStyle(): 'none' | 'light' | 'dark' {
        //Try and detect CSS media high contrast styles.
        var elms = document.getElementsByClassName('atlas-accessibility-placeholder');

        if (!elms || elms.length === 0) {
            var elm = document.createElement('div');
            elm.classList.add('atlas-accessibility-placeholder');
            document.body.appendChild(elm);
            elms = document.getElementsByClassName('atlas-accessibility-placeholder');
        }

        if (elms && elms.length > 0) {
            var zIndex = window.getComputedStyle(elms[0], null).getPropertyValue('z-index');

            switch (zIndex) {
                case '2':   //Black on white
                    return 'light';
                case '3':    //White on black
                case '1':     //We know high contrast mode is on, but don't know color style. Default to white on black.
                    return 'dark';
            }
        }

        //Detect Chrome extension for high contrast. The extention adds an 'hc' attribute to the HTML tag of the page.
        var htmlTag = document.getElementsByTagName('html');
        if (htmlTag[0].getAttribute('hc') !== null) {
            return 'dark';
        }

        return 'none';
    }

    /**
     * Tries to detect the appropriate lanuage code.
     * @param langauge A possibly provided langauge code.
     * @param options Options from one of the services which may have a language code provided.
     * @returns A language code.
     */
    public static detectLanguage(langauge?: string, options?: azmapsrest.CalculateRouteDirectionsOptions): string {
        if (options && options.language) {
            return options.language;
        }

        if (langauge) {
            return langauge;
        }

        if (azmaps.getLanguage) {
            return azmaps.getLanguage();
        }

        var l = this._getBrowserLocale();
        return l || 'en-US';
    }

    /**
     * Determines distance units preference baed on country code or lanaguage.
     * @param coutryCode An ISO2 country code. 
     * @param language A language cdde.
     * @param coordinate A coordinate to be used to try and determine the distance units based on approximate location of origin.
     * @returns A distance unit of measurement; 'metric' or 'imperial'.
     */
    public static detectDistanceUnits(coutryCode?: string, language?: string, coordinate?: azmaps.data.Position): 'metric' | 'imperial' {

        if (language && language.indexOf('-') > 0) {
            coutryCode = language.split('-')[1];
        }

        //US, GB/UK, Liberia, and Burma/Myanmar 
        switch (coutryCode) {
            case 'US':
            case 'GB':
            case 'UK':
            case 'LR':
            case 'BU':
            case 'MM':
                return 'imperial';
        }

        if (coordinate &&
            (coordinate[0] > -124.8 && coordinate[0] < -67.5 && coordinate[1] > 24.7 && coordinate[1] < 49.002) //Mainland USA
            || (coordinate[0] > -171 && coordinate[0] < -141 && coordinate[1] > 49.9 && coordinate[1] < 72) //Alaska
            || (coordinate[0] > -160.8 && coordinate[0] < -154.3 && coordinate[1] > 18.48 && coordinate[1] < 22.59) //Hawaii
            || (coordinate[0] > -5.9 && coordinate[0] < 1.53 && coordinate[1] > 50.11 && coordinate[1] < 61.3) //UK mainland
            || (coordinate[0] > -8.9 && coordinate[0] < -5.33 && coordinate[1] > 53.996 && coordinate[1] < 58.94) //UK NI
        ) {
            return 'imperial';
        }

        return 'metric';
    }

    /**
     * Creates a formatted distance string based on the preferred units.
     * @param distanceMeters A distance in meters to format.
     * @param units The preferred units.
     * @returns A formatted distance string.
     */
    public static formatDistance(distanceMeters: number, units: 'metric' | 'imperial', resources?: Resource): string {

        var res: any = resources || {
            ft: "ft",
            km: "km",
            mi: "mi",
            m: "m"
        };

        if (units === 'imperial') {  //miles/feet
            //Use miles for distances of 0.1 miles or more, use feet for shorter distances.
            if (distanceMeters >= 160.9344) { //use miles
                var miles = distanceMeters * 0.00062137;

                //Show one decimal is less than 100 miles.
                if (miles < 100) {
                    miles = Math.round(miles * 10) / 10;
                } else {
                    miles = Math.round(miles);
                }

                return `${miles.toLocaleString()} ${res.mi}`;
            }

            return `${Math.round(distanceMeters * 3.2808399)} ${res.ft}`;
        } else {    //KM/meters
            //Use km for distances of 0.1 km or more, use feet for shorter distances.
            if (distanceMeters >= 100) { //use miles
                var km = distanceMeters * 0.001;

                //Show one decimal if less than 100 km.
                if (km < 100) {
                    km = Math.round(km * 10) / 10;
                } else {
                    km = Math.round(km);
                }

                return `${km.toLocaleString()} ${res.km}`;
            }

            return `${distanceMeters} ${res.m}`;
        }
    }

    /** 
     * Creates a nicely formatted timespan string.
     * @param timeInSeconds The timespan in seconds.   
     * @returns A formatted timespan string. 
     */
    public static formatTimespan(timeInSeconds: number, resources?: Resource): string {
        var t = '';
        var days: number = 0, hours: number = 0, mins: number = 0;

        var res: any = resources || {
            min: "min",
            mins: "mins",
            hr: "hr",
            hrs: "hrs",
            days: "days",
            day: "day"
        };

        //If travel time is more than 24 hours, format as 'x day(s) y hour(s)'
        if (timeInSeconds > 86400) {
            days = Math.round(timeInSeconds / 86400);
            hours = Math.round((timeInSeconds % 86400) / 3600);
        } else if (timeInSeconds > 3600) { //If time is greater than an hour, format as 'x hour(s) y min(s)'
            hours = Math.round(timeInSeconds / 3600);
            mins = Math.round((timeInSeconds % 3600) / 60);
        } else {
            //format as 'min(s}'
            mins = Math.round(timeInSeconds / 60);
        }

        if (days > 0) {
            t += days;

            if (days === 1) {
                t += ' ' + res.day;
            } else {
                t += ' ' + res.days;
            }
        }

        if (hours > 0) {
            t += hours;

            if (hours === 1) {
                t += ' ' + res.hr;
            } else {
                t += ' ' + res.hrs;
            }
        }

        if (mins > 0) {
            t += mins;

            if (mins === 1) {
                t += ' ' + res.min;
            } else {
                t += ' ' + res.mins;
            }
        }

        if (mins === 0 && hours === 0 && days === 0) {
            t += '0 ' + res.min;
        }

        return t;
    }

    /**
     * Formats a date time string from the routing service into an arrival time or date string depending on if the arrival date is today or another day.
     * @param dateString The date time string to format.
     * @returns A formatted arrival time.
     */
    public static formatArriveDateTime(dateString: string): string {
        var d1: any = new Date();
        var d2: any = new Date(Date.parse(dateString));
        var diff = d2 - d1;

        var days = Math.ceil(diff / (1000 * 60 * 60 * 24));

        //Check to see if the arrival time is today. 
        if (days === 0 || (days === 1 && d1.getDate() === d2.getDate())) {
            //Format: time
            return d2.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
        }

        //Format: Date + time
        return d2.toLocaleDateString(undefined, {
            hour: 'numeric', minute: '2-digit', month: 'long', day: 'numeric', timeZoneName: 'short'
        });
    }

    /** Retrieves the executing file/URL path of the azure-maps-services-ui library. */
    public static getExecutingPath(): string {
        var p = this._currentScriptPath;

        if (p.indexOf('/') > -1) {
            return p.substring(0, p.lastIndexOf("/"));
        }

        return p;
    }

    /////////////////////////////
    // Private functions
    /////////////////////////////

    private static _getBrowserLocale(): string {
        var locale = (navigator.languages && navigator.languages[0]) || navigator.language || navigator['userLanguage'];

        if (locale) {
            //Handle complex locales by removing extra dashed info and making it look like a language code. 
            //Step 1: 'en-US-u-VA-posix'.split('-').slice(0, 2)
            //Step 2: ["en", "US"]
            return locale.split('-').slice(0, 2).map(function (chunk, index) {
                //Step 3: en[0]-US[1] <- chunk[1].toUpperCase()
                if (index !== 0 && chunk.length === 2) {
                    return chunk.toUpperCase();
                }
                return chunk
            }).join('-');
        }

        return null;
    }
}