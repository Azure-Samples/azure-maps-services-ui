import * as azmaps from "azure-maps-control";
import * as azmapsrest from "azure-maps-rest";

/** Options for the search bar control. */
export interface SearchBarOptions extends azmaps.ControlOptions {

    /////////////////////////////////
    /// UI options
    /////////////////////////////////

    /**
     * Specifies if suggestions should be displayed as the user types. 
     * If set to true, the search bar will perform an autocomplete function.
     * @default true
     */
    autocomplete?: boolean;

    /**
     * Specifies if the search bar should automatically get focus when loaded.
     * @default false
     */
    autofocus?: boolean;

    /**
     * Specifies if the search bar should be cleared when focus is lost.
     * @default false
     */
    clearOnBlur?: boolean;

    /**
     * The id of a HTML element in which the search bar should be added to.  
     * If not specified, and the search bar is added as a control of a map, it will be added to the map.
     */
    containerId?: string;

    /**
     * When in auto complete mode, this sepciefies the delay in milliseconds between when a keystroke occurs and when a search is performed. 
     * @default 300
     */
    delay?: number;

    /**
     * Specifies if the search bar input should be disabled.
     * @default false
     */
    disabled?: boolean;

    /**
     * The minimum number of characters that should be entered before the 
     * autocomplete will attempt to suggest options. //TODO: When the query length 
     * is under this, the aria status region will also provide helpful text 
     * to the user informing them they should type in more.
     * @default 3
     */
    minLength?: number;

    /**
     * Specify a short string to display in the input field before the user enters a value. Also known as watermark.
     * @default ''
     */
    placeholder?: string;


    /////////////////////////////////
    /// Search options
    /////////////////////////////////

    /**
     * The aborting logic to apply to each search query. 
     * @default atlas.service.Aborter.timeout(3000)
     */
    aborter?: azmapsrest.Aborter;

    /**
     * A bounding box area to weight the results towards. Ignored if a map is attached to the search bar and `setMapView` is true.
     */
    bounds?: azmaps.data.BoundingBox;

    /**
     * Comma separated string of country codes (i.e. FR,ES). This will limit the search to the specified countries.
     */
    countrySet?: string[];

    /**
     * 
     * If not specified, will attempt to retrieve language info that might be set on the atlas namespace, or will fallback to 'en-US'.
     */
    language?: string;

    /**
     * 
     * If not specified, will attempt to retrieve view info that might be set on the atlas namespace, or will fallback to 'Auto'.
     */
    view?: string;

    /**
     * The maximium number of results to display as suggestions. Must be a number between 1 and 
     * @default: 5
     */
    maxResults?: number;

    /**
     * If coordinates are passed in as a query and this option is set to true, it will enrich the result by reverse geocoding the coordinates. 
     * If false, a SearchAddressReverseResult will be returned without address details. 
     * @default true
     */
    enrichCoordinateInput?: boolean;

    /**
     * Indexes for which extended postal codes should be included in the results. Available indexes are:
     * `Addr` - Address ranges
     * `Geo` - Geographies
     * `PAD` - Point Addresses
     * `POI` - Points of Interest
     * `Str` - Streets
     * `XStr` - Cross Streets (intersections)
     */
    extendedPostalCodesFor?: ('Addr' | 'Geo' | 'PAD' | 'Str' | 'Xstr' | 'POI' | 'None')[];

    /**
     * Specifies the type of search to perform. 
     * address - searches for addresses that match the input. Will also parse coordinates if passed in.
     * fuzzy - combines the address, POI, and POI category search together. Will also parse coordinates if passed in.
     * poi - searches for points of interest by name (i.e. starbucks)
     * point-category - searches for points of interest by category (i.e. restaurant)
     * @default 'fuzzy'
     */
    searchType?: 'address' | 'fuzzy' | 'poi' | 'poi-category';

    /**
     * The autocomplete will display a "No results found" template when there are no results. Set to false to disable.
     * @default true
     */
    showNoOptionsFound?: boolean;

    /**
     * A coordinate to bias the results towards (i.e. user location). 
     */
    origin?: azmaps.data.Position;

    /**
     * The radius in meters from the origin to bias the results to.
     */
    radius?: number;

    /**
     * Specifies if opening hour details for a POI (Points of Interest) should be returned.
     * `nextSevenDays` - Retrieves the opening hours for next week, starting with the current day in the local time of the POI.
     */
    openingHours?: 'nextSevenDays';

    /////////////////////////////////
    /// Map options
    /////////////////////////////////

    /**
     * The duration of the map view animation in milliseconds. 
     * @default 1000.
     */
    animationDuration?: number;

    /**
     * The type of map view animation should be used when updating the position of the map.  
     * @default 'fly'
     */
    animationType?: 'none' | 'ease' | 'fly' | 'jump';

    /**
     * If in autocomplete mode, the search bar is added to a map instance and this is set to `true`, the map view will update over the selected result. 
     * @default true
     */
    setMapView?: boolean;

    /**
     * Specifies if the map view should be used to influence the relevance of the search results. 
     * Only used if the search bar is added as a control of a map instance.
     * Will override the `bounds` option.
     * @default true
     */
    useMapView?: boolean;
}


//TODO: addMarker?, filter?, collapsed?, fuzzy level?, brandSet?, extendedPostalCodesFor?, connectorSet?, maxFuzzyLevel?, minFuzzyLevel?, idxSet?