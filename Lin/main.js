/* main.js — Lin Tourism Multi-language support & Interactions */

const translations = {
  sq: {
    nav_history: "Historia",
    nav_attractions: "Atraksionet",
    nav_activities: "Aktivitetet",
    nav_gallery: "Galeria",
    nav_food: "Gastronomia",
    nav_info: "Informacion",
    hero_tag: "Pogradec · Shqipëri",
    hero_title: "Mirësevini në Lin",
    hero_sub: "Një perlë e qetë buzë Liqenit të Ohrit",
    btn_explore: "Eksploroni Lin",
    btn_history: "Zbuloni Historinë",
    strip_years: "Vjet Histori",
    strip_lake: "Lartësia e Liqenit",
    strip_heritage: "Trashëgimi Botërore",
    section_label_history: "Historia",
    history_title: "Një Fshat me Rrënjë Mijëravjeçare",
    history_lead: "Lin është një nga vendbanimet më të vjetra të bregut të Liqenit të Ohrit, me gjurmë civilizimi që kthehen deri në epokën antike.",
    tl1_title: "Bazilika Paleokristiane",
    tl1_text: "Kisha e lashtë me mozaikët e famshëm të dyshemesë — një mrekulli e artit paleokristian në Ballkan, e zbuluar nga arkeologët gjatë shekullit XX.",
    tl2_title: "Qendra Peshkimi & Tregtie",
    tl2_text: "Lin shërbeu si port i rëndësishëm tregtar dhe qendër peshkimi në bregdetin lindor të Shqipërisë, duke lidhur kulturat e dy anëve të liqenit.",
    tl3_title: "Destinacion i Zbuluar",
    tl3_text: "Lin po bëhet gjithnjë e më shumë një destinacion europian 'hidden gem', me vizitorë nga e gjithë bota që vijnë për qetësinë, historinë dhe bukurinë e paprekur.",
    mosaic_label: "Trashëgimia",
    mosaic_title: "Mozaikët e Bazilikës",
    mosaic_desc: "Dyshemeja mozaik e bazilikës paleokristiane është një nga gjetjet më të rralla arkeologjike në Shqipëri — me motive gjeometrike dhe figurative që tregojnë lulëzimin e artit kristian në këtë cep të Ballkanit.",
    section_label_attr: "Atraksionet",
    attr_title: "Zbuloni Vendet e Bukura",
    attr_tag_heritage: "Trashëgimi",
    attr_tag_nature: "Natyrë",
    attr_tag_view: "Pamje",
    attr_tag_village: "Fshat",
    attr_tag_panorama: "Panoramë",
    attr_tag_water: "Ujë",
    attr1_title: "Bazilika Paleokristiane",
    attr1_desc: "Gërmadhat e shenjta me mozaikë të shekullit V-VI — zemra shpirtërore e Linit.",
    attr2_title: "Liqeni i Ohrit",
    attr2_desc: "Ujërat kristal, pellg natyror UNESCO — njëri nga liqenet më të vjetër në botë.",
    attr3_title: "Perëndimi i Diellit",
    attr3_desc: "Nga brigjet e Linit shihet ndoshta perëndimi i diellit më i bukur i gjithë Ballkanit.",
    attr4_title: "Rrugica të Gurta",
    attr4_desc: "Labirinti i rrugicave me kalldrëm — çdo kthesë zbulon histori dhe arkitekturë tradicionale.",
    attr5_title: "Pikat Panoramike",
    attr5_desc: "Majat mbi fshat ofrojnë pamje 360° të liqenit, maleve maqedonase dhe tokave shqiptare.",
    attr6_title: "Bregu i Liqenit",
    attr6_desc: "Guri i bardhë dhe ujërat e tejdukshme — perfecte për not, relaksim dhe fotografi.",
    section_label_act: "Aktivitetet",
    act_title: "Çfarë mund të bëni në Lin",
    act1: "Ekskursione me Varkë",
    act1d: "Lundroni nëpër ujërat kristal të Ohrit",
    act2: "Not në Liqen",
    act2d: "Ujërat e pastër me vizibilitet deri 20m",
    act3: "Hiking & Trekking",
    act3d: "Shtigje nëpër male me pamje mahnitëse",
    act4: "Fotografi",
    act4d: "Çdo qoshe është një fotografi e gatshme",
    act5: "Ushqim Lokal",
    act5d: "Shijo kuzhinën autentike shqiptare",
    act6: "Çiklizëm",
    act6d: "Rrugë bregdetare përgjatë liqenit",
    section_label_gallery: "Galeria",
    gallery_title: "Lin Nëpërmjet Objektivit",
    section_label_map: "Harta",
    map_title: "Gjeni Rrugën Tuaj",
    leg_attractions: "Atraksione",
    leg_restaurants: "Restorante",
    leg_views: "Pamje Panoramike",
    section_label_food: "Gastronomia",
    food_title: "Shijet e Linit",
    food_lead: "Kuzhinë e pastër, produkte lokale, peshk nga liqeni — një eksperiencë kulinarike e vërtetë mesdhetare.",
    food1: "Koran i Pjekur",
    food1d: "Peshku i lashtë i Ohrit, i pjekur ngadalë mbi zjarr druri me barishte lokale.",
    food2: "Gjellë Tradicionale",
    food2d: "Tavë kosi, fergesa dhe pjata autentike shqiptare me produkte nga kopshtet lokale.",
    food3: "Meze Liqeni",
    food3d: "Shkorje peshku, turshi shtëpiake, djathë brinxhol dhe bukë misri e freskët.",
    food_signature: "Specialiteti i Vendit",
    food_local: "Gjellë Lokale",
    food_meze: "Meze",
    sunset_quote: "Kur dielli perëndon mbi Liqenin e Ohrit nga brigjet e Linit, koha ndalet — dhe e kupton pse disa vende janë të shenjta.",
    sunset_attr: "— Vizitor nga Italia, 2023",
    section_label_info: "Informacion",
    info_title: "Informacion Turistik",
    info1: "Parkimi",
    info1d: "Parking i lirë pranë hyrjes së fshatit. Rekomandohet ardhja me mjet personal ose taxi nga Pogradeci.",
    info2: "Sezoni më i Mirë",
    info2d: "Maj–Tetor për mot ideal. Vera (Qershor–Gusht) për not. Pranvera për lule e qetësi absolute.",
    info3: "Si të Arrini",
    info3d: "18 km nga Pogradeci. Autobusë nga Tirana (4h), Korça (1.5h). Aeroporti më i afërt: Korça ose Tiranë.",
    info4: "Klima",
    info4d: "Mesdhetare kontinentale. Verë e ngrohtë 25–32°C, dimër i butë. Lagështi e ulët, ajër i pastër malorë.",
    info5: "Vende Afër",
    info5d: "Pogradec (18km), Ohrid/Maqedoni (40km), Korça (55km), Berati (160km).",
    info6: "Këshilla",
    info6d: "Mbani ujë. Vishni këpucë të rehatshme për rrugica. Respektoni vendet historike. Fotografoni lirshëm!",
    footer_tag: "Liqeni i Ohrit · Pogradec · Shqipëri",
    footer_copy: "Të gjitha të drejtat e rezervuara."
  },
  en: {
    nav_history: "History",
    nav_attractions: "Attractions",
    nav_activities: "Activities",
    nav_gallery: "Gallery",
    nav_food: "Gastronomy",
    nav_info: "Information",
    hero_tag: "Pogradec · Albania",
    hero_title: "Welcome to Lin",
    hero_sub: "A serene pearl on the shores of Lake Ohrid",
    btn_explore: "Explore Lin",
    btn_history: "Discover History",
    strip_years: "Years of History",
    strip_lake: "Lake Altitude",
    strip_heritage: "World Heritage",
    section_label_history: "History",
    history_title: "A Village with Millennial Roots",
    history_lead: "Lin is one of the oldest settlements on the shores of Lake Ohrid, with traces of civilization dating back to ancient times.",
    tl1_title: "Early Christian Basilica",
    tl1_text: "The ancient church with its famous floor mosaics — a wonder of Early Christian art in the Balkans, discovered by archaeologists in the 20th century.",
    tl2_title: "Fishing & Trade Center",
    tl2_text: "Lin served as an important trading port and fishing center on Albania's eastern shore, connecting cultures from both sides of the lake.",
    tl3_title: "A Discovered Destination",
    tl3_text: "Lin is increasingly becoming a European 'hidden gem', with visitors from all over the world coming for its tranquility, history, and untouched beauty.",
    mosaic_label: "Heritage",
    mosaic_title: "The Basilica Mosaics",
    mosaic_desc: "The mosaic floor of the early Christian basilica is one of Albania's rarest archaeological finds — featuring geometric and figurative motifs from the flourishing of Christian art.",
    section_label_attr: "Attractions",
    attr_title: "Discover Beautiful Places",
    attr_tag_heritage: "Heritage",
    attr_tag_nature: "Nature",
    attr_tag_view: "View",
    attr_tag_village: "Village",
    attr_tag_panorama: "Panorama",
    attr_tag_water: "Water",
    attr1_title: "Early Christian Basilica",
    attr1_desc: "Sacred ruins with 5th-6th century mosaics — the spiritual heart of Lin.",
    attr2_title: "Lake Ohrid",
    attr2_desc: "Crystal waters, UNESCO natural reserve — one of the oldest lakes in the world.",
    attr3_title: "Sunset Views",
    attr3_desc: "From Lin's shores you can witness perhaps the most beautiful sunset in all the Balkans.",
    attr4_title: "Stone-paved Streets",
    attr4_desc: "The cobblestone labyrinth — every turn reveals history and traditional architecture.",
    attr5_title: "Panoramic Points",
    attr5_desc: "The peaks above the village offer 360° views of the lake, Macedonian mountains, and Albanian lands.",
    attr6_title: "Lake Shore",
    attr6_desc: "White rocks and crystal-clear waters — perfect for swimming, relaxation, and photography.",
    section_label_act: "Activities",
    act_title: "What to do in Lin",
    act1: "Boat Excursions",
    act1d: "Sail through Ohrid's crystal waters",
    act2: "Lake Swimming",
    act2d: "Pure waters with visibility up to 20m",
    act3: "Hiking & Trekking",
    act3d: "Mountain trails with breathtaking views",
    act4: "Photography",
    act4d: "Every corner is a photo waiting to be taken",
    act5: "Local Food",
    act5d: "Enjoy authentic Albanian cuisine",
    act6: "Cycling",
    act6d: "Coastal roads along the lake",
    section_label_gallery: "Gallery",
    gallery_title: "Lin Through the Lens",
    section_label_map: "Map",
    map_title: "Find Your Way",
    leg_attractions: "Attractions",
    leg_restaurants: "Restaurants",
    leg_views: "Panoramic Views",
    section_label_food: "Gastronomy",
    food_title: "The Flavors of Lin",
    food_lead: "Clean cuisine, local produce, freshwater fish — a true Mediterranean culinary experience.",
    food1: "Grilled Koran Fish",
    food1d: "Ohrid's ancient fish, slowly grilled over wood fire with local herbs.",
    food2: "Traditional Dishes",
    food2d: "Tavë kosi, fergesa and authentic Albanian plates with garden-fresh produce.",
    food3: "Lake Meze",
    food3d: "Smoked fish, homemade pickles, white cheese, and fresh cornbread.",
    food_signature: "Local Specialty",
    food_local: "Local Dish",
    food_meze: "Meze",
    sunset_quote: "When the sun sets over Lake Ohrid from the shores of Lin, time stands still — and you understand why some places are sacred.",
    sunset_attr: "— Visitor from Italy, 2023",
    section_label_info: "Information",
    info_title: "Tourist Information",
    info1: "Parking",
    info1d: "Free parking near the village entrance. Recommend arriving by car or taxi from Pogradec.",
    info2: "Best Season",
    info2d: "May–October for ideal weather. Summer (June–August) for swimming. Spring for flowers and absolute tranquility.",
    info3: "How to Arrive",
    info3d: "18 km from Pogradec. Buses from Tirana (4h), Korça (1.5h). Nearest airports: Korça or Tirana.",
    info4: "Climate",
    info4d: "Continental Mediterranean. Warm summers 25–32°C, mild winters. Low humidity, clean mountain air.",
    info5: "Nearby Places",
    info5d: "Pogradec (18km), Ohrid/North Macedonia (40km), Korça (55km), Berat (160km).",
    info6: "Tips",
    info6d: "Carry water. Wear comfortable shoes for cobblestones. Respect historic sites. Photograph freely!",
    footer_tag: "Lake Ohrid · Pogradec · Albania",
    footer_copy: "All rights reserved."
  },
  de: {
    nav_history: "Geschichte",
    nav_attractions: "Sehenswürdigkeiten",
    nav_activities: "Aktivitäten",
    nav_gallery: "Galerie",
    nav_food: "Gastronomie",
    nav_info: "Information",
    hero_tag: "Pogradec · Albanien",
    hero_title: "Willkommen in Lin",
    hero_sub: "Eine ruhige Perle am Ufer des Ohridsees",
    btn_explore: "Lin erkunden",
    btn_history: "Geschichte entdecken",
    strip_years: "Jahre Geschichte",
    strip_lake: "Seehöhe",
    strip_heritage: "Welterbe",
    section_label_history: "Geschichte",
    history_title: "Ein Dorf mit jahrtausendealten Wurzeln",
    history_lead: "Lin ist eine der ältesten Siedlungen am Ufer des Ohridsees, mit Spuren der Zivilisation bis in die Antike.",
    tl1_title: "Frühchristliche Basilika",
    tl1_text: "Die alte Kirche mit den berühmten Bodenmosaiken — ein Wunder frühchristlicher Kunst auf dem Balkan.",
    tl2_title: "Fischerei & Handelszentrum",
    tl2_text: "Lin diente als wichtiger Handelshafen und Fischereizentrum an Albaniens Ostküste.",
    tl3_title: "Entdecktes Reiseziel",
    tl3_text: "Lin wird zunehmend zu einem europäischen 'Hidden Gem', mit Besuchern aus aller Welt.",
    mosaic_label: "Erbe",
    mosaic_title: "Die Basilika-Mosaike",
    mosaic_desc: "Der Mosaikboden der frühchristlichen Basilika ist einer der seltensten archäologischen Funde Albaniens.",
    section_label_attr: "Sehenswürdigkeiten",
    attr_title: "Schöne Orte entdecken",
    attr_tag_heritage: "Erbe",
    attr_tag_nature: "Natur",
    attr_tag_view: "Aussicht",
    attr_tag_village: "Dorf",
    attr_tag_panorama: "Panorama",
    attr_tag_water: "Wasser",
    attr1_title: "Frühchristliche Basilika",
    attr1_desc: "Heilige Ruinen mit Mosaiken aus dem 5.–6. Jh. — das spirituelle Herz von Lin.",
    attr2_title: "Ohridsee",
    attr2_desc: "Kristallklares Wasser, UNESCO-Naturreservat — einer der ältesten Seen der Welt.",
    attr3_title: "Sonnenuntergang",
    attr3_desc: "Von Lins Ufern aus erlebt man vielleicht den schönsten Sonnenuntergang des Balkans.",
    attr4_title: "Kopfsteinpflasterstraßen",
    attr4_desc: "Das Kopfsteinpflaster-Labyrinth — jede Kurve enthüllt Geschichte und traditionelle Architektur.",
    attr5_title: "Panoramapunkte",
    attr5_desc: "Die Gipfel über dem Dorf bieten 360°-Aussichten auf den See und die mazedonischen Berge.",
    attr6_title: "Seeufer",
    attr6_desc: "Weißer Fels und kristallklares Wasser — perfekt zum Schwimmen, Entspannen und Fotografieren.",
    section_label_act: "Aktivitäten",
    act_title: "Was Sie in Lin unternehmen können",
    act1: "Bootsausflüge",
    act1d: "Segeln auf dem kristallklaren Ohridsee",
    act2: "Schwimmen im See",
    act2d: "Reines Wasser mit bis zu 20m Sichttiefe",
    act3: "Wandern & Trekking",
    act3d: "Bergpfade mit atemberaubender Aussicht",
    act4: "Fotografie",
    act4d: "Jede Ecke ist ein fertiges Foto",
    act5: "Lokale Küche",
    act5d: "Authentische albanische Küche genießen",
    act6: "Radfahren",
    act6d: "Küstenstraßen entlang des Sees",
    section_label_gallery: "Galerie",
    gallery_title: "Lin durch die Linse",
    section_label_map: "Karte",
    map_title: "Finden Sie Ihren Weg",
    leg_attractions: "Sehenswürdigkeiten",
    leg_restaurants: "Restaurants",
    leg_views: "Panoramaaussichten",
    section_label_food: "Gastronomie",
    food_title: "Die Aromen von Lin",
    food_lead: "Frische Küche, lokale Produkte, Süßwasserfisch — ein echtes mediterranes Kulinarik-Erlebnis.",
    food1: "Gegrillter Koran-Fisch",
    food1d: "Der uralte Fisch aus dem Ohridsee, langsam über Holzfeuer mit lokalen Kräutern gegrillt.",
    food2: "Traditionelle Gerichte",
    food2d: "Tavë kosi, Fergesa und authentische albanische Speisen mit gartenfrischen Zutaten.",
    food3: "See-Meze",
    food3d: "Geräucherter Fisch, hausgemachtes Eingemachtes, Weißkäse und frisches Maisbrot.",
    food_signature: "Hausspezialität",
    food_local: "Lokales Gericht",
    food_meze: "Meze",
    sunset_quote: "Wenn die Sonne über dem Ohridsee von Lins Ufern untergeht, steht die Zeit still — und man versteht, warum manche Orte heilig sind.",
    sunset_attr: "— Besucher aus Italien, 2023",
    section_label_info: "Information",
    info_title: "Touristeninformation",
    info1: "Parken",
    info1d: "Kostenloser Parkplatz in Dorfnähe. Empfehlung: Anreise mit eigenem Fahrzeug oder Taxi aus Pogradec.",
    info2: "Beste Reisezeit",
    info2d: "Mai–Oktober für ideales Wetter. Sommer (Juni–August) zum Schwimmen. Frühling für Blumen und Ruhe.",
    info3: "Anreise",
    info3d: "18 km von Pogradec. Busse aus Tirana (4h), Korça (1,5h). Nächste Flughäfen: Korça oder Tirana.",
    info4: "Klima",
    info4d: "Kontinental-mediterran. Warme Sommer 25–32°C, milde Winter. Geringe Luftfeuchtigkeit, reine Bergluft.",
    info5: "Nahe gelegene Orte",
    info5d: "Pogradec (18km), Ohrid/Nordmazedonien (40km), Korça (55km), Berat (160km).",
    info6: "Tipps",
    info6d: "Wasser mitbringen. Bequeme Schuhe für Kopfsteinpflaster. Historische Stätten respektieren.",
    footer_tag: "Ohridsee · Pogradec · Albanien",
    footer_copy: "Alle Rechte vorbehalten."
  },
  fr: {
    nav_history: "Histoire",
    nav_attractions: "Attractions",
    nav_activities: "Activités",
    nav_gallery: "Galerie",
    nav_food: "Gastronomie",
    nav_info: "Informations",
    hero_tag: "Pogradec · Albanie",
    hero_title: "Bienvenue à Lin",
    hero_sub: "Une perle sereine sur les rives du lac d'Ohrid",
    btn_explore: "Explorer Lin",
    btn_history: "Découvrir l'Histoire",
    strip_years: "Ans d'Histoire",
    strip_lake: "Altitude du Lac",
    strip_heritage: "Patrimoine Mondial",
    section_label_history: "Histoire",
    history_title: "Un Village aux Racines Millénaires",
    history_lead: "Lin est l'un des établissements les plus anciens du lac d'Ohrid, avec des traces de civilisation remontant à l'Antiquité.",
    tl1_title: "Basilique Paléochrétienne",
    tl1_text: "L'ancienne église avec ses célèbres mosaïques au sol — une merveille de l'art paléochrétien dans les Balkans.",
    tl2_title: "Centre de Pêche & Commerce",
    tl2_text: "Lin a servi de port commercial important et de centre de pêche sur la côte orientale de l'Albanie.",
    tl3_title: "Destination Révélée",
    tl3_text: "Lin devient de plus en plus un 'hidden gem' européen, avec des visiteurs du monde entier.",
    mosaic_label: "Patrimoine",
    mosaic_title: "Les Mosaïques de la Basilique",
    mosaic_desc: "Le sol en mosaïque de la basilique paléochrétienne est l'une des découvertes archéologiques les plus rares d'Albanie.",
    section_label_attr: "Attractions",
    attr_title: "Découvrez de Beaux Endroits",
    attr_tag_heritage: "Patrimoine",
    attr_tag_nature: "Nature",
    attr_tag_view: "Vue",
    attr_tag_village: "Village",
    attr_tag_panorama: "Panorama",
    attr_tag_water: "Eau",
    attr1_title: "Basilique Paléochrétienne",
    attr1_desc: "Ruines sacrées avec mosaïques du Ve–VIe siècle — le cœur spirituel de Lin.",
    attr2_title: "Lac d'Ohrid",
    attr2_desc: "Eaux cristallines, réserve naturelle UNESCO — l'un des plus anciens lacs du monde.",
    attr3_title: "Couchers de Soleil",
    attr3_desc: "Depuis les rives de Lin, on voit peut-être le plus beau coucher de soleil des Balkans.",
    attr4_title: "Ruelles Pavées",
    attr4_desc: "Le labyrinthe de ruelles en pavés — chaque tournant révèle histoire et architecture traditionnelle.",
    attr5_title: "Points Panoramiques",
    attr5_desc: "Les sommets au-dessus du village offrent des vues à 360° sur le lac et les montagnes macédoniennes.",
    attr6_title: "Rive du Lac",
    attr6_desc: "Rochers blancs et eaux transparentes — parfaits pour la baignade, la détente et la photographie.",
    section_label_act: "Activités",
    act_title: "Que faire à Lin",
    act1: "Excursions en Bateau",
    act1d: "Naviguez sur les eaux cristallines d'Ohrid",
    act2: "Baignade dans le Lac",
    act2d: "Eaux pures avec visibilité jusqu'à 20m",
    act3: "Randonnée & Trekking",
    act3d: "Sentiers montagnards avec vues époustouflantes",
    act4: "Photographie",
    act4d: "Chaque coin est une photo prête à être prise",
    act5: "Cuisine Locale",
    act5d: "Dégustez la cuisine albanaise authentique",
    act6: "Cyclisme",
    act6d: "Routes côtières le long du lac",
    section_label_gallery: "Galerie",
    gallery_title: "Lin à Travers l'Objectif",
    section_label_map: "Carte",
    map_title: "Trouvez Votre Chemin",
    leg_attractions: "Attractions",
    leg_restaurants: "Restaurants",
    leg_views: "Vues Panoramiques",
    section_label_food: "Gastronomie",
    food_title: "Les Saveurs de Lin",
    food_lead: "Cuisine propre, produits locaux, poisson du lac — une véritable expérience culinaire méditerranéenne.",
    food1: "Koran Grillé",
    food1d: "L'ancien poisson d'Ohrid, grillé lentement sur feu de bois avec des herbes locales.",
    food2: "Plats Traditionnels",
    food2d: "Tavë kosi, fergesa et plats albanais authentiques avec des produits frais du jardin.",
    food3: "Meze du Lac",
    food3d: "Poisson fumé, conserves maison, fromage blanc et pain de maïs frais.",
    food_signature: "Spécialité Locale",
    food_local: "Plat Local",
    food_meze: "Meze",
    sunset_quote: "Quand le soleil se couche sur le lac d'Ohrid depuis les rives de Lin, le temps s'arrête — et on comprend pourquoi certains endroits sont sacrés.",
    sunset_attr: "— Visiteur d'Italie, 2023",
    section_label_info: "Informations",
    info_title: "Informations Touristiques",
    info1: "Parking",
    info1d: "Parking gratuit près de l'entrée du village. Recommandé d'arriver en voiture ou taxi depuis Pogradec.",
    info2: "Meilleure Saison",
    info2d: "Mai–Octobre pour temps idéal. Été (juin–août) pour la baignade. Printemps pour calme absolu.",
    info3: "Comment Arriver",
    info3d: "18 km de Pogradec. Bus depuis Tirana (4h), Korça (1h30). Aéroports les plus proches: Korça ou Tirana.",
    info4: "Climat",
    info4d: "Méditerranéen continental. Étés chauds 25–32°C, hivers doux. Faible humidité, air pur de montagne.",
    info5: "Lieux à Proximité",
    info5d: "Pogradec (18km), Ohrid/Macédoine du Nord (40km), Korça (55km), Berat (160km).",
    info6: "Conseils",
    info6d: "Emportez de l'eau. Portez des chaussures confortables. Respectez les sites historiques.",
    footer_tag: "Lac d'Ohrid · Pogradec · Albanie",
    footer_copy: "Tous droits réservés."
  }
};

