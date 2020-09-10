import { Utils } from './Utils';

export interface Resource {
    arriveBy: string;
    lTraffic: string;
    mTraffic: string;
    hTraffic: string;
    rDisclaimer: string;
    min: string;
    mins: string;
    hr: string;
    hrs: string;
    day: string;
    days: string;
    ft: string;
    km: string;
    mi: string;
    m: string;
    delay: string;
}

export class Localization {
    private static _resxCache: Record<string, Resource> = {};
    private static _supportedLanguages = ['en', 'af', 'eu', 'bg', 'zh', 'hr', 'cs', 'da', 'nl', 'et', 'fi', 'fr', 'gl', 'de', 'el', 'hi', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'es', 'lv', 'lt', 'ms', 'nb', 'pl', 'pt', 'ro', 'ru', 'sr', 'sk', 'sl', 'sv', 'th', 'tr', 'uk', 'vi'];
    private static _localizationFolderPath: string;

    public static async getResource(language?: string): Promise<Resource> {
        if (!this._localizationFolderPath) {
            this._localizationFolderPath = `${Utils.getExecutingPath()}/localization`;
        }

        //If no language is specified, try to detect one.
        if (!language) {
            language = Utils.detectLanguage(language);
        }

        if (language) {
            language = language.toLowerCase();

            if (language.indexOf('-') > 0) {
                language = language.substring(0, language.indexOf('-'));
            }
        }

        if (!language || this._supportedLanguages.indexOf(language) === -1) {
            language = 'en';
        }

        if (this._resxCache[language]) {
            return this._resxCache[language];
        }

        let res = await fetch(`${this._localizationFolderPath}/${language}/resource.json`);

        if (res.ok) {
            let r = res.json();
            let r2 = await r;

            this._resxCache[language] = r2;

            return r2;
        }

        throw 'Unable to download resource file.';
    }
}