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
    name: "דורא",
    nameEn: "Dora",
    timeHe: "כ-2 דקות נסיעה, או כ-7 דקות הליכה",
    timeEn: "About 2 min drive, or about 7 min walk",
    he: "קפה, כריכים וסלי פיקניק, במשתלת הגולן שבמושב. לפי פרסום כיפה, כשרה ברבנות רמת הגולן. סגורה בשבת. השעות משתנות בין הפרסומים, אז שווה לבדוק באותו יום.",
    en: "Coffee, sandwiches and picnic baskets, at the Golan nursery in the moshav. Listed as kosher under the Ramat HaGolan rabbinate. Closed on Shabbat. Published hours differ, so it is worth checking on the day."
  },
  {
    category: "קפה",
    categoryEn: "Coffee",
    name: "אבאלה",
    nameEn: "Abala",
    timeHe: "בתוך המושב",
    timeEn: "In the moshav",
    he: "קפה, בייגל ויין, בכרם שבמושב. לפי תיירות גולן, פתוחה בימים ג׳–ו׳ בבוקר, וביום חמישי גם בערב. על הכשרות שווה לשאול במקום.",
    en: "Coffee, bagels and wine, in a vineyard in the moshav. Tourism Golan lists it Tuesday to Friday mornings, and Thursday evening as well. Worth asking the place about kashrut."
  },
  {
    category: "קפה",
    categoryEn: "Coffee",
    name: "טראקפה",
    nameEn: "Truckafe",
    minutes: 9,
    he: "מאפים ופינת יצירה לילדים בין הגפנים, ביקב שאטו גולן באליעד. פתוחה גם בשבת. על הכשרות שווה לשאול במקום.",
    en: "Pastries and a children's corner among the vines, at Chateau Golan winery in Eliad. Open on Shabbat too. Worth asking the place about kashrut."
  },
  {
    category: "קפה",
    categoryEn: "Coffee",
    name: "מולאן פטיסרי",
    nameEn: "Mulan Patisserie",
    minutes: 17,
    timeHe: "כ-17 דקות נסיעה (כ-15.5 ק״מ)",
    timeEn: "About 17 min drive (about 15.5 km)",
    he: "בית קפה עם נוף, באזור גבעת יואב. שעות הפתיחה משתנות, אז שווה לבדוק לפני שמגיעים.",
    en: "A café with a view, in the Givat Yoav area. Opening hours change, so it is worth checking before you go.",
    maps: "https://www.google.com/maps/search/?api=1&query=32.7934094,35.6770446"
  },
  {
    category: "קפה",
    categoryEn: "Coffee",
    name: "קפה מוייז",
    nameEn: "Moise coffee cart",
    minutes: 29,
    timeHe: "כ-29 דקות נסיעה (כ-33 ק״מ)",
    timeEn: "About 29 min drive (about 33 km)",
    he: "עגלת קפה במושב רמות: נוף לכנרת, מאפים ובראנץ׳. כשר למהדרין לדברי המקום. את השעות שווה לבדוק לפני שמגיעים.",
    en: "A coffee cart in Moshav Ramot: a view of the Kinneret, pastries and brunch. Kosher mehadrin, according to the place. Worth checking the hours before you go.",
    maps: "https://www.google.com/maps/place/?q=place_id:ChIJF_V4XWcRHBURYZnmaBdB0Fo"
  },
  {
    category: "אוכל",
    categoryEn: "Food",
    name: "גיליס",
    nameEn: "Gillis",
    timeHe: "בתוך המושב",
    timeEn: "In the moshav",
    he: "מסעדת בשרים וקצבייה במושב. לפי האתר של גיליס: כשרות רבנות, המועצה הדתית רמת הגולן, ובשר חלק למעט סטייק פילה. פתוחה בימי חמישי, וקבוצות מתקבלות בתיאום. את השעות המדויקות שווה לאשר מולם.",
    en: "A meat restaurant and butcher in the moshav. Gillis's site lists rabbinate kashrut (Ramat HaGolan religious council) and glatt meat except filet steak. Open on Thursdays, and groups are welcome by arrangement. Worth confirming the exact hours with them."
  },
  {
    category: "מים",
    categoryEn: "Water",
    name: "נחל אל על",
    nameEn: "Nahal El Al",
    minutes: 8,
    he: "עד חניון המפל השחור. בנחל מחכים המפל השחור, המפל הלבן, ועין נוב (בריכת המלכה). המים זורמים כל השנה, ובחורף חזק יותר. המסלול המלא ארוך ומתאים יותר לילדים גדולים. עין נוב לבד הוא הליכה קלה של כעשר דקות מהחניון. ביום של התראת שיטפונות נשארים מחוץ לערוץ.",
    en: "To the Black Waterfall parking. The stream has the Black Waterfall, the White Waterfall, and Ein Nov (Breichat HaMalka) waiting. It flows all year, and stronger in winter. The full trail is long and suits older children better. Ein Nov alone is an easy walk of about ten minutes from the parking. On a flood-warning day, stay out of the channel.",
    noteHe: "בשבתות ובחגים שער אבני איתן סגור, ומחנים מחוץ ליישוב. שווה לוודא את מצב השער לפני שבת.",
    noteEn: "On Shabbat and holidays the Avnei Eitan gate is closed, and you park outside the community. Worth checking the gate before Shabbat."
  },
  {
    category: "מים",
    categoryEn: "Water",
    name: "עין פיק",
    nameEn: "Ein Pik",
    minutes: 11,
    timeHe: "כ-11 דקות נסיעה (כ-11.7 ק״מ), בכביש 98",
    timeEn: "About 11 min drive (about 11.7 km), on Route 98",
    he: "מעיין יפה לביקור משפחתי. הנסיעה מכאן בכביש 98.",
    en: "A lovely spring for a family visit. The drive from here is on Route 98.",
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
    he: "עוד מעיין קרוב, ליום של מים.",
    en: "Another spring nearby, for a day by the water.",
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
    he: "ביער מבוא חמה: פלג רדוד לשכשוך רגליים, נוח לעגלות ולכיסאות גלגלים, עם חניון ונוף לכנרת.",
    en: "In Mevo Hama forest: a shallow stream for paddling, easy with a stroller or a wheelchair, with parking and a view of the Kinneret."
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
    he: "מפל של 51 מטר, ובחורף הזרימה חזקה יותר. שביל הנשרים סלול ונוח. ביום של סכנת שיטפונות נשארים מחוץ לשמורה.",
    en: "A 51-meter waterfall, and in winter the flow is even stronger. The vulture trail is paved and easy. On a day with a flood risk, stay out of the reserve."
  },
  {
    category: "טיול",
    categoryEn: "A walk",
    name: "טיילת דרום הגולן",
    nameEn: "Southern Golan promenade",
    timeHe: "יוצאים מהמושב",
    timeEn: "Starts from the moshav",
    he: "טיילת סלולה של כ-30 ק״מ, נוחה לעגלות, בין היישובים בדרום הגולן, ועוברת גם בנוב.",
    en: "About 30 km of paved promenade, easy with a stroller, between the southern Golan communities, passing through Nov too."
  },
  {
    category: "כנרת",
    categoryEn: "The Kinneret",
    name: "כורסי",
    nameEn: "Kursi",
    minutes: 22,
    he: "חוף כורסי וגן לאומי כורסי, על הכנרת. יום מים נעים וקרוב.",
    en: "Kursi beach and Kursi National Park, on the Kinneret. An easy day by the water, close to home."
  },
  {
    category: "כנרת",
    categoryEn: "The Kinneret",
    name: "עין גב",
    nameEn: "Ein Gev",
    minutes: 27,
    he: "יישוב וחוף על הכנרת. יחד עם כורסי, זה בערך חצי שעה עד המים.",
    en: "A community and a beach on the Kinneret. Together with Kursi, about half an hour to the water."
  },
  {
    category: "כנרת",
    categoryEn: "The Kinneret",
    name: "טבריה",
    nameEn: "Tiberias",
    minutes: 50,
    he: "עיר על הכנרת, כשבא לכם יום ארוך יותר מהחופים הקרובים לנוב.",
    en: "A city on the Kinneret, when you want a longer day than the beaches closest to Nov."
  },
  {
    category: "משק",
    categoryEn: "In Nov",
    name: "משק בן צבי",
    nameEn: "Ben Zvi farm",
    timeHe: "בתוך המושב",
    timeEn: "In the moshav",
    he: "דיר עיזים, ליטוף ומחלבה, כאן במושב. לפי אחד הפרסומים הסיור בתיאום וסגור בשבת. השעות והמחיר משתנים בין המקורות, אז שווה לשאול אותם ישירות.",
    en: "A goat pen, petting and a dairy, right here in the moshav. One listing says visits are by arrangement and closed on Shabbat. Hours and price differ between sources, so it is worth asking them directly."
  },
  {
    category: "משק",
    categoryEn: "In Nov",
    name: "על הסוס",
    nameEn: "Al HaSus",
    timeHe: "בתוך המושב",
    timeEn: "In the moshav",
    he: "חוות רכיבה במושב. לפי פרסום: שיעורים מגיל 4 ורכיבה טיפולית. על פתיחה בחורף שווה לשאול במקום.",
    en: "A riding stable in the moshav. A listing mentions lessons from age 4 and therapeutic riding. Worth asking the place about winter opening."
  },
  {
    category: "משק",
    categoryEn: "In Nov",
    name: "כרמי גולן",
    nameEn: "Karmei Golan",
    timeHe: "בתוך המושב",
    timeEn: "In the moshav",
    he: "שמן זית מהמושב. מסיק בנובמבר–דצמבר, ויש חנות שמחכה לכם.",
    en: "Olive oil from the moshav. The harvest is in November and December, and a shop is waiting for you."
  },
  {
    category: "יין",
    categoryEn: "Wine",
    name: "יקבי רמת הגולן",
    nameEn: "Golan Heights Winery",
    minutes: 22,
    he: "מרכז מבקרים בקצרין, לביקור משפחתי. כשר למהדרין וסגור בשבת. לפי הפרסום: בימים א׳–ה׳ 08:30–18:30, ובחורף ביום ו׳ עד 14:00.",
    en: "A visitor center in Katzrin, for a family visit. Kosher lemehadrin, and closed on Shabbat. Published hours: Sunday to Thursday 08:30–18:30, and in winter Friday until 14:00."
  },
  {
    category: "גשם",
    categoryEn: "A rainy day",
    name: "קצרין העתיקה",
    nameEn: "Ancient Katzrin",
    minutes: 22,
    he: "יום גשם נעים: פארק ומזיאון מקורים ומחוממים. בבית הבד יש בחורף פעילות של מסיק והדלקת נרות שמן.",
    en: "A pleasant rainy day: a covered, heated park and museum. In winter the oil press runs an olive-press and oil-lamp activity.",
    noteHe: "הזמן כאן הוא עד יקבי רמת הגולן שבקצרין, והפארק העתיק באותה עיר.",
    noteEn: "The time here is to the Golan Heights Winery in Katzrin, and the ancient park is in the same town."
  },
  {
    category: "חורף",
    categoryEn: "Winter",
    name: "חמת גדר",
    nameEn: "Hamat Gader",
    minutes: 28,
    he: "מעיינות חמים ליום חורף. המקום פתוח בשבת. על הכשרות שווה לשאול במקום לפני שמגיעים.",
    en: "Hot springs for a winter day. The site is open on Shabbat. Worth asking the place about kashrut before you go.",
  },
  {
    category: "חורף",
    categoryEn: "Winter",
    name: "אתר החרמון",
    nameEn: "Mount Hermon ski site",
    timeHe: "כשעה ו-10 דקות נסיעה",
    timeEn: "About 1 hr 10 min drive",
    he: "יום שלג, כשהאתר פתוח. הגלישה תלויה במזג האוויר, אז שווה לבדוק לפני שיוצאים. בערב הג׳קוזי מחכה בבקתה.",
    en: "A snow day, when the site is open. Skiing depends on the weather, so it is worth checking before you leave. In the evening the jacuzzi is waiting at the cabin.",
  }
];
