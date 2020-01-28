/*
MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('azure-maps-control')) :
    typeof define === 'function' && define.amd ? define(['exports', 'azure-maps-control'], factory) :
    (global = global || self, factory(global.atlas = global.atlas || {}, global.atlas));
}(this, (function (exports, azmaps) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * Helper class for merging namespaces.
     */
    var Namespace = /** @class */ (function () {
        function Namespace() {
        }
        Namespace.merge = function (namespace, base) {
            var context = window || global;
            var parts = namespace.split(".");
            for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                var part = parts_1[_i];
                if (context[part]) {
                    context = context[part];
                }
                else {
                    return base;
                }
            }
            return __assign(__assign({}, context), base);
        };
        return Namespace;
    }());

    var Utils = /** @class */ (function () {
        function Utils() {
        }
        /**
         * Detects if High Contrast mode is enabled and the style that should be used. Possible values:
         * none: High contrast no detected.
         * light: black text on white background.
         * dark: white text on black background.
         * When hcl mode is active but style not known, will default to dark.
         * @returns The high contrast style to apply.
         */
        Utils.highContrastStyle = function () {
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
                    case '2': //Black on white
                        return 'light';
                    case '3': //White on black
                    case '1': //We know high contrast mode is on, but don't know color style. Default to white on black.
                        return 'dark';
                }
            }
            //Detect Chrome extension for high contrast. The extention adds an 'hc' attribute to the HTML tag of the page.
            var htmlTag = document.getElementsByTagName('html');
            if (htmlTag[0].getAttribute('hc') !== null) {
                return 'dark';
            }
            return 'none';
        };
        /**
         * Tries to detect the appropriate lanuage code.
         * @param langauge A possibly provided langauge code.
         * @param options Options from one of the services which may have a language code provided.
         * @returns A language code.
         */
        Utils.detectLanguage = function (langauge, options) {
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
        };
        /**
         * Determines distance units preference baed on country code or lanaguage.
         * @param coutryCode An ISO2 country code.
         * @param language A language cdde.
         * @param coordinate A coordinate to be used to try and determine the distance units based on approximate location of origin.
         * @returns A distance unit of measurement; 'metric' or 'imperial'.
         */
        Utils.detectDistanceUnits = function (coutryCode, language, coordinate) {
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
        };
        /**
         * Creates a formatted distance string based on the preferred units.
         * @param distanceMeters A distance in meters to format.
         * @param units The preferred units.
         * @returns A formatted distance string.
         */
        Utils.formatDistance = function (distanceMeters, units, resources) {
            var res = resources || {
                ft: "ft",
                km: "km",
                mi: "mi",
                m: "m"
            };
            if (units === 'imperial') { //miles/feet
                //Use miles for distances of 0.1 miles or more, use feet for shorter distances.
                if (distanceMeters >= 160.9344) { //use miles
                    var miles = distanceMeters * 0.00062137;
                    //Show one decimal is less than 100 miles.
                    if (miles < 100) {
                        miles = Math.round(miles * 10) / 10;
                    }
                    else {
                        miles = Math.round(miles);
                    }
                    return miles.toLocaleString() + " " + res.mi;
                }
                return Math.round(distanceMeters * 3.2808399) + " " + res.ft;
            }
            else { //KM/meters
                //Use km for distances of 0.1 km or more, use feet for shorter distances.
                if (distanceMeters >= 100) { //use miles
                    var km = distanceMeters * 0.001;
                    //Show one decimal if less than 100 km.
                    if (km < 100) {
                        km = Math.round(km * 10) / 10;
                    }
                    else {
                        km = Math.round(km);
                    }
                    return km.toLocaleString() + " " + res.km;
                }
                return distanceMeters + " " + res.m;
            }
        };
        /**
         * Creates a nicely formatted timespan string.
         * @param timeInSeconds The timespan in seconds.
         * @returns A formatted timespan string.
         */
        Utils.formatTimespan = function (timeInSeconds, resources) {
            var t = '';
            var days = 0, hours = 0, mins = 0;
            var res = resources || {
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
            }
            else if (timeInSeconds > 3600) { //If time is greater than an hour, format as 'x hour(s) y min(s)'
                hours = Math.round(timeInSeconds / 3600);
                mins = Math.round((timeInSeconds % 3600) / 60);
            }
            else {
                //format as 'min(s}'
                mins = Math.round(timeInSeconds / 60);
            }
            if (days > 0) {
                t += days;
                if (days === 1) {
                    t += ' ' + res.day;
                }
                else {
                    t += ' ' + res.days;
                }
            }
            if (hours > 0) {
                t += hours;
                if (hours === 1) {
                    t += ' ' + res.hr;
                }
                else {
                    t += ' ' + res.hrs;
                }
            }
            if (mins > 0) {
                t += mins;
                if (mins === 1) {
                    t += ' ' + res.min;
                }
                else {
                    t += ' ' + res.mins;
                }
            }
            if (mins === 0 && hours === 0 && days === 0) {
                t += '0 ' + res.min;
            }
            return t;
        };
        /**
         * Formats a date time string from the routing service into an arrival time or date string depending on if the arrival date is today or another day.
         * @param dateString The date time string to format.
         * @returns A formatted arrival time.
         */
        Utils.formatArriveDateTime = function (dateString) {
            var d1 = new Date();
            var d2 = new Date(Date.parse(dateString));
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
        };
        /** Retrieves the executing file/URL path of the azure-maps-services-ui library. */
        Utils.getExecutingPath = function () {
            var p = this._currentScriptPath;
            if (p.indexOf('/') > -1) {
                return p.substring(0, p.lastIndexOf("/"));
            }
            return p;
        };
        /////////////////////////////
        // Private functions
        /////////////////////////////
        Utils._getBrowserLocale = function () {
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
                    return chunk;
                }).join('-');
            }
            return null;
        };
        Utils._currentScriptPath = document.currentScript['src'];
        return Utils;
    }());

    var RouteUIManager = /** @class */ (function () {
        function RouteUIManager(service, options) {
            var _this = this;
            this._options = {
                units: 'metric'
            };
            //Private functions
            this._directionsCalculated = function (response) {
                _this._lastResponse = response;
                if (response && response.routes && response.routes.length > 0) {
                    var route = response.routes[0];
                    if (_this._instructionsDiv) {
                        //Add summary
                        if (route.summary) ;
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
                                    insElm.innerHTML += "<br/>" + Utils.formatDistance(ins.routeOffsetInMeters - traveledDistance, _this._options.units);
                                    traveledDistance = ins.routeOffsetInMeters;
                                    traveledTime = ins.travelTimeInSeconds;
                                }
                            }
                        }
                    }
                    if (_this._options.map) ;
                }
                else {
                    _this._directionsError();
                }
            };
            this._directionsError = function (error) {
                if (error.msg) ;
                else if (error.code) ;
            };
            this._service = service;
            if (options) {
                this.setOptions(options);
            }
        }
        //Public functions
        RouteUIManager.prototype.clear = function () {
            //Clear current container.
            if (this._instructionsDiv) {
                this._instructionsDiv.innerHTML = '';
            }
        };
        RouteUIManager.prototype.calculateRouteDirections = function (aborter, waypoints, options) {
            this._langauge = Utils.detectLanguage(this._langauge, options);
            this._lastRouteDirectionsOptions = options;
            this._lastResponse = null;
            this._service.calculateRouteDirections(aborter, waypoints, options).then(this._directionsCalculated).catch(this._directionsError);
        };
        RouteUIManager.prototype.getService = function () {
            return this._service;
        };
        RouteUIManager.prototype.setOptions = function (options) {
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
        };
        return RouteUIManager;
    }());

    var Localization = /** @class */ (function () {
        function Localization() {
        }
        Localization.getResource = function (language) {
            return __awaiter(this, void 0, void 0, function () {
                var res, r, r2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this._localizationFolderPath) {
                                this._localizationFolderPath = Utils.getExecutingPath() + "/localization";
                            }
                            //If no language is specified, try to detect one.
                            if (!language) {
                                language = Utils.detectLanguage(language);
                            }
                            if (language && language.indexOf('-') > 0) {
                                language = language.substring(0, language.indexOf('-')).toLowerCase();
                            }
                            if (!language || this._supportedLanguages.indexOf(language) === -1) {
                                language = 'en';
                            }
                            if (this._resxCache[language]) {
                                return [2 /*return*/, this._resxCache[language]];
                            }
                            return [4 /*yield*/, fetch(this._localizationFolderPath + "/" + language + "/resource.json")];
                        case 1:
                            res = _a.sent();
                            if (!res.ok) return [3 /*break*/, 3];
                            r = res.json();
                            return [4 /*yield*/, r];
                        case 2:
                            r2 = _a.sent();
                            this._resxCache[language] = r2;
                            return [2 /*return*/, r2];
                        case 3: throw 'Unable to download resource file.';
                    }
                });
            });
        };
        Localization._resxCache = {};
        Localization._supportedLanguages = ['en', 'af', 'eu', 'bg', 'zh', 'hr', 'cs', 'da', 'nl', 'et', 'fi', 'fr', 'gl', 'de', 'el', 'hi', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'es', 'lv', 'lt', 'ms', 'nb', 'pl', 'pt', 'ro', 'ru', 'sr', 'sk', 'sl', 'sv', 'th', 'tr', 'uk', 'vi'];
        return Localization;
    }());

    /** Embedded SVG icons that can easily be styled using CSS. Also faster than making a bunch of HTTP requests. */
    var EmbeddedIcons = /** @class */ (function () {
        function EmbeddedIcons() {
        }
        /**
         * Retrieves an SVG icon for a route instruction.
         * @param instruction The route instruction to get the icon for.
         * @returns An SVG icon for a route instruction.
         */
        EmbeddedIcons.getRouteInstructionIcon = function (instruction) {
            var ds = instruction.drivingSide || 'RIGHT';
            var m = instruction.maneuver;
            var icon;
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
                        }
                        else {
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
        };
        /** Route manuever icons. */
        EmbeddedIcons.RouteIcons = {
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
        EmbeddedIcons.RouteIconsLeft = {
            ROUNDABOUT_CROSS: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M18.85 19.25v-6.6c2.3 1.3 3.8 3.8 3.8 6.6s-1.5 5.3-3.8 6.6v-6.6z" style="fill:#cecece"/><path d="M15.05 11.65c.7 0 1.3.1 1.9.3v4.1c-.6-.3-1.2-.5-1.9-.5-2.1 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8.7 0 1.4-.2 1.9-.5v4.1c-.6.2-1.3.3-1.9.3-4.2 0-7.7-3.4-7.7-7.7 0-4.3 3.5-7.7 7.7-7.7z"/><path d="M16.95 26.05h-3.8v2.9h3.8zM20.85 10.65l-5.9-9.6-5.7 9.6 5.8-2.5z"/></g></svg>',
            ROUNDABOUT_RIGHT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M7.6 26h3.8v-8.6c0-1.1-.9-1.9-1.9-1.9-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8 0 1.1.9 1.9 1.9 1.9h6V9.8h-4.3C16 6.5 13 4 9.5 4c-4.2 0-7.7 3.4-7.7 7.7 0 3.6 2.5 6.6 5.8 7.4V26z"/><path d="M18.6 5.8l9.6 5.8-9.6 5.7 2.5-5.7z"/></g></svg>',
            ROUNDABOUT_LEFT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M24.4 17.35c0-1.1-.5-2.2-1.3-2.9.8-.7 1.3-1.7 1.3-2.9 0-2.1-1.7-3.8-3.8-3.8-1.1 0-2.2.5-2.9 1.3-.5-.5-1.1-.9-1.8-1.1-.4-.1-.8-.2-1.2-.2h-.8c1.3-2.3 3.8-3.8 6.6-3.8 4.3 0 7.7 3.4 7.7 7.7 0 2.8-1.5 5.3-3.8 6.6v-.9z" style="fill:#cecece"/><path d="M18.6 26.05h3.8v-8.6c0-1.1-.9-1.9-1.9-1.9-1.1 0-2.2-.5-3-1.4-.6-.7-.9-1.5-.9-2.4 0-.5-.2-1-.6-1.4-.4-.4-.8-.6-1.4-.6h-6v3.8h4.3c.3 1.1.8 2.1 1.5 3 1 1.3 2.4 2.1 4 2.5v7h.2z"/><path d="M8.9 11.65l2.5-5.8-9.6 5.8 9.6 5.7z"/></g></svg>',
            ROUNDABOUT_BACK: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M14.951 2.3c4.2 0 7.7 3.4 7.7 7.7 0 4.3-3.4 7.7-7.7 7.7-.7 0-1.3-.1-1.9-.3v-4.1c.6.3 1.2.5 1.9.5 2.1 0 3.8-1.7 3.8-3.8 0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v6.6c-2.3-1.3-3.8-3.8-3.8-6.6-.1-4.3 3.4-7.7 7.6-7.7z"/><path d="M16.851 15.7h-3.8V21h3.8z"/><path d="M20.751 18.1l-5.9 9.6-5.7-9.5 5.8 2.5z"/></g></svg>',
            MAKE_UTURN: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M9 25.4H5.8V11.8c0-4 3.2-7.2 7.2-7.2s7.2 3.2 7.2 7.2v3.6H17v-3.6c0-2.2-1.8-4-4-4s-4 1.8-4 4v13.6z"/><path d="M18.6 13.9l5.6-2.5-5.7 9.6-5.5-9.6z"/></g></svg>'
        };
        return EmbeddedIcons;
    }());

    /** A control for rendering route instructions. */
    var RouteInstructionControl = /** @class */ (function () {
        /**
         * A control for rendering route instructions.
         * @param options Options for the control.
         */
        function RouteInstructionControl(options) {
            /** Control options. */
            this._options = {
                displayDisclaimer: true,
                // displayRouteSelector: true,
                groupInstructions: false,
                routeIndex: 0,
                style: 'light',
                units: 'auto',
                waypointTextFormat: 'letter'
            };
            /** Character representation for waypoint indices 1 through 150. */
            this._waypointIndices = [
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
            this.setOptions(options || {});
        }
        /**
         * Clears the route instructions from the control.
         */
        RouteInstructionControl.prototype.clear = function () {
            if (this._control) {
                this._control.remove();
            }
            this._routeResponse = null;
        };
        /**
         * Gets the options of the route instruction control.
         */
        RouteInstructionControl.prototype.getOptions = function () {
            return Object.assign({}, this._options);
        };
        /**
        * Sets the options of the route instruction control.
        */
        RouteInstructionControl.prototype.setOptions = function (options) {
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
                if (options.language && this._options.language !== options.language) {
                    this._options.language = options.language;
                    this._resources = null;
                }
                if (options.style && this._options.style !== options.style) {
                    this._options.style = options.style;
                }
                if (options.units && this._options.units !== options.units) {
                    this._options.units = options.units;
                }
            }
            this._renderRoute();
        };
        /**
         * Gets the route response information used in the instruction control.
         */
        RouteInstructionControl.prototype.getRoute = function () {
            return this._routeResponse;
        };
        /**
        * Sets the route response information used in the instruction control.
        */
        RouteInstructionControl.prototype.setRoute = function (routeResponse) {
            this._routeResponse = routeResponse;
            this._renderRoute();
        };
        /**
         * Initialization method for the control which is called when added to a map.
         * @return An HTMLElement to be placed on the map for the control.
         */
        RouteInstructionControl.prototype.onAdd = function (map, options) {
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
        };
        /**
         * Method that is called when the control is removed from a map. Should perform any necessary cleanup for the control.
         */
        RouteInstructionControl.prototype.onRemove = function () {
            this._map = null;
            if (this._control) {
                this._control.remove();
                delete this._control;
            }
            if (this._mapControlConatiner) {
                this._mapControlConatiner.remove();
                delete this._mapControlConatiner;
            }
        };
        /////////////////////////////
        // Private functions
        /////////////////////////////
        /**
         * Generates the HTML instructions for rendering.
         */
        RouteInstructionControl.prototype._renderRoute = function () {
            var _this = this;
            if (!this._resources) {
                if (!this._options.language) {
                    this._options.language = Utils.detectLanguage();
                }
                Localization.getResource(this._options.language).then(function (res) {
                    _this._resources = res;
                    _this._renderRoute();
                });
                return;
            }
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
                    distanceUnits = Utils.detectDistanceUnits((hasIns) ? route.guidance.instructions[0].countryCode : null, this._options.language, coord);
                }
                var insElm;
                insElm = document.createElement('div');
                insElm.classList.add('route-instruction-container');
                //Summary
                if (route.summary) {
                    var summary = document.createElement('div');
                    summary.classList.add('route-summary');
                    var d = Utils.formatDistance(route.summary.lengthInMeters, distanceUnits);
                    var t = Utils.formatTimespan(route.summary.travelTimeInSeconds);
                    var s = "<span class=\"route-summary-time\">" + t + "</span> <span class=\"route-summary-distance\">" + d + "</span>";
                    var delayRatio = route.summary.trafficDelayInSeconds / route.summary.travelTimeInSeconds;
                    if (delayRatio > 0.05 && route.summary.trafficDelayInSeconds > 60) {
                        var tt = Utils.formatTimespan(route.summary.trafficDelayInSeconds);
                        var trafficCss;
                        var trafficMsg;
                        //0.05 > ratio < 0.1 => light traffic.
                        //ratio < 0.2 => Moderate traffic.
                        //ratio > 0.2 => heavy traffic.
                        if (delayRatio > 0.2) {
                            trafficCss = 'route-summary-traffic-heavy';
                            trafficMsg = this._resources.hTraffic;
                        }
                        else if (delayRatio > 0.1) {
                            trafficCss = 'route-summary-traffic-moderate';
                            trafficMsg = this._resources.mTraffic;
                        }
                        else {
                            trafficCss = 'route-summary-traffic-light';
                            trafficMsg = this._resources.lTraffic;
                        }
                        s += "<span class=\"route-summary-traffic-time\"><span class=\"" + trafficCss + "\">" + trafficMsg + "</span> - " + tt + " " + this._resources.delay + "</span>";
                    }
                    var arrive = Utils.formatArriveDateTime(route.summary.arrivalTime);
                    s += "<span class=\"route-summary-arrive-by\"><span class=\"route-summary-arrive-by-label\">" + this._resources.arriveBy + ":</span> " + arrive + "</span>";
                    summary.innerHTML = s;
                    insElm.appendChild(summary);
                }
                //Instructions
                if (route.guidance && route.guidance.instructions) {
                    var ins = route.guidance.instructions;
                    var waypointIdx = 0;
                    var waypointText;
                    var insItemElm;
                    var i;
                    var insTime;
                    if (this._options.groupInstructions && route.guidance.instructionGroups) {
                        var insGroup = route.guidance.instructionGroups;
                        var insGroupElm;
                        var groupDescElm;
                        var groupTime;
                        var msg;
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
                                insItemElm = this._createInstruction(ins[i], i, insTime, ins[i].routeOffsetInMeters - elpasedDistance, distanceUnits, waypointText);
                                insGroupElm.appendChild(insItemElm);
                                elpasedDistance = ins[i].routeOffsetInMeters;
                                elpasedTime = ins[i].travelTimeInSeconds;
                                groupTime += insTime;
                            }
                            groupDescElm = document.createElement('div');
                            groupDescElm.classList.add('route-instruction-group-desc');
                            msg = "<span class=\"route-instruction-group-msg\">" + this._styleTaggedMessage(insGroup[g].groupMessage) + "</span> ";
                            if (groupTime > 30) {
                                msg += "<span class=\"route-instruction-group-time\">" + Utils.formatTimespan(groupTime) + "</span> ";
                            }
                            if (insGroup[g].groupLengthInMeters > 0) {
                                msg += "<span class=\"route-instruction-group-distance\">" + Utils.formatDistance(insGroup[g].groupLengthInMeters, distanceUnits) + "</span>";
                            }
                            groupDescElm.innerHTML = msg;
                            insGroupElm.insertBefore(groupDescElm, insGroupElm.childNodes[0]);
                            insElm.appendChild(insGroupElm);
                        }
                    }
                    else {
                        for (i = 0; i < ins.length; i++) {
                            waypointText = '';
                            if (this._isWaypoint(ins[i])) {
                                waypointIdx++;
                                waypointText = (this._options.waypointTextFormat === 'number') ? waypointIdx.toString() : this._waypointIndices[waypointIdx];
                            }
                            insTime = ins[i].travelTimeInSeconds - elpasedTime;
                            insItemElm = this._createInstruction(ins[i], i, insTime, ins[i].routeOffsetInMeters - elpasedDistance, distanceUnits, waypointText);
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
                }
                else if (this._map && this._mapControlConatiner) { //Render as a control in the map. 
                    this._mapControlConatiner.appendChild(this._control);
                }
            }
        };
        /**
         * Checks to see if an instruction if for a waypoint/depart/arrive.
         * @param instruction A route instruction.
         * @returns A boolean indicating if the instruction is for a waypoint.
         */
        RouteInstructionControl.prototype._isWaypoint = function (instruction) {
            var m = instruction.maneuver;
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
        };
        /**
         * Generates a HTML element for a route instruction.
         * @param instruction The route instruction.
         * @param idx The index of the instruction.
         * @param time The time span from the last instruction.
         * @param distance The distance of the instruction from the last instruction.
         * @param distanceUnits The distance units to use.
         * @param waypointText The text to display if the instruction is for a waypoint/arrive/depart.
         */
        RouteInstructionControl.prototype._createInstruction = function (instruction, idx, time, distance, distanceUnits, waypointText) {
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
        };
        /**
         * Adds css class styles to instructions by replacing coded tags to HTML spans and css classes.
         * @param msg A tagged message.
         * @returns A styled message.
         */
        RouteInstructionControl.prototype._styleTaggedMessage = function (msg) {
            return msg.replace(/<(street|roadNumber|exitNumber|signpostText|roundaboutExitNumber)>/gi, '<span class="route-instruction-$1">').
                replace(/<\/(street|roadNumber|exitNumber|signpostText|roundaboutExitNumber)>/gi, '</span>');
        };
        return RouteInstructionControl;
    }());

    //export { SearchBar } from "./SearchBar";

    var baseControl = /*#__PURE__*/Object.freeze({
        __proto__: null,
        RouteUIManager: RouteUIManager,
        RouteInstructionControl: RouteInstructionControl
    });

    var control = Namespace.merge("atlas.control", baseControl);

    exports.control = control;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
