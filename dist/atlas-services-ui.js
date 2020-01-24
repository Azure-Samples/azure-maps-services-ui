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

    var Localization = /** @class */ (function () {
        function Localization() {
        }
        Localization.getResource = function (language) {
            //If no language is specified, try to detect one.
            if (!language) {
                language = Utils.detectLanguage(language);
            }
            if (language && language.indexOf('-') > 0) {
                language = language.substring(0, language.indexOf('-'));
            }
            var names = ['arriveBy', 'lTraffic', 'mTraffic', 'hTraffic', 'rDisclaimer', 'min', 'hr', 'hrs', 'days', 'day', 'ft', 'km', 'mi', 'm', 'delay', 'mins'];
            var t;
            switch (language.toLowerCase()) {
                //Afrikaans
                case 'af':
                    t = ['kom deur', 'lig verkeer', 'matige verkeer', 'Swaar verkeer', 'Hierdie rigtings is slegs vir beplanning. Jy mag vind dat bouprojekte, verkeer, weer, of ander gebeurtenisse toestande kan veroorsaak te verskil van die kaart resultate, en jy moet jou roete daarvolgens te beplan. Jy moet al tekens of kennisgewings met betrekking tot jou roete gehoorsaam.', 'min', 'hr', 'hrs', 'dae', 'dag', 'ft', 'km', 'mi', 'm', 'vertraging', 'mins'];
                    break;
                //Basque
                case 'eu':
                    t = ['iritsiko arabera', 'Argi trafikoa', 'Ertaina trafikoa', 'heavy trafikoa', 'lagungarri hutsak baino ez dira. eraikuntza-proiektuak, trafikoa, eguraldia hori aurkitu ahal izango duzu, edo beste gertakari baldintza mapa emaitzak datoz eragin ditzakete, eta zure ibilbidea baldintza hauetara egokitu behar. Zure ibilbidea seinale eta jakinarazpen guztiak bete behar duzu.', 'min', 'h', 'h', 'egun', 'egun', 'ft', 'km', 'mi', 'm', 'atzerapenik', 'دقيقة'];
                    break;
                //Bulgarian
                case 'bg':
                    t = ['Пристига с', 'светофар', 'Умерен трафик', 'Интензивен трафик', 'Тези упътвания са само за планиране. Може да откриете, че строителни проекти, трафик, времето, или други причини условия, за да се различават от резултатите на картата, и трябва да планирате маршрута си. Длъжни сте да спазвате всички означения или упътвания, отнасящи се за маршрута.', 'мин', 'ч', 'часа', 'дни', 'ден', 'фута', 'km', 'ми', 'm', 'закъснение', 'mins'];
                    break;
                //Chinese
                case 'zh':
                    t = ['通过到达', '光通信', '中度交通', '交通繁忙', '这些方向仅用于规划的目的。您可能会发现建设项目，交通，天气或其他事件可能导致实际情况与地图结果有所不同，你应该据此规划自己的路线。您必须遵守路线上所有的指示或通知。', '分鐘', '小時', '小時', '天', '天', '英呎', '公里', '英哩', '公尺', '延迟', 'мин'];
                    break;
                //Croatian
                case 'hr':
                    t = ['Dolazak', 'Slab promet', 'umjereno promet', 'Gust promet', 'Ove upute su namijenjene samo u svrhu planiranja. Vi svibanj pronaći da je građevinskih radova, prometa, vremenskih uvjeta ili drugih događaja može uzrokovati da se uvjeti razlikuju od rezultata karte, te da treba planirati rutu. Morate slijediti sve znakove i obavijesti tijekom svog putovanja.', 'min', 'HR', 'h', 'dana', 'dan', 'ft', 'km', 'mi', 'm', 'odgoditi', '分钟'];
                    break;
                //Czech
                case 'cs':
                    t = ['Přijet', 'slabý provoz', 'středně silný provoz', 'Silný provoz', 'Tyto pokyny jsou určeny pouze pro účely plánování. Možná zjistíte, že stavební projekty, doprava, počasí nebo jiné události mohou způsobit podmínky, které se liší od výsledků na mapě, a vy byste měli plánovat trasu. Musíte se řídit všemi značkami a upozorněními týkající se vaší trasy.', 'min', 'hod.', 'hod.', 'dny', 'den', 'ft', 'km', 'mi', 'm', 'zpoždění', 'min'];
                    break;
                //Danish
                case 'da':
                    t = ['Ankomst med', 'Let trafik', 'Moderat trafik', 'Kraftig trafik', 'Disse retninger er kun til planlægningsformål. Du kan opleve, at byggeprojekter, trafik, vejr, eller andre begivenheder kan forårsage at forholdene er anderledes end på kortet, og du bør planlægge din rute i overensstemmelse hermed. Du skal overholde alle skilte eller meddelelser vedrørende din rute.', 'min', 'time', 'timer', 'dage', 'dag', 'ft', 'km', 'mi', 'm', 'forsinke', 'min'];
                    break;
                //Dutch
                case 'nl':
                    t = ['Aankomen bij', 'Licht verkeer', 'matig verkeer', 'Druk verkeer', 'Deze aanwijzingen dienen slechts ter planning. Misschien vindt u dat wegwerkzaamheden, verkeersdrukte, het weer of andere evenementen kunnen veroorzaken voorwaarden afwijken van de kaart met resultaten, en u moet uw route dienovereenkomstig plannen. U moet alle verkeersborden en aanduidingen op uw route te gehoorzamen.', 'min', 'uur', 'uur', 'dagen', 'dag', 'vt', 'km', 'mijl', 'm', 'vertraging', 'mins'];
                    break;
                //Estonian
                case 'et':
                    t = ['Saabumine', 'kergliikluse', 'mõõdukas liiklust', 'Tihe liiklus', 'Need juhised on ainult planeerimiseks. Võite avastada, et ehitusprojektid, liiklus, ilm, või muude asjaolude tõttu erinevad tingimused kaardi tulemustest, ja sa peaksid planeerima oma marsruudi vastavalt. Peate järgima kõiki märke ja viitasid oma marsruuti.', 'min', 'tund', 'tunnid', 'päeva', 'päev', 'ft', 'km', 'mi', 'm', 'viivitus', 'mins'];
                    break;
                //Finnish
                case 'fi':
                    t = ['Saapua', 'Kevyt liikenne', 'kohtalainen liikenne', 'Vilkas liikenne', 'Nämä ohjeet ovat vain suuntaa-antavia. Saatat huomata, että rakennustyöt, liikenne, sää tai muut tapahtumat aiheuttavat poikkeamia karttaan, ja sinun pitäisi suunnittelussasi. Noudata kaikkia koskevia kylttejä reittiä.', 'min', 'tunti', 'tuntia', 'päivää', 'päivä', 'ft', 'km', 'mi', 'm', 'viive', 'mins'];
                    break;
                //French
                case 'fr':
                    t = ['Arrive avant', 'trafic léger', 'circulation modérée', 'Circulation dense', 'Ces instructions sont pour fins de planification uniquement. Vous pouvez constater que les projets de construction, le trafic, la météo ou d\'autres événements peuvent provoquer des conditions diffèrent des résultats cartographiques et vous devez planifier votre itinéraire en conséquence. Vous devez obéir à tous les signes ou notifications concernant votre itinéraire.', 'min', 'h', 'h', 'journées', 'journée', 'ft', 'km', 'mi', 'm', 'retard', 'min'];
                    break;
                //Galician
                case 'gl':
                    t = ['chegar de', 'semáforo', 'tráfico moderado', 'Tránsito intenso', 'Estas indicacións son soamente con fins de planificación. Pode considerar que os proxectos de construción, tráfico, meteoroloxía, ou outros eventos que fagan as condicións sexan diferentes dos resultados no mapa, e ten que planificar a súa ruta en consecuencia. Debe cumprir todos os sinais ou notificacións sobre o seu percorrido.', 'min', 'h', 'h', 'días', 'día', 'ft', 'km', 'mi', 'm', 'atraso', 'minutes'];
                    break;
                //German
                case 'de':
                    t = ['Ankommen via', 'Ampel', 'mäßiger Verkehr', 'Dichter Verkehr', 'Diese Richtungen sind für Planungszwecke nur. Sie können von diesem Bauvorhaben, Verkehr, Wetter finden, oder andere Ereignisse veranlassen können, von den Karten Ergebnissen abweichen, und Sie sollten Ihre Route entsprechend planen. Sie müssen alle Verkehrsschilder oder Hinweise bezüglich Ihrer Route beachten.', 'Min.', 'Std.', 'Std.', 'Tage', 'Tag', 'ft', 'km', 'mi', 'm', 'verzögern', 'mins'];
                    break;
                //Greek
                case 'el':
                    t = ['Άφιξη από', 'φανάρι', 'μέτρια κυκλοφορίας', 'Εντονη οδική κυκλοφορία', 'Αυτές οι οδηγίες είναι αποκλειστικά για λόγους προγραμματισμού. Μπορείτε να διαπιστώσετε ότι κατασκευαστικών έργων, κυκλοφορίας, καιρού, ή άλλα γεγονότα μπορούν να προκαλέσουν συνθήκες να διαφέρουν από τα αποτελέσματα του χάρτη, και θα πρέπει να σχεδιάσετε τη διαδρομή σας ανάλογα. Θα πρέπει να ακολουθείτε όλα τα σήματα ή ειδοποιήσεις σχετικά με τη διαδρομή σας.', 'min', 'ώρα', 'ώρες', 'ημέρες', 'ημέρα', 'ft', 'km', 'μι', 'Μ', 'καθυστέρηση', 'min'];
                    break;
                //Hindi
                case 'hi':
                    t = ['आएगी', 'हल्का यातायात', 'मध्यम ट्रैफ़िक', 'भारी यातायात', 'ये निर्देश केवल योजना के उद्देश्य के लिए हैं। निर्माण प्रोजेक्ट, यातायात, मौसम, या अन्य परिस्थितियां मानचित्र परिणामों से भिन्न हो सकते हैं, और आप उसके अनुसार मार्ग तय करना चाहिए। सभी चिह्नों या अपने मार्ग से संबंधित सूचनाओं का पालन करना होगा।', 'मिनट', 'घंटे', 'घंटे', 'दिन', 'दिन', 'फुट', 'किमी', 'मील', 'म', 'विलंब', 'λεπτά'];
                    break;
                //Hungarian
                case 'hu':
                    t = ['érkezik', 'Kis forgalom', 'mérsékelt forgalom', 'Nagy forgalom', 'Ezek az útvonalak csak tervezési célokra. Előfordulhat, hogy építkezések, közlekedési vagy időjárási, illetve egyéb okok miatt a körülmények eltérnek a térkép eredményeivel meg kell tervezni az útvonalat. Be kell tartania minden vonatkozó jelzéseket és figyelmeztetéseket az útvonalat.', 'min', 'óra', 'óra', 'napok', 'nap', 'ft', 'km', 'km', 'm', 'késleltetés', 'मिनट'];
                    break;
                //Indonesian
                case 'id':
                    t = ['tiba oleh', 'lampu lalu lintas', 'lalu lintas moderat', 'Lalu lintas padat', 'arah ini hanya untuk tujuan perencanaan. Anda mungkin menemukan bahwa proyek konstruksi, lalu lintas, cuaca, atau peristiwa lain dapat menyebabkan kondisi jalan berbeda dari hasil peta, dan Anda harus merencanakan rute Anda sesuai. Anda harus patuhi semua tanda atau pemberitahuan mengenai rute Anda.', 'min', 'hr', 'hrs', 'hari-hari', 'hari', 'ft', 'km', 'mi', 'm', 'menunda', 'mins'];
                    break;
                //Italian
                case 'it':
                    t = ['arrivare in', 'Semaforo', 'traffico moderato', 'Traffico pesante', 'Queste indicazioni sono solo a scopo di pianificazione. Potreste scoprire che i progetti di costruzione, traffico, meteo o altri eventi possono causare condizioni differiscano dai risultati delle mappe, e si dovrebbe pianificare il percorso di conseguenza. È necessario rispettare tutti i segnali o notificazione riguardante il percorso.', 'min', 'h', 'ore', 'giorni', 'giorno', 'ft', 'km', 'mi', 'm', 'ritardo', 'menit'];
                    break;
                //Japanese
                case 'ja':
                    t = ['で到着', '光トラフィック', '適度なトラフィック', '交通混雑', 'これらの方向は、計画のみを目的としています。あなたは、その建設計画、交通、天候を見つけることができ、または他のイベントは、条件がマップの結果と異なる可能性があり、そしてそれに応じてルートを計画する必要があります。あなたは実際の標識や案内板等に従わなければなりません。', '分', '時間', '時間', '日々', '日', 'フィート', 'キロメートル', 'マイル', 'メートル', 'ディレイ', 'minuti'];
                    break;
                //Kazakh
                case 'kk':
                    t = ['келу', 'Жарық трафик', 'Орташа трафик', 'ауыр жол қозғалысы', 'Бұл бағыттар тек қана жоспарлау мақсатында болып табылады. Құрылыс жобалары, көлік, ауа райы немесе басқа оқиғалардың карта нәтижелеріндегі шарттардан айырмашылығы әкелуі мүмкін, және сіз тиісінше бағдарды жоспарлауға тиіс екенін таба алады. Бағдарыңыздың барлық белгілері мен ескертулерін бағынуға тиіс.', 'мин', 'hr', 'hrs', 'күн', 'күн', 'Ft', 'км', 'MI', 'м', 'кешіктіру', '分'];
                    break;
                //Korean
                case 'ko':
                    t = ['에 의해 도착', '가벼운 교통', '보통 교통', '복잡한 교통', '길 찾기는 계획 용으로 만 제공됩니다. 당신은 건설 프로젝트, 교통, 날씨를 찾을 수 있습니다, 또는 다른 이벤트는 상황이지도 결과에서 차이가 발생할 수 있으며, 그에 따라 경로를 계획해야합니다. 당신은 당신의 경로에 대한 모든 표시 또는 고지 사항을 준수해야합니다.', '분', '시간', '시간', '일', '일', '피트', 'km', '미', '미디엄', '지연', 'мин'];
                    break;
                //Spanish
                case 'es':
                    t = ['Llegar por', 'Tráfico ligero', 'tráfico moderado', 'Tráfico pesado', 'Estas indicaciones se ofrecen sólo con fines de planificación. Es posible que los proyectos de construcción, tráfico, el tiempo, u otros acontecimientos puede causar condiciones difieran de los resultados del mapa, y se debe planificar la ruta. Debe obedecer todas las señales o avisos con respecto a su ruta.', 'min', 'h', 'h', 'dias', 'día', 'pie', 'km', 'mi', 'm', 'retrasar', '분'];
                    break;
                //Latvian
                case 'lv':
                    t = ['Pienāk', 'Neliela satiksme', 'Mērens satiksme', 'dzīva satiksme', 'Šie virzieni ir tikai plānošanas nolūkiem. Jūs varat atrast, ka būvniecības darbi, satiksme, laika ziņas, vai citi notikumi var radīt apstākļus, kas atšķiras no kartes rezultātiem, un jums vajadzētu plānot savu maršrutu. Jums ir jāievēro visas zīmes vai paziņojumi par jūsu maršrutu.', 'min', 'st.', 'stundas', 'dienas', 'diena', 'ft', 'km', 'mi', 'm', 'atlikšana', 'minutos'];
                    break;
                //Lithuanian
                case 'lt':
                    t = ['atvykti', 'šviesos srautas', 'vidutinio eismo', 'Didelis eismas', 'Šie nurodymai yra tik planavimo tikslais. Galite pastebėti, kad statybos projektų, eismas, oras, ar kiti renginiai gali sukelti sąlygos skiriasi nuo žemėlapio rezultatus, ir jums turėtų planuoti savo maršrutą. Jūs turite pakluskite visiems ženklams ar pranešimus dėl jūsų maršrute.', 'minutės', 'val.', 'val.', 'dienų', 'diena', 'pėdų', 'km', 'mi', 'm', 'delsimas', 'min'];
                    break;
                //Malay
                case 'ms':
                    t = ['tiba dengan', 'trafik lancar', 'trafik sederhana', 'Lalu lintas yang sesak', 'Arahan ini adalah untuk tujuan perancangan sahaja. Anda mungkin mendapati bahawa projek-projek pembinaan, lalu lintas, cuaca, atau peristiwa lain boleh menyebabkan keadaan berbeza daripada hasil peta, dan anda perlu merancang laluan anda dengan sewajarnya. Anda mesti patuhi semua papan tanda dan notis di jalan anda.', 'min', 'jam', 'jam', 'hari', 'hari', 'ft', 'km', 'mi', 'm', 'kelewatan', 'min'];
                    break;
                //Norwegian
                case 'nb':
                    t = ['Ankomst av', 'lys trafikk', 'moderat trafikk', 'Tett trafikk', 'Disse retningene er for planleggingsformål. Det kan hende at anleggsarbeid, trafikk, vær eller andre hendelser kan føre til at forholdene avviker fra kart resultater, og du bør planlegge ruten tilsvarende. Du må overholde alle skilt eller meldinger om ruten din.', 'min', 'time', 'timer', 'dager', 'dag', 'fot', 'km', 'mi', 'm', 'forsinkelse', 'minit'];
                    break;
                //Polish
                case 'pl':
                    t = ['przyjazd', 'Sygnalizacja świetlna', 'umiarkowany ruch', 'Duży ruch', 'Te kierunki są wyłącznie w celu planowania. Może się okazać, że projekty budowlane, ruchu, pogoda, lub inne zdarzenia mogą spowodować warunki, które różnią się od wyników map i należy zaplanować trasę odpowiednio. Musisz przestrzegać wszystkich znaków i informacji dotyczących trasy.', 'min', 'godz.', 'godz.', 'dni', 'dzień', 'ft', 'km', 'mi', 'm', 'opóźnienie', 'mins'];
                    break;
                //Portuguese
                case 'pt':
                    t = ['chegar de', 'Semáforo', 'tráfego moderado', 'Trafégo pesado', 'Essas indicações são apenas para fins de planejamento. Você pode achar que os projetos de construção, tráfego, meteorologia, ou outros eventos que façam as condições sejam diferentes dos resultados no mapa, e você deve planejar a sua rota em conformidade. Você deve obedecer todos os sinais ou notificações sobre o seu percurso.', 'min', 'h', 'h', 'dias', 'dia', 'pés', 'km', 'mi', 'm', 'demora', 'min'];
                    break;
                //Romanian
                case 'ro':
                    t = ['Sosire de', 'trafic ușor', 'trafic moderat', 'Trafic greu', 'Aceste instrucțiuni sunt doar pentru scopuri de planificare. Puteți găsi că proiectele de construcție, traficul, vremea sau alte evenimente pot determina condițiile să difere de rezultatele oferite de hărți, și ar trebui să planificați traseul în consecință. Trebuie să respectați toate semnele și notificările privind acest traseu.', 'min', 'oră', 'ore', 'zi', 'zi', 'ft', 'km', 'mi', 'm', 'întârziere', 'mins'];
                    break;
                //Russian
                case 'ru':
                    t = ['Явиться к', 'светофор', 'Умеренный трафик', 'интенсивное движение', 'Эти директивы предназначены только для целей планирования. Вы можете обнаружить, что проекты строительства, транспорт, погоду, или другие события могут вызвать условия отличаются от результатов карты, и вы должны планировать свой маршрут соответственно. Вы должны соблюдать все знаки или уведомления относительно вашего маршрута.', 'мин', 'ч', 'ч', 'дней', 'день', 'фт.', 'км', 'миль', 'м', 'задержка', 'min'];
                    break;
                //Serbian
                case 'sr':
                    t = ['Стижу', 'семафор', 'Средње саобраћај', 'Густ саобраћај', 'Ови правци су само за потребе планирања. Можете пронаћи ту грађевинских пројеката, саобраћаја, време, или други догађаји могу изазвати услови да се разликује од карте резултата, а требало би да у складу са тим планирати свој пут. Морате поштовати све знакове или обавештења у вези Вашег пута.', 'музику', 'ч', 'ч', 'дани', 'дан', 'феат', 'км на', 'ми', 'м', 'кашњење', 'мин'];
                    break;
                //Slovak
                case 'sk':
                    t = ['pricestovať', 'slabý prevádzka', 'stredne silný prevádzka', 'Hustá premávka', 'Tieto pokyny sú určené len na účely plánovania. Možno zistíte, že stavebné projekty, doprava, počasie alebo iné udalosti môžu spôsobiť podmienky, ktoré sa líšia od výsledkov na mape, a vy by ste mali plánovať trasu. Musíte sa riadiť všetkými značkami a upozorneniami týkajúce sa vašej trasy.', 'min', 'h', 'h', 'dni', 'deň', 'ft', 'km', 'mi', 'm', 'oneskorenie', 'мин'];
                    break;
                //Slovenian
                case 'sl':
                    t = ['Prihod, ki ga', 'semaforja', 'zmerna promet', 'Gost promet', 'Ta navodila so samo za namene načrtovanja. Lahko se zgodi, da se gradbeni projekti, promet, vreme, ali drugi dogodki lahko povzročijo pogoji, ki se razlikujejo od rezultatov zemljevida, in bi morali zato pri načrtovanju poti. Spoštovati morate o vaši poti vse znake ali obvestila.', 'min', 'h', 'h', 'dnevi', 'dan', 'ft', 'km', 'mi', 'm', 'zamudo', 'min'];
                    break;
                //Swedish
                case 'sv':
                    t = ['anländer med', 'lätt trafik', 'måttlig trafik', 'Tung trafik', 'Dessa riktningar är för planeringsändamål. Du kanske upptäcker att byggprojekt, trafik, väder eller andra händelser kan leda till villkor skiljer sig från kartresultaten, och du bör planera din rutt därefter. Du måste följa alla skyltar eller meddelanden om din rutt.', 'min', 'tim', 'tim', 'dagar', 'dag', 'ft', 'km', 'mile', 'm', 'fördröjning', 'min'];
                    break;
                //Thai
                case 'th':
                    t = ['มาถึงโดย', 'สัญญาณไฟจราจร', 'การจราจรปานกลาง', 'จราจรหนาแน่น', 'เส้นทางเหล่านี้มีวัตถุประสงค์เพื่อการวางแผนเท่านั้น คุณอาจพบว่าโครงการก่อสร้างการจราจรสภาพอากาศหรือเหตุการณ์อื่น ๆ ที่อาจก่อให้เกิดเงื่อนไขที่แตกต่างจากผลลัพธ์ในแผนที่และคุณควรวางแผนเส้นทางให้เหมาะสม คุณต้องปฏิบัติตามป้ายหรือประกาศเกี่ยวกับเส้นทางของคุณ', 'นาที', 'ชม.', 'ชม.', 'วัน', 'วัน', 'ฟุต', 'กม.', 'ไมล์', 'ม.', 'ความล่าช้า', 'mins'];
                    break;
                //Turkish
                case 'tr':
                    t = ['Tarafından gelmesi', 'Trafik ışıkları', 'Ilımlı trafik', 'Ağır trafik', 'Bu yol tarifleri yalnızca planlama amacıyla bulunmaktadır. O inşaat projeleri, trafik, hava durumu bulabilir ya da başka olayların koşulların harita sonuçlarından farklı olmasına neden olabilir ve buna göre rota planlamalısınız. Rotanızla ilgili tüm işaretlere ve uyarılara uymalısınız.', 'min', 'sa', 'sa', 'günler', 'gün', 'ft', 'km', 'mil', 'm', 'gecikme', 'นาที'];
                    break;
                //Ukrainian
                case 'uk':
                    t = ['прибуття на', 'світлофор', 'помірний трафік', 'Інтенсивний рух', 'Ці напрямки тільки для цілей планування. Ви можете виявити, що проекти будівництва, транспорт, погоду, або інші події можуть викликати умови відрізняються від результатів карти, і ви повинні планувати свій маршрут відповідно. Ви повинні дотримуватися всі знаки або повідомлення щодо вашого маршруту.', 'хв', 'год.', 'год.', 'днів', 'день', 'фут', 'км', 'ми', 'м', 'затримка', 'dk'];
                    break;
                //Vietnamese
                case 'vi':
                    t = ['Đến bằng', 'Đèn giao thông', 'Lưu lượng trung bình', 'Nhiều xe cộ lưu thông', 'Những hướng dẫn này chỉ dành cho mục đích lập kế hoạch. Bạn có thể thấy rằng các dự án xây dựng, giao thông, thời tiết, hoặc các sự kiện khác có thể gây ra điều kiện khác với kết quả bản đồ, và bạn nên có kế hoạch tuyến đường của bạn cho phù hợp. Bạn phải tuân thủ tất cả các dấu hiệu hoặc thông báo về lộ trình của bạn.', 'phút', 'giờ', 'giờ', 'ngày', 'ngày', 'ft', 'km', 'mi', 'm', 'sự chậm trễ', 'хв'];
                    break;
                //English
                case 'en':
                default:
                    t = ['Arrive by', 'Light traffic', 'Moderate traffic', 'Heavy traffic', 'These directions are for planning purposes only. You may find that construction projects, traffic, weather, or other events may cause conditions to differ from the map results, and you should plan your route accordingly. You must obey all signs or notices regarding your route. ', 'min', 'hr', 'hrs', 'days', 'day', 'ft', 'km', 'mi', 'm', 'delay', 'mins'];
                    break;
            }
            var o = {};
            names.forEach(function (val, i) {
                o[names[i]] = t[i];
            });
            return o;
        };
        return Localization;
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
            resources = resources || Localization.getResource('en');
            if (units === 'imperial') { //miles/feet
                //TODO: localize?
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
                    return miles.toLocaleString() + " " + resources.mi;
                }
                return Math.round(distanceMeters * 3.2808399) + " " + resources.ft;
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
                    return km.toLocaleString() + " " + resources.km;
                }
                return distanceMeters + " " + resources.m;
            }
        };
        /**
         * Creates a nicely formatted timespan string.
         * @param timeInSeconds The timespan in seconds.
         * @returns A formatted timespan string.
         */
        Utils.formatTimespan = function (timeInSeconds, resources) {
            var t = [];
            var days = 0, hours = 0, mins = 0;
            resources = resources || Localization.getResource('en');
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
                t.push(days);
                if (days === 1) {
                    t.push(' ' + resources.day);
                }
                else {
                    t.push(' ' + resources.days);
                }
            }
            if (hours > 0) {
                t.push(hours);
                if (hours === 1) {
                    t.push(' ' + resources.hr);
                }
                else {
                    t.push(' ' + resources.hrs);
                }
            }
            if (mins > 0) {
                t.push(mins);
                if (mins === 1) {
                    t.push(' ' + resources.min);
                }
                else {
                    t.push(' ' + resources.mins);
                }
            }
            if (mins === 0 && hours === 0 && days === 0) {
                t.push('0 ' + resources.min);
            }
            return t.join('');
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
    var RouteInsturctionControl = /** @class */ (function () {
        /**
         * A control for rendering route instructions.
         * @param options Options for the control.
         */
        function RouteInsturctionControl(options) {
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
            if (options) {
                this.setOptions(options);
                if (!this._options.langauge) {
                    this._options.langauge = Utils.detectLanguage();
                    this._resources = Localization.getResource(this._options.langauge);
                }
            }
        }
        /**
         * Clears the route instructions from the control.
         */
        RouteInsturctionControl.prototype.clear = function () {
            if (this._control) {
                this._control.remove();
            }
            this._routeResponse = null;
        };
        /**
         * Gets the options of the route instruction control.
         */
        RouteInsturctionControl.prototype.getOptions = function () {
            return Object.assign({}, this._options);
        };
        /**
        * Sets the options of the route instruction control.
        */
        RouteInsturctionControl.prototype.setOptions = function (options) {
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
                if (options.langauge && this._options.langauge !== options.langauge) {
                    this._options.langauge = options.langauge;
                    this._resources = Localization.getResource(options.langauge);
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
        RouteInsturctionControl.prototype.getRoute = function () {
            return this._routeResponse;
        };
        /**
        * Sets the route response information used in the instruction control.
        */
        RouteInsturctionControl.prototype.setRoute = function (routeResponse) {
            this._routeResponse = routeResponse;
            this._renderRoute();
        };
        /**
         * Initialization method for the control which is called when added to a map.
         * @return An HTMLElement to be placed on the map for the control.
         */
        RouteInsturctionControl.prototype.onAdd = function (map, options) {
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
        RouteInsturctionControl.prototype.onRemove = function () {
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
        RouteInsturctionControl.prototype._renderRoute = function () {
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
                    distanceUnits = Utils.detectDistanceUnits((hasIns) ? route.guidance.instructions[0].countryCode : null, this._options.langauge, coord);
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
                    //TODO: add logic.
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
        RouteInsturctionControl.prototype._isWaypoint = function (instruction) {
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
        RouteInsturctionControl.prototype._createInstruction = function (instruction, idx, time, distance, distanceUnits, waypointText) {
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
        RouteInsturctionControl.prototype._styleTaggedMessage = function (msg) {
            return msg.replace(/<(street|roadNumber|exitNumber|signpostText|roundaboutExitNumber)>/gi, '<span class="route-instruction-$1">').
                replace(/<\/(street|roadNumber|exitNumber|signpostText|roundaboutExitNumber)>/gi, '</span>');
        };
        return RouteInsturctionControl;
    }());

    //export { SearchBar } from "./SearchBar";

    var baseControl = /*#__PURE__*/Object.freeze({
        __proto__: null,
        RouteUIManager: RouteUIManager,
        RouteInsturctionControl: RouteInsturctionControl
    });

    var control = Namespace.merge("atlas.control", baseControl);

    exports.control = control;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
