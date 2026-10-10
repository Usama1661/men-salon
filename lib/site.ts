/**
 * Showcase content for The Gentlemen's Club.
 * Replace the demo prices, portraits, hours, and contact details in this file.
 * Figures, reviews, team biographies, and appointment times are sample content.
 */

export const salon = {
  name: "The Gentlemen's Club",
  tagline: "Precision. Confidence. Style.",
  phoneDisplay: "+92 300 000 0000",
  phoneTel: "+923000000000",
  whatsapp: "923000000000",
  email: "hello@gentlemensclub.demo",
  address: ["14 Demo Boulevard", "Clifton Block 5", "Karachi, Pakistan"],
  mapQuery: "Clifton Block 5, Karachi, Pakistan",
  hours: [
    { days: "Tuesday – Friday", time: "11:00 – 21:00" },
    { days: "Saturday – Sunday", time: "10:00 – 21:00" },
    { days: "Monday", time: "Closed" },
  ],
  instagram: "https://instagram.com",
  instagramHandle: "@gentlemensclub.demo",
  facebook: "https://facebook.com",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#barbers", label: "Our Barbers" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 5000, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Grooming Services" },
];

export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: "signature-haircut",
    name: "Signature Haircut",
    description:
      "A consultation-led cut mapped to the face, finished with a precise lineup and a shape that still reads clean at the end of the week.",
    price: 2500,
    duration: "45 min",
    image: "/images/service-haircut.jpg",
    alt: "Scissors working through a precision men's haircut",
  },
  {
    id: "premium-beard",
    name: "Premium Beard Styling",
    description:
      "Cheek lines, neck shape, and texture brought into balance so the beard looks considered rather than merely trimmed.",
    price: 1500,
    duration: "30 min",
    image: "/images/service-beard.jpg",
    alt: "Barber shaping a full beard with comb and scissors",
  },
  {
    id: "hair-beard-combo",
    name: "Hair & Beard Combo",
    description:
      "Cut and beard composed as one sitting, so the hairline, jaw, and neck agree with each other.",
    price: 3500,
    duration: "75 min",
    image: "/images/service-combo.jpg",
    alt: "Client receiving a combined haircut and beard detail",
  },
  {
    id: "hot-towel-shave",
    name: "Hot Towel Shave",
    description:
      "Steam, a close shave, and a quiet finish. A ritual for the face, not a rush between appointments.",
    price: 2000,
    duration: "40 min",
    image: "/images/service-shave.jpg",
    alt: "Steaming towel prepared for a traditional shave",
  },
  {
    id: "hair-coloring",
    name: "Hair Coloring",
    description:
      "Grey blending and tonal depth applied with restraint, so the color looks like it belongs to you.",
    price: 6500,
    duration: "90 min",
    image: "/images/service-color.jpg",
    alt: "Barber applying hair color in a dark salon",
  },
  {
    id: "keratin-treatment",
    name: "Keratin Treatment",
    description:
      "Smooth, disciplined hair with a softer fall. Built for humidity, travel, and men who want less morning negotiation.",
    price: 12000,
    duration: "120 min",
    image: "/images/service-keratin.jpg",
    alt: "Glossy hair being finished after a keratin treatment",
  },
  {
    id: "facial-skin",
    name: "Facial & Skin Care",
    description:
      "A masculine facial for congestion, fatigue, and the skin that sits just above the beard line.",
    price: 3000,
    duration: "45 min",
    image: "/images/service-facial.jpg",
    alt: "Calm facial treatment in a dim grooming studio",
  },
  {
    id: "grooming-package",
    name: "Grooming Packages",
    description:
      "The house sequence: cut, beard, and hot towel in a single unhurried visit. Memberships live further down the page.",
    price: 4500,
    duration: "90 min",
    image: "/images/service-package.jpg",
    alt: "Still life of scissors, brush, and grooming tools on marble",
  },
];

export type Barber = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  alt: string;
};

export const barbers: Barber[] = [
  {
    id: "adrian-shah",
    name: "Adrian Shah",
    role: "Master Barber",
    specialty: "Skin fades & structure",
    experience: "12 years",
    image: "/images/barber-adrian.jpg",
    alt: "Sample portrait of master barber Adrian Shah",
  },
  {
    id: "hassan-qureshi",
    name: "Hassan Qureshi",
    role: "Beard Specialist",
    specialty: "Beard architecture",
    experience: "10 years",
    image: "/images/barber-hassan.jpg",
    alt: "Sample portrait of beard specialist Hassan Qureshi",
  },
  {
    id: "luca-rahman",
    name: "Luca Rahman",
    role: "Classic Cutter",
    specialty: "Classic & textured cuts",
    experience: "9 years",
    image: "/images/barber-luca.jpg",
    alt: "Sample portrait of classic cutter Luca Rahman",
  },
  {
    id: "omar-siddiqui",
    name: "Omar Siddiqui",
    role: "Color Artist",
    specialty: "Color & keratin",
    experience: "11 years",
    image: "/images/barber-omar.jpg",
    alt: "Sample portrait of color artist Omar Siddiqui",
  },
];

export type GalleryCategory =
  | "Skin Fades"
  | "Classic Cuts"
  | "Beard"
  | "Modern Styles"
  | "Grooming";

export type GalleryAspect = "portrait" | "landscape" | "square" | "wide";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  aspect: GalleryAspect;
};

export const galleryFilters = [
  "All",
  "Skin Fades",
  "Classic Cuts",
  "Beard",
  "Modern Styles",
  "Grooming",
  "Transformations",
] as const;

export type GalleryFilter = (typeof galleryFilters)[number];

export const galleryItems: GalleryItem[] = [
  {
    id: "fade",
    src: "/images/gallery-fade.jpg",
    alt: "Sample skin fade with a sharp lineup",
    category: "Skin Fades",
    aspect: "portrait",
  },
  {
    id: "classic",
    src: "/images/gallery-classic.jpg",
    alt: "Sample classic textured haircut",
    category: "Classic Cuts",
    aspect: "portrait",
  },
  {
    id: "beard",
    src: "/images/gallery-beard.jpg",
    alt: "Sample close-up of a precisely lined beard",
    category: "Beard",
    aspect: "square",
  },
  {
    id: "modern",
    src: "/images/gallery-modern.jpg",
    alt: "Sample modern hairstyle in warm salon light",
    category: "Modern Styles",
    aspect: "landscape",
  },
  {
    id: "crop",
    src: "/images/gallery-crop.jpg",
    alt: "Sample crop haircut in a leather barber chair",
    category: "Modern Styles",
    aspect: "landscape",
  },
  {
    id: "grooming",
    src: "/images/gallery-grooming.jpg",
    alt: "Sample straight-razor pass along the jaw",
    category: "Grooming",
    aspect: "portrait",
  },
  {
    id: "interior",
    src: "/images/gallery-interior.jpg",
    alt: "Sample luxury barbershop interior in walnut and marble",
    category: "Grooming",
    aspect: "wide",
  },
  {
    id: "shave",
    src: "/images/service-shave.jpg",
    alt: "Sample hot towel and shave preparation",
    category: "Grooming",
    aspect: "landscape",
  },
  {
    id: "scissors",
    src: "/images/service-haircut.jpg",
    alt: "Sample scissor work over a faded haircut",
    category: "Skin Fades",
    aspect: "landscape",
  },
  {
    id: "color",
    src: "/images/service-color.jpg",
    alt: "Sample men's hair coloring",
    category: "Classic Cuts",
    aspect: "landscape",
  },
];

export const transformation = {
  before: "/images/gallery-before.jpg",
  after: "/images/gallery-after.jpg",
  beforeAlt: "Sample portrait before a grooming appointment",
  afterAlt: "Sample portrait after a fade and beard lineup",
};

export const demoSlots = ["11:00", "12:30", "14:00", "15:30", "17:00", "18:30", "20:00"];

export type Membership = {
  id: string;
  name: string;
  price: number;
  summary: string;
  benefits: string[];
  featured?: boolean;
};

export const memberships: Membership[] = [
  {
    id: "essential",
    name: "Essential Grooming",
    price: 8000,
    summary: "A steady rhythm for men who keep one cut, done properly.",
    benefits: ["Two signature haircuts", "One beard styling", "Weekday booking priority"],
  },
  {
    id: "vip",
    name: "VIP Gentleman Experience",
    price: 28000,
    summary: "The fullest house ritual, held with more time and fewer interruptions.",
    benefits: [
      "Six signature haircuts",
      "Four beard stylings",
      "Monthly hot-towel shave",
      "Quarterly color or keratin consultation",
      "One after-hours sitting each month",
    ],
    featured: true,
  },
  {
    id: "executive",
    name: "Executive Grooming",
    price: 15000,
    summary: "For weeks that move quickly and still require a precise appearance.",
    benefits: [
      "Four signature haircuts",
      "Two beard appointments",
      "One facial treatment",
      "A preferred barber held for you",
    ],
  },
];

export const bookingOptions = [
  ...services.map((service) => ({ id: service.id, label: service.name })),
  ...memberships.map((item) => ({ id: item.id, label: `${item.name} membership` })),
];

export const reviews = [
  {
    quote:
      "They cut as if the appointment has nowhere else to be. I left sharper than I arrived, and the line was still clean on Friday.",
    name: "Hamza R.",
    detail: "Sample review · Karachi",
    rating: 5,
  },
  {
    quote:
      "The beard work is the reason I would come back. Measured, quiet, and exact around the cheek.",
    name: "Daniyal A.",
    detail: "Sample review · Lahore",
    rating: 5,
  },
  {
    quote:
      "It feels closer to a private fitting than a barbershop. The hot towel finish is worth the visit alone.",
    name: "Omar F.",
    detail: "Sample review · Islamabad",
    rating: 5,
  },
  {
    quote:
      "I booked ahead of a wedding week. The cut photographed well and never looked overworked.",
    name: "Saad M.",
    detail: "Sample review · Karachi",
    rating: 4,
  },
  {
    quote: "Consistent hands. The same shape, requested every month, returned every month.",
    name: "Bilal K.",
    detail: "Sample review · Karachi",
    rating: 5,
  },
];

export const socialPosts = [
  { src: "/images/social-cut.jpg", alt: "Sample photograph of a haircut in progress" },
  { src: "/images/social-portrait.jpg", alt: "Sample editorial portrait after a groom" },
  { src: "/images/social-shave.jpg", alt: "Sample still of a hot towel and shaving brush" },
  { src: "/images/social-chair.jpg", alt: "Sample walnut chair and brass mirror" },
  { src: "/images/social-tools.jpg", alt: "Sample arrangement of barber tools on marble" },
  { src: "/images/service-package.jpg", alt: "Sample grooming kit arranged on dark stone" },
];

export const marquee = [
  "Precision",
  "Confidence",
  "Style",
  "Craftsmanship",
  "Hot Towel",
  "Private Appointments",
];
