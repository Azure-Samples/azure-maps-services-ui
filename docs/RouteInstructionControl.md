# Route Instruction Control

This control makes it easy to render route instructions as a nicely formatted list. The following is a screenshot of how this control renders instructions by default. 

<p align="center">
    <img src="images/sample-route-instructions.png" title="Nicely formatted route instructions"/>
</p>

## Route instruction control class

The `RouteInstructionControl` class

**Constructor**

> `atlas.controls.RouteInsturctionControl(options?: RouteInsturctionControlOptions)`

**Methods**

| Name | Return Type | Description | 
|------|-------------|-------------|
| `clear()` | | Clears the route instructions from the control.  | 
| `getOptions()` | `RouteInsturctionControlOptions` | Gets the options of the route instruction control. |
| `getRoute()` | `CalculateRouteDirectionsResponse` | Gets the route response information used in the instruction control. |
| ` onAdd(map: Map, options?: ControlOptions)`| `HTMLELement` | Initialization method for the control which is called when added to a map. |
| `onRemove()` | | Method that is called when the control is removed from a map. Should perform any necessary cleanup for the control. |
| `setOptions(options: RouteInsturctionControlOptions)` | | Sets the options of the route instruction control. |
| `setRoute(routeResponse: CalculateRouteDirectionsResponse)` | Sets the route response information used in the instruction control. |

## Route instruction control Options

The following options can be used to customize how instructions are 

| Name | Type | Description | 
|------|------|-------------|
| `containerId` | string | The ID of a div element to render the instructions in. |
| `displayDisclaimer` | boolean | A boolean indicating whether to display a disclaimer about the accuracy of the route instructions. Default: `true` |
| `groupInstructions` | boolean | Specifies if instruction should be broken up into groups. Default: `false` |
| `langauge` | string | A language to localize to. If not specified, will try and detect an appropriate language. |
| `routeIndex` | number | Specifies which route instructions to display when there are alternative routes. |
| `style` | `'light'` \| `'dark'` | The style to apply to the control. This will be ignored when screen in high contrast mode. Can be `'light'` or `'dark'`. Default: `'light'` |
| `units` | `'auto'` \| `'metric'` \| `'imperial'` | The distance units to display. Can be:<br/> - `'auto'`: will try and detect an appropriate unit.<br/> - `'metric'`: specifies usage of the metric system. Distances are shown using kilometers and meters.<br/> - `'imperial'`: specifies usage of the Imperial (English) system. Distances are shown using miles and feet.<br/>Default: `'auto'` |
| `waypointTextFormat` | `'number'` \| `'letter'` | Specifies the format of the waypoint label text over the manuever icon. <br/> - number: A value between 1 and 150 will be displayed.<br/> - letter: A letter representation between A and ET (index 150), will be displayed.<br/>Default: `'letter'` |

## How to use

Start by adding a reference to the JavaScript and CSS files for the `atlas-services-ui` module to your web application. Next create an instance of the `RouteInstructionControl` class and eithe rpass in an ID of a HTML element to render the control in as an option, or pass it into the Azure Maps Web SDK map control using the `map.controls.add` function. To render route instructions, pass in the JSON response from the Azure Maps REST route directions service or a `CalculateRouteDirectionsResponse` object from the Azure Maps services module into the `setRoute` function. 

**Note:** By default the route service only returns the coordinates for a route path. To return instructions you must set the `instructionsType` parameter when requesting a route. This control works best when this parameter is set to `tagged` or `text`.

The following example calls the Azure Maps REST route directions service using the `fetch` API and renders the instructions in a `div` with ID `instructionPanel`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title></title>

    <!-- Add references to the module. -->
    <link rel="stylesheet" href="../dist/atlas-services-ui.min.css" type="text/css" />
    <script src="../dist/atlas-services-ui.js"></script>
</head>
<body>
    <div id="instructionPanel"></div>

    <script>
        //Create an instance of the route instruction control and bind it to the instructionsPanel div. 
        var cnt = new atlas.control.RouteInsturctionControl({
            containerId: 'instructionPanel'
        });

        //Create REST URL request for route.
        var request = 'https://atlas.microsoft.com/route/directions/json?api-version=1.0&instructionsType=tagged';

        //Coordinates are formatted as "latitude1,longitude1:latitude2,longitude2".
        request += `&query=47.674875,-122.125551:47.608845,-122.340056`

        request += '&subscription-key=<Your Azure Maps Key>';

        /*Process request*/
        fetch(request).then(function (response) {
            return response.json();
        }).then(function (response) {

            //Pass the route response into the route instructions panel.  
            cnt.setRoute(response);
        });
    </script>
