import { DairyProduct, DeliveryOptionItem, LocalizedText } from '../types';

/**
 * ============================================================================
 * SINDHU AKULA – Dairy & Farms
 * CENTRALIZED EDITABLE FARM CATALOG, DEMO PRICING & DELIVERY CONFIGURATION
 * ============================================================================
 * Update this single file to adjust:
 * - Farm contact & WhatsApp details
 * - Product descriptions, pack sizes, and prices
 * - Delivery areas, timings, minimum order, charges, and free delivery threshold
 *
 * NOTE: All prices and delivery numbers below are clearly marked in the UI
 * as DEMO INFORMATION until confirmed by the farm owner.
 */

export const FARM_CONTACT = {
  brandName: 'SINDHU AKULA',
  brandSubtitle: {
    en: 'Dairy & Farms',
    te: 'డైరీ & ఫార్మ్స్',
    hi: 'डेयरी एंड फ़ार्म्स',
  } as LocalizedText,
  /** Replace with the actual WhatsApp business number (country code + number, no + or spaces) */
  whatsappNumber: '919876543210',
  /** Display placeholder phone number */
  phoneDisplay: '+91 98765 43210 (Placeholder)',
  emailDisplay: 'enquiries@sindhuakulafarms.example',
  locationDisplay: {
    en: 'Farm Location Placeholder — Village / Mandal, District, India',
    te: 'ఫార్మ్ చిరునామా ప్లేస్‌హోల్డర్ — గ్రామం / మండలం, జిల్లా',
    hi: 'फ़ार्म स्थान प्लेसहोल्डर — गाँव / मंडल, ज़िला, भारत',
  } as LocalizedText,
  visitingHours: {
    en: 'Morning & Evening Enquiry Hours (To be confirmed by farm)',
    te: 'ఉదయం & సాయంత్రం విచారణ సమయాలు (ఫార్మ్ ద్వారా నిర్ధారించబడుతుంది)',
    hi: 'सुबह और शाम पूछताछ समय (फ़ार्म द्वारा पुष्टि की जाएगी)',
  } as LocalizedText,
};

export const DEMO_PRICING_META = {
  isDemoPricing: true,
  badgeLabel: {
    en: 'DEMO PRICE',
    te: 'డెమో ధర',
    hi: 'डेमो मूल्य',
  } as LocalizedText,
  noticeText: {
    en: 'All prices, pack weights, and delivery terms shown below are editable demo placeholders until confirmed by the farm owner.',
    te: 'క్రింద చూపిన ధరలు, ప్యాక్ పరిమాణాలు మరియు డెలివరీ వివరాలు ఫార్మ్ యజమాని నిర్ధారించే వరకు నమూనా (డెమో) వివరాలు మాత్రమే.',
    hi: 'नीचे दिखाए गए सभी मूल्य, पैक आकार और डिलीवरी विवरण फ़ार्म स्वामी द्वारा पुष्टि किए जाने तक केवल संपादन योग्य डेमो जानकारी हैं।',
  } as LocalizedText,
};

export const PRODUCTS: DairyProduct[] = [
  {
    id: 'fresh-milk',
    image: '/images/product-milk.jpg',
    name: {
      en: 'Fresh Milk',
      te: 'తాజా పాలు',
      hi: 'ताज़ा दूध',
    },
    categoryTag: {
      en: 'Daily Farm Essential',
      te: 'రోజువారీ తాజా పాలు',
      hi: 'दैनिक फ़ार्म ताज़ा',
    },
    shortDescription: {
      en: 'Pure, wholesome farm milk handled hygienically and delivered fresh for your family’s daily nourishment.',
      te: 'మీ కుటుంబం యొక్క రోజువారీ పోషణ కోసం శుభ్రంగా మరియు తాజాగా అందించే స్వచ్ఛమైన ఫార్మ్ పాలు.',
      hi: 'आपके परिवार के दैनिक पोषण के लिए स्वच्छता से संभाला गया शुद्ध और ताज़ा फ़ार्म दूध।',
    },
    freshnessNote: {
      en: 'Morning & evening batches',
      te: 'ఉదయం & సాయంత్రం బ్యాచ్‌లు',
      hi: 'सुबह और शाम के बैच',
    },
    packSizes: [
      {
        id: 'milk-500ml',
        label: { en: '500 ml', te: '500 మి.లీ.', hi: '500 मिली' },
        demoPriceInr: 35,
      },
      {
        id: 'milk-1l',
        label: { en: '1 Litre', te: '1 లీటర్', hi: '1 लीटर' },
        demoPriceInr: 68,
      },
    ],
  },
  {
    id: 'pure-ghee',
    image: '/images/product-ghee.jpg',
    name: {
      en: 'Pure Ghee',
      te: 'స్వచ్ఛమైన నెయ్యి',
      hi: 'शुद्ध घी',
    },
    categoryTag: {
      en: 'Aromatic & Rich',
      te: 'సువాసనగల స్వచ్ఛత',
      hi: 'सुगंधित एवं समृद्ध',
    },
    shortDescription: {
      en: 'Golden, rich-textured farm ghee prepared with care in small batches for traditional flavour and aroma.',
      te: 'సంప్రదాయ రుచి మరియు సువాసన కోసం చిన్న బ్యాచ్‌లలో శ్రద్ధతో తయారుచేసిన బంగారు రంగు ఫార్మ్ నెయ్యి.',
      hi: 'पारंपरिक स्वाद और सुगंध के लिए छोटे बैच में सावधानी से तैयार सुनहरा दानेदार शुद्ध घी।',
    },
    freshnessNote: {
      en: 'Small-batch preparation',
      te: 'చిన్న బ్యాచ్‌లలో తయారీ',
      hi: 'छोटे बैच में तैयार',
    },
    packSizes: [
      {
        id: 'ghee-250g',
        label: { en: '250 g', te: '250 గ్రా.', hi: '250 ग्राम' },
        demoPriceInr: 340,
      },
      {
        id: 'ghee-500g',
        label: { en: '500 g', te: '500 గ్రా.', hi: '500 ग्राम' },
        demoPriceInr: 660,
      },
    ],
  },
  {
    id: 'fresh-curd',
    image: '/images/product-curd.jpg',
    name: {
      en: 'Fresh Curd',
      te: 'తాజా పెరుగు',
      hi: 'ताज़ा दही',
    },
    categoryTag: {
      en: 'Thick & Creamy',
      te: 'చిక్కని & రుచికరమైనది',
      hi: 'गाढ़ा और मलाईदार',
    },
    shortDescription: {
      en: 'Naturally set, mild and creamy curd crafted from fresh farm milk for wholesome everyday meals.',
      te: 'రోజువారీ భోజనం కోసం తాజా ఫార్మ్ పాలతో సహజంగా తోడుపెట్టిన చిక్కని, మృదువైన పెరుగు.',
      hi: 'दैनिक भोजन के लिए ताज़े फ़ार्म दूध से प्राकृतिक रूप से जमाया गया गाढ़ा और मलाईदार दही।',
    },
    freshnessNote: {
      en: 'Freshly set daily',
      te: 'ప్రతిరోజూ తాజాగా తోడుపెట్టినది',
      hi: 'प्रतिदिन ताज़ा जमाया हुआ',
    },
    packSizes: [
      {
        id: 'curd-500g',
        label: { en: '500 g', te: '500 గ్రా.', hi: '500 ग्राम' },
        demoPriceInr: 45,
      },
      {
        id: 'curd-1kg',
        label: { en: '1 kg', te: '1 కిలో', hi: '1 किग्रा' },
        demoPriceInr: 85,
      },
    ],
  },
  {
    id: 'paneer',
    image: '/images/product-paneer.jpg',
    name: {
      en: 'Paneer',
      te: 'తాజా పనీర్',
      hi: 'ताज़ा पनीर',
    },
    categoryTag: {
      en: 'Soft & Fresh',
      te: 'మృదువైనది & తాజాది',
      hi: 'मुलायम और ताज़ा',
    },
    shortDescription: {
      en: 'Soft, delicate cottage cheese made fresh from farm milk—tender in texture and ideal for home cooking.',
      te: 'ఫార్మ్ పాలతో తాజాగా తయారుచేసిన మృదువైన పనీర్—ఇంటి వంటకాలకు ఎంతో అనువైనది.',
      hi: 'फ़ार्म दूध से ताज़ा बना मुलायम और स्वादिष्ट पनीर—घरेलू व्यंजनों के लिए उत्तम।',
    },
    freshnessNote: {
      en: 'Prepared on order',
      te: 'ఆర్డర్‌పై తాజాగా తయారీ',
      hi: 'ऑर्डर पर ताज़ा तैयार',
    },
    packSizes: [
      {
        id: 'paneer-200g',
        label: { en: '200 g', te: '200 గ్రా.', hi: '200 ग्राम' },
        demoPriceInr: 95,
      },
      {
        id: 'paneer-500g',
        label: { en: '500 g', te: '500 గ్రా.', hi: '500 ग्राम' },
        demoPriceInr: 230,
      },
    ],
  },
  {
    id: 'butter',
    image: '/images/product-butter.jpg',
    name: {
      en: 'Butter',
      te: 'తాజా వెన్న',
      hi: 'ताज़ा मक्खन',
    },
    categoryTag: {
      en: 'Freshly Churned',
      te: 'తాజాగా చిలికినది',
      hi: 'ताज़ा मथा हुआ',
    },
    shortDescription: {
      en: 'Smooth, freshly churned dairy butter with a delicate natural richness for breakfast and cooking.',
      te: 'అల్పాహారం మరియు వంటల కోసం సహజమైన రుచితో తాజాగా చిలికిన మృదువైన వెన్న.',
      hi: 'नाश्ते और रसोई के लिए प्राकृतिक स्वाद से भरपूर ताज़ा मथा हुआ मलाईदार मक्खन।',
    },
    freshnessNote: {
      en: 'Churned in small lots',
      te: 'చిన్న బ్యాచ్‌లలో చిలికినది',
      hi: 'छोटे लॉट में मथा हुआ',
    },
    packSizes: [
      {
        id: 'butter-100g',
        label: { en: '100 g', te: '100 గ్రా.', hi: '100 ग्राम' },
        demoPriceInr: 75,
      },
      {
        id: 'butter-500g',
        label: { en: '500 g', te: '500 గ్రా.', hi: '500 ग्राम' },
        demoPriceInr: 350,
      },
    ],
  },
  {
    id: 'buttermilk',
    image: '/images/product-buttermilk.jpg',
    name: {
      en: 'Buttermilk',
      te: 'తాజా మజ్జిగ',
      hi: 'ताज़ा छाछ',
    },
    categoryTag: {
      en: 'Cool & Refreshing',
      te: 'చల్లని & ఉత్సాహభరితం',
      hi: 'शीतल और ताज़गी भरा',
    },
    shortDescription: {
      en: 'Light, refreshing farm buttermilk churned gently from fresh curd—cooling, soothing, and comforting.',
      te: 'తాజా పెరుగు నుండి మృదువుగా చిలికిన తేలికపాటి, చల్లని మరియు ఆరోగ్యకరమైన ఫార్మ్ మజ్జిగ.',
      hi: 'ताज़े दही से हल्के हाथों से मथी गई शीतल, सुपाच्य और ताज़गी भरी फ़ार्म छाछ।',
    },
    freshnessNote: {
      en: 'Chilled & ready to serve',
      te: 'చల్లగా & సేవకు సిద్ధం',
      hi: 'ठंडी और परोसने के लिए तैयार',
    },
    packSizes: [
      {
        id: 'buttermilk-200ml',
        label: { en: '200 ml', te: '200 మి.లీ.', hi: '200 मिली' },
        demoPriceInr: 20,
      },
      {
        id: 'buttermilk-500ml',
        label: { en: '500 ml', te: '500 మి.లీ.', hi: '500 मिली' },
        demoPriceInr: 45,
      },
    ],
  },
];

export const DELIVERY_CONFIG = {
  isDemoInfo: true,
  minimumOrderAmountInr: 150,
  deliveryChargeInr: 25,
  freeDeliveryThresholdInr: 350,
  deliveryAreas: {
    en: 'Local Town & Nearby Neighbourhoods (Demo Area — Editable by Farm Owner)',
    te: 'స్థానిక పట్టణం & సమీప కాలనీలు (డెమో ప్రాంతం — ఫార్మ్ యజమాని మార్చవచ్చు)',
    hi: 'स्थानीय शहर और आस-पास के क्षेत्र (डेमो क्षेत्र — फ़ार्म स्वामी द्वारा संपादन योग्य)',
  } as LocalizedText,
  deliveryTimings: {
    en: 'Morning: 6:00 AM – 8:30 AM  |  Evening: 5:00 PM – 7:00 PM (Demo Timings)',
    te: 'ఉదయం: 6:00 – 8:30  |  సాయంత్రం: 5:00 – 7:00 (డెమో సమయాలు)',
    hi: 'सुबह: 6:00 – 8:30  |  शाम: 5:00 – 7:00 (डेमो समय)',
  } as LocalizedText,
  farmPickupNote: {
    en: 'Direct collection available at the farm counter during morning & evening hours (Demo Schedule).',
    te: 'ఉదయం & సాయంత్రం వేళల్లో ఫార్మ్ కౌంటర్ వద్ద నేరుగా తీసుకోవచ్చు (డెమో షెడ్యూల్).',
    hi: 'सुबह और शाम के समय फ़ार्म काउंटर से सीधे संग्रह उपलब्ध (डेमो समय-सारणी)।',
  } as LocalizedText,
};

export const DELIVERY_OPTIONS: DeliveryOptionItem[] = [
  {
    id: 'home-delivery',
    title: {
      en: 'Home Delivery',
      te: 'హోమ్ డెలివరీ',
      hi: 'होम डिलीवरी',
    },
    highlightTag: {
      en: 'Doorstep Drop',
      te: 'ఇంటి వద్దకే',
      hi: 'घर तक सेवा',
    },
    summary: {
      en: 'Fresh dairy brought straight to your doorstep in insulated packs.',
      te: 'తాజా పాల ఉత్పత్తులు మీ ఇంటి గుమ్మం వద్దకే సురక్షితంగా చేరుతాయి.',
      hi: 'ताज़े डेयरी उत्पाद सीधे आपके घर के दरवाज़े तक पहुँचाए जाते हैं।',
    },
    howItWorks: {
      en: 'Send your enquiry with address and preferred slot. We confirm route availability on WhatsApp before dispatch.',
      te: 'మీ చిరునామా మరియు సమయంతో విచారణ పంపండి. పంపే ముందు మేము వాట్సాప్‌లో రూట్ అందుబాటును నిర్ధారిస్తాము.',
      hi: 'अपने पते और पसंदीदा समय के साथ पूछताछ भेजें। भेजने से पहले हम व्हाट्सएप पर रूट की उपलब्धता की पुष्टि करते हैं।',
    },
  },
  {
    id: 'farm-pickup',
    title: {
      en: 'Farm Pickup',
      te: 'ఫార్మ్ పికప్',
      hi: 'फ़ार्म पिकअप',
    },
    highlightTag: {
      en: 'Zero Delivery Fee',
      te: 'డెలివరీ ఛార్జీ లేదు',
      hi: 'कोई डिलीवरी शुल्क नहीं',
    },
    summary: {
      en: 'Visit the farm counter directly to collect your reserved batch.',
      te: 'నేరుగా ఫార్మ్‌కు వచ్చి మీ కోసం సిద్ధం చేసిన తాజా ఉత్పత్తులను తీసుకెళ్లండి.',
      hi: 'अपने आरक्षित बैच को लेने के लिए सीधे फ़ार्म काउंटर पर आएं।',
    },
    howItWorks: {
      en: 'Reserve your quantity via the enquiry form or WhatsApp, and pick it up fresh during scheduled farm hours.',
      te: 'విచారణ ఫారమ్ లేదా వాట్సాప్ ద్వారా ఆర్డర్ నమోదు చేసి, నిర్ణీత సమయాల్లో ఫార్మ్ నుండి తాజాగా తీసుకోండి.',
      hi: 'पूछताछ फ़ॉर्म या व्हाट्सएप के माध्यम से मात्रा आरक्षित करें और निर्धारित समय पर फ़ार्म से ताज़ा प्राप्त करें।',
    },
  },
  {
    id: 'daily-subscription',
    title: {
      en: 'Daily Milk Subscription',
      te: 'రోజువారీ పాల సబ్‌స్క్రిప్షన్',
      hi: 'दैनिक दूध सदस्यता',
    },
    highlightTag: {
      en: 'Morning Routine',
      te: 'ప్రతిరోజూ ఉదయం',
      hi: 'दैनिक सुबह सेवा',
    },
    summary: {
      en: 'Set a simple recurring morning or evening quantity for your household.',
      te: 'మీ ఇంటి అవసరాలకు అనుగుణంగా ప్రతిరోజూ ఉదయం లేదా సాయంత్రం పాల సరఫరా.',
      hi: 'अपने परिवार के लिए सुबह या शाम की नियमित दूध मात्रा आसानी से तय करें।',
    },
    howItWorks: {
      en: 'Enquire once with your daily litre requirement and pause or adjust anytime via a quick WhatsApp message.',
      te: 'మీ రోజువారీ అవసరాన్ని ఒకసారి తెలియజేయండి; వాట్సాప్ సందేశంతో ఎప్పుడైనా మార్పులు చేసుకోవచ్చు.',
      hi: 'अपनी दैनिक आवश्यकता एक बार बताएं और व्हाट्सएप संदेश से कभी भी मात्रा बदलें या रोकें।',
    },
  },
  {
    id: 'bulk-orders',
    title: {
      en: 'Bulk Orders',
      te: 'బల్క్ ఆర్డర్లు',
      hi: 'थोक एवं समारोह ऑर्डर',
    },
    highlightTag: {
      en: 'Events & Families',
      te: 'వేడుకలు & కుటుంబాలు',
      hi: 'समारोह व विशेष अवसर',
    },
    summary: {
      en: 'Custom quantities of milk, curd, paneer, and ghee for family gatherings and events.',
      te: 'పండుగలు, శుభకార్యాలు మరియు విందుల కోసం ప్రత్యేక పరిమాణాలలో పాలు, పెరుగు, పనీర్ & నెయ్యి.',
      hi: 'पारिवारिक समारोहों और आयोजनों के लिए दूध, दही, पनीर और घी की विशेष मात्रा।',
    },
    howItWorks: {
      en: 'Share your event date and required quantities in advance so we can prepare a dedicated fresh batch.',
      te: 'మీ కార్యక్రమ తేదీ మరియు అవసరమైన పరిమాణాన్ని ముందుగా తెలియజేస్తే ప్రత్యేక తాజా బ్యాచ్ సిద్ధం చేస్తాము.',
      hi: 'अपने कार्यक्रम की तिथि और आवश्यक मात्रा पहले से साझा करें ताकि हम आपके लिए ताज़ा बैच तैयार रख सकें।',
    },
  },
];
