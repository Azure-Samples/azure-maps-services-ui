import { SearchBarOptions } from './SearchBarOptions';

export class SearchSuggestionCache {
    private static _cache = {};

    private static clear() {
        this._cache = {};
    }

    private static addSuggestions(query: string, options: SearchBarOptions, suggestions: any): void {
        var key = this._getKey(query, options);

    }

    private static getSuggestions(query: string, options: SearchBarOptions) {
        var key = this._getKey(query, options);

    }

    private static _getKey(query: string, options: SearchBarOptions): string {
        return `${query}|${JSON.stringify(options)}`;
    }
}