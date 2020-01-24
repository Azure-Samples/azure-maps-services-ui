import * as azmaps from "azure-maps-control";
import * as azmapsrest from "azure-maps-rest";
import { SearchBarOptions } from "./SearchBarOptions";

//https://developers.google.com/maps/documentation/javascript/places-autocomplete#style_autocomplete
//https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md

///Accessibility
//https://alligator.io/vuejs/vue-a11y-autocomplete
//www.bu.edu/webteam/clrux/accessibility/autocomplete/autocomplete.html
//https://alphagov.github.io/
//https://alphagov.github.io/accessible-autocomplete/
//https://github.com/trevoreyre/autocomplete - No support for translations.
//https://github.com/moroshko/react-autosuggest




//https://codepen.io/AlbertFeynman/pen/BPvzWZ
//https://codepen.io/kristyjy/pen/zGOXYb

//TODO:
//Cache results.
//Events: completed
//Position: up/down

/**
 * The events supported by the `SearchBar`
 */
/*export interface SearchBarEvents {
    searchcompleted: (azmapsrest.Models.SearchAddressResult
        | azmapsrest.Models.SearchAddressReverseResult
        | azmapsrest.Models.SearchFuzzyResult
        | azmapsrest.Models.SearchPoiResult
        | azmapsrest.Models.SearchPoiCategoryResult)[];

    suggestionselected: (azmapsrest.Models.SearchAddressResult
        | azmapsrest.Models.SearchAddressReverseResult
        | azmapsrest.Models.SearchFuzzyResult
        | azmapsrest.Models.SearchPoiResult
        | azmapsrest.Models.SearchPoiCategoryResult);

    error: any;
}*/

/**
 * A control for changing the drawing mode.
 */
/*export class SearchBar extends azmaps.internal.EventEmitter<SearchBarEvents> implements azmaps.Control {

    private _control: HTMLElement;
    private _input: HTMLInputElement;

    private _service: azmapsrest.SearchURL;
    private _map: azmaps.Map = null;

    private _currentFocus: number;

    private id: string = 'abc';

    private _options: SearchBarOptions = {
        aborter: azmapsrest.Aborter.timeout(3000),
        autocomplete: true,
        autofocus: false,
        delay: 300,
        enrichCoordinateInput: true,
        minLength: 3,
        searchType: 'fuzzy',
        animationType: 'fly',
        animationDuration: 1000,
        maxResults: 5,
        showNoOptionsFound: true,
        placeholder: '',
        setMapView: true,
        useMapView: true
    };

    private _resx: any;

    /**
    * Constructs a SearchBar.
    * @param pipeline The service pipline to be used by the search service.
    * @param mapsUrl A URL string pointing to Azure Maps service, default is "https://atlas.microsoft.com".
    * @param options The options for the DrawingToolbar.
    */
    /*constructor(pipeline: azmapsrest.Pipeline, mapsUrl?: string, options?: SearchBarOptions) {
        super();

        if (!pipeline) {
            throw 'Pipeline not specified in search bar.'
        }

        this._service = new azmapsrest.SearchURL(pipeline, mapsUrl);

        if (options) {
            this.setOptions(options);
        }
    }

    /**
     * Closes the suggestion panel.
     */
   /* public close(): void {

    }

    /**
     * Disposes the `SearchBar`. 
     * When disposed, all resources used by the `SearchBar` are released.
     */
    /*public dispose(): void {
        if (this._map) {

        }
        this.onRemove();

        //TODO: remove resources.
    }

    /**
     * Gets the options used by the DrawingToolbar.
     */
    /*public getOptions(): SearchBarOptions {
        //  return cloneDeep(this.options);

        //TODO: clone.

        return this._options;
    }

    /**
     * Sets the options for the DrawingToolbar.
     * @param options The new options for the DrawingToolbar.
     */
    /*public setOptions(options: SearchBarOptions) {
        //TODO: add logic

        if (options) {
            if (!this._control) {
                Object.assign(this._options, options);

                //If there is a containerId, load the search bar in it. 
                if (this._options.containerId) {
                    this._createSearchBar();
                }
            }

            if (typeof options.disabled === 'boolean') {
                this._input.disabled = options.disabled;
                this._options.disabled = options.disabled;
            }







        }
    }

    /**
  <span class="ui-helper-hidden-accessible" role="status" aria-live="polite">4 results are available, use up and down arrow keys to navigate.</span> 
     */

    /**
     * Initialization method for the control which is called when added to the map.
     * @return An HTMLElement to be placed on the map for the control.
     */
    /*public onAdd(map: azmaps.Map, options?: azmaps.ControlOptions): HTMLElement {
        this._map = map;

        if (this._control) {
            //Check to see if the search bar is being loaded in a container. 
            if (!this._options.containerId) {
                //Remove the control incase it has been added to the page at any time.
                this._control.remove();
            }
        } else {
            this._createSearchBar();
        }

        //TODO: add logic
        return this._control;
    }

    /**
     * Method that is called when the control is removed from the map. Should perform any necessary cleanup for the control.
     */
    /*public onRemove(): void {
        this._map = null;
        this._control.remove();
        delete this._control;
    }

    private _createSearchBar(): void {


        //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_autocomplete

        this._control = document.createElement('div');
        this._control.className = 'azure-maps-services-ui-autocomplete';

        const countries = [
            'France',
            'Germany',
            'Canada',
            'Cambodia',
            'cats',
            'United Kingdom'
        ]

        /* var aac = accessibleAutocomplete({
             element: this._control,
             source: countries,
             id: 'my-autocomplete'
         });*/

        /*if (this._options.containerId) {
            var container = document.getElementById(this._options.containerId);
            container.appendChild(this._control);
        }

        //Create the text input field.
        /*  this._input = document.createElement('input');
          this._input.type = 'text';
          this._input.className = 'azure-maps-services-ui-autocomplete';
          this._input.autocomplete = 'off';
          this._input.addEventListener('input', this._onInput);
          this._input.addEventListener('keydown', this._onKeyDown);
  
          //TODO: aria-label
          //TODO: test in firefox.
  
          this._control.appendChild(this._input);
  
          if (this._options.containerId) {
              var container = document.getElementById(this._options.containerId);
              container.appendChild(this._control);
          }
  
          //Execute a function when someone clicks in the document.
          document.addEventListener("click", (e) => {
              this._closeAllLists(e.target);
          });*/
   /* }

/**
 * Event handler for when the user
 */
/* private _onInput = (e: Event): boolean => {
     var a, b, val = this._input.value;

     var arr = this.countries;

     //Close any already open lists of autocompleted values.
     this._closeAllLists();

     if (!val) {
         return false;
     }

     this._currentFocus = -1;

     //Create a DIV element that will contain the items (values).
     a = document.createElement("DIV");
     a.setAttribute("id", this.id + "azure-maps-services-ui-autocomplete-list");
     a.setAttribute("class", "azure-maps-services-ui-autocomplete-items");

     //Append the DIV element as a child of the autocomplete container.
     this._input.parentNode.appendChild(a);

     //For each item in the array.
     for (var i = 0; i < arr.length; i++) {
         //Check if the item starts with the same letters as the text field value.
         if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
             //Create a DIV element for each matching element.
             b = document.createElement("DIV");
             b.setAttribute('rel', arr[i]);

             //Highlight the matching values.
             b.innerHTML = `'<span class="azure-maps-services-ui-autocomplete-item-highlight">${arr[i].substr(0, val.length)}</span>'${arr[i].substr(val.length)}`;

             //Insert a input field that will hold the current array item's value.
             b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

             //Execute a function when someone clicks on the item value (DIV element).
             b.addEventListener("click", function (e) {
                 //Insert the value for the autocomplete text field.
                 this._input.value = this.getElementsByTagName("input")[0].value;

                 //Close the list of autocompleted values, (or any other open lists of autocompleted values.
                 this._closeAllLists();
             });
             a.appendChild(b);
         }
     }
 };

 /**
  * Event handler for when the user
  */
/* private _onKeyDown = (e: KeyboardEvent): void => {
     var x: any = document.getElementById(this.id + "azure-maps-services-ui-autocomplete-list");

     if (x) {
         x = x.getElementsByTagName('div');
     }

     if (e.keyCode == 40) {
         //If the arrow DOWN key is pressed, increase the currentFocus variable.
         this._currentFocus++;

         //and and make the current item more visible.
         this._addActive(x);
     } else if (e.keyCode == 38) { //up
         //If the arrow UP key is pressed, decrease the currentFocus variable.
         this._currentFocus--;

         //and and make the current item more visible:
         this._addActive(x);
     } else if (e.keyCode == 13) {
         //If the ENTER key is pressed, prevent the form from being submitted.
         e.preventDefault();

         if (this._currentFocus > -1) {
             //and simulate a click on the "active" item.
             if (x) {
                 x[this._currentFocus].click();
             }
         }
     }
 };

 private _addActive(x: any) {
     //A function to classify an item as "active".
     if (!x) {
         return false;
     }

     //Start by removing the "active" class on all items.
     this._removeActive(x);

     if (this._currentFocus >= x.length) {
         this._currentFocus = 0;
     }

     if (this._currentFocus < 0) {
         this._currentFocus = (x.length - 1);
     }

     //Add class "azure-maps-services-ui-autocomplete-active".
     x[this._currentFocus].classList.add("azure-maps-services-ui-autocomplete-active");
 }

 private _removeActive(x: any) {
     //A function to remove the "active" class from all azure-maps-services-ui-autocomplete items.
     for (var i = 0; i < x.length; i++) {
         x[i].classList.remove("azure-maps-services-ui-autocomplete-active");
     }
 }

 private _closeAllLists(elmnt?: any): void {
     //Close all autocomplete lists in the document, except the one passed as an argument.
     var x = document.getElementsByClassName("azure-maps-services-ui-autocomplete-items");
     for (var i = 0; i < x.length; i++) {
         if (elmnt != x[i] && elmnt != this._input) {
             x[i].parentNode.removeChild(x[i]);
         }
     }
 }


 private _searchCompleted(): void {
     //this._invokeEvent("drawingmodechanged", newOptions.mode);

 }

 private _suggestionSelected(): void {

 }

 
}*/
