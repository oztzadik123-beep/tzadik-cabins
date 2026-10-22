/* Editable facts for both pages.
   The visible phone, capacity and pet rule are confirmed by the owner.
   Drive times live only in PLACES. The pages label them as approximate.

   Drive times were measured on Google Maps from Moshav Nov on 22 October 2026.
   They do not include traffic or parking. Edit the numbers here only.
   Kursi (22) and Ein Gev (27) are the Kinneret times. They are not repeated
   as a hero slogan. If you remeasure them, edit only those PLACES entries.

   TODO(owner): cabinCoordinates is the cabin door, not the gate.
   Leave it null until you have checked the pin while standing at the cabin.
   Until then placeQuery is the moshav entrance gate (no street address;
   the cabins are about 100 meters from that gate).
   A Google listing has shown 32.830254, 35.784341. That pin is NOT confirmed.
   Do not paste it here until you have checked it.
*/
window.SITE = {
  phoneDisplay: "050-460-6674",
  phoneTel: "+972504606674",
  phoneWa: "972504606674",
  contactName: "דן",
  contactNameEn: "Dan",
  placeQuery: "שער הכניסה למושב נוב, רמת הגולן",
  placeQueryEn: "Moshav Nov entrance gate, Golan Heights",
  cabinCoordinates: null
};