</body>
</html>
```

The following example uses the Azure Maps services module to calculate a route and renders the instructions in a `div` with ID `instructionPanel`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title></title>

    <!-- Add a reference to the Azure Maps Services Module JavaScript file. -->
    <script src="https://atlas.microsoft.com/sdk/javascript/service/2/atlas-service.min.js"></script>

    <!-- Add references to the module. -->
    <link rel="stylesheet" href="../dist/atlas-services-ui.min.css" type="text/css" />
    <script src="../dist/atlas-services-ui.js"></script>
</head>
<body>
    <div id="instructionPanel"></div>

    <script>
        //Create an instance of the route instruction control and bind it to the instructionsPanel div. 
        var cnt = new atlas.control.RouteInsturctionControl({
            containerId: 'instructionPanel'
        });

        //Construct the RouteURL object
        var routeURL = new atlas.service.RouteURL(atlas.service.MapsURL.newPipeline(new atlas.service.SubscriptionKeyCredential('<Your Azure Maps Key>')));

        //Coordinates of all waypoints to route through. Coordinates are in the format [longitude, latitude].
        var coordinates = [
            [-122.125551, 47.674875],  //Start: Redmond, WA
            [-122.340056, 47.608845]   //End: Seattle, WA
        ];

        //Route options.
        var options = {
            instructionsType: 'tagged'
        };

        //Calculate a route. 
        routeURL.calculateRouteDirections(atlas.service.Aborter.timeout(10000), coordinates, options).then((response) => {

            //Pass the route response into the route instructions panel.  
            cnt.setRoute(response);
        });
    </script>
</body>
</html>
```

## Custom styling

Much of the route instructions UI can be styled by overriding CSS styles that are defined in the `atlas-services-ui.css` file.

Take for example the following simmple route UI.

<p align="center">
<img src="images/basic-route-instruction.png" width="500" title="Simple route instruction UI">
</p>

The following is a breakdown of all the CSS classes available for styling different componets of the UI. 

<p align="center">
    <img src="images/route-instructions-css.pngg" title="Route instruction UI CSS classes"/>
</p>

|    | CSS class name | Description |
|----|----------------|-------------|
| A | `route-summary` | Route summary. |
| B | `route-summary-time` | Total travel time. |
| C | `route-summary-distance` | Total travel distance. |
| D | `route-summary-traffic-time` | Traffic delay information. |
| E | `route-summary-traffic-light`<br/>`route-summary-traffic-moderate`<br/>`route-summary-traffic-heavy` | The traffic level description. |
| F | `route-summary-arrive-by` | The arrive by information. |
| G | `route-summary-arrive-by-label` | The arrive by label. |
| H | `route-instruction-group`| A group of route instructions. |
| I | `route-instruction-group-desc`| Instruction group top level description. |
| J | `route-instruction-group-msg`| Instruction group message. |
| K | `route-instruction-street`<br/>`route-instruction-roadNumber`<br/>`route-instruction-exitNumber`<br/>`route-instruction-signpostText`<br/>`route-instruction-roundaboutExitNumber` | A tagged key phrase in the route instruction message. The `instructionsType` option of the routing service must be set to `tagged` to get these. All XML tags are replaced with a `span` element with one of these CSS class names. |
| L | `route-instruction-group-time` | The travel time of the group of instructions. |
| M | `route-instruction-group-distance` | The travel distance of the group of instructions. |
| N | `route-instruction` | A route instruction. |
| O | `route-maneuver` | A route manuever icon. |
| P | `route-instruction-street`<br/>`route-instruction-roadNumber`<br/>`route-instruction-exitNumber`<br/>`route-instruction-signpostText`<br/>`route-instruction-roundaboutExitNumber` | A tagged key phrase in the route instruction message. The `instructionsType` option of the routing service must be set to `tagged` to get these. All XML tags are replaced with a `span` element with one of these CSS class names. |
| Q | `route-instruction-msg` | Instruction message. |
| R | `route-instruction-distance` | Instruction distance. |
| S | `route-disclaimer` | A disclaimer message about route accuracy and obeying traffic laws. |


### Customize icons

