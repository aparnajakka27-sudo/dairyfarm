import { Language } from '../types';

export interface Translations {
  nav: {
    home: string;
    products: string;
    pricing: string;
    delivery: string;
    farm: string;
    promise: string;
    contact: string;
    whatsappCta: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
    scrollHint: string;
    editorialNote: string;
  };
  trust: {
    eyebrow: string;
    heading: string;
    items: {
      title: string;
      description: string;
      meta: string;
    }[];
  };
  productPreview: {
    eyebrow: string;
    heading: string;
    subheading: string;
    viewPricingCta: string;
    enquireItemCta: string;
  };
  pricingSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    demoBannerTitle: string;
    packSizeLabel: string;
    priceLabel: string;
    orderNowCta: string;
    perPackNote: string;
    addAndOpenCta: string;
  };
  farmStory: {
    eyebrow: string;
    heading: string;
    lead: string;
    body1: string;
    body2: string;
    cta: string;
    expandedNote: string;
    pillars: {
      label: string;
      value: string;
    }[];
  };
  deliverySection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    demoTag: string;
    howItWorksLabel: string;
    infoTitle: string;
    areasLabel: string;
    timingsLabel: string;
    minOrderLabel: string;
    deliveryChargeLabel: string;
    freeDeliveryLabel: string;
    pickupNoteLabel: string;
    freeAbovePrefix: string;
    enquireDeliveryCta: string;
  };
  whyChooseUs: {
    eyebrow: string;
    heading: string;
    subheading: string;
    editableNote: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  gallery: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: {
      title: string;
      caption: string;
    }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    whatsappCardTitle: string;
    whatsappCardDesc: string;
    whatsappButton: string;
    phoneLabel: string;
    locationLabel: string;
    hoursLabel: string;
    emailLabel: string;
    openOrderFormCta: string;
    placeholderNote: string;
  };
  footer: {
    tagline: string;
    navigationTitle: string;
    contactTitle: string;
    languageTitle: string;
    socialTitle: string;
    socialPlaceholderNote: string;
    demoDisclaimer: string;
    copyright: string;
  };
  orderModal: {
    title: string;
    subtitle: string;
    demoNotice: string;
    selectProductLabel: string;
    packSizeLabel: string;
    quantityLabel: string;
    addAnotherLabel: string;
    itemsInEnquiryLabel: string;
    removeLabel: string;
    deliveryMethodLabel: string;
    homeDeliveryLabel: string;
    farmPickupLabel: string;
    customerNameLabel: string;
    customerNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    addressLabel: string;
    addressPlaceholder: string;
    pickupNote: string;
    notesLabel: string;
    notesPlaceholder: string;
    summaryTitle: string;
    itemsSubtotalLabel: string;
    estimatedDeliveryLabel: string;
    freeDeliveryUnlocked: string;
    pickupFreeLabel: string;
    minOrderHint: string;
    estimatedTotalLabel: string;
    demoPriceSuffix: string;
    submitWhatsappCta: string;
    disclaimerFooter: string;
    validationMissing: string;
    closeLabel: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      products: 'Our Products',
      pricing: 'Pricing',
      delivery: 'Delivery',
      farm: 'Our Farm',
      promise: 'Our Promise',
      contact: 'Contact',
      whatsappCta: 'WhatsApp Enquiry',
    },
    hero: {
      eyebrow: 'SINDHU AKULA • DAIRY & FARMS',
      heading: 'Pure Goodness. Every Single Day.',
      subheading: 'Bringing the goodness of fresh dairy closer to your home.',
      primaryCta: 'Explore Our Products',
      secondaryCta: 'Contact Our Farm',
      scrollHint: 'Scroll to discover',
      editorialNote: 'Fresh Farm Dairy • Daily Kitchen Essentials',
    },
    trust: {
      eyebrow: 'FOUNDATION OF CARE',
      heading: 'Rooted in attentive farming, clean dairy craft, and direct conversation.',
      items: [
        {
          title: 'Farm & Animal Care',
          description:
            'Well-ventilated shelters, clean drinking water, balanced fodder, and calm daily routines for healthy dairy cattle.',
          meta: 'Editable Farm Practice',
        },
        {
          title: 'Dairy Products',
          description:
            'A focused range of everyday essentials—Fresh Milk, Pure Ghee, Fresh Curd, Paneer, Butter, and Buttermilk—prepared cleanly.',
          meta: 'Six Core Offerings',
        },
        {
          title: 'Easy Customer Enquiries',
          description:
            'Direct WhatsApp and phone communication with the farm—no complex checkout barriers, just simple personal coordination.',
          meta: 'Direct Farm Response',
        },
      ],
    },
    productPreview: {
      eyebrow: 'OUR DAIRY RANGE',
      heading: 'Wholesome Essentials, Crafted for Everyday Kitchens',
      subheading:
        'Explore our six signature farm dairy offerings. Select a pack size or jump to full pricing and delivery details below.',
      viewPricingCta: 'View Pack Sizes & Pricing',
      enquireItemCta: 'Order / Enquire',
    },
    pricingSection: {
      eyebrow: 'PRODUCTS & PRICING',
      heading: 'Transparent Pack Sizes & Demo Pricing',
      subheading:
        'Choose your preferred pack size in Indian Rupees (₹) and send a quick order enquiry directly to our farm.',
      demoBannerTitle: 'Demo Pricing Notice',
      packSizeLabel: 'Select Pack Size',
      priceLabel: 'Demo Price',
      orderNowCta: 'Order Now',
      perPackNote: 'Inclusive of standard farm packing',
      addAndOpenCta: 'Enquire on This Item',
    },
    farmStory: {
      eyebrow: 'OUR FARM',
      heading: 'A Quiet Commitment to Honest Dairy',
      lead: 'SINDHU AKULA – Dairy & Farms is built around a straightforward idea: good dairy begins with peaceful animals, clean handling, and respect for every household we serve.',
      body1:
        'This section is thoughtfully structured so the farm owner can share their true journey, herd details, and daily milking traditions in their own words—without exaggerated claims.',
      body2:
        'From morning milking to careful cooling and batch preparation of curd, paneer, butter, and ghee, every step is designed around freshness, hygiene, and accountability.',
      cta: 'About Our Farm',
      expandedNote:
        'Editable Farm Story Placeholder: Replace this paragraph with the real founding story, village heritage, herd breeds, and daily routine of SINDHU AKULA – Dairy & Farms.',
      pillars: [
        { label: 'Focus', value: 'Fresh Everyday Dairy' },
        { label: 'Approach', value: 'Clean & Direct' },
        { label: 'Connection', value: 'Farm to Family' },
      ],
    },
    deliverySection: {
      eyebrow: 'DELIVERY & CONVENIENCE',
      heading: 'Flexible Ways to Receive Fresh Dairy',
      subheading:
        'Whether you prefer morning doorstep drops, picking up directly at the farm, or planning ahead for a family gathering, choose what suits your routine.',
      demoTag: 'DEMO INFO',
      howItWorksLabel: 'How it works',
      infoTitle: 'Service Coverage & Demo Terms',
      areasLabel: 'Delivery Areas',
      timingsLabel: 'Delivery Timings',
      minOrderLabel: 'Minimum Order Amount',
      deliveryChargeLabel: 'Delivery Charge',
      freeDeliveryLabel: 'Free Delivery Eligibility',
      pickupNoteLabel: 'Farm Pickup Schedule',
      freeAbovePrefix: 'Free on orders of',
      enquireDeliveryCta: 'Start an Order Enquiry',
    },
    whyChooseUs: {
      eyebrow: 'OUR PROMISE',
      heading: 'Principles Guided by Real Farm Practice',
      subheading:
        'Clean, editable commitments that can be tailored to reflect your exact farm standards and customer care routines.',
      editableNote: 'Factual & Personalisable',
      items: [
        {
          title: 'Clean Handling & Hygiene',
          description:
            'Sanitised vessels, clean preparation spaces, and mindful storage from milking through packing.',
        },
        {
          title: 'Attentive Animal Welfare',
          description:
            'Comfortable resting spaces, fresh greens, and unhurried daily care for calm, healthy cows.',
        },
        {
          title: 'Small-Batch Preparation',
          description:
            'Curd, paneer, butter, buttermilk, and ghee prepared in measured batches rather than long-stored stock.',
        },
        {
          title: 'Direct Neighbourhood Reach',
          description:
            'Personal coordination over WhatsApp or phone so you always know who is serving your kitchen.',
        },
      ],
    },
    gallery: {
      eyebrow: 'LIFE AT THE FARM',
      heading: 'Glimpses of Pasture, Herd & Craft',
      subheading:
        'Visual moments capturing serene pastures, attentive animal care, and fresh dairy preparation.',
      items: [
        {
          title: 'Morning Pastures',
          caption: 'Healthy cattle grazing in open green surroundings at sunrise.',
        },
        {
          title: 'Clean Farm Shelter',
          caption: 'Airy, shaded resting space and fresh green fodder care.',
        },
        {
          title: 'Traditional Vessels',
          caption: 'Clean collection and careful handling from dawn milking.',
        },
        {
          title: 'Fresh Dairy Craft',
          caption: 'Wholesome milk, golden ghee, and naturally set curd.',
        },
      ],
    },
    contact: {
      eyebrow: 'GET IN TOUCH',
      heading: 'Connect With SINDHU AKULA – Dairy & Farms',
      subheading:
        'Have a question about daily milk availability, farm pickup, or bulk requirements? Reach out directly via WhatsApp or send an enquiry.',
      whatsappCardTitle: 'Direct WhatsApp Enquiry',
      whatsappCardDesc:
        'Message us directly for daily availability, area checks, or custom batch requests.',
      whatsappButton: 'Message on WhatsApp',
      phoneLabel: 'Phone',
      locationLabel: 'Farm Location',
      hoursLabel: 'Enquiry Hours',
      emailLabel: 'Email',
      openOrderFormCta: 'Open Order Enquiry Form',
      placeholderNote:
        'Contact details shown are placeholders—update them anytime in src/data/farmCatalog.ts.',
    },
    footer: {
      tagline: 'Pure Goodness. Every Single Day.',
      navigationTitle: 'Explore',
      contactTitle: 'Farm Contact',
      languageTitle: 'Language',
      socialTitle: 'Connect',
      socialPlaceholderNote: 'Social links are placeholders ready for your official profiles.',
      demoDisclaimer:
        'Website Preview: Product prices, delivery zones, and timings are sample demo values until confirmed by the farm owner.',
      copyright: '© 2026 SINDHU AKULA – Dairy & Farms. All rights reserved.',
    },
    orderModal: {
      title: 'Order Enquiry',
      subtitle: 'SINDHU AKULA – Dairy & Farms',
      demoNotice:
        'Enquiry-Based Demo: Submitting generates a WhatsApp enquiry with demo pricing. No order is automatically confirmed and no payment is collected here.',
      selectProductLabel: 'Select Product',
      packSizeLabel: 'Pack Size',
      quantityLabel: 'Quantity',
      addAnotherLabel: '+ Add Another Product to Enquiry',
      itemsInEnquiryLabel: 'Selected Items',
      removeLabel: 'Remove',
      deliveryMethodLabel: 'Delivery Preference',
      homeDeliveryLabel: 'Home Delivery',
      farmPickupLabel: 'Farm Pickup',
      customerNameLabel: 'Customer Name',
      customerNamePlaceholder: 'Enter your full name',
      phoneLabel: 'Phone Number',
      phonePlaceholder: 'e.g. +91 98765 43210',
      addressLabel: 'Delivery Address',
      addressPlaceholder: 'House no., street, landmark, area',
      pickupNote:
        'You chose Farm Pickup — no delivery fee applies. Exact counter pickup slot will be shared on WhatsApp.',
      notesLabel: 'Optional Note',
      notesPlaceholder: 'Preferred morning/evening slot or subscription request',
      summaryTitle: 'Enquiry Summary (Demo Pricing)',
      itemsSubtotalLabel: 'Items Subtotal (Demo)',
      estimatedDeliveryLabel: 'Estimated Delivery Charge (Demo)',
      freeDeliveryUnlocked: 'Eligible for Free Demo Delivery',
      pickupFreeLabel: '₹0 (Farm Pickup)',
      minOrderHint: 'Demo minimum order for delivery:',
      estimatedTotalLabel: 'Estimated Total (Demo)',
      demoPriceSuffix: 'Demo',
      submitWhatsappCta: 'Send Enquiry via WhatsApp',
      disclaimerFooter:
        'Clicking above opens WhatsApp with your prefilled enquiry message. Final availability and confirmed rates will be shared by the farm.',
      validationMissing: 'Please enter your name, phone number, and delivery address (for Home Delivery).',
      closeLabel: 'Close',
    },
  },
  te: {
    nav: {
      home: 'హోమ్',
      products: 'మా ఉత్పత్తులు',
      pricing: 'ధరలు',
      delivery: 'డెలివరీ',
      farm: 'మా ఫార్మ్',
      promise: 'మా హామీ',
      contact: 'సంప్రదించండి',
      whatsappCta: 'వాట్సాప్ విచారణ',
    },
    hero: {
      eyebrow: 'సింధు ఆకుల • డైరీ & ఫార్మ్స్',
      heading: 'స్వచ్ఛమైన శ్రేష్ఠత. ప్రతి రోజు.',
      subheading: 'తాజా పాల ఉత్పత్తుల స్వచ్ఛతను మీ ఇంటికి మరింత చేరువ చేస్తూ.',
      primaryCta: 'మా ఉత్పత్తులను చూడండి',
      secondaryCta: 'మా ఫార్మ్‌ను సంప్రదించండి',
      scrollHint: 'క్రిందికి స్క్రోల్ చేయండి',
      editorialNote: 'తాజా ఫార్మ్ డైరీ • రోజువారీ ఇంటి అవసరాలు',
    },
    trust: {
      eyebrow: 'సంరక్షణ పునాది',
      heading: 'శ్రద్ధగల పశుసంరక్షణ, శుభ్రమైన డైరీ తయారీ మరియు నేరుగా సంప్రదింపు.',
      items: [
        {
          title: 'ఫార్మ్ & పశుసంరక్షణ',
          description:
            'ఆరోగ్యకరమైన పాడి పశువుల కోసం గాలి వెలుతురు గల షెడ్లు, శుభ్రమైన త్రాగునీరు, సమతుల్య పశుగ్రాసం మరియు ప్రశాంతమైన రోజువారీ సంరక్షణ.',
          meta: 'సవరించదగిన ఫార్మ్ పద్ధతి',
        },
        {
          title: 'డైరీ ఉత్పత్తులు',
          description:
            'తాజా పాలు, స్వచ్ఛమైన నెయ్యి, తాజా పెరుగు, పనీర్, వెన్న మరియు మజ్జిగ—శుభ్రంగా తయారుచేసిన ఆరు ముఖ్య ఉత్పత్తులు.',
          meta: 'ఆరు ప్రధాన ఉత్పత్తులు',
        },
        {
          title: 'సులభమైన కస్టమర్ విచారణలు',
          description:
            'ఫార్మ్‌తో నేరుగా వాట్సాప్ మరియు ఫోన్ ద్వారా సంప్రదింపు—సంక్లిష్టమైన చెకౌట్‌లు లేకుండా సులభమైన వ్యక్తిగత సమన్వయం.',
          meta: 'నేరుగా ఫార్మ్ స్పందన',
        },
      ],
    },
    productPreview: {
      eyebrow: 'మా డైరీ శ్రేణి',
      heading: 'ప్రతి ఇంటి వంటగది కోసం స్వచ్ఛమైన ఉత్పత్తులు',
      subheading:
        'మా ఆరు ప్రత్యేక ఫార్మ్ డైరీ ఉత్పత్తులను చూడండి. ప్యాక్ పరిమాణాలు మరియు ధరల కోసం క్రింద చూడండి.',
      viewPricingCta: 'ధరలు & ప్యాక్ పరిమాణాలు చూడండి',
      enquireItemCta: 'ఆర్డర్ / విచారణ',
    },
    pricingSection: {
      eyebrow: 'ఉత్పత్తులు & ధరలు',
      heading: 'ప్యాక్ పరిమాణాలు & డెమో ధరలు',
      subheading:
        'భారతీయ రూపాయలలో (₹) మీకు కావలసిన ప్యాక్ పరిమాణాన్ని ఎంచుకుని నేరుగా ఫార్మ్‌కు ఆర్డర్ విచారణ పంపండి.',
      demoBannerTitle: 'డెమో ధరల గమనిక',
      packSizeLabel: 'ప్యాక్ పరిమాణం ఎంచుకోండి',
      priceLabel: 'డెమో ధర',
      orderNowCta: 'ఇప్పుడే ఆర్డర్ చేయండి',
      perPackNote: 'ప్రామాణిక ఫార్మ్ ప్యాకింగ్‌తో',
      addAndOpenCta: 'ఈ ఉత్పత్తిపై విచారించండి',
    },
    farmStory: {
      eyebrow: 'మా ఫార్మ్',
      heading: 'నిజాయితీ గల డైరీకి మా నిబద్ధత',
      lead: 'సింధు ఆకుల – డైరీ & ఫార్మ్స్ ఒక సరళమైన ఆలోచనపై నిర్మించబడింది: మంచి పాలు ప్రశాంతమైన పశువులు, శుభ్రమైన నిర్వహణ మరియు మేము సేవ చేసే ప్రతి కుటుంబం పట్ల గౌరవంతో మొదలవుతాయి.',
      body1:
        'ఫార్మ్ యజమాని తమ నిజమైన ప్రయాణం, పశువుల వివరాలు మరియు రోజువారీ పాలు పితికే సంప్రదాయాలను తమ స్వంత మాటలలో పంచుకోవడానికి ఈ విభాగం రూపొందించబడింది.',
      body2:
        'ఉదయం పాలు పితకడం నుండి చల్లబరచడం మరియు పెరుగు, పనీర్, వెన్న, నెయ్యి తయారీ వరకు ప్రతి అడుగు తాజాదనం మరియు శుభ్రతపై ఆధారపడి ఉంటుంది.',
      cta: 'మా ఫార్మ్ గురించి',
      expandedNote:
        'సవరించదగిన ఫార్మ్ కథనం ప్లేస్‌హోల్డర్: సింధు ఆకుల – డైరీ & ఫార్మ్స్ యొక్క నిజమైన స్థాపన కథనం, గ్రామ నేపథ్యం మరియు రోజువారీ వివరాలతో దీనిని మార్చండి.',
      pillars: [
        { label: 'లక్ష్యం', value: 'తాజా రోజువారీ డైరీ' },
        { label: 'పద్ధతి', value: 'శుభ్రత & స్పష్టత' },
        { label: 'బంధం', value: 'ఫార్మ్ నుండి ఇంటికి' },
      ],
    },
    deliverySection: {
      eyebrow: 'డెలివరీ & సౌకర్యం',
      heading: 'తాజా డైరీని పొందే సులభమైన మార్గాలు',
      subheading:
        'ఉదయం ఇంటి వద్ద డెలివరీ, ఫార్మ్ వద్ద నేరుగా తీసుకోవడం లేదా కుటుంబ వేడుకల కోసం ముందుగా ఆర్డర్ చేయడం—మీకు అనువైనది ఎంచుకోండి.',
      demoTag: 'డెమో సమాచారం',
      howItWorksLabel: 'ఇది ఎలా పనిచేస్తుంది',
      infoTitle: 'సేవా ప్రాంతాలు & డెమో నియమాలు',
      areasLabel: 'డెలివరీ ప్రాంతాలు',
      timingsLabel: 'డెలివరీ సమయాలు',
      minOrderLabel: 'కనీస ఆర్డర్ మొత్తం',
      deliveryChargeLabel: 'డెలివరీ ఛార్జీ',
      freeDeliveryLabel: 'ఉచిత డెలివరీ అర్హత',
      pickupNoteLabel: 'ఫార్మ్ పికప్ సమయం',
      freeAbovePrefix: 'దీనిపై ఉచిత డెలివరీ:',
      enquireDeliveryCta: 'ఆర్డర్ విచారణ ప్రారంభించండి',
    },
    whyChooseUs: {
      eyebrow: 'మా హామీ',
      heading: 'నిజమైన ఫార్మ్ పద్ధతులపై ఆధారపడిన సూత్రాలు',
      subheading:
        'మీ ఫార్మ్ యొక్క ఖచ్చితమైన ప్రమాణాలకు అనుగుణంగా సులభంగా మార్చుకోగల వాస్తవ వివరాలు.',
      editableNote: 'వాస్తవ & మార్చుకోదగినవి',
      items: [
        {
          title: 'శుభ్రమైన నిర్వహణ & పరిశుభ్రత',
          description:
            'పాలు పితికినప్పటి నుండి ప్యాకింగ్ వరకు శుభ్రపరిచిన పాత్రలు మరియు జాగ్రత్తగల నిల్వ.',
        },
        {
          title: 'శ్రద్ధగల పశు సంక్షేమం',
          description:
            'ఆరోగ్యకరమైన ఆవుల కోసం సౌకర్యవంతమైన విశ్రాంతి స్థలం, తాజా పచ్చిగడ్డి మరియు ప్రశాంతమైన సంరక్షణ.',
        },
        {
          title: 'చిన్న బ్యాచ్‌లలో తయారీ',
          description:
            'పెరుగు, పనీర్, వెన్న, మజ్జిగ మరియు నెయ్యి ఎక్కువ కాలం నిల్వ ఉంచకుండా తాజా బ్యాచ్‌లలో తయారీ.',
        },
        {
          title: 'స్థానికంగా నేరుగా సేవ',
          description:
            'వాట్సాప్ లేదా ఫోన్ ద్వారా నేరుగా సమన్వయం, తద్వారా మీ ఇంటికి ఎవరు సేవ చేస్తున్నారో మీకు ఎప్పుడూ తెలుస్తుంది.',
        },
      ],
    },
    gallery: {
      eyebrow: 'ఫార్మ్ దృశ్యాలు',
      heading: 'పచ్చికబయళ్లు, పశువులు & తయారీ దృశ్యాలు',
      subheading:
        'ప్రశాంతమైన పచ్చికబయళ్లు, పశుసంరక్షణ మరియు తాజా డైరీ తయారీని చూపే చిత్రాలు.',
      items: [
        {
          title: 'ఉదయపు పచ్చికబయళ్లు',
          caption: 'సూర్యోదయ వేళ పచ్చని పొలాల్లో మేస్తున్న ఆరోగ్యకరమైన పశువులు.',
        },
        {
          title: 'శుభ్రమైన ఫార్మ్ షెడ్',
          caption: 'గాలి వెలుతురు గల నీడ మరియు తాజా పచ్చిగడ్డి సంరక్షణ.',
        },
        {
          title: 'సంప్రదాయ పాత్రలు',
          caption: 'ఉదయాన్నే శుభ్రమైన పాత్రలలో పాల సేకరణ.',
        },
        {
          title: 'తాజా డైరీ తయారీ',
          caption: 'స్వచ్ఛమైన పాలు, బంగారు నెయ్యి మరియు సహజ పెరుగు.',
        },
      ],
    },
    contact: {
      eyebrow: 'సంప్రదించండి',
      heading: 'సింధు ఆకుల – డైరీ & ఫార్మ్స్‌తో కనెక్ట్ అవ్వండి',
      subheading:
        'రోజువారీ పాల లభ్యత, ఫార్మ్ పికప్ లేదా బల్క్ ఆర్డర్ల గురించి సందేహాలు ఉన్నాయా? వాట్సాప్ ద్వారా నేరుగా సంప్రదించండి.',
      whatsappCardTitle: 'నేరుగా వాట్సాప్ విచారణ',
      whatsappCardDesc:
        'రోజువారీ లభ్యత, ప్రాంత తనిఖీ లేదా ప్రత్యేక ఆర్డర్ల కోసం మాకు సందేశం పంపండి.',
      whatsappButton: 'వాట్సాప్‌లో సందేశం పంపండి',
      phoneLabel: 'ఫోన్',
      locationLabel: 'ఫార్మ్ చిరునామా',
      hoursLabel: 'విచారణ సమయాలు',
      emailLabel: 'ఇమెయిల్',
      openOrderFormCta: 'ఆర్డర్ విచారణ ఫారమ్ తెరవండి',
      placeholderNote:
        'ఇక్కడ చూపిన సంప్రదింపు వివరాలు ప్లేస్‌హోల్డర్లు—src/data/farmCatalog.ts లో ఎప్పుడైనా మార్చుకోవచ్చు.',
    },
    footer: {
      tagline: 'స్వచ్ఛమైన శ్రేష్ఠత. ప్రతి రోజు.',
      navigationTitle: 'పేజీలు',
      contactTitle: 'ఫార్మ్ సంప్రదింపు',
      languageTitle: 'భాష',
      socialTitle: 'సోషల్ లింక్స్',
      socialPlaceholderNote: 'సోషల్ లింక్స్ మీ అధికారిక ఖాతాల కోసం ప్లేస్‌హోల్డర్లు.',
      demoDisclaimer:
        'వెబ్‌సైట్ ప్రివ్యూ: ఉత్పత్తి ధరలు, డెలివరీ ప్రాంతాలు మరియు సమయాలు ఫార్మ్ యజమాని నిర్ధారించే వరకు నమూనా డెమో విలువలు మాత్రమే.',
      copyright: '© 2026 సింధు ఆకుల – డైరీ & ఫార్మ్స్. సర్వ హక్కులు ప్రత్యేకించబడినవి.',
    },
    orderModal: {
      title: 'ఆర్డర్ విచారణ',
      subtitle: 'సింధు ఆకుల – డైరీ & ఫార్మ్స్',
      demoNotice:
        'విచారణ ఆధారిత డెమో: ఇది డెమో ధరలతో వాట్సాప్ విచారణ సందేశాన్ని సిద్ధం చేస్తుంది. ఇక్కడ ఆర్డర్ నిర్ధారించబడదు లేదా చెల్లింపు జరగదు.',
      selectProductLabel: 'ఉత్పత్తిని ఎంచుకోండి',
      packSizeLabel: 'ప్యాక్ పరిమాణం',
      quantityLabel: 'పరిమాణం (సంఖ్య)',
      addAnotherLabel: '+ మరొక ఉత్పత్తిని జోడించండి',
      itemsInEnquiryLabel: 'ఎంచుకున్న ఉత్పత్తులు',
      removeLabel: 'తొలగించు',
      deliveryMethodLabel: 'డెలివరీ విధానం',
      homeDeliveryLabel: 'హోమ్ డెలివరీ',
      farmPickupLabel: 'ఫార్మ్ పికప్',
      customerNameLabel: 'కస్టమర్ పేరు',
      customerNamePlaceholder: 'మీ పూర్తి పేరు నమోదు చేయండి',
      phoneLabel: 'ఫోన్ నంబర్',
      phonePlaceholder: 'ఉదా. +91 98765 43210',
      addressLabel: 'డెలివరీ చిరునామా',
      addressPlaceholder: 'ఇంటి నంబర్, వీధి, ల్యాండ్‌మార్క్, ప్రాంతం',
      pickupNote:
        'మీరు ఫార్మ్ పికప్ ఎంచుకున్నారు — డెలివరీ ఛార్జీ లేదు. ఖచ్చితమైన పికప్ సమయం వాట్సాప్‌లో తెలియజేయబడుతుంది.',
      notesLabel: 'అదనపు గమనిక (ఐచ్ఛికం)',
      notesPlaceholder: 'ఉదయం/సాయంత్రం సమయం లేదా రోజువారీ సబ్‌స్క్రిప్షన్ అభ్యర్థన',
      summaryTitle: 'విచారణ సారాంశం (డెమో ధరలు)',
      itemsSubtotalLabel: 'ఉత్పత్తుల మొత్తం (డెమో)',
      estimatedDeliveryLabel: 'అంచనా డెలివరీ ఛార్జీ (డెమో)',
      freeDeliveryUnlocked: 'ఉచిత డెమో డెలివరీకి అర్హత ఉంది',
      pickupFreeLabel: '₹0 (ఫార్మ్ పికప్)',
      minOrderHint: 'డెలివరీకి డెమో కనీస ఆర్డర్:',
      estimatedTotalLabel: 'అంచనా మొత్తం (డెమో)',
      demoPriceSuffix: 'డెమో',
      submitWhatsappCta: 'వాట్సాప్ ద్వారా విచారణ పంపండి',
      disclaimerFooter:
        'పైన క్లిక్ చేయడం ద్వారా మీ విచారణ సందేశంతో వాట్సాప్ తెరుచుకుంటుంది. తుది లభ్యత మరియు నిర్ధారించిన ధరలు ఫార్మ్ ద్వారా తెలియజేయబడతాయి.',
      validationMissing: 'దయచేసి మీ పేరు, ఫోన్ నంబర్ మరియు డెలివరీ చిరునామా (హోమ్ డెలివరీ కోసం) నమోదు చేయండి.',
      closeLabel: 'మూసివేయండి',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      products: 'हमारे उत्पाद',
      pricing: 'मूल्य सूची',
      delivery: 'डिलीवरी',
      farm: 'हमारा फ़ार्म',
      promise: 'हमारा वादा',
      contact: 'संपर्क',
      whatsappCta: 'व्हाट्सएप पूछताछ',
    },
    hero: {
      eyebrow: 'सिंधु आकुला • डेयरी एंड फ़ार्म्स',
      heading: 'शुद्ध अच्छाई। हर एक दिन।',
      subheading: 'ताज़े डेयरी की अच्छाई को आपके घर के और करीब लाते हुए।',
      primaryCta: 'हमारे उत्पाद देखें',
      secondaryCta: 'हमारे फ़ार्म से संपर्क करें',
      scrollHint: 'नीचे देखें',
      editorialNote: 'ताज़ा फ़ार्म डेयरी • दैनिक रसोई की ज़रूरतें',
    },
    trust: {
      eyebrow: 'देखभाल की नींव',
      heading: 'सचेत पशुपालन, स्वच्छ डेयरी निर्माण और सीधे संवाद पर आधारित।',
      items: [
        {
          title: 'फ़ार्म और पशु देखभाल',
          description:
            'स्वस्थ दुधारू पशुओं के लिए हवादार शेड, स्वच्छ पेयजल, संतुलित हरा चारा और शांत दैनिक दिनचर्या।',
          meta: 'संपादन योग्य फ़ार्म अभ्यास',
        },
        {
          title: 'डेयरी उत्पाद',
          description:
            'ताज़ा दूध, शुद्ध घी, ताज़ा दही, पनीर, मक्खन और छाछ—स्वच्छता से तैयार छह मुख्य दैनिक उत्पाद।',
          meta: 'छह प्रमुख उत्पाद',
        },
        {
          title: 'सरल ग्राहक पूछताछ',
          description:
            'फ़ार्म के साथ सीधे व्हाट्सएप और फोन पर संवाद—बिना किसी जटिल चेकआउट के सहज व्यक्तिगत समन्वय।',
          meta: 'सीधा फ़ार्म उत्तर',
        },
      ],
    },
    productPreview: {
      eyebrow: 'हमारी डेयरी श्रृंखला',
      heading: 'हर रसोई के लिए शुद्ध और पौष्टिक डेयरी उत्पाद',
      subheading:
        'हमारे छह प्रमुख फ़ार्म डेयरी उत्पाद देखें। पैक आकार और मूल्य विवरण के लिए नीचे जाएँ।',
      viewPricingCta: 'पैक आकार और मूल्य देखें',
      enquireItemCta: 'ऑर्डर / पूछताछ',
    },
    pricingSection: {
      eyebrow: 'उत्पाद एवं मूल्य',
      heading: 'स्पष्ट पैक आकार और डेमो मूल्य सूची',
      subheading:
        'भारतीय रुपये (₹) में अपना पसंदीदा पैक आकार चुनें और सीधे हमारे फ़ार्म को त्वरित ऑर्डर पूछताछ भेजें।',
      demoBannerTitle: 'डेमो मूल्य सूचना',
      packSizeLabel: 'पैक आकार चुनें',
      priceLabel: 'डेमो मूल्य',
      orderNowCta: 'अभी ऑर्डर करें',
      perPackNote: 'मानक फ़ार्म पैकिंग सहित',
      addAndOpenCta: 'इस उत्पाद पर पूछताछ करें',
    },
    farmStory: {
      eyebrow: 'हमारा फ़ार्म',
      heading: 'सच्ची और ईमानदार डेयरी के प्रति शांत समर्पण',
      lead: 'सिंधु आकुला – डेयरी एंड फ़ार्म्स एक सरल विचार पर आधारित है: अच्छी डेयरी की शुरुआत शांत और स्वस्थ पशुओं, स्वच्छ रखरखाव और हर परिवार के प्रति सम्मान से होती है।',
      body1:
        'यह अनुभाग इस प्रकार तैयार किया गया है कि फ़ार्म स्वामी बिना किसी बढ़ा-चढ़ाकर किए गए दावे के अपनी वास्तविक यात्रा, पशुधन विवरण और दैनिक परंपरा साझा कर सकें।',
      body2:
        'सुबह के दुग्ध संग्रह से लेकर शीतलन और दही, पनीर, मक्खन व घी के बैच निर्माण तक, हर चरण ताज़गी और स्वच्छता पर केंद्रित है।',
      cta: 'हमारे फ़ार्म के बारे में',
      expandedNote:
        'संपादन योग्य फ़ार्म कहानी प्लेसहोल्डर: यहाँ सिंधु आकुला – डेयरी एंड फ़ार्म्स की वास्तविक स्थापना कहानी, ग्राम विरासत और दैनिक कार्यशैली जोड़ें।',
      pillars: [
        { label: 'केंद्र', value: 'ताज़ा दैनिक डेयरी' },
        { label: 'दृष्टिकोण', value: 'स्वच्छ और सीधा' },
        { label: 'संबंध', value: 'फ़ार्म से परिवार तक' },
      ],
    },
    deliverySection: {
      eyebrow: 'डिलीवरी एवं सुविधा',
      heading: 'ताज़ा डेयरी प्राप्त करने के सहज विकल्प',
      subheading:
        'सुबह घर पर डिलीवरी, सीधे फ़ार्म से संग्रह, या पारिवारिक समारोह के लिए अग्रिम ऑर्डर—अपनी सुविधा अनुसार चुनें।',
      demoTag: 'डेमो जानकारी',
      howItWorksLabel: 'यह कैसे काम करता है',
      infoTitle: 'सेवा क्षेत्र एवं डेमो शर्तें',
      areasLabel: 'डिलीवरी क्षेत्र',
      timingsLabel: 'डिलीवरी समय',
      minOrderLabel: 'न्यूनतम ऑर्डर राशि',
      deliveryChargeLabel: 'डिलीवरी शुल्क',
      freeDeliveryLabel: 'मुफ़्त डिलीवरी पात्रता',
      pickupNoteLabel: 'फ़ार्म पिकअप समय',
      freeAbovePrefix: 'मुफ़्त डिलीवरी, ऑर्डर राशि:',
      enquireDeliveryCta: 'ऑर्डर पूछताछ शुरू करें',
    },
    whyChooseUs: {
      eyebrow: 'हमारा वादा',
      heading: 'वास्तविक फ़ार्म अभ्यास पर आधारित सिद्धांत',
      subheading:
        'स्वच्छ और संपादन योग्य प्रतिबद्धताएँ जिन्हें आपके फ़ार्म की वास्तविक कार्यप्रणाली के अनुसार ढाला जा सकता है।',
      editableNote: 'तथ्यात्मक व संपादन योग्य',
      items: [
        {
          title: 'स्वच्छ रखरखाव और हाइजीन',
          description:
            'दुग्ध संग्रह से पैकिंग तक स्वच्छ बर्तन, साफ तैयारी क्षेत्र और सावधानीपूर्वक भंडारण।',
        },
        {
          title: 'सचेत पशु कल्याण',
          description:
            'स्वस्थ गायों के लिए आरामदायक विश्राम स्थल, ताज़ा चारा और शांत दैनिक देखभाल।',
        },
        {
          title: 'छोटे बैच में तैयारी',
          description:
            'दही, पनीर, मक्खन, छाछ और घी को लंबे भंडारण के बजाय ताज़े छोटे बैच में तैयार किया जाता है।',
        },
        {
          title: 'सीधा स्थानीय संपर्क',
          description:
            'व्हाट्सएप या फोन पर व्यक्तिगत संवाद, ताकि आप हमेशा जान सकें कि आपकी रसोई तक कौन सेवा पहुँचा रहा है।',
        },
      ],
    },
    gallery: {
      eyebrow: 'फ़ार्म की झलकियाँ',
      heading: 'चरागाह, पशुधन और डेयरी शिल्प',
      subheading:
        'हरे चरागाहों, सचेत पशु देखभाल और ताज़ा डेयरी तैयारी की शांत झलकियाँ।',
      items: [
        {
          title: 'सुबह के चरागाह',
          caption: 'सूर्योदय के समय हरे मैदानों में चरते स्वस्थ पशु।',
        },
        {
          title: 'स्वच्छ फ़ार्म आश्रय',
          caption: 'हवादार छायादार स्थान और ताज़े हरे चारे की व्यवस्था।',
        },
        {
          title: 'पारंपरिक बर्तन',
          caption: 'सुबह के संग्रह से स्वच्छ बर्तन और सावधान रखरखाव।',
        },
        {
          title: 'ताज़ा डेयरी शिल्प',
          caption: 'शुद्ध दूध, सुनहरा घी और प्राकृतिक रूप से जमा दही।',
        },
      ],
    },
    contact: {
      eyebrow: 'संपर्क करें',
      heading: 'सिंधु आकुला – डेयरी एंड फ़ार्म्स से जुड़ें',
      subheading:
        'दैनिक दूध उपलब्धता, फ़ार्म पिकअप या थोक आवश्यकता के बारे में प्रश्न है? सीधे व्हाट्सएप करें या पूछताछ भेजें।',
      whatsappCardTitle: 'सीधी व्हाट्सएप पूछताछ',
      whatsappCardDesc:
        'दैनिक उपलब्धता, क्षेत्र की जानकारी या विशेष बैच अनुरोध के लिए हमें संदेश भेजें।',
      whatsappButton: 'व्हाट्सएप पर संदेश भेजें',
      phoneLabel: 'फोन',
      locationLabel: 'फ़ार्म स्थान',
      hoursLabel: 'पूछताछ समय',
      emailLabel: 'ईमेल',
      openOrderFormCta: 'ऑर्डर पूछताछ फ़ॉर्म खोलें',
      placeholderNote:
        'यहाँ दिखाए गए संपर्क विवरण प्लेसहोल्डर हैं—इन्हें src/data/farmCatalog.ts में कभी भी बदलें।',
    },
    footer: {
      tagline: 'शुद्ध अच्छाई। हर एक दिन।',
      navigationTitle: 'अन्वेषण',
      contactTitle: 'फ़ार्म संपर्क',
      languageTitle: 'भाषा',
      socialTitle: 'जुड़ें',
      socialPlaceholderNote: 'सोशल लिंक आपके आधिकारिक खातों के लिए प्लेसहोल्डर हैं।',
      demoDisclaimer:
        'वेबसाइट प्रीव्यू: उत्पाद मूल्य, डिलीवरी क्षेत्र और समय फ़ार्म स्वामी द्वारा पुष्टि किए जाने तक केवल नमूना डेमो मान हैं।',
      copyright: '© 2026 सिंधु आकुला – डेयरी एंड फ़ार्म्स। सर्वाधिकार सुरक्षित।',
    },
    orderModal: {
      title: 'ऑर्डर पूछताछ',
      subtitle: 'सिंधु आकुला – डेयरी एंड फ़ार्म्स',
      demoNotice:
        'पूछताछ आधारित डेमो: सबमिट करने पर डेमो मूल्यों के साथ एक व्हाट्सएप पूछताछ संदेश बनता है। यहाँ न तो ऑर्डर पक्का होता है और न ही भुगतान लिया जाता है।',
      selectProductLabel: 'उत्पाद चुनें',
      packSizeLabel: 'पैक आकार',
      quantityLabel: 'मात्रा',
      addAnotherLabel: '+ पूछताछ में एक और उत्पाद जोड़ें',
      itemsInEnquiryLabel: 'चयनित उत्पाद',
      removeLabel: 'हटाएँ',
      deliveryMethodLabel: 'डिलीवरी विकल्प',
      homeDeliveryLabel: 'होम डिलीवरी',
      farmPickupLabel: 'फ़ार्म पिकअप',
      customerNameLabel: 'ग्राहक का नाम',
      customerNamePlaceholder: 'अपना पूरा नाम लिखें',
      phoneLabel: 'फोन नंबर',
      phonePlaceholder: 'जैसे +91 98765 43210',
      addressLabel: 'डिलीवरी पता',
      addressPlaceholder: 'मकान नं., गली, लैंडमार्क, क्षेत्र',
      pickupNote:
        'आपने फ़ार्म पिकअप चुना है — कोई डिलीवरी शुल्क नहीं लगेगा। सटीक पिकअप समय व्हाट्सएप पर साझा किया जाएगा।',
      notesLabel: 'अतिरिक्त नोट (वैकल्पिक)',
      notesPlaceholder: 'पसंदीदा सुबह/शाम का समय या दैनिक सदस्यता अनुरोध',
      summaryTitle: 'पूछताछ सारांश (डेमो मूल्य)',
      itemsSubtotalLabel: 'उत्पाद योग (डेमो)',
      estimatedDeliveryLabel: 'अनुमानित डिलीवरी शुल्क (डेमो)',
      freeDeliveryUnlocked: 'मुफ़्त डेमो डिलीवरी के लिए पात्र',
      pickupFreeLabel: '₹0 (फ़ार्म पिकअप)',
      minOrderHint: 'डिलीवरी के लिए डेमो न्यूनतम ऑर्डर:',
      estimatedTotalLabel: 'अनुमानित कुल राशि (डेमो)',
      demoPriceSuffix: 'डेमो',
      submitWhatsappCta: 'व्हाट्सएप द्वारा पूछताछ भेजें',
      disclaimerFooter:
        'ऊपर क्लिक करने पर आपके पूर्व-भरे संदेश के साथ व्हाट्सएप खुलेगा। अंतिम उपलब्धता और पक्के मूल्य फ़ार्म द्वारा साझा किए जाएंगे।',
      validationMissing: 'कृपया अपना नाम, फोन नंबर और (होम डिलीवरी के लिए) पता दर्ज करें।',
      closeLabel: 'बंद करें',
    },
  },
};