/* category: Hebrew group title. categoryEn: English group title.
   minutes: driving minutes from Moshav Nov, or null when it is not a drive.
   timeHe / timeEn: use when the label is not a plain "כ-N דקות נסיעה".
   warning: true renders the caution style (Meshushim).
*/
window.PLACES = [
  {
    category: "קפה",
    categoryEn: "Coffee",
    name: "מולאן פטיסרי",
    nameEn: "Moulin Patisserie",
    minutes: 17,
    timeHe: "כ-17 דקות נסיעה (כ-15.5 ק״מ)",
    timeEn: "About 17 min drive (about 15.5 km)",
    he: "בית קפה עם נוף, באזור גבעת יואב. שעות הפתיחה משתנות ולא מפורסמות כאן. כדאי לבדוק לפני שמגיעים.",
    en: "A café with a view, in the Givat Yoav area. Opening hours change and are not listed here. Check before you go.",
    maps: "https://www.google.com/maps/search/?api=1&query=32.7934094,35.6770446"
  },
  {
    category: "אוכל",
    categoryEn: "Food",
    name: "גיליס",
    nameEn: "Gillis",
    timeHe: "בתוך המושב",
    timeEn: "In the moshav",
    he: "מסעדת בשרים וקצבייה בנוב. לפי האתר של גיליס: כשרות רבנות, המועצה הדתית רמת הגולן, ובשר חלק למעט סטייק פילה. המסעדה מפורסמת כפתוחה בימי חמישי, וקבוצות מתקבלות בתיאום. את השעות המדויקות כדאי לאשר מולם.",
    en: "Meat restaurant and butcher in Nov. Gillis's site lists rabbinate kashrut (Ramat HaGolan religious council) and glatt meat except filet steak. The restaurant is published as open on Thursdays, and groups are accepted by arrangement. Confirm the exact hours with them."
  },
  {
    category: "מים",
    categoryEn: "Water",
    name: "נחל אל על",
    nameEn: "Nahal El Al",
    minutes: 8,
    he: "הזמן הוא עד חניון המפל השחור. בנחל: המפל השחור, המפל הלבן, ועין נוב (בריכת המלכה). המים זורמים כל השנה, ובחורף חזק יותר. המסלול המלא ארוך ומתאים יותר לילדים גדולים. עין נוב לבד הוא הליכה קלה של כעשר דקות מהחניון. לא נכנסים לערוץ כשיש התראת שיטפונות.",
    en: "Time is to the Black Waterfall parking. The stream has the Black Waterfall, the White Waterfall, and Ein Nov (Breichat HaMalka). It flows all year, and harder in winter. The full trail is long and suits older children better. Ein Nov alone is an easy walk of about ten minutes from the parking. Do not enter the channel when there is a flood warning.",
    noteHe: "שער אבני איתן סגור בשבתות ובחגים, ומחנים מחוץ ליישוב. כדאי לוודא את מצב השער לפני שבת.",
    noteEn: "The Avnei Eitan gate is closed on Shabbat and holidays, and people park outside the community. Recheck the gate before Shabbat."
  },
  {
    category: "מים",
    categoryEn: "Water",
    name: "עין פיק",
    nameEn: "Ein Pik",
    minutes: 11,
    timeHe: "כ-11 דקות נסיעה (כ-11.7 ק״מ), בכביש 98",
    timeEn: "About 11 min drive (about 11.7 km), on Route 98",
    he: "מעיין. הנסיעה מכאן בכביש 98.",
    en: "A spring. The drive from here is on Route 98.",
    maps: "https://www.google.com/maps/search/?api=1&query=32.775199,35.701358"
  },
  {
    category: "מים",
    categoryEn: "Water",
    name: "עין אי״ה",
    nameEn: "Ein Aya",
    minutes: 17,
    timeHe: "כ-17 דקות נסיעה (כ-13.8 ק״מ)",
    timeEn: "About 17 min drive (about 13.8 km)",
    he: "מעיין.",
    en: "A spring.",
    noteHe: "הדרך האחרונה לא מסומנת – קחו ניווט",
    noteEn: "The last stretch of the road is not marked. Take navigation.",
    maps: "https://www.google.com/maps/search/?api=1&query=32.7576433,35.745997"
  },
  {
    category: "מים",
    categoryEn: "Water",
    name: "עין תאופיק",
    nameEn: "Ein Taufik",
    minutes: 21,
    he: "ביער מבוא חמה. פלג רדוד לשכשוך רגליים, נגיש לעגלות ולכיסאות גלגלים, עם חניון ונוף לכנרת.",
    en: "In Mevo Hama forest. A shallow stream for paddling, accessible to strollers and wheelchairs, with parking and a view of the Kinneret."
  },
  {
    category: "מים",
    categoryEn: "Water",
    name: "בריכת המשושים",
    nameEn: "Meshushim pool",
    minutes: 36,
    warning: true,
    he: "אין להיכנס למים. בבדיקה של המשרד להגנת הסביבה מ-1 בספטמבר 2026 נמצא זיהום מעל התקן.",
    en: "Do not swim. A Ministry of Environmental Protection sample on 1 September 2026 found the water polluted above the standard."
  },
  {
    category: "טבע",
    categoryEn: "Nature",
    name: "שמורת גמלא",
    nameEn: "Gamla reserve",
    minutes: 14,
    he: "מפל של 51 מטר, ובחורף הזרימה חזקה יותר. שביל הנשרים סלול ונגיש. לא יוצאים בימים של סכנת שיטפונות.",
    en: "A 51-meter waterfall, stronger in winter. The vulture trail is paved and accessible. Do not go on days with a flood risk."
  },
  {
    category: "טיול",
    categoryEn: "A walk",
    name: "טיילת דרום הגולן",
    nameEn: "Southern Golan promenade",
    timeHe: "יוצאים מהמושב",
    timeEn: "Starts from the moshav",
    he: "טיילת סלולה של כ-30 ק״מ, נגישה לעגלות, ועוברת בין היישובים בדרום הגולן, כולל נוב.",
    en: "About 30 km of paved promenade, accessible to strollers, passing the southern Golan communities, including Nov."
  },
  {
    category: "כנרת",
    categoryEn: "The Kinneret",
    name: "כורסי",
    nameEn: "Kursi",
    minutes: 22,
    he: "חוף כורסי וגן לאומי כורסי, על הכנרת.",
    en: "Kursi beach and Kursi National Park, on the Kinneret."
  },
  {
    category: "כנרת",
    categoryEn: "The Kinneret",
    name: "עין גב",
    nameEn: "Ein Gev",
    minutes: 27,
    he: "יישוב וחוף על הכנרת. יחד עם כורסי, נוח לומר שזה בערך חצי שעה לכנרת.",
    en: "A community and beach on the Kinneret. Together with Kursi, about half an hour to the Kinneret is a fair way to say it."
  },
  {
    category: "כנרת",
    categoryEn: "The Kinneret",
    name: "טבריה",
    nameEn: "Tiberias",
    minutes: 50,
    he: "עיר על הכנרת, רחוקה יותר מהחופים הקרובים לנוב.",
    en: "A city on the Kinneret, farther than the beaches closest to Nov."
  },
  {
    category: "משק",
    categoryEn: "In Nov",
    name: "משק בן צבי",
    nameEn: "Ben Zvi farm",
    timeHe: "בתוך המושב",
    timeEn: "In the moshav",
    he: "דיר עיזים, ליטוף ומחלבה. לפי אחד הפרסומים הסיור בתיאום וסגור בשבת. שעות ומחיר סותרים בין מקורות, ולכן הם לא מפורטים כאן.",
    en: "A goat pen, petting and a dairy. One listing says visits are by arrangement and closed on Shabbat. Hours and price disagree between sources, so they are not listed here."
  },
  {
    category: "משק",
    categoryEn: "In Nov",
    name: "על הסוס",
    nameEn: "Al HaSus",
    timeHe: "בתוך המושב",
    timeEn: "In the moshav",
    he: "חוות רכיבה בנוב. לפי פרסום: שיעורים מגיל 4 ורכיבה טיפולית. פתיחה בחורף לא אומתה כאן.",
    en: "A riding stable in Nov. A listing mentions lessons from age 4 and therapeutic riding. Winter opening was not verified here."
  },
  {
    category: "משק",
    categoryEn: "In Nov",
    name: "כרמי גולן",
    nameEn: "Karmei Golan",
    timeHe: "בתוך המושב",
    timeEn: "In the moshav",
    he: "שמן זית בנוב. מסיק בחודשים נובמבר–דצמבר, ויש חנות.",
    en: "Olive oil in Nov. The harvest is in November and December, and there is a shop."
  },
  {
    category: "יין",
    categoryEn: "Wine",
    name: "יקבי רמת הגולן",
    nameEn: "Golan Heights Winery",
    minutes: 22,
    he: "מרכז המבקרים בקצרין. כשר למהדרין וסגור בשבת. לפי הפרסום: בימים א׳–ה׳ 08:30–18:30, ובחורף ביום ו׳ עד 14:00.",
    en: "Visitor center in Katzrin. Kosher lemehadrin, closed on Shabbat. Published hours: Sunday to Thursday 08:30–18:30, and in winter Friday until 14:00."
  },
  {
    category: "גשם",
    categoryEn: "A rainy day",
    name: "קצרין העתיקה",
    nameEn: "Ancient Katzrin",
    minutes: 22,
    he: "פארק ומזיאון מקורים ומחוממים, מתאים ליום גשם. בבית הבד יש בחורף פעילות של מסיק והדלקת נרות שמן.",
    en: "A covered, heated park and museum, a good rainy-day visit. In winter the oil press runs an olive-press and oil-lamp activity.",
    noteHe: "זמן הנסיעה נמדד ליקבי רמת הגולן שבקצרין. הפארק העתיק באותה עיר.",
    noteEn: "The drive time was measured to the Golan Heights Winery in Katzrin. The ancient park is in the same town."
  },
  {
    category: "חורף",
    categoryEn: "Winter",
    name: "חמת גדר",
    nameEn: "Hamat Gader",
    minutes: 28,
    he: "מעיינות חמים. המקום פתוח בשבת. הכשרות לא אומתה כאן, ולכן לא כל משפחה שומרת כשרות תבחר בו.",
    en: "Hot springs. The site is open on Shabbat. Kashrut was not verified here, so not every family that keeps kosher will choose it."
  },
  {
    category: "חורף",
    categoryEn: "Winter",
    name: "אתר החרמון",
    nameEn: "Mount Hermon ski site",
    timeHe: "כשעה ו-10 דקות נסיעה",
    timeEn: "About 1 hr 10 min drive",
    he: "ליום שלג. הגלישה תלויה במזג האוויר, וכדאי לבדוק שהאתר פתוח לפני שיוצאים. אחר כך חוזרים לג'קוזי בבקתה.",
    en: "For a snow day. Skiing depends on the weather, and it is worth checking that the site is open before you leave. Afterwards, back to the cabin jacuzzi."
  }
];
