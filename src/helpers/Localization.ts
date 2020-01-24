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
    public static getResource(language?: string): Resource {
        //If no language is specified, try to detect one.
        if (!language) {
            language = Utils.detectLanguage(language);
        }

        if (language && language.indexOf('-') > 0) {
            language = language.substring(0, language.indexOf('-'));
        }

        var names = ['arriveBy', 'lTraffic', 'mTraffic', 'hTraffic', 'rDisclaimer', 'min', 'hr', 'hrs', 'days', 'day', 'ft', 'km', 'mi', 'm', 'delay', 'mins'];
        var t: string[];

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

        var o: any = {};

        names.forEach((val, i) => {
            o[names[i]] = t[i];
        });

        return o;
    }
}