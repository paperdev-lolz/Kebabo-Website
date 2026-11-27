/**
 * KEBABO marinade — Menyu (Restoran Milliy Taomlar Portali)
 * Pure Vanilla JavaScript + Three.js 3D Food Models
 * Features:
 * - 30 Authentic 3D Food Models (26 Shashlik & Kabobs, 2 Tandir Non, 2 Choy)
 * - Interactive 360° 3D Spotlight Modal with OrbitControls, Auto-rotate, and 3D Steam
 * - 3D Card Parallax Tilt on Hover & Sizzle Ember Spark FX
 * - Live Instant Search by Dish Name & Number (№)
 * - Category Filter Tabs (All, Shashlik, Non, Choy)
 */

// =============================================================================
// 1. Menu Data (Exact specifications preserved)
// =============================================================================
const MENU_DATA = [
  // --- SHASHLIK & KABOB (Main Menu) ---
  {
    id: "sh-11",
    number: "№ 11",
    name: "Dubayski qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 18000,
    desc: "Maxsus marinadlangan sershira qiyma kabob",
    moodBadge: "✨ Oshpaz Maxsusi",
    about: "KEBABO'ning eng mashhur maxsus qiymasi: saralangan mol go'shti va mayin dumba maxsus Dubay uslubidagi xushbo'y ziravorlar bilan uzoq marinadlanadi. Ko'mir cho'g'ida tez qovurilib, sirti qizg'ish, ichi esa nihoyatda sershira chiqadi.",
    specs: [
      { label: "Asos", value: "Mol go'shti & dumba" },
      { label: "Ta'mi", value: "Boy & xushbo'y" },
      { label: "Tavsiya", value: "Tandir non bilan" }
    ],
    highlights: [
      { icon: "✨", text: "Maxsus sirli Dubay ziravorlari va mayin marinad" },
      { icon: "🥩", text: "80% saralangan mol go'shti va 20% shirali dumba" },
      { icon: "🔥", text: "850°C cho'g'da sershira holatda pishiriladi" }
    ],
    videoUrl: "videos/qiyma-shashlik.mp4"
  },
  {
    id: "sh-12",
    number: "№ 12",
    name: "Obichniy qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 15000,
    desc: "Klassik an'anaviy mayin qiyma shashlik",
    moodBadge: "🔥 Klassik Tanlov",
    about: "Haqiqiy klassik o'zbek qiyma shashligi — ortiqcha qo'shimchalarsiz, faqat yangi maydalangan mol go'shti, mayin piyoz suvi, zira va qora murch uyg'unligi. Har kungi ishonchli va yengil tanlov.",
    specs: [
      { label: "Asos", value: "Klassik qiyma" },
      { label: "Ta'mi", value: "Mayin & an'anaviy" },
      { label: "Tavsiya", value: "Ko'k choy bilan" }
    ],
    highlights: [
      { icon: "🧅", text: "Yangi to'g'ralgan piyoz va zira bilan yoğrilgan" },
      { icon: "👌", text: "Og'izda erib ketadigan mayin klassik tekstura" },
      { icon: "🔥", text: "Ko'mir taftida bir tekis qizartirilgan" }
    ],
    videoUrl: "videos/obichniy-qiyma.mp4"
  },
  {
    id: "sh-14",
    number: "№ 14",
    name: "G`ijdivon",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 18000,
    desc: "Buxoroning mashhur G`ijdivon uslubidagi shirali qiyma",
    moodBadge: "⭐ Eng Ko'p Sotiladigan",
    about: "Buxoroning afsonaviy G'ijdivon retsepti asosida tayyorlanadigan xit kabob. Go'sht qo'lda maydalanib, maxsus kashnich urug'i va zira bilan boyitiladi — har bir luqmasida haqiqiy sharqona shira seziladi.",
    specs: [
      { label: "Uslub", value: "Buxoro / G'ijdivon" },
      { label: "Ta'mi", value: "To'yingan & shirali" },
      { label: "Tavsiya", value: "Qizil piyoz & non" }
    ],
    highlights: [
      { icon: "⭐", text: "G'ijdivonning asl an'anaviy oshpazlik uslubi" },
      { icon: "🌿", text: "Kashnich urug'i, zira va tabiiy ziravorlar" },
      { icon: "💧", text: "Ichidagi tabiiy shirasi saqlab qolinadi" }
    ],
    videoUrl: "videos/gijdivon.mp4"
  },
  {
    id: "sh-15",
    number: "№ 15",
    name: "Qiyma Mozrarella",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 22000,
    desc: "Issiq ko'mirda erib turuvchi nozik Mozzarella pishloqli qiyma",
    moodBadge: "🧀 Pishloqli Xit",
    about: "Qaynoq cho'g'dan endigina olingan sershira mol qiymasi ustiga yupqa bo'laklarda tabiiy Mozzarella pishlog'i yotqizilib, issiq taftda mayin eritiladi. Go'sht tutuni va qaymoqli pishloq ta'mi ajoyib uyg'unlashadi.",
    specs: [
      { label: "Tarkib", value: "Qiyma + Mozzarella" },
      { label: "Ta'mi", value: "Qaymoqli & tutunli" },
      { label: "Tavsiya", value: "Issiqligida yeyish" }
    ],
    highlights: [
      { icon: "🧀", text: "Ustida mayin erib turuvchi 100% tabiiy Mozzarella" },
      { icon: "🥩", text: "Yumshoq va shirali mol go'shti qiymasi" },
      { icon: "🔥", text: "Cho'g' taftida pishloq yengil qizartirib olinadi" }
    ],
    videoUrl: "videos/qiyma-mozzarella.mp4"
  },
  {
    id: "sh-22",
    number: "№ 22",
    name: "Avashnoy qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 18000,
    desc: "Xushbo'y yangi sabzavotlar va ziravorlar uyg'unligi",
    moodBadge: "🫑 Sabzavotli",
    about: "Shirali qiyma kabob bilan birga mangalda qovurilgan shirin bulg'or qalampiri, pishgan pomidor va piyoz uyg'unligi. Sabzavotlarning tabiiy suvi go'shtga yanada yengil va tetiklantiruvchi ta'm beradi.",
    specs: [
      { label: "Tarkib", value: "Qiyma & sabzavotlar" },
      { label: "Ta'mi", value: "Yengil & xushbo'y" },
      { label: "Tavsiya", value: "Ko'katlar bilan" }
    ],
    highlights: [
      { icon: "🍅", text: "Ko'mirda pishgan pomidor va shirin bulg'or qalampiri" },
      { icon: "🌿", text: "Yangi sabzavot sharbati bilan to'yingan qiyma" },
      { icon: "⚖️", text: "Go'sht va sabzavotning muvozanatli uyg'unligi" }
    ],
    videoUrl: "videos/avashnoy-qiyma.mp4"
  },
  {
    id: "sh-23",
    number: "№ 23",
    name: "Achchiq qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 18000,
    desc: "O'tkir qizil qalampir va sharq ziravorlari bilan olovli kabob",
    moodBadge: "🌶️ Olovli O'tkir",
    about: "Achchiq ta'm ishqibozlari uchun maxsus tayyorlangan olovli qiyma. Qizil achchiq qalampir, paprika va tuyilgan murch go'shtga chuqur qizg'ish rang hamda qizdiruvchi xushbo'y o'tkirlik bag'ishlaydi.",
    specs: [
      { label: "Achchiqligi", value: "Yuqori (O'tkir)" },
      { label: "Ta'mi", value: "Qalampirli & tutunli" },
      { label: "Tavsiya", value: "Ko'k choy bilan" }
    ],
    highlights: [
      { icon: "🌶️", text: "Tabiiy qizil achchiq qalampir va paprika qoplamasi" },
      { icon: "🔥", text: "Olovli ta'mni sevuvchilar uchun maxsus retsept" },
      { icon: "🫖", text: "Issiq ko'k choy bilan ta'mi yanada ochiladi" }
    ],
    videoUrl: "videos/achchiq-qiyma.mp4"
  },
  {
    id: "sh-25",
    number: "№ 25",
    name: "Zakaz qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 20000,
    desc: "Usta oshpazning maxsus retsepti asosidagi saralangan go'sht",
    moodBadge: "👨‍🍳 Usta Retsepti",
    about: "Odatdagidan yirikroq va to'yimliroq qilib sixga tortiladigan maxsus buyurtma qiymasi. Usta oshpaz tomonidan alohida e'tibor bilan saralangan yumshoq lahm va xushbo'y ziravorlardan tayyorlanadi.",
    specs: [
      { label: "Porsiya", value: "Yirik & to'yimli" },
      { label: "Ta'mi", value: "Chuqur & go'shtli" },
      { label: "Tavsiya", value: "Tandir non bilan" }
    ],
    highlights: [
      { icon: "👨‍🍳", text: "Bosh oshpaz nazoratidagi maxsus buyurtma qiymasi" },
      { icon: "🥩", text: "Yirikroq six va ko'proq saralangan lahm go'sht" },
      { icon: "🔥", text: "Sekin aylantirib, mukammal qizarguncha pishiriladi" }
    ],
    videoUrl: "videos/zakaz-qiyma.mp4"
  },
  {
    id: "sh-16",
    number: "№ 16",
    name: "Tabaki qanot / Tabaki son qismi",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 16000,
    desc: "Qarsildoq qovurilgan tovuq go'shti (qanot yoki son qismi)",
    moodBadge: "🍗 Qarsildoq Tovuq",
    about: "Maxsus sarimsoqli va limonli marinadda uzoq saqlangan barra tovuq qanotlari yoki son qismlari. Ko'mir cho'g'ida terisi tillarang va qarsildoq, ichki go'shti esa oppoq va mayin bo'lib pishadi.",
    specs: [
      { label: "Go'sht", value: "Tovuq qanot / son" },
      { label: "Tekstura", value: "Sirti qarsildoq" },
      { label: "Tavsiya", value: "Sous bilan" }
    ],
    highlights: [
      { icon: "🍗", text: "Tanlovga ko'ra sershira son yoki qarsildoq qanot" },
      { icon: "🧄", text: "Sarimsoq, limon va tabiiy o'tlar marinadi" },
      { icon: "✨", text: "Tillarang qarsildoq qobiq va mayin ichki go'sht" }
    ],
    videoUrl: "videos/tabaki-qanot.mp4"
  },
  {
    id: "sh-17",
    number: "№ 17",
    name: "To`rg`amchi yog`siz",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 24000,
    desc: "Saralangan, toza yog'siz lahm go'sht bo'laklari",
    moodBadge: "🥩 Toza Lahm",
    about: "Faqat yog'siz, eng yumshoq mol lahm go'shtidan bir xil kubik shaklida to'g'ralib tayyorlanadi. Yog'li taomlarni yoqtirmaydiganlar va sof go'sht ta'mini qadrlovchilar uchun ideal parhezbop shashlik.",
    specs: [
      { label: "Kesim", value: "100% yog'siz lahm" },
      { label: "Ta'mi", value: "Sof mol go'shti" },
      { label: "Tavsiya", value: "Yengil ovqatlanishga" }
    ],
    highlights: [
      { icon: "🥩", text: "Dumba va ortiqcha yog'siz sof mol lahm bo'laklari" },
      { icon: "💪", text: "Yuqori oqsilli, yengil va parhezbop tanlov" },
      { icon: "🔥", text: "Quritib yubormasdan, tez va mayin pishiriladi" }
    ],
    videoUrl: "videos/torghamchi-shashlik.mp4"
  },
  {
    id: "sh-19",
    number: "№ 19",
    name: "To'rg'amchi yo`g'li",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 22000,
    desc: "Mayin lahm go'sht va xushbo'y dumba yog'ining shirali kombinatsiyasi",
    moodBadge: "🔥 Shirali Klassika",
    about: "O'zbek shashlikchilik san'atining oltin qoidasi: har bir yumshoq lahm bo'lagi orasiga mayin dumba yog'i teriladi. Pishish jarayonida erigan dumba go'shtni yog'lab, unga takrorlanmas shira beradi.",
    specs: [
      { label: "Kesim", value: "Lahm + dumba" },
      { label: "Ta'mi", value: "Juda shirali" },
      { label: "Tavsiya", value: "Ko'k choy bilan" }
    ],
    highlights: [
      { icon: "🥩", text: "Lahm va dumba bo'laklarining ideal ketma-ketligi" },
      { icon: "🔥", text: "Erigan dumba go'shtni yanada yumshoq qiladi" },
      { icon: "🧅", text: "Sirka va ko'katli piyoz bilan mukammal ketadi" }
    ],
    videoUrl: "videos/torghamchi-yogli.mp4"
  },
  {
    id: "sh-18",
    number: "№ 18",
    name: "Kavkaz (mol go'shti)",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 30000,
    desc: "Kavkazcha usulda marinadlangan yirik mol go'shti lahm bo'laklari",
    moodBadge: "🏔️ Kavkazcha Yirik",
    about: "Katta bo'laklarda kesilgan sara mol bo'yni va bel go'shti Kavkaz tog' giyohlari, rayhon va piyoz sharbatida 12 soat marinadlanadi. Yirik sixda pishib, sirti qarsildoq, ichi esa pushti-shirali chiqadi.",
    specs: [
      { label: "Kesim", value: "Yirik mol lahmi" },
      { label: "Marinad", value: "12 soatlik Kavkaz" },
      { label: "Tavsiya", value: "Non & qizil sous" }
    ],
    highlights: [
      { icon: "🏔️", text: "Haqiqiy Kavkaz uslubidagi yirik go'sht bo'laklari" },
      { icon: "🌿", text: "Tog' giyohlari va piyozli uzoq marinad" },
      { icon: "🥩", text: "Bitta sixning o'zi katta va to'yimli porsiya" }
    ],
    videoUrl: "videos/kavkaz-mol.mp4"
  },
  {
    id: "sh-36",
    number: "№ 36",
    name: "Kavkaz (qo'y go'shti)",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 33000,
    desc: "Hosilador qo'zichoq go'shti va an'anaviy xushbo'y tog' giyohlari",
    moodBadge: "👑 Qirollik Qo'yi",
    about: "Yosh qo'zichoqning eng yumshoq qismlaridan yirik kesilgan Kavkaz shashligi. Qo'y go'shtining tabiiy nozik hidi zira, rozmarin va tog' rayhoni bilan boyitilib, ko'mirda hashamatli ta'm kasb etadi.",
    specs: [
      { label: "Go'sht", value: "Sara qo'zichoq" },
      { label: "Kesim", value: "Yirik Kavkaz" },
      { label: "Tavsiya", value: "Issiq ko'k choy" }
    ],
    highlights: [
      { icon: "🐑", text: "Faqat yosh va yumshoq qo'zichoq go'shtidan" },
      { icon: "🌿", text: "Zira, rozmarin va xushbo'y tog' ziravorlari" },
      { icon: "👑", text: "Mehmondo'st dasturxonlarning eng sara taomi" }
    ],
    videoUrl: "videos/kavkaz-qoy.mp4"
  },
  {
    id: "sh-21",
    number: "№ 21",
    name: "Kavkaz tabaki",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 24000,
    desc: "Press ostida qarsildoq qilib qovurilgan sarxil jo'ja tabaka",
    moodBadge: "🍗 Presslangan Tabaka",
    about: "Butun jo'ja bo'laklari maxsus Kavkaz adzhikasi, sarimsoq va sariyog' bilan surtilib, ko'mir cho'g'i ustida press ostida pishiriladi. Har bir qismi oltinrang va xushbo'y qarsildoq bo'ladi.",
    specs: [
      { label: "Usul", value: "Ko'mirda presslangan" },
      { label: "Ta'mi", value: "Sarimsoqli & achchiqroq" },
      { label: "Tavsiya", value: "Lavash / Non bilan" }
    ],
    highlights: [
      { icon: "🍗", text: "Oltinrang qarsildoq teri va nihoyatda yumshoq go'sht" },
      { icon: "🌶️", text: "Kavkazcha adzhika va sarimsoqli xushbo'y sous" },
      { icon: "🔥", text: "To'g'ridan-to'g'ri ko'mir taftida qizartirilgan" }
    ],
    videoUrl: "videos/kavkaz-tabaki.mp4"
  },
  {
    id: "sh-20",
    number: "№ 20",
    name: "Marvarid",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 22000,
    desc: "Marvariddek tizilgan shirali, qiyma va lahm qismli nozik kabob",
    moodBadge: "🦪 Ikki Hil Ta'm",
    about: "Bitta sixda ikki xil lazzat! Marvarid donalaridek chiroyli qilib mayin qiyma va yumshoq lahm go'sht bo'laklari ketma-ket tiziladi. Ham qiymaning yumshoqligini, ham lahmning to'yimliligini sevuvchilar uchun.",
    specs: [
      { label: "Tarkib", value: "Qiyma + Lahm" },
      { label: "Ko'rinishi", value: "Marvarid tizimi" },
      { label: "Tavsiya", value: "Tandir non bilan" }
    ],
    highlights: [
      { icon: "🦪", text: "Qiyma va lahm bo'laklarining chiroyli kombinatsiyasi" },
      { icon: "😋", text: "Bir porsiyada ikki xil kabob ta'mini tatib ko'ring" },
      { icon: "🔥", text: "Bir tekis ko'mir cho'g'ida shirali pishiriladi" }
    ],
    videoUrl: "videos/marvarid.mp4"
  },
  {
    id: "sh-nap",
    number: "№",
    name: "Napalyon",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 23000,
    desc: "Go'sht va mayin dumba qatlamlarining go'zal qavatli simfoniyasi",
    moodBadge: "🍰 Qavatli Shashlik",
    about: "Mashhur tort sharafiga nomlangan qavat-qavat shashlik: yupqa tilimlangan mol go'shti va nafis dumba bo'laklari zich qatlam qilib sixga tortiladi. Kesilganda qatlamli ko'rinishi va erib ketuvchi ta'mi bilan ajralib turadi.",
    specs: [
      { label: "Tuzilishi", value: "Ko'p qavatli" },
      { label: "Asos", value: "Yupqa lahm & dumba" },
      { label: "Tavsiya", value: "Piyoz bilan" }
    ],
    highlights: [
      { icon: "🍰", text: "Yupqa go'sht va dumba qatlamlarining nozik uyg'unligi" },
      { icon: "✨", text: "Har bir qatlam ko'mir taftida bir-biriga singib pishadi" },
      { icon: "🔥", text: "Sirti yengil qarsildoq, ichi esa og'izda eriydi" }
    ],
    videoUrl: "videos/napalyon.mp4"
  },
  {
    id: "sh-26",
    number: "№ 26",
    name: "O'rama shashlik",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 22000,
    desc: "Yupqa tilim lahm go'shtning xushbo'y dumba bilan o'ralgan varianti",
    moodBadge: "🌀 Rulet Uslubi",
    about: "Keng va yupqa qilib ochilgan saralangan lahm go'sht ichiga ziravorlangan dumba va qiyma solinib, rulet shaklida mahkam o'raladi. Ko'mirda pishganda ichidagi shira tashqariga chiqmasdan o'zida saqlanadi.",
    specs: [
      { label: "Shakl", value: "O'ralgan rulet" },
      { label: "Ta'mi", value: "Zich & sershira" },
      { label: "Tavsiya", value: "Issiq non bilan" }
    ],
    highlights: [
      { icon: "🌀", text: "Yupqa lahm ichiga o'ralgan xushbo'y dumba" },
      { icon: "💧", text: "O'rama shakl go'sht shirasini ichida saqlab qoladi" },
      { icon: "🔥", text: "Olov ustida aylantirib tillarang tusda pishiriladi" }
    ],
    videoUrl: "videos/orama-fire-shashlik.mp4"
  },
  {
    id: "sh-2",
    number: "№ 2",
    name: "Tovuq fille",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 14000,
    desc: "Yengil, parhezbop va sershira tovuq filesi shashligi",
    moodBadge: "🌿 Parhezbop",
    about: "Yog'siz toza tovuq ko'kragi (filesi) qaymoqli-ziravorli marinadda yumshatilib, sixda tez pishiriladi. Yengil hazm bo'ladi, bolalar va parhez tutuvchilar uchun eng maqbul va hamyonbop shashlik.",
    specs: [
      { label: "Go'sht", value: "100% tovuq filesi" },
      { label: "Kaloriya", value: "Past / Yengil" },
      { label: "Tavsiya", value: "Sarimsoq sousi" }
    ],
    highlights: [
      { icon: "🕊️", text: "Suyaksiz va terisiz toza tovuq ko'kragi filesi" },
      { icon: "🥛", text: "Qaymoq va mayin ziravorlar bilan yumshatilgan" },
      { icon: "💚", text: "Yengil, foydali va bolalar uchun ham juda mos" }
    ],
    videoUrl: "videos/tovuq-shashlik.mp4"
  },
  {
    id: "sh-28",
    number: "№ 28",
    name: "Lavash rulet",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 23000,
    desc: "Yupqa qarsildoq lavashga o'ralgan ko'mirda pishgan mazali kabob",
    moodBadge: "🌯 Qarsildoq Lavash",
    about: "Pishgan sershira qiyma kabob pishloq va ko'katlar bilan birga yupqa lavash xamiriga o'ralib, yana bir bor ko'mir ustida qizartiriladi. Tashqarisi xushbo'y va qarsildoq, ichi esa issiq hamda to'yimli.",
    specs: [
      { label: "Qobiq", value: "Qarsildoq lavash" },
      { label: "Ichki qism", value: "Qiyma & ko'kat" },
      { label: "Tavsiya", value: "Pomidor sousi" }
    ],
    highlights: [
      { icon: "🌯", text: "Yupqa lavashga o'ralib ko'mirda qizartirilgan" },
      { icon: "🥩", text: "Ichida issiq va sershira qiyma kabob" },
      { icon: "🔥", text: "Alohida non buyurtma qilmasdan ham juda to'yimli" }
    ],
    videoUrl: "videos/lavash-rulet.mp4"
  },
  {
    id: "sh-29",
    number: "№ 29",
    name: "Dollar",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 35000,
    desc: "Maxsus kesimdagi eng sara go'shtdan tayyorlangan premium shashlik",
    moodBadge: "👑 Eng Premium",
    about: "KEBABO menyusining eng sara va qimmatbaho steyk-shashligi. Mol go'shtining eng yumshoq bel (bon-file) qismidan yirik medalon shaklida kesilib, faqat dengiz tuzi, yanchilgan murch va rozmarin bilan pishiriladi.",
    specs: [
      { label: "Kesim", value: "Bon-file steyk" },
      { label: "Daraja", value: "VIP Premium" },
      { label: "Tavsiya", value: "Qora murch bilan" }
    ],
    highlights: [
      { icon: "👑", text: "Mol go'shtining eng yumshoq bon-file qismi" },
      { icon: "🥩", text: "Steyk kabi qalin va nihoyatda sershira kesim" },
      { icon: "🔥", text: "Asl go'sht ta'mini berkitmaydigan yengil ziravorlar" }
    ],
    videoUrl: "videos/dollar.mp4"
  },
  {
    id: "sh-30",
    number: "№ 30",
    name: "Jigar",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 18000,
    desc: "Tandirda mayin dumba pardasiga o'ralib pishirilgan jigar shashlik",
    moodBadge: "🔥 Pardali Jigar",
    about: "Yangi so'yilgan qo'y yoki mol jigari yupqa to'rsimon dumba pardasi (charvi) bilan mahkam o'raladi. Olov ustida pishganda parda erib jigarga qarsildoq qobiq beradi, ichki qismi esa quruq bo'lmay mayin qoladi.",
    specs: [
      { label: "Usul", value: "Charvi pardali" },
      { label: "Foydasi", value: "Temirga boy" },
      { label: "Tavsiya", value: "Piyoz & zira" }
    ],
    highlights: [
      { icon: "✨", text: "Yupqa tabiiy charvi pardasiga o'rab pishirilgan" },
      { icon: "🔥", text: "Quritib yubormasdan, ichki yumshoqligini saqlaydi" },
      { icon: "🌿", text: "Zira va yanchilgan murch bilan mukammal uyg'unlik" }
    ],
    videoUrl: "videos/jigar-shashlik.mp4"
  },
  {
    id: "sh-31",
    number: "№ 31",
    name: "Non kabob qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 12000,
    desc: "Yangi tandir nonining issiq bag'rida tortiladigan sershira qiyma",
    moodBadge: "🫓 Tez & Mazali",
    about: "Issiq tandir nonining bir bo'lagi ichiga ko'mirdan endigina uzilgan sershira qiyma va ziravorli piyoz bosib beriladi. Non go'shtning barcha mazali yog'i va shirasini o'ziga shimib oladi.",
    specs: [
      { label: "Tarkib", value: "Qiyma + Tandir non" },
      { label: "Format", value: "To'yimli sendvich" },
      { label: "Tavsiya", value: "Yo'l-yo'lakay / Tushlik" }
    ],
    highlights: [
      { icon: "🫓", text: "Go'sht shirasini shimib olgan issiq tandir noni" },
      { icon: "🍢", text: "Yangi pishgan sershira qiyma kabob bilan" },
      { icon: "💰", text: "Eng hamyonbop va bir zumda to'ydiradigan tanlov" }
    ],
    videoUrl: "videos/non-kabob.mp4"
  },
  {
    id: "sh-32",
    number: "№ 32",
    name: "Biqin qo`y (kachalka)",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 28000,
    desc: "Qo'y go'shtining eng shirin biqin qismidan tayyorlangan kachalka",
    moodBadge: "🐑 Haqiqiy Kachalka",
    about: "Qo'y qovurg'a va biqin qismidagi marmar yog' qatlamli go'sht bo'laklari (kachalka). Suyak atrofidagi go'sht ko'mirda pishganda ajoyib shirin ta'm va xushbo'y hid taratadi.",
    specs: [
      { label: "Qism", value: "Qo'y biqini (Kachalka)" },
      { label: "Ta'mi", value: "Marmar & shirali" },
      { label: "Tavsiya", value: "Ko'k choy bilan" }
    ],
    highlights: [
      { icon: "🐑", text: "Tabiiy marmar yog' qatlamiga ega qo'y biqini" },
      { icon: "🔥", text: "Suyak va go'sht uyg'unligida pishib, o'ta shirali chiqadi" },
      { icon: "🌿", text: "Zira va yirik tuz bilan klassik tarzda tayyorlanadi" }
    ],
    videoUrl: "videos/biqin-qoy.mp4"
  },
  {
    id: "sh-33",
    number: "№ 33",
    name: "Qovurg'a (qo'y g`o'shti)",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 25000,
    desc: "Qo'y qovurg'asidan tayyorlangan qarsildoq qovurma shashlik",
    moodBadge: "🍖 Qarsildoq Qovurg'a",
    about: "Yosh qo'zichoq qovurg'achalari zira va sarimsoq bilan marinadlanib, ko'mirda tillarang qarsildoq bo'lguncha pishiriladi. Suyagidan oson ajraladigan nozik go'sht shinavandalar uchun haqiqiy zavq.",
    specs: [
      { label: "Kesim", value: "Suyakli qo'y qovurg'a" },
      { label: "Tekstura", value: "Qarsildoq & yumshoq" },
      { label: "Tavsiya", value: "Qo'lda yeyishga qulay" }
    ],
    highlights: [
      { icon: "🍖", text: "Suyagi bilan ko'mirda pishirilgan yosh qo'y qovurg'asi" },
      { icon: "✨", text: "Tashqi chetlari qarsildoq, suyak oldi nihoyatda shirin" },
      { icon: "🔥", text: "Ko'mir tutuni va zira hidi bilan to'yingan" }
    ],
    videoUrl: "videos/qovurga.mp4"
  },
  {
    id: "sh-34",
    number: "№ 34",
    name: "To'rg'amchi yog`l",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 25000,
    desc: "Xushbo'y dumba bilan boyitilgan mayin to'rg'amchi lahm",
    moodBadge: "🥩 Maxsus To'rg'amchi",
    about: "O'rtacha kattalikda to'g'ralgan sara lahm bo'laklari mo'lroq mayin dumba bilan birga pishiriladi. Oddiy to'rg'amchiga qaraganda yanada to'yimliroq va ko'mir ustida jizillab turadigan ta'mga ega.",
    specs: [
      { label: "Tarkib", value: "Lahm + mo'l dumba" },
      { label: "Ta'mi", value: "To'yimli & boy" },
      { label: "Tavsiya", value: "Piyoz & non" }
    ],
    highlights: [
      { icon: "🥩", text: "Saralangan yirik lahm va shirali dumba nisbati" },
      { icon: "🔥", text: "Ko'mirda jizillab, yaltiroq tillarang tus oladi" },
      { icon: "🫖", text: "Issiq ko'k choy bilan hazm bo'lishi juda oson" }
    ],
    videoUrl: "videos/torghamchi-yogl-34.mp4"
  },
  {
    id: "sh-35",
    number: "№ 35",
    name: "Qo'y go'shti qiyma",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 22000,
    desc: "100% sara qo'y go'shti va dumbasidan tayyorlangan asl qiyma",
    moodBadge: "🐑 100% Qo'y Qiymasi",
    about: "Mol go'shti aralashtirilmagan, faqat 100% sara qo'y go'shti va dumba yog'idan tayyorlangan haqiqiy sharqona qiyma. O'ziga xos nozik qo'y go'shti ta'mi va yumshoqligi bilan ajralib turadi.",
    specs: [
      { label: "Go'sht", value: "100% qo'y go'shti" },
      { label: "Ta'mi", value: "Nozik & an'anaviy" },
      { label: "Tavsiya", value: "Ko'k choy bilan" }
    ],
    highlights: [
      { icon: "🐑", text: "Faqat toza qo'y go'shti va dumba yog'idan maydalangan" },
      { icon: "🌿", text: "Qo'y go'shtiga mos tabiiy zira va kashnich" },
      { icon: "🔥", text: "Issiqligida og'izda erib ketadigan mayin qiyma" }
    ],
    videoUrl: "videos/qoy-goshti-qiyma.mp4"
  },
  {
    id: "sh-1",
    number: "№ 1",
    name: "Dumba",
    category: "shashlik",
    categoryLabel: "Shashlik",
    price: 16000,
    desc: "Mangalda tillarang tusda pishirilgan qarsildoq dumba kabob",
    moodBadge: "🔥 Jizillagan Dumba",
    about: "Shashlikxo'rlarning sevimli qo'shimchasi! Yangi qo'y dumbasi yupqa bo'laklarda kesilib, tuz va zira sepilib ko'mirda tillarang, sirti qarsildoq va ichi mayin holatga kelguncha qovuriladi.",
    specs: [
      { label: "Tarkib", value: "100% qo'y dumbasi" },
      { label: "Tekstura", value: "Sirti qarsildoq" },
      { label: "Tavsiya", value: "Issiq non & tuz" }
    ],
    highlights: [
      { icon: "🔥", text: "Ko'mir cho'g'ida tillarang qarsildoq qilib pishirilgan" },
      { icon: "🧂", text: "Yirik tuz va xushbo'y zira bilan ta'mlangan" },
      { icon: "🫓", text: "Issiq tandir noni orasiga solib yeyish uchun a'lo" }
    ],
    videoUrl: "videos/dumba-shashlik.mp4"
  },

  // --- NON ---
  {
    id: "non-yarim",
    number: "",
    name: "Non (yarimta)",
    category: "non",
    categoryLabel: "Non",
    price: 3000,
    desc: "Tandirdan uzilgan issiq va mayin patir non (yarim bo'lak)",
    moodBadge: "🔥 Tandirdan Issiq",
    about: "Olovli loy tandirda pishirilgan, qora va oq kunjut sepilgan an'anaviy o'zbek patir nonining yarim bo'lagi. Bir kishilik tushlik yoki 2–3 six shashlik bilan yeyish uchun ayni muddao.",
    specs: [
      { label: "Porsiya", value: "Yarim patir" },
      { label: "Pishirish", value: "Loy tandir" },
      { label: "Tavsiya", value: "1 kishi uchun" }
    ],
    highlights: [
      { icon: "🫓", text: "Chetlari qarsildoq, o'rtasi esa mayin va yumshoq" },
      { icon: "🌱", text: "Usti qora sedana va qovurilgan kunjut bilan bezatilgan" },
      { icon: "🔥", text: "Kun davomida tandirdan yangi va issiq holda uziladi" }
    ],
    videoUrl: "videos/non-yarim.mp4",
    videoSharedUrl: "https://flow.google.com/shared/video/442c0b26-9313-4ebd-8881-744927cd9d86"
  },
  {
    id: "non-butun",
    number: "",
    name: "Non (butun)",
    category: "non",
    categoryLabel: "Non",
    price: 5000,
    desc: "Tandirdan yangi uzilgan barra patir non (butun)",
    moodBadge: "🔥 Barra Tandir Patir",
    about: "Markaziga chiroyli chekich naqshi urilgan, yuzasi yaltiroq tillarang va xushbo'y kunjutli butun o'zbek patir noni. Do'stlar va oila dasturxonida issiq shashliklar bilan bo'lishish uchun eng yaxshi tanlov.",
    specs: [
      { label: "Porsiya", value: "Butun patir" },
      { label: "Pishirish", value: "Loy tandir" },
      { label: "Tavsiya", value: "2–4 kishi uchun" }
    ],
    highlights: [
      { icon: "☀️", text: "Markazida an'anaviy chekich naqshli to'liq patir non" },
      { icon: "✨", text: "Yaltiroq tillarang po'stloq va mayin bug'doy mag'zi" },
      { icon: "🤝", text: "Shashlik shirasi va piyoz bilan dasturxon ko'rki" }
    ],
    videoUrl: "videos/non-butun.mp4",
    videoSharedUrl: "https://flow.google.com/shared/video/51abbd78-66c0-41a8-ac37-25b8bc08c206"
  },

  // --- CHOY ---
  {
    id: "choy-kok",
    number: "",
    name: "Ko'k choy",
    category: "choy",
    categoryLabel: "Choy",
    price: 3000,
    desc: "Xushbo'y damlangan milliy ko'k choy (chinni choynakda)",
    moodBadge: "🌿 Shashlik Hamrohi",
    about: "O'zbek dasturxonining ajralmas qismi — sara bargli № 95 ko'k choyi chinni choynakda qaynoq suvda damlab tortiladi. Yog'li qiyma, dumba va kachalka shashliklardan keyin oshqozonni yengillashtiradi.",
    specs: [
      { label: "Idish", value: "Chinni choynak + piyola" },
      { label: "Ta'mi", value: "Tetiklantiruvchi" },
      { label: "Tavsiya", value: "Barcha shashliklar bilan" }
    ],
    highlights: [
      { icon: "🌿", text: "Sara № 95 ko'k choy barglaridan yangi damlangan" },
      { icon: "🫖", text: "Issiqlikni saqlovchi milliy chinni choynak va piyolada" },
      { icon: "💚", text: "Yog'li go'sht taomlaridan keyin hazmni yengillashtiradi" }
    ],
    videoUrl: "videos/kok-choy.mp4"
  },
  {
    id: "choy-qora",
    number: "",
    name: "Qora choy",
    category: "choy",
    categoryLabel: "Choy",
    price: 3000,
    desc: "To'yingan quyuq qora choy (chinni choynakda)",
    moodBadge: "☕ To'yingan & Issiq",
    about: "Chuqur yoqut rangli, xushbo'y va baquvvat qora choy chinni choynakda qaytarib damlanadi. Salqin kunlarda isitadi va yangi tandir noni hamda shashlikdan keyingi suhbatlarga o'zgacha fayz beradi.",
    specs: [
      { label: "Idish", value: "Chinni choynak + piyola" },
      { label: "Ta'mi", value: "Quyuq & xushbo'y" },
      { label: "Tavsiya", value: "Issiq non bilan" }
    ],
    highlights: [
      { icon: "☕", text: "To'q yoqut rangli, quyuq va xushbo'y damlama" },
      { icon: "🫖", text: "Chinni choynak va milliy piyolada issiq tortiladi" },
      { icon: "⚡", text: "Kun davomida tetiklik va iliqlik bag'ishlaydi" }
    ],
    videoUrl: "videos/qora-choy.mp4"
  }
];

// Assign a distinct random frame timestamp (0.7s to 3.4s) for each item with video
MENU_DATA.forEach((item, idx) => {
  if (item.videoUrl) {
    const spread = (idx * 0.37 + (item.price % 11) * 0.17) % 2.7;
    item.randomSeekTime = (0.7 + spread).toFixed(1);
  }
});

// =============================================================================
// 2. Application State
// =============================================================================
const STATE = {
  currentCategory: "all",
  searchQuery: ""
};

// =============================================================================
// 3. Helper Functions
// =============================================================================

const USD_RATE = 12850; // 1 USD ≈ 12 850 UZS

/**
 * Format currency strictly as `XX 000 so'm`
 */
function formatCurrency(amount) {
  const numStr = Math.round(amount).toString();
  const formatted = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${formatted} so'm`;
}

/**
 * Format equivalent USD price
 */
function formatUSD(amount) {
  const usd = amount / USD_RATE;
  return `≈ $${usd.toFixed(2)}`;
}

/**
 * Normalize Uzbek strings for resilient searching
 */
function normalizeText(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[`'ʻʼ’]/g, "'")
    .replace(/o[']/g, "o'")
    .replace(/g[']/g, "g'")
    .trim();
}

/**
 * Visual sizzle spark bursts on user interaction
 */
function burstPlateSparks(rect) {
  if (typeof document === "undefined") return;
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const sparkCount = 8;
  for (let i = 0; i < sparkCount; i++) {
    const spark = document.createElement("div");
    spark.className = "plate-burst-spark";

    const angle = (i * (Math.PI * 2)) / sparkCount + (Math.random() * 0.4 - 0.2);
    const dist = 35 + Math.random() * 45;
    const bx = Math.cos(angle) * dist;
    const by = Math.sin(angle) * dist - 8;

    spark.style.left = `${centerX}px`;
    spark.style.top = `${centerY}px`;
    spark.style.setProperty("--bx", `${bx}px`);
    spark.style.setProperty("--by", `${by}px`);

    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 550);
  }
}

// =============================================================================
// 4. Modal Open & Close Logic
// =============================================================================

function openDishModal(itemId, event = null) {
  if (typeof document === "undefined") return;
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  // Sizzle burst sparks from clicked location
  if (event) {
    const target = event.currentTarget || event.target;
    if (target && target.getBoundingClientRect) {
      burstPlateSparks(target.getBoundingClientRect());
    }
  }

  const modal = document.getElementById("dishModal");
  const backdrop = document.getElementById("dishModalBackdrop");
  const title = document.getElementById("dishModalTitle");
  const number = document.getElementById("dishModalNumber");
  const cat = document.getElementById("dishModalCategory");
  const price = document.getElementById("dishModalPrice");
  const priceUSD = document.getElementById("dishModalPriceUSD");
  const desc = document.getElementById("dishModalDesc");
  const moodBadge = document.getElementById("dishModalMoodBadge");
  const specsEl = document.getElementById("dishModalSpecs");
  const featuresEl = document.getElementById("dishModalFeatures");
  const videoBadge = document.getElementById("dishModalVideoBadge");
  const flowBox = document.getElementById("dishModalFlowBox");
  const flowLink = document.getElementById("dishModalFlowLink");
  const vidElem = document.getElementById("dishModalVideo");

  if (title) title.textContent = item.name;
  if (number) {
    if (item.number) {
      number.textContent = item.number;
      number.style.display = "inline-flex";
    } else {
      number.style.display = "none";
    }
  }
  if (cat) cat.textContent = item.categoryLabel;
  if (moodBadge) moodBadge.textContent = item.moodBadge || "🔥 Olovda pishgan";
  if (price) price.textContent = formatCurrency(item.price);
  if (priceUSD) priceUSD.textContent = formatUSD(item.price);
  if (desc) desc.textContent = item.about || item.desc;

  // Render dish-specific quick specs
  if (specsEl) {
    if (item.specs && item.specs.length > 0) {
      specsEl.innerHTML = item.specs.map(s =>
        `<span class="dish-spec-chip"><span>${s.label}:</span> <strong>${s.value}</strong></span>`
      ).join("");
      specsEl.style.display = "flex";
    } else {
      specsEl.innerHTML = "";
      specsEl.style.display = "none";
    }
  }

  // Render dish-specific highlights
  if (featuresEl) {
    const highlights = item.highlights || [
      { icon: "✨", text: "Halol va 100% saralangan mahsulot" },
      { icon: "🔥", text: "Buyurtma berilgan zahoti yangi tayyorlanadi" }
    ];
    featuresEl.innerHTML = highlights.map(h => `
      <div class="feature-item">
        <span class="feature-icon">${h.icon}</span>
        <span class="feature-text">${h.text}</span>
      </div>
    `).join("");
  }

  // Configure video assets
  if (item.videoUrl) {
    if (videoBadge) videoBadge.style.display = "inline-flex";
    if (flowBox) {
      if (flowLink && item.videoSharedUrl) {
        flowLink.href = item.videoSharedUrl;
        flowBox.style.display = "block";
      } else {
        flowBox.style.display = "none";
      }
    }
    if (vidElem) {
      vidElem.src = item.videoUrl;
      vidElem.currentTime = 0;
    }
  } else {
    if (videoBadge) videoBadge.style.display = "none";
    if (flowBox) flowBox.style.display = "none";
    if (vidElem) {
      vidElem.pause();
      vidElem.removeAttribute("src");
      vidElem.load();
    }
  }

  if (modal && backdrop) {
    backdrop.style.display = "block";
    modal.style.display = "flex";
    void modal.offsetWidth;
    backdrop.classList.add("show");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";

    if (vidElem && item.videoUrl) {
      setTimeout(() => {
        vidElem.play().catch(() => {});
      }, 40);
    }
  }
}

function closeDishModal() {
  const modal = document.getElementById("dishModal");
  const backdrop = document.getElementById("dishModalBackdrop");
  const vidElem = document.getElementById("dishModalVideo");

  if (vidElem) {
    vidElem.pause();
  }

  if (modal && backdrop) {
    backdrop.classList.remove("show");
    modal.classList.remove("show");
    setTimeout(() => {
      backdrop.style.display = "none";
      modal.style.display = "none";
      document.body.style.overflow = "";
      if (vidElem) {
        vidElem.removeAttribute("src");
        vidElem.load();
      }
    }, 280);
  }
}

// Make functions globally accessible
if (typeof window !== "undefined") {
  window.openDishModal = openDishModal;
  window.closeDishModal = closeDishModal;
}

// =============================================================================
// 7. Menu Filter & Render Logic
// =============================================================================

function getFilteredMenu() {
  const normalizedQuery = normalizeText(STATE.searchQuery);

  return MENU_DATA.filter(item => {
    const categoryMatches = (STATE.currentCategory === "all") || (item.category === STATE.currentCategory);
    if (!categoryMatches) return false;

    if (!normalizedQuery) return true;

    const normalizedName = normalizeText(item.name);
    const normalizedDesc = normalizeText(item.desc);
    const rawNumberDigits = item.number ? item.number.replace(/\D/g, "") : "";

    return (
      normalizedName.includes(normalizedQuery) ||
      normalizedDesc.includes(normalizedQuery) ||
      (item.number && item.number.toLowerCase().includes(normalizedQuery)) ||
      (rawNumberDigits && rawNumberDigits.includes(normalizedQuery))
    );
  });
}

function renderMenuGrid() {
  if (typeof document === "undefined") return;

  const grid = document.getElementById("menuGrid");
  const emptyState = document.getElementById("noResultsState");
  const resultsCount = document.getElementById("resultsCount");
  const sectionTitle = document.getElementById("sectionTitle");

  if (!grid || !emptyState || !resultsCount || !sectionTitle) return;

  const filteredItems = getFilteredMenu();

  // Update headers
  if (STATE.searchQuery.trim()) {
    sectionTitle.textContent = `Qidiruv natijalari: "${STATE.searchQuery.trim()}"`;
  } else {
    switch (STATE.currentCategory) {
      case "shashlik":
        sectionTitle.textContent = "Shashlik & Kabob (№ 1–36)";
        break;
      case "non":
        sectionTitle.textContent = "Non mahsulotlari";
        break;
      case "choy":
        sectionTitle.textContent = "Choy & Ichimliklar";
        break;
      default:
        sectionTitle.textContent = "Barcha taomlar";
    }
  }

  resultsCount.textContent = `${filteredItems.length} ta taom`;

  if (filteredItems.length === 0) {
    grid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  grid.innerHTML = filteredItems.map(item => {
    const rawNum = item.number ? item.number.replace(/\D/g, "") : "";
    const watermark = rawNum || (item.category === "non" ? "NON" : (item.category === "choy" ? "CHOY" : ""));

    const badgeHtml = item.number
      ? `<span class="item-num-badge">${item.number}</span>`
      : `<span class="category-pill">${item.categoryLabel}</span>`;

    let highlightBadge = "";
    if (item.name.includes("Dubayski")) highlightBadge = `<span class="card-badge-tag tag-special">✨ Maxsus</span>`;
    else if (item.name.includes("G`ijdivon")) highlightBadge = `<span class="card-badge-tag tag-hit">⭐ Xit</span>`;
    else if (item.name.includes("Mozrarella")) highlightBadge = `<span class="card-badge-tag tag-cheese">🧀 Mozzarella</span>`;
    else if (item.name.includes("Achchiq")) highlightBadge = `<span class="card-badge-tag tag-spicy">🌶️ O'tkir</span>`;
    else if (item.name.includes("Kavkaz (mol")) highlightBadge = `<span class="card-badge-tag tag-meat">🥩 Sara Go'sht</span>`;
    else if (item.name.includes("Dollar")) highlightBadge = `<span class="card-badge-tag tag-premium">👑 Premium</span>`;
    else if (item.name.includes("Tabaki")) highlightBadge = `<span class="card-badge-tag tag-crisp">🍗 Qarsildoq</span>`;
    else if (item.id === "non-butun") highlightBadge = `<span class="card-badge-tag tag-special">🔥 Tandir</span>`;
    else if (item.id === "choy-kok") highlightBadge = `<span class="card-badge-tag tag-hit">🌿 Milliy</span>`;

    const videoBadge = item.videoUrl ? `<span class="card-badge-tag tag-video">🎬 Video</span>` : "";
    const seekTime = item.randomSeekTime || "1.5";

    const showcaseHtml = `
      <!-- Live Video Random Frame Showcase -->
      <div class="card-dish-showcase" title="Jonli video ko'rish uchun bosing">
        <div class="dish-glow-aura"></div>
        <div class="dish-video-frame-container">
          <video class="dish-card-video" src="${item.videoUrl}#t=${seekTime}" data-seek="${seekTime}" preload="metadata" muted playsinline loop></video>
          <div class="video-card-overlay-tag">
            <span class="live-dot-mini"></span>
            <span>HD KADR</span>
          </div>
          <div class="dish-steam-fx">
            <span class="steam-curl"></span>
            <span class="steam-curl"></span>
            <span class="steam-curl"></span>
          </div>
        </div>
      </div>
    `;

    return `
      <article class="menu-card" data-id="${item.id}" onclick="openDishModal('${item.id}', event)">
        <div class="card-watermark">${watermark}</div>
        <div class="card-ambient-beam"></div>

        ${showcaseHtml}

        <div class="card-info-content">
          <div class="card-top">
            <div class="item-badge-wrap">
              ${badgeHtml}
              ${highlightBadge}
              ${videoBadge}
              <span class="category-pill">${item.categoryLabel}</span>
            </div>
            <div class="item-price-wrap">
              <span class="item-price">${formatCurrency(item.price)}</span>
              <span class="item-price-usd">${formatUSD(item.price)}</span>
            </div>
          </div>
          <div class="card-body">
            <h3 class="item-name">${item.name}</h3>
            <p class="item-desc">${item.desc}</p>
          </div>
        </div>
        <div class="card-action-bar">
          <button class="btn-card-video" style="width: 100%;" type="button" onclick="event.stopPropagation(); openDishModal('${item.id}', event)" aria-label="${item.name} jonli video" title="Jonli HD videoni ko'rish">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 4 20 12 6 20 6 4"/>
            </svg>
            <span>Videoni Ko'rish</span>
          </button>
        </div>
      </article>
    `;
  }).join("");

  // Seek and freeze each video card to its unique random frame
  initCardVideoRandomFrames();
}

/**
 * Initializes random frame seeking and interactive hover playback for dish video cards
 */
function initCardVideoRandomFrames() {
  if (typeof document === "undefined") return;

  const cardVideos = document.querySelectorAll(".dish-card-video");
  cardVideos.forEach(vid => {
    const targetTime = parseFloat(vid.dataset.seek) || 1.5;

    const applySeek = () => {
      try {
        vid.currentTime = targetTime;
      } catch (e) {}
    };

    if (vid.readyState >= 1) {
      applySeek();
    } else {
      vid.addEventListener("loadedmetadata", applySeek, { once: true });
    }

    // Interactive Hover Preview: plays the video when hovering on the card
    const card = vid.closest(".menu-card");
    if (card && !card.dataset.hoverWired) {
      card.dataset.hoverWired = "true";
      card.addEventListener("mouseenter", () => {
        vid.play().catch(() => {});
      });
      card.addEventListener("mouseleave", () => {
        vid.pause();
        try {
          vid.currentTime = targetTime;
        } catch (e) {}
      });
    }
  });
}

function updateCategoryCounts() {
  if (typeof document === "undefined") return;

  const countAll = MENU_DATA.length;
  const countShashlik = MENU_DATA.filter(i => i.category === "shashlik").length;
  const countNon = MENU_DATA.filter(i => i.category === "non").length;
  const countChoy = MENU_DATA.filter(i => i.category === "choy").length;

  const elAll = document.getElementById("countAll");
  const elShashlik = document.getElementById("countShashlik");
  const elNon = document.getElementById("countNon");
  const elChoy = document.getElementById("countChoy");

  if (elAll) elAll.textContent = countAll;
  if (elShashlik) elShashlik.textContent = countShashlik;
  if (elNon) elNon.textContent = countNon;
  if (elChoy) elChoy.textContent = countChoy;
}

/**
 * Interactive 3D Card Parallax on Mouse Move
 */
function initCardParallax() {
  const menuGrid = document.getElementById("menuGrid");
  if (!menuGrid) return;

  menuGrid.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".menu-card");
    if (!card) return;
    const stage = card.querySelector(".dish-stage-3d");
    const shadow = card.querySelector(".dish-ambient-shadow");
    const glow = card.querySelector(".dish-glow-aura");
    if (!stage) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 14;

    stage.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(12px)`;

    if (shadow) {
      const shadowX = ((x - centerX) / centerX) * -12;
      const shadowY = ((y - centerY) / centerY) * -6 + 3;
      shadow.style.transform = `translateX(calc(-50% + ${shadowX.toFixed(1)}px)) translateY(${shadowY.toFixed(1)}px) scale(0.96)`;
    }

    if (glow) {
      const glowX = ((x - centerX) / centerX) * 16;
      const glowY = ((y - centerY) / centerY) * 12;
      glow.style.transform = `translate(${glowX.toFixed(1)}px, ${glowY.toFixed(1)}px)`;
    }
  });

  menuGrid.addEventListener("mouseleave", (e) => {
    const card = e.target.closest(".menu-card");
    if (!card) return;
    const stage = card.querySelector(".dish-stage-3d");
    const shadow = card.querySelector(".dish-ambient-shadow");
    const glow = card.querySelector(".dish-glow-aura");
    if (stage) stage.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    if (shadow) shadow.style.transform = "translateX(-50%) translateY(0px) scale(1)";
    if (glow) glow.style.transform = "translate(0px, 0px)";
  }, true);
}

// =============================================================================
// 8. Live Background & Cursor Atmosphere
// =============================================================================

function initEmberBackground() {
  if (typeof document === "undefined") return;
  const canvas = document.getElementById("emberBgCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = 45;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.6 + 0.25,
      speedX: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.65 + 0.25,
      phase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.4 ? "#ff5252" : (Math.random() > 0.5 ? "#ffb74d" : "#ff7043")
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderEmbers() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      p.y -= p.speedY;
      p.x += Math.sin(p.phase) * 0.35 + p.speedX;
      p.phase += 0.02;

      // Mouse proximity deflection
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 110) {
        const force = (110 - dist) / 110;
        p.x += (dx / dist) * force * 2.5;
        p.y += (dy / dist) * force * 2.5;
      }

      // Reset when particle reaches top
      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      ctx.save();
      ctx.globalAlpha = p.opacity * (0.8 + 0.2 * Math.sin(p.phase * 2));
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(renderEmbers);
  }

  renderEmbers();
}

function initCursorSpotlight() {
  if (typeof document === "undefined") return;
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });

  function animateSpotlight() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    glow.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animateSpotlight);
  }

  animateSpotlight();
}

// =============================================================================
// 9. Application Initialization
// =============================================================================

function initApp() {
  initEmberBackground();
  initCursorSpotlight();
  updateCategoryCounts();
  renderMenuGrid();
  initCardParallax();

  // Search input with debounce
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      STATE.searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = STATE.searchQuery ? "flex" : "none";
      }
      renderMenuGrid();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      STATE.searchQuery = "";
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      clearSearchBtn.style.display = "none";
      renderMenuGrid();
    });
  }

  // Category filter tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.currentCategory = btn.getAttribute("data-category");
      renderMenuGrid();
    });
  });

  // Reset filter button in empty state
  const resetFilterBtn = document.getElementById("resetFilterBtn");
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener("click", () => {
      STATE.searchQuery = "";
      STATE.currentCategory = "all";

      if (searchInput) searchInput.value = "";
      if (clearSearchBtn) clearSearchBtn.style.display = "none";

      tabButtons.forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-category") === "all");
      });

      renderMenuGrid();
    });
  }

  // Modal Close Triggers
  const closeDishModalBtn = document.getElementById("closeDishModalBtn");
  const dishModalBackdrop = document.getElementById("dishModalBackdrop");
  if (closeDishModalBtn) closeDishModalBtn.addEventListener("click", closeDishModal);
  if (dishModalBackdrop) dishModalBackdrop.addEventListener("click", closeDishModal);

  // Keyboard accessibility
  document.addEventListener("keydown", (e) => {
    // Esc closes 3D modal
    if (e.key === "Escape") {
      closeDishModal();
    }
    // '/' key focuses search bar (if not typing in input)
    if (e.key === "/" && document.activeElement !== searchInput && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        window.scrollTo({ top: searchInput.offsetTop - 80, behavior: "smooth" });
      }
    }
  });
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
}

// Export for module/Node testing if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = { MENU_DATA, formatCurrency, normalizeText };
}