let currentLang = 'sq';

function applyTranslation(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.documentElement.lang = lang;
  localStorage.setItem('lin-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lin-lang') || 'sq';
  applyTranslation(saved);

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });
  }

  // Language dropdown
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });
    document.addEventListener('click', () => langDropdown.classList.remove('open'));
  }

  // Language options
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = btn.getAttribute('data-lang');
      const flag = btn.getAttribute('data-flag');
      const code = btn.getAttribute('data-code');
      applyTranslation(lang);
      const currentFlag = document.getElementById('currentFlag');
      const currentLangSpan = document.getElementById('currentLang');
      if (currentFlag) currentFlag.textContent = flag;
      if (currentLangSpan) currentLangSpan.textContent = code;
      const dropdown = document.getElementById('langDropdown');
      if (dropdown) dropdown.classList.remove('open');
    });
  });

  // Reveal animations
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbClose = document.getElementById('lbClose');
  
  if (lightbox && lbImg && lbClose) {
    document.querySelectorAll('.gal-item').forEach(item => {
      item.addEventListener('click', () => {
        const src = item.getAttribute('data-src');
        if (src) {
          lbImg.src = src;
          lightbox.classList.add('active');
        }
      });
    });
    lbClose.addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }
});

window.applyTranslation = applyTranslation;
window.translations = translations;