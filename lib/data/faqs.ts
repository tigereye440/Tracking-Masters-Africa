export type Faq = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  items: Faq[];
};



export const faqs: FaqCategory[] = [
  {
    category: "General",
    items: [
      {
        question: "What areas do you cover?",
        answer: "We&apos;re based in Kumasi Accra, and Techiman, and install nationwide across Ghana.",
      },
      {
        question: "How long has TMA been in operation?",
        answer: "TMA has over 10 years of experience installing tracking and security systems across Africa.",
      },
      {
        question: "Do you offer warranties on installations?",
        answer: "Yes, all installations come with a warranty covering parts and workmanship. Terms vary by service.",
      },
      {
        question: "How do I get a quote?",
        answer: "Reach us via WhatsApp, the contact form, or a call — we&apos;ll schedule a free site assessment.",
      },
    ],
  },
  {
    category: "Pricing and process",
    items: [
      {
        question: "How much does installation typically cost?",
        answer: "Pricing depends on property size and the service selected. Contact us for a free, no-obligation quote.",
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, flexible payment options are available for larger installations. Ask us when requesting your quote.",
      },
      {
        question: "How long does a typical installation take?",
        answer: "Most residential installs are completed in a single day, depending on the service and property size.",
      },
    ],
  },
  {
    category: "Vehicle tracking",
    items: [
      {
        question: "Can I track multiple vehicles from one account?",
        answer: "Yes, our fleet management option lets you monitor multiple vehicles from a single dashboard.",
      },
      {
        question: "Is there a monthly subscription fee?",
        answer: "No, our tracking requires no active subscription to keep the GPS/GSM connection live.",
      },
    ],
  },
  {
    category: "CCTV",
    items: [
      {
        question: "Can I view my cameras remotely on my phone?",
        answer: "Yes, all our CCTV installs include a mobile app for live remote viewing.",
      },
      {
        question: "Do you offer night vision cameras?",
        answer: "Yes, night vision is standard on most of our camera packages.",
      },
    ],
  },
  {
    category: "Electric fencing",
    items: [
      {
        question: "Is electric fencing legal for residential properties in Ghana?",
        answer: "Yes, when installed within safety guidelines. We ensure every install meets required standards.",
      },
      {
        question: "Does it work during power outages?",
        answer: "We can pair your fence with a battery backup or solar system to keep it active during outages.",
      },
    ],
  },
];