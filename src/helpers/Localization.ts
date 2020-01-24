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

        switch (language.toLowerCase()) {
            //Afrikaans
            case 'af':
                return { arriveBy: 'kom deur', lTraffic: 'lig verkeer', mTraffic: 'matige verkeer', hTraffic: 'Swaar verkeer', rDisclaimer: 'Hierdie rigtings is slegs vir beplanning. Jy mag vind dat bouprojekte, verkeer, weer, of ander gebeurtenisse toestande kan veroorsaak te verskil van die kaart resultate, en jy moet jou roete daarvolgens te beplan. Jy moet al tekens of kennisgewings met betrekking tot jou roete gehoorsaam.', min: 'min', hr: 'hr', hrs: 'hrs', days: 'dae', day: 'day', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'vertraging', mins: 'mins' };
            //Basque
            case 'eu':
                return { arriveBy: 'iritsiko arabera', lTraffic: 'Argi trafikoa', mTraffic: 'Ertaina trafikoa', hTraffic: 'heavy trafikoa', rDisclaimer: 'lagungarri hutsak baino ez dira. eraikuntza-proiektuak, trafikoa, eguraldia hori aurkitu ahal izango duzu, edo beste gertakari baldintza mapa emaitzak datoz eragin ditzakete, eta zure ibilbidea baldintza hauetara egokitu behar. Zure ibilbidea seinale eta jakinarazpen guztiak bete behar duzu.', min: 'min', hr: 'h', hrs: 'h', days: 'egun', day: 'dag', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'atzerapenik', mins: 'دقيقة' };
            //Bulgarian
            case 'bg':
                return { arriveBy: 'Пристига с', lTraffic: 'светофар', mTraffic: 'Умерен трафик', hTraffic: 'Интензивен трафик', rDisclaimer: 'Тези упътвания са само за планиране. Може да откриете, че строителни проекти, трафик, времето, или други причини условия, за да се различават от резултатите на картата, и трябва да планирате маршрута си. Длъжни сте да спазвате всички означения или упътвания, отнасящи се за маршрута.', min: 'мин', hr: 'ч', hrs: 'часа', days: 'дни', day: 'egun', ft: 'фута', km: 'km', mi: 'ми', m: 'm', delay: 'закъснение', mins: 'mins' };
            //Chinese
            case 'zh':
                return { arriveBy: '通过到达', lTraffic: '光通信', mTraffic: '中度交通', hTraffic: '交通繁忙', rDisclaimer: '这些方向仅用于规划的目的。您可能会发现建设项目，交通，天气或其他事件可能导致实际情况与地图结果有所不同，你应该据此规划自己的路线。您必须遵守路线上所有的指示或通知。', min: '分鐘', hr: '小時', hrs: '小時', days: '天', day: 'ден', ft: '英呎', km: '公里', mi: '英哩', m: '公尺', delay: '延迟', mins: 'мин' };
            //Croatian
            case 'hr':
                return { arriveBy: 'Dolazak', lTraffic: 'Slab promet', mTraffic: 'umjereno promet', hTraffic: 'Gust promet', rDisclaimer: 'Ove upute su namijenjene samo u svrhu planiranja. Vi svibanj pronaći da je građevinskih radova, prometa, vremenskih uvjeta ili drugih događaja može uzrokovati da se uvjeti razlikuju od rezultata karte, te da treba planirati rutu. Morate slijediti sve znakove i obavijesti tijekom svog putovanja.', min: 'min', hr: 'HR', hrs: 'h', days: 'dana', day: '天', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'odgoditi', mins: '分钟' };
            //Czech
            case 'cs':
                return { arriveBy: 'Přijet', lTraffic: 'slabý provoz', mTraffic: 'středně silný provoz', hTraffic: 'Silný provoz', rDisclaimer: 'Tyto pokyny jsou určeny pouze pro účely plánování. Možná zjistíte, že stavební projekty, doprava, počasí nebo jiné události mohou způsobit podmínky, které se liší od výsledků na mapě, a vy byste měli plánovat trasu. Musíte se řídit všemi značkami a upozorněními týkající se vaší trasy.', min: 'min', hr: 'hod.', hrs: 'hod.', days: 'dny', day: 'dan', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'zpoždění', mins: 'min' };
            //Danish
            case 'da':
                return { arriveBy: 'Ankomst med', lTraffic: 'Let trafik', mTraffic: 'Moderat trafik', hTraffic: 'Kraftig trafik', rDisclaimer: 'Disse retninger er kun til planlægningsformål. Du kan opleve, at byggeprojekter, trafik, vejr, eller andre begivenheder kan forårsage at forholdene er anderledes end på kortet, og du bør planlægge din rute i overensstemmelse hermed. Du skal overholde alle skilte eller meddelelser vedrørende din rute.', min: 'min', hr: 'time', hrs: 'timer', days: 'dage', day: 'den', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'forsinke', mins: 'min' };
            //Dutch
            case 'nl':
                return { arriveBy: 'Aankomen bij', lTraffic: 'Licht verkeer', mTraffic: 'matig verkeer', hTraffic: 'Druk verkeer', rDisclaimer: 'Deze aanwijzingen dienen slechts ter planning. Misschien vindt u dat wegwerkzaamheden, verkeersdrukte, het weer of andere evenementen kunnen veroorzaken voorwaarden afwijken van de kaart met resultaten, en u moet uw route dienovereenkomstig plannen. U moet alle verkeersborden en aanduidingen op uw route te gehoorzamen.', min: 'min', hr: 'uur', hrs: 'uur', days: 'dagen', day: 'dag', ft: 'vt', km: 'km', mi: 'mijl', m: 'm', delay: 'vertraging', mins: 'mins' };
            //Estonian
            case 'et':
                return { arriveBy: 'Saabumine', lTraffic: 'kergliikluse', mTraffic: 'mõõdukas liiklust', hTraffic: 'Tihe liiklus', rDisclaimer: 'Need juhised on ainult planeerimiseks. Võite avastada, et ehitusprojektid, liiklus, ilm, või muude asjaolude tõttu erinevad tingimused kaardi tulemustest, ja sa peaksid planeerima oma marsruudi vastavalt. Peate järgima kõiki märke ja viitasid oma marsruuti.', min: 'min', hr: 'tund', hrs: 'tunnid', days: 'päeva', day: 'dag', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'viivitus', mins: 'mins' };
            //Finnish
            case 'fi':
                return { arriveBy: 'Saapua', lTraffic: 'Kevyt liikenne', mTraffic: 'kohtalainen liikenne', hTraffic: 'Vilkas liikenne', rDisclaimer: 'Nämä ohjeet ovat vain suuntaa-antavia. Saatat huomata, että rakennustyöt, liikenne, sää tai muut tapahtumat aiheuttavat poikkeamia karttaan, ja sinun pitäisi suunnittelussasi. Noudata kaikkia koskevia kylttejä reittiä.', min: 'min', hr: 'tunti', hrs: 'tuntia', days: 'päivää', day: 'päev', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'viive', mins: 'mins' };
            //French
            case 'fr':
                return { arriveBy: 'Arrive avant', lTraffic: 'trafic léger', mTraffic: 'circulation modérée', hTraffic: 'Circulation dense', rDisclaimer: 'Ces instructions sont pour fins de planification uniquement. Vous pouvez constater que les projets de construction, le trafic, la météo ou d\'autres événements peuvent provoquer des conditions diffèrent des résultats cartographiques et vous devez planifier votre itinéraire en conséquence. Vous devez obéir à tous les signes ou notifications concernant votre itinéraire.', min: 'min', hr: 'h', hrs: 'h', days: 'journées', day: 'päivä', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'retard', mins: 'min' };
            //Galician
            case 'gl':
                return { arriveBy: 'chegar de', lTraffic: 'semáforo', mTraffic: 'tráfico moderado', hTraffic: 'Tránsito intenso', rDisclaimer: 'Estas indicacións son soamente con fins de planificación. Pode considerar que os proxectos de construción, tráfico, meteoroloxía, ou outros eventos que fagan as condicións sexan diferentes dos resultados no mapa, e ten que planificar a súa ruta en consecuencia. Debe cumprir todos os sinais ou notificacións sobre o seu percorrido.', min: 'min', hr: 'h', hrs: 'h', days: 'días', day: 'journée', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'atraso', mins: 'minutes' };
            //German
            case 'de':
                return { arriveBy: 'Ankommen via', lTraffic: 'Ampel', mTraffic: 'mäßiger Verkehr', hTraffic: 'Dichter Verkehr', rDisclaimer: 'Diese Richtungen sind für Planungszwecke nur. Sie können von diesem Bauvorhaben, Verkehr, Wetter finden, oder andere Ereignisse veranlassen können, von den Karten Ergebnissen abweichen, und Sie sollten Ihre Route entsprechend planen. Sie müssen alle Verkehrsschilder oder Hinweise bezüglich Ihrer Route beachten.', min: 'Min.', hr: 'Std.', hrs: 'Std.', days: 'Tage', day: 'día', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'verzögern', mins: 'mins' };
            //Greek
            case 'el':
                return { arriveBy: 'Άφιξη από', lTraffic: 'φανάρι', mTraffic: 'μέτρια κυκλοφορίας', hTraffic: 'Εντονη οδική κυκλοφορία', rDisclaimer: 'Αυτές οι οδηγίες είναι αποκλειστικά για λόγους προγραμματισμού. Μπορείτε να διαπιστώσετε ότι κατασκευαστικών έργων, κυκλοφορίας, καιρού, ή άλλα γεγονότα μπορούν να προκαλέσουν συνθήκες να διαφέρουν από τα αποτελέσματα του χάρτη, και θα πρέπει να σχεδιάσετε τη διαδρομή σας ανάλογα. Θα πρέπει να ακολουθείτε όλα τα σήματα ή ειδοποιήσεις σχετικά με τη διαδρομή σας.', min: 'min', hr: 'ώρα', hrs: 'ώρες', days: 'ημέρες', day: 'Tag', ft: 'ft', km: 'km', mi: 'μι', m: 'Μ', delay: 'καθυστέρηση', mins: 'min' };
            //Hindi
            case 'hi':
                return { arriveBy: 'आएगी', lTraffic: 'हल्का यातायात', mTraffic: 'मध्यम ट्रैफ़िक', hTraffic: 'भारी यातायात', rDisclaimer: 'ये निर्देश केवल योजना के उद्देश्य के लिए हैं। निर्माण प्रोजेक्ट, यातायात, मौसम, या अन्य परिस्थितियां मानचित्र परिणामों से भिन्न हो सकते हैं, और आप उसके अनुसार मार्ग तय करना चाहिए। सभी चिह्नों या अपने मार्ग से संबंधित सूचनाओं का पालन करना होगा।', min: 'मिनट', hr: 'घंटे', hrs: 'घंटे', days: 'दिन', day: 'ημέρα', ft: 'फुट', km: 'किमी', mi: 'मील', m: 'म', delay: 'विलंब', mins: 'λεπτά' };
            //Hungarian
            case 'hu':
                return { arriveBy: 'érkezik', lTraffic: 'Kis forgalom', mTraffic: 'mérsékelt forgalom', hTraffic: 'Nagy forgalom', rDisclaimer: 'Ezek az útvonalak csak tervezési célokra. Előfordulhat, hogy építkezések, közlekedési vagy időjárási, illetve egyéb okok miatt a körülmények eltérnek a térkép eredményeivel meg kell tervezni az útvonalat. Be kell tartania minden vonatkozó jelzéseket és figyelmeztetéseket az útvonalat.', min: 'min', hr: 'óra', hrs: 'óra', days: 'napok', day: 'दिन', ft: 'ft', km: 'km', mi: 'km', m: 'm', delay: 'késleltetés', mins: 'मिनट' };
            //Indonesian
            case 'id':
                return { arriveBy: 'tiba oleh', lTraffic: 'lampu lalu lintas', mTraffic: 'lalu lintas moderat', hTraffic: 'Lalu lintas padat', rDisclaimer: 'arah ini hanya untuk tujuan perencanaan. Anda mungkin menemukan bahwa proyek konstruksi, lalu lintas, cuaca, atau peristiwa lain dapat menyebabkan kondisi jalan berbeda dari hasil peta, dan Anda harus merencanakan rute Anda sesuai. Anda harus patuhi semua tanda atau pemberitahuan mengenai rute Anda.', min: 'min', hr: 'hr', hrs: 'hrs', days: 'hari-hari', day: 'nap', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'menunda', mins: 'mins' };
            //Italian
            case 'it':
                return { arriveBy: 'arrivare in', lTraffic: 'Semaforo', mTraffic: 'traffico moderato', hTraffic: 'Traffico pesante', rDisclaimer: 'Queste indicazioni sono solo a scopo di pianificazione. Potreste scoprire che i progetti di costruzione, traffico, meteo o altri eventi possono causare condizioni differiscano dai risultati delle mappe, e si dovrebbe pianificare il percorso di conseguenza. È necessario rispettare tutti i segnali o notificazione riguardante il percorso.', min: 'min', hr: 'h', hrs: 'ore', days: 'giorni', day: 'hari', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'ritardo', mins: 'menit' };
            //Japanese
            case 'ja':
                return { arriveBy: 'で到着', lTraffic: '光トラフィック', mTraffic: '適度なトラフィック', hTraffic: '交通混雑', rDisclaimer: 'これらの方向は、計画のみを目的としています。あなたは、その建設計画、交通、天候を見つけることができ、または他のイベントは、条件がマップの結果と異なる可能性があり、そしてそれに応じてルートを計画する必要があります。あなたは実際の標識や案内板等に従わなければなりません。', min: '分', hr: '時間', hrs: '時間', days: '日々', day: 'giorno', ft: 'フィート', km: 'キロメートル', mi: 'マイル', m: 'メートル', delay: 'ディレイ', mins: 'minuti' };
            //Kazakh
            case 'kk':
                return { arriveBy: 'келу', lTraffic: 'Жарық трафик', mTraffic: 'Орташа трафик', hTraffic: 'ауыр жол қозғалысы', rDisclaimer: 'Бұл бағыттар тек қана жоспарлау мақсатында болып табылады. Құрылыс жобалары, көлік, ауа райы немесе басқа оқиғалардың карта нәтижелеріндегі шарттардан айырмашылығы әкелуі мүмкін, және сіз тиісінше бағдарды жоспарлауға тиіс екенін таба алады. Бағдарыңыздың барлық белгілері мен ескертулерін бағынуға тиіс.', min: 'мин', hr: 'hr', hrs: 'hrs', days: 'күн', day: '日', ft: 'Ft', km: 'км', mi: 'MI', m: 'м', delay: 'кешіктіру', mins: '分' };
            //Korean
            case 'ko':
                return { arriveBy: '에 의해 도착', lTraffic: '가벼운 교통', mTraffic: '보통 교통', hTraffic: '복잡한 교통', rDisclaimer: '길 찾기는 계획 용으로 만 제공됩니다. 당신은 건설 프로젝트, 교통, 날씨를 찾을 수 있습니다, 또는 다른 이벤트는 상황이지도 결과에서 차이가 발생할 수 있으며, 그에 따라 경로를 계획해야합니다. 당신은 당신의 경로에 대한 모든 표시 또는 고지 사항을 준수해야합니다.', min: '분', hr: '시간', hrs: '시간', days: '일', day: 'күн', ft: '피트', km: 'km', mi: '미', m: '미디엄', delay: '지연', mins: 'мин' };
            //Spanish
            case 'es':
                return { arriveBy: 'Llegar por', lTraffic: 'Tráfico ligero', mTraffic: 'tráfico moderado', hTraffic: 'Tráfico pesado', rDisclaimer: 'Estas indicaciones se ofrecen sólo con fines de planificación. Es posible que los proyectos de construcción, tráfico, el tiempo, u otros acontecimientos puede causar condiciones difieran de los resultados del mapa, y se debe planificar la ruta. Debe obedecer todas las señales o avisos con respecto a su ruta.', min: 'min', hr: 'h', hrs: 'h', days: 'dias', day: '일', ft: 'pie', km: 'km', mi: 'mi', m: 'm', delay: 'retrasar', mins: '분' };
            //Latvian
            case 'lv':
                return { arriveBy: 'Pienāk', lTraffic: 'Neliela satiksme', mTraffic: 'Mērens satiksme', hTraffic: 'dzīva satiksme', rDisclaimer: 'Šie virzieni ir tikai plānošanas nolūkiem. Jūs varat atrast, ka būvniecības darbi, satiksme, laika ziņas, vai citi notikumi var radīt apstākļus, kas atšķiras no kartes rezultātiem, un jums vajadzētu plānot savu maršrutu. Jums ir jāievēro visas zīmes vai paziņojumi par jūsu maršrutu.', min: 'min', hr: 'st.', hrs: 'stundas', days: 'dienas', day: 'día', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'atlikšana', mins: 'minutos' };
            //Lithuanian
            case 'lt':
                return { arriveBy: 'atvykti', lTraffic: 'šviesos srautas', mTraffic: 'vidutinio eismo', hTraffic: 'Didelis eismas', rDisclaimer: 'Šie nurodymai yra tik planavimo tikslais. Galite pastebėti, kad statybos projektų, eismas, oras, ar kiti renginiai gali sukelti sąlygos skiriasi nuo žemėlapio rezultatus, ir jums turėtų planuoti savo maršrutą. Jūs turite pakluskite visiems ženklams ar pranešimus dėl jūsų maršrute.', min: 'minutės', hr: 'val.', hrs: 'val.', days: 'dienų', day: 'diena', ft: 'pėdų', km: 'km', mi: 'mi', m: 'm', delay: 'delsimas', mins: 'min' };
            //Malay
            case 'ms':
                return { arriveBy: 'tiba dengan', lTraffic: 'trafik lancar', mTraffic: 'trafik sederhana', hTraffic: 'Lalu lintas yang sesak', rDisclaimer: 'Arahan ini adalah untuk tujuan perancangan sahaja. Anda mungkin mendapati bahawa projek-projek pembinaan, lalu lintas, cuaca, atau peristiwa lain boleh menyebabkan keadaan berbeza daripada hasil peta, dan anda perlu merancang laluan anda dengan sewajarnya. Anda mesti patuhi semua papan tanda dan notis di jalan anda.', min: 'min', hr: 'jam', hrs: 'jam', days: 'hari', day: 'diena', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'kelewatan', mins: 'min' };
            //Norwegian
            case 'nb':
                return { arriveBy: 'Ankomst av', lTraffic: 'lys trafikk', mTraffic: 'moderat trafikk', hTraffic: 'Tett trafikk', rDisclaimer: 'Disse retningene er for planleggingsformål. Det kan hende at anleggsarbeid, trafikk, vær eller andre hendelser kan føre til at forholdene avviker fra kart resultater, og du bør planlegge ruten tilsvarende. Du må overholde alle skilt eller meldinger om ruten din.', min: 'min', hr: 'time', hrs: 'timer', days: 'dager', day: 'hari', ft: 'fot', km: 'km', mi: 'mi', m: 'm', delay: 'forsinkelse', mins: 'minit' };
            //Polish
            case 'pl':
                return { arriveBy: 'przyjazd', lTraffic: 'Sygnalizacja świetlna', mTraffic: 'umiarkowany ruch', hTraffic: 'Duży ruch', rDisclaimer: 'Te kierunki są wyłącznie w celu planowania. Może się okazać, że projekty budowlane, ruchu, pogoda, lub inne zdarzenia mogą spowodować warunki, które różnią się od wyników map i należy zaplanować trasę odpowiednio. Musisz przestrzegać wszystkich znaków i informacji dotyczących trasy.', min: 'min', hr: 'godz.', hrs: 'godz.', days: 'dni', day: 'dag', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'opóźnienie', mins: 'mins' };
            //Portuguese
            case 'pt':
                return { arriveBy: 'chegar de', lTraffic: 'Semáforo', mTraffic: 'tráfego moderado', hTraffic: 'Trafégo pesado', rDisclaimer: 'Essas indicações são apenas para fins de planejamento. Você pode achar que os projetos de construção, tráfego, meteorologia, ou outros eventos que façam as condições sejam diferentes dos resultados no mapa, e você deve planejar a sua rota em conformidade. Você deve obedecer todos os sinais ou notificações sobre o seu percurso.', min: 'min', hr: 'h', hrs: 'h', days: 'dias', day: 'dzień', ft: 'pés', km: 'km', mi: 'mi', m: 'm', delay: 'demora', mins: 'min' };
            //Romanian
            case 'ro':
                return { arriveBy: 'Sosire de', lTraffic: 'trafic ușor', mTraffic: 'trafic moderat', hTraffic: 'Trafic greu', rDisclaimer: 'Aceste instrucțiuni sunt doar pentru scopuri de planificare. Puteți găsi că proiectele de construcție, traficul, vremea sau alte evenimente pot determina condițiile să difere de rezultatele oferite de hărți, și ar trebui să planificați traseul în consecință. Trebuie să respectați toate semnele și notificările privind acest traseu.', min: 'min', hr: 'oră', hrs: 'ore', days: 'zi', day: 'dia', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'întârziere', mins: 'mins' };
            //Russian
            case 'ru':
                return { arriveBy: 'Явиться к', lTraffic: 'светофор', mTraffic: 'Умеренный трафик', hTraffic: 'интенсивное движение', rDisclaimer: 'Эти директивы предназначены только для целей планирования. Вы можете обнаружить, что проекты строительства, транспорт, погоду, или другие события могут вызвать условия отличаются от результатов карты, и вы должны планировать свой маршрут соответственно. Вы должны соблюдать все знаки или уведомления относительно вашего маршрута.', min: 'мин', hr: 'ч', hrs: 'ч', days: 'дней', day: 'zi', ft: 'фт.', km: 'км', mi: 'миль', m: 'м', delay: 'задержка', mins: 'min' };
            //Serbian
            case 'sr':
                return { arriveBy: 'Стижу', lTraffic: 'семафор', mTraffic: 'Средње саобраћај', hTraffic: 'Густ саобраћај', rDisclaimer: 'Ови правци су само за потребе планирања. Можете пронаћи ту грађевинских пројеката, саобраћаја, време, или други догађаји могу изазвати услови да се разликује од карте резултата, а требало би да у складу са тим планирати свој пут. Морате поштовати све знакове или обавештења у вези Вашег пута.', min: 'музику', hr: 'ч', hrs: 'ч', days: 'дани', day: 'день', ft: 'феат', km: 'км на', mi: 'ми', m: 'м', delay: 'кашњење', mins: 'мин' };
            //Slovak
            case 'sk':
                return { arriveBy: 'pricestovať', lTraffic: 'slabý prevádzka', mTraffic: 'stredne silný prevádzka', hTraffic: 'Hustá premávka', rDisclaimer: 'Tieto pokyny sú určené len na účely plánovania. Možno zistíte, že stavebné projekty, doprava, počasie alebo iné udalosti môžu spôsobiť podmienky, ktoré sa líšia od výsledkov na mape, a vy by ste mali plánovať trasu. Musíte sa riadiť všetkými značkami a upozorneniami týkajúce sa vašej trasy.', min: 'min', hr: 'h', hrs: 'h', days: 'dni', day: 'дан', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'oneskorenie', mins: 'мин' };
            //Slovenian
            case 'sl':
                return { arriveBy: 'Prihod, ki ga', lTraffic: 'semaforja', mTraffic: 'zmerna promet', hTraffic: 'Gost promet', rDisclaimer: 'Ta navodila so samo za namene načrtovanja. Lahko se zgodi, da se gradbeni projekti, promet, vreme, ali drugi dogodki lahko povzročijo pogoji, ki se razlikujejo od rezultatov zemljevida, in bi morali zato pri načrtovanju poti. Spoštovati morate o vaši poti vse znake ali obvestila.', min: 'min', hr: 'h', hrs: 'h', days: 'dnevi', day: 'deň', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'zamudo', mins: 'min' };
            //Swedish
            case 'sv':
                return { arriveBy: 'anländer med', lTraffic: 'lätt trafik', mTraffic: 'måttlig trafik', hTraffic: 'Tung trafik', rDisclaimer: 'Dessa riktningar är för planeringsändamål. Du kanske upptäcker att byggprojekt, trafik, väder eller andra händelser kan leda till villkor skiljer sig från kartresultaten, och du bör planera din rutt därefter. Du måste följa alla skyltar eller meddelanden om din rutt.', min: 'min', hr: 'tim', hrs: 'tim', days: 'dagar', day: 'dan', ft: 'ft', km: 'km', mi: 'mile', m: 'm', delay: 'fördröjning', mins: 'min' };
            //Thai
            case 'th':
                return { arriveBy: 'มาถึงโดย', lTraffic: 'สัญญาณไฟจราจร', mTraffic: 'การจราจรปานกลาง', hTraffic: 'จราจรหนาแน่น', rDisclaimer: 'เส้นทางเหล่านี้มีวัตถุประสงค์เพื่อการวางแผนเท่านั้น คุณอาจพบว่าโครงการก่อสร้างการจราจรสภาพอากาศหรือเหตุการณ์อื่น ๆ ที่อาจก่อให้เกิดเงื่อนไขที่แตกต่างจากผลลัพธ์ในแผนที่และคุณควรวางแผนเส้นทางให้เหมาะสม คุณต้องปฏิบัติตามป้ายหรือประกาศเกี่ยวกับเส้นทางของคุณ', min: 'นาที', hr: 'ชม.', hrs: 'ชม.', days: 'วัน', day: 'dag', ft: 'ฟุต', km: 'กม.', mi: 'ไมล์', m: 'ม.', delay: 'ความล่าช้า', mins: 'mins' };
            //Turkish
            case 'tr':
                return { arriveBy: 'Tarafından gelmesi', lTraffic: 'Trafik ışıkları', mTraffic: 'Ilımlı trafik', hTraffic: 'Ağır trafik', rDisclaimer: 'Bu yol tarifleri yalnızca planlama amacıyla bulunmaktadır. O inşaat projeleri, trafik, hava durumu bulabilir ya da başka olayların koşulların harita sonuçlarından farklı olmasına neden olabilir ve buna göre rota planlamalısınız. Rotanızla ilgili tüm işaretlere ve uyarılara uymalısınız.', min: 'min', hr: 'sa', hrs: 'sa', days: 'günler', day: 'วัน', ft: 'ft', km: 'km', mi: 'mil', m: 'm', delay: 'gecikme', mins: 'นาที' };
            //Ukrainian
            case 'uk':
                return { arriveBy: 'прибуття на', lTraffic: 'світлофор', mTraffic: 'помірний трафік', hTraffic: 'Інтенсивний рух', rDisclaimer: 'Ці напрямки тільки для цілей планування. Ви можете виявити, що проекти будівництва, транспорт, погоду, або інші події можуть викликати умови відрізняються від результатів карти, і ви повинні планувати свій маршрут відповідно. Ви повинні дотримуватися всі знаки або повідомлення щодо вашого маршруту.', min: 'хв', hr: 'год.', hrs: 'год.', days: 'днів', day: 'gün', ft: 'фут', km: 'км', mi: 'ми', m: 'м', delay: 'затримка', mins: 'dk' };
            //Vietnamese
            case 'vi':
                return { arriveBy: 'Đến bằng', lTraffic: 'Đèn giao thông', mTraffic: 'Lưu lượng trung bình', hTraffic: 'Nhiều xe cộ lưu thông', rDisclaimer: 'Những hướng dẫn này chỉ dành cho mục đích lập kế hoạch. Bạn có thể thấy rằng các dự án xây dựng, giao thông, thời tiết, hoặc các sự kiện khác có thể gây ra điều kiện khác với kết quả bản đồ, và bạn nên có kế hoạch tuyến đường của bạn cho phù hợp. Bạn phải tuân thủ tất cả các dấu hiệu hoặc thông báo về lộ trình của bạn.', min: 'phút', hr: 'giờ', hrs: 'giờ', days: 'ngày', day: 'день', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'sự chậm trễ', mins: 'хв' };
            //English
            case 'en':
            default:
                return { arriveBy: 'Arrive by', lTraffic: 'Light traffic', mTraffic: 'Moderate traffic', hTraffic: 'Heavy traffic', rDisclaimer: 'These directions are for planning purposes only. You may find that construction projects, traffic, weather, or other events may cause conditions to differ from the map results, and you should plan your route accordingly. You must obey all signs or notices regarding your route. ', min: 'min', hr: 'hr', hrs: 'hrs', days: 'days', day: 'day', ft: 'ft', km: 'km', mi: 'mi', m: 'm', delay: 'delay', mins: 'mins' };
        }
    }
}