export type Stylist = {
  slug: string;
  name: string;
  preferredName?: string;
  title: string;
  image: string;
  bio: string;
  bioContinued?: string;
  mission?: string;
  beliefs?: string;
  specialties: string[];
  services: string[];
  bookingUrl?: string;
  bookingLabel?: string;
  email?: string;
  phone?: string;
  phoneHref?: string;
  instagram?: string;
  yearsExperience: string;
};

export const stylists: Stylist[] = [
  {
    slug: "jennifer",
    name: "Jennifer Dodd",
    preferredName: "Jenn",
    title: "Master Hairstylist & Salon Owner",
    image: "/images/stylists/jennifer.jpg",
    yearsExperience: "18+ years",
    bio: "Hi loves! I'm a Master Hairstylist from Indianapolis, IN. I specialize in lived-in color, grey blending, hand-tied extensions, and also your bridal girl. When I'm out of the salon you can catch me with a good coffee in hand, working in my gardens, a good book, and being with my children.",
    bioContinued:
      "I've been in the industry for 18+ years! My passion for beauty has turned my beautiful life into an amazing journey. I've been an independent stylist most of those years and a salon owner. I really love what I do and am so grateful to be able to share my passion with others.",
    mission:
      "When you are a modern day mama wearing all the hats, you sometimes just need a little escape. I get it, and that's why it is engrained in my mission. I want your time in my chair to be impactful.",
    beliefs:
      "I believe hair is a part of our identity. I believe you should love your hair every day in between appointments. I believe when you invest in me as your stylist, you are investing in amazing hair and experience. That means being attentive and delivering realistic, beautiful results. Most importantly, I believe in offering signature color and extension techniques that create looks that last so you can focus on what is important to you.",
    specialties: [
      "Lived-in color",
      "Grey blending",
      "Hand-tied extensions",
      "Bridal styling",
    ],
    services: ["Color", "Extensions", "Bridal", "Cuts & Styling"],
    bookingUrl: "/stylists/jennifer",
    bookingLabel: "Book with Jenn",
    phone: "(463) 555-0148",
    phoneHref: "tel:+14635550148",
    email: "jenn@willowmane.com",
    instagram: "https://www.instagram.com/jenn.at.willowmane",
  },
  {
    slug: "amanda",
    name: "Amanda",
    title: "Hairstylist",
    image: "/images/stylists/amanda.jpg",
    yearsExperience: "11+ years",
    bio: "Hi! I'm Amanda! I have been in the industry for 11+ years. I specialize in blondes, lived-in color, brunettes looking to go lighter, and beaded weft extensions. Originally from Northern California, my family and I moved here for my husband's career in air traffic control. I have three little boys under the age of 6 and they are my world. I am excited to get to know all of the new clients here in Indiana!",
    specialties: [
      "Blondes",
      "Lived-in color",
      "Brunettes going lighter",
      "Beaded weft extensions",
    ],
    services: ["Color", "Extensions", "Cuts & Styling"],
    email: "amanda@willowmane.com",
    phone: "(463) 555-0173",
    phoneHref: "tel:+14635550173",
    bookingLabel: "Email Amanda",
  },
  {
    slug: "brittany",
    name: "Brittany",
    title: "Licensed Cosmetologist",
    image: "/images/stylists/brittany.jpg",
    yearsExperience: "6 years",
    bio: "Hey loves! My name is Brittany and I am a licensed cosmetologist. My husband and I have two beautiful girls who are the light of our lives. We love the outdoors and being together as a family. I have been doing hair for 6 years and love my career as a hairdresser. I always loved playing with my sister's hair growing up and following all the latest hair trends.",
    specialties: ["Haircuts", "Color", "Styling", "Family hair"],
    services: ["Cuts", "Color", "Styling"],
    phone: "(463) 555-0284",
    phoneHref: "tel:+14635550284",
    email: "brittany@willowmane.com",
    bookingLabel: "Call or Text Brittany",
  },
  {
    slug: "maya",
    name: "Maya",
    title: "Hairstylist",
    image: "/images/stylists/maya.jpg",
    yearsExperience: "7 years",
    bio: "My name is Maya. I've been in the hair industry for 7 years now. I grew up with a mom that loved doing hair, so I've known since I was young that this was the career path for me. I am recently married and in our free time you can find us traveling, riding around with my jeep top off, or playing in the backyard with our two pups.",
    specialties: ["Color", "Cuts", "Styling"],
    services: ["Color", "Cuts", "Styling"],
    email: "maya.rivera@willowmane.com",
    phone: "(463) 291-8475",
    phoneHref: "tel:+14632918475",
    bookingLabel: "Contact Maya",
  },
  {
    slug: "jillane",
    name: "Jillane",
    title: "Licensed Cosmetologist",
    image: "/images/stylists/jillane.jpg",
    yearsExperience: "3 years",
    bio: "Hi, I'm Jillane! I'm a licensed cosmetologist and have been doing hair for three years now. I firmly believe in expressing who you are on the inside and in every way you can. Don't be afraid to have fun! Fashion colors and funky haircuts are my personal favorites. When I'm not working, I'm usually attending concerts with my high school sweetheart or watching shows with our birdie named Frankie.",
    specialties: ["Fashion colors", "Creative haircuts", "Vivid color"],
    services: ["Color", "Cuts", "Styling"],
    phone: "(463) 555-0361",
    phoneHref: "tel:+14635550361",
    email: "jillane@willowmane.com",
    bookingLabel: "Call Jillane",
  },
];

export function getStylistBySlug(slug: string): Stylist | undefined {
  return stylists.find((s) => s.slug === slug);
}