All manuever icons styles can be customized using CSS classes `route-maneuver`, `route-maneuver-text` and `route-maneuver-[maneuver]` where `[maneuver]` is the name of the maneuver. For example, an instruction with an 'ARRIVE' maneuver will have the following CSS class `route-maneuver-ARRIVE`. A full list of possible guidance maneuvers is [documented here](https://docs.microsoft.com/rest/api/maps/route/getroutedirections#guidancemaneuver). Instructions for departure, arrivial or intermediate waypoints have a text element rendered above the icon. This can be styled using the `route-maneuver-text` CSS class. All icons are SVG's and common style to customize are the size, fill and stroke colors. For example, the following CSS can be used to make all maneuver icons red.

```CSS
.route-maneuver svg {
    fill: red;
    stroke: red;
}
```

If you want to change the style of a single icon, you can use the more CSS class name that has the maneuver name appended to it, as shown below.

```CSS
.route-maneuver-ARRIVE svg {
    fill: red;
    stroke: red;
}
```

**Note:** Icons are embedded SVG's as this makes it easier to apply CSS styles to them. To replace these icons with custom images you will need to replace the SVG strings in the `EmeddedIcons.ts` file and rebuild the project.

Here is a table of all maneuver's and the default built-in icon.

| Maneuver | Icon |
|----------|------|
| ARRIVE<br/>DEPART<br/>WAYPOINT_REACHED | <svg height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.5 36.5"><g stroke="none"><path d="M12.25.25a12.2543,12.2543,0,0,0-12,12.4937c0,6.4436,6.4879,12.1093,11.059,22.5641.5493,1.2563,1.3327,1.2563,1.882,0C17.7621,24.8529,24.25,19.1857,24.25,12.7437A12.2543,12.2543,0,0,0,12.25.25Z"/></g></svg> |
| BEAR_LEFT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M15.8 25.1H19V21c0-2.9-.4-4.8-1.7-7.1-.5-1-2.8-4.5-3.1-4.9l-2.7 1.8c.9 1.4 2.6 4 2.9 4.6 1 1.9 1.3 3.3 1.3 5.7v4h.1z"/><path d="M13.7 11l6.2-.6-9.8-5.5V16z"/></g></svg> |
| BEAR_RIGHT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M14.2 25.1H11V21c0-2.9.4-4.8 1.7-7.1.5-1 2.8-4.5 3.1-4.9l2.7 1.8c-.9 1.4-2.6 4-2.9 4.6-1 1.9-1.3 3.3-1.3 5.7v4h-.1z"/><path d="M19.9 16l-3.6-5-6.2-.6 9.8-5.5z"/></g></svg> |
| ENTER_HIGHWAY<br/>ENTER_MOTORWAY<br/>ENTER_FREEWAY<br/>ENTRANCE_RAMP | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path stroke="none" d="M9.6 15L8 21.5c0 .3.1.5.4.5h5l.6-7H9.6zM20.7 15h-4.4l.2 7h5.1c.3 0 .4-.2.4-.5L20.7 15zM26 14v-1H4v1h19.9zM13.8 12l.2-4h-2.8c-.3 0-.5.2-.6.5L9.9 12h3.9zM16.2 12L16 8h2.8c.3 0 .5.2.6.5l.7 3.5h-3.9z"/><path d="M6 13.6h1V16H6zM23 13.6h1V16h-1z"/></svg> |
| KEEP_LEFT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M19.4 25.6h3.2V20c0-.7-.5-1.3-1.1-1.5l-6.9-2.1v-5.2h-3.2v6.4c0 .7.5 1.3 1.1 1.5l6.9 2.1v4.4z"/><path d="M18.6 14l-5.7-9.6L7.4 14l5.6-2.5z"/></g></svg> |
| KEEP_RIGHT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M10.6 25.6H7.4V20c0-.7.5-1.3 1.1-1.5l6.9-2.1v-5.2h3.2v6.4c0 .7-.5 1.3-1.1 1.5l-6.9 2.1v4.4z"/><path d="M17 11.5L11.4 14l5.7-9.6 5.5 9.6z"/></g></svg> |
| MAKE_UTURN<br/>TRY_MAKE_UTURN | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M21 25.4h3.2V11.8c0-4-3.2-7.2-7.2-7.2s-7.2 3.2-7.2 7.2v3.6H13v-3.6c0-2.2 1.8-4 4-4s4 1.8 4 4v13.6z"/><path d="M5.8 11.4l5.7 9.6 5.5-9.6-5.6 2.5z"/></g></svg> |
| MOTORWAY_EXIT_LEFT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 312"><g stroke="#000"><path d="M200 46 200 266.235" stroke-width="40" stroke-miterlimit="8" fill="none"/><path d="M108.387 104.558C161.11 114.911 198.856 154.622 199.975 200.912" stroke-width="40" stroke-miterlimit="8" fill="none"/><path d="M111.686 146.196 55.5742 96.7993 123.702 66.0224Z"/></g></svg> |
| MOTORWAY_EXIT_RIGHT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 312"><g stroke="#000"><path d="M0 0 0.000104987 220.235" stroke-width="40" stroke-miterlimit="8" fill="none" fill-rule="evenodd" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 112 54)"/><path d="M144.387 2.5577C197.11 12.9113 234.856 52.6223 235.975 98.9118" stroke-width="40" stroke-miterlimit="8" fill="none" fill-rule="evenodd" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 348 110)"/><path d="M0 62.8137 40.5345 0 81.0691 62.8137Z" fill-rule="evenodd" transform="matrix(-0.148216 -0.988955 -0.988955 0.148216 261.65 145.004)"/>>/g></svg> |
| ROUNDABOUT_BACK | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M15.049 2.3c-4.2 0-7.7 3.4-7.7 7.7 0 4.3 3.4 7.7 7.7 7.7.7 0 1.3-.1 1.9-.3v-4.1c-.6.3-1.2.5-1.9.5-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8v6.6c2.3-1.3 3.8-3.8 3.8-6.6.1-4.3-3.4-7.7-7.6-7.7z"/><path d="M13.149 15.7h3.8V21h-3.8z"/><path d="M15.049 20.7l-5.8-2.6 5.9 9.6 5.7-9.5z"/></g></svg> |
| ROUNDABOUT_CROSS | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M11.15 19.25v-6.6c-2.3 1.3-3.8 3.8-3.8 6.6s1.5 5.3 3.8 6.6v-6.6z" style="fill:#cecece"/><path d="M14.95 11.65c-.7 0-1.3.1-1.9.3v4.1c.6-.3 1.2-.5 1.9-.5 2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8-.7 0-1.4-.2-1.9-.5v4.1c.6.2 1.3.3 1.9.3 4.2 0 7.7-3.4 7.7-7.7 0-4.3-3.5-7.7-7.7-7.7z"/><path d="M13.05 26.05h3.8v2.9h-3.8zM14.95 8.15l-5.8 2.5 5.9-9.6 5.7 9.6z"/></g></svg> |
| ROUNDABOUT_RIGHT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M5.6 17.35c0-1.1.5-2.2 1.3-2.9-.8-.7-1.3-1.7-1.3-2.9 0-2.1 1.7-3.8 3.8-3.8 1.1 0 2.2.5 2.9 1.3.5-.5 1.1-.9 1.8-1.1.4-.1.8-.2 1.2-.2h.8c-1.3-2.3-3.8-3.8-6.6-3.8-4.3 0-7.7 3.4-7.7 7.7 0 2.8 1.5 5.3 3.8 6.6v-.9z" style="fill:#cecece"/><path d="M11.4 26.05H7.6v-8.6c0-1.1.9-1.9 1.9-1.9 1.1 0 2.2-.5 3-1.4.6-.7.9-1.5.9-2.4 0-.5.2-1 .6-1.4.4-.4.8-.6 1.4-.6h6v3.8h-4.3c-.3 1.1-.8 2.1-1.5 3-1 1.3-2.4 2.1-4 2.5v7h-.2z"/><path d="M18.6 17.35l2.5-5.7-2.5-5.8 9.6 5.8z"/></g></svg> |
| ROUNDABOUT_LEFT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M22.4 26h-3.8v-8.6c0-1.1.9-1.9 1.9-1.9 2.1 0 3.8-1.7 3.8-3.8 0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8 0 1.1-.9 1.9-1.9 1.9h-6V9.8h4.3C14 6.5 17 4 20.5 4c4.2 0 7.7 3.4 7.7 7.7 0 3.6-2.5 6.6-5.8 7.4V26z"/><path d="M8.9 11.6l2.5-5.8-9.6 5.8 9.6 5.7z"/></g></svg> |
| SHARP_LEFT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><g stroke="none"><path d="M19.7 24.95h3.2V8.15c0-.8-.4-1.6-1-2.2-1.2-1.2-3.2-1.2-4.5 0l-8.9 8.9 2.3 2.3 8.9-8.9v16.7z"/><path d="M9.9 7.75l-2.8 10.8 10.7-2.9-5.7-2.1z"/></g></svg> |
| SHARP_RIGHT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M10.3 24.95H7.1V8.15c0-.8.4-1.6 1-2.2 1.2-1.2 3.2-1.2 4.5 0l8.9 8.9-2.3 2.3-8.9-8.9v16.7z"/><path d="M17.9 13.55l2.2-5.8 2.8 10.8-10.7-2.9z"/></g></svg> |
| STRAIGHT<br/>FOLLOW | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M13.4 11.6h3.2v13.6h-3.2z"/><path d="M9.4 14.4l5.6-2.5 5.6 2.5-5.7-9.6z"/></g></svg> |
| SWITCH_MAIN_ROAD<br/>SWITCH_MAIN_ROAD | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"><path stroke="none" d="m12.2 1.4l-12 17c-0.2 0.3-0.2 0.7-0.1 1 0.2 0.3 0.5 0.5 0.9 0.5h6v3c0 7.4 3.2 14.5 8.8 19.4l2.5 2.2c3 2.6 4.7 6.4 4.7 10.4v3c0 0.6 0.4 1 1 1h10c0.6 0 1-0.4 1-1v-3c0-7.4-3.2-14.5-8.8-19.4l-2.5-2.1c-3-2.6-4.7-6.4-4.7-10.4v-3h6c0.4 0 0.7-0.2 0.9-0.5s0.1-0.7-0.1-1l-12-17c-0.2-0.3-0.5-0.4-0.8-0.4s-0.6 0.2-0.8 0.4Z"/><path stroke="none" d="m32 19c0 0.3 0.1 0.5 0.3 0.7 0.2 0.2 0.4 0.3 0.7 0.3h6v3c0 4-1.7 7.8-4.7 10.4l-2.5 2.2c-0.5 0.5-1 0.9-1.5 1.4 0.1 0.1 0.1 0.2 0.2 0.2 2.9 3.4 4.9 7.5 5.8 11.9 0.8-1.7 2-3.2 3.4-4.5l2.5-2.1c5.6-4.9 8.8-12 8.8-19.4v-3h6c0.4 0 0.7-0.2 0.9-0.5s0.1-0.7-0.1-1l-12-17c-0.2-0.3-0.5-0.4-0.8-0.4s-0.6 0.2-0.8 0.4l-12 17c-0.1 0.2-0.2 0.4-0.2 0.6Z"/></svg> |
| TAKE_FERRY | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path stroke="none" d="M23.4 22.784s-3.1 3.1-8.4.2c-5.3-3-8.4.2-8.4.2" style="fill:none;stroke:#00e9ff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/><path d="M14 4.784h2v2h-2zM15 9.884v-.6.6c1.2 1.4 3.9 2.5 6 2.7v-4.8H9v4.8c2.2-.2 4.8-1.3 6-2.7z"/><path d="M11 18.784c1.5 0 3.1.5 4.7 1.5 1 .6 2 .9 2.9 1 2-2.6 3.3-4.6 3.3-6.6-2.2-.1-5.5-1-7-2.6-1.5 1.6-4.8 2.6-7 2.6 0 1.5.7 2.4 1.8 4.3.4-.1.9-.2 1.3-.2z"/></svg> |
| TURN_LEFT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M21.4 23.8h3.2v-5.6c0-4.4-3.6-8-8-8h-4.8v3.2h4.8c2.6 0 4.8 2.2 4.8 4.8v5.6z"/><path d="M15 6.2l-9.6 5.7 9.6 5.5-2.5-5.6z"/></g></svg> |
| TURN_RIGHT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M8.6 23.8H5.4v-5.6c0-4.4 3.6-8 8-8h4.8v3.2h-4.8c-2.6 0-4.8 2.2-4.8 4.8v5.6z"/><path d="M17.5 11.8L15 6.2l9.6 5.7-9.6 5.5z"/></g></svg> |
| WAYPOINT_LEFT<br/>ARRIVE_LEFT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.5 36.5"><g stroke="none"><path d="M12.25.25a12.2543,12.2543,0,0,0-12,12.4937c0,6.4436,6.4879,12.1093,11.059,22.5641.5493,1.2563,1.3327,1.2563,1.882,0C17.7621,24.8529,24.25,19.1857,24.25,12.7437A12.2543,12.2543,0,0,0,12.25.25Z"/><polygon points="6,28 6,36 0,32"/></g></svg> |
| WAYPOINT_RIGHT<br/>ARRIVE_RIGHT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.5 36.5"><g stroke="none"><path d="M12.25.25a12.2543,12.2543,0,0,0-12,12.4937c0,6.4436,6.4879,12.1093,11.059,22.5641.5493,1.2563,1.3327,1.2563,1.882,0C17.7621,24.8529,24.25,19.1857,24.25,12.7437A12.2543,12.2543,0,0,0,12.25.25Z"/><polygon points="18,28 18,36 24,32"/></g></svg> |

The following icons will be used in countries where vehicles drive on the left side of the road (i.e. UK).

| Maneuver | Icon |
|----------|------|
| ROUNDABOUT_CROSS | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M18.85 19.25v-6.6c2.3 1.3 3.8 3.8 3.8 6.6s-1.5 5.3-3.8 6.6v-6.6z" style="fill:#cecece"/><path d="M15.05 11.65c.7 0 1.3.1 1.9.3v4.1c-.6-.3-1.2-.5-1.9-.5-2.1 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8.7 0 1.4-.2 1.9-.5v4.1c-.6.2-1.3.3-1.9.3-4.2 0-7.7-3.4-7.7-7.7 0-4.3 3.5-7.7 7.7-7.7z"/><path d="M16.95 26.05h-3.8v2.9h3.8zM20.85 10.65l-5.9-9.6-5.7 9.6 5.8-2.5z"/></g></svg> |
| ROUNDABOUT_RIGHT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M7.6 26h3.8v-8.6c0-1.1-.9-1.9-1.9-1.9-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8 0 1.1.9 1.9 1.9 1.9h6V9.8h-4.3C16 6.5 13 4 9.5 4c-4.2 0-7.7 3.4-7.7 7.7 0 3.6 2.5 6.6 5.8 7.4V26z"/><path d="M18.6 5.8l9.6 5.8-9.6 5.7 2.5-5.7z"</g>/></svg> |
| ROUNDABOUT_LEFT | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M24.4 17.35c0-1.1-.5-2.2-1.3-2.9.8-.7 1.3-1.7 1.3-2.9 0-2.1-1.7-3.8-3.8-3.8-1.1 0-2.2.5-2.9 1.3-.5-.5-1.1-.9-1.8-1.1-.4-.1-.8-.2-1.2-.2h-.8c1.3-2.3 3.8-3.8 6.6-3.8 4.3 0 7.7 3.4 7.7 7.7 0 2.8-1.5 5.3-3.8 6.6v-.9z" style="fill:#cecece"/><path d="M18.6 26.05h3.8v-8.6c0-1.1-.9-1.9-1.9-1.9-1.1 0-2.2-.5-3-1.4-.6-.7-.9-1.5-.9-2.4 0-.5-.2-1-.6-1.4-.4-.4-.8-.6-1.4-.6h-6v3.8h4.3c.3 1.1.8 2.1 1.5 3 1 1.3 2.4 2.1 4 2.5v7h.2z"/><path d="M8.9 11.65l2.5-5.8-9.6 5.8 9.6 5.7z"/></g></svg> |
| ROUNDABOUT_BACK | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M14.951 2.3c4.2 0 7.7 3.4 7.7 7.7 0 4.3-3.4 7.7-7.7 7.7-.7 0-1.3-.1-1.9-.3v-4.1c.6.3 1.2.5 1.9.5 2.1 0 3.8-1.7 3.8-3.8 0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v6.6c-2.3-1.3-3.8-3.8-3.8-6.6-.1-4.3 3.4-7.7 7.6-7.7z"/><path d="M16.851 15.7h-3.8V21h3.8z"/><path d="M20.751 18.1l-5.9 9.6-5.7-9.5 5.8 2.5z"/></g></svg> |
| MAKE_UTURN | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><g stroke="none"><path d="M9 25.4H5.8V11.8c0-4 3.2-7.2 7.2-7.2s7.2 3.2 7.2 7.2v3.6H17v-3.6c0-2.2-1.8-4-4-4s-4 1.8-4 4v13.6z"/><path d="M18.6 13.9l5.6-2.5-5.7 9.6-5.5-9.6z"/></g></svg> |

**Additional notes**

- `TAKE_EXIT` will use `MOTORWAY_EXIT_LEFT` or `MOTORWAY_EXIT_RIGHT` depending on the drive side information.

## Examples

The following examples show how to use this UI control: 

- [Simple route instructions](./examples/Simple route instructions.html)
