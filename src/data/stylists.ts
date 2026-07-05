export type Stylist = {
  slug: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  mission?: string;
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
    title: "Master Hairstylist & Salon Owner",
    image: "/images/stylists/jennifer.jpg",
    yearsExperience: "18+ years",
    bio: "Hi loves! I'm a Master Hairstylist from Indianapolis, IN. I specialize in lived-in color, grey blending, hand-tied extensions, and bridal styling. When I'm out of the salon you can catch me with a good coffee in hand, working in my gardens, reading a good book, and being with my children.",
    mission:
      "When you are a modern day mama wearing all the hats, you sometimes just need a little escape. I get it, and that's why it is engrained in my mission. I want your time in my chair to be impactful.",
    specialties: [
      "Lived-in color",
      "Grey blending",
      "Hand-tied extensions",
      "Bridal styling",
    ],
    services: ["Color", "Extensions", "Bridal", "Cuts & Styling"],
    bookingUrl:
      "https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVHwSNCa/tXn7ub55Ota6Kz+Ks2b6HFGOJnG9vphKKebzE+rv1BwSbQ2Z7c8YXZvaMgmPWWutsytOir6yTKZczmkppoU2io7h5Tsd2hzOI/vb+JZ1xQipXHxF3BvEY6VEY135hAFGsFzVfnG/vy1DolZN/3pSB/3m1zRF6KEZ/9lGIzpuTjHsjmtnk5OZdXvxx+TtRdROuClLqryA7ZjRPPMm4f/57Srr8QnHMNWP/8Zr6MfKfJhfzOEc3LhLVnS96729zwLB595iuPGeELhtzttEmjzoWtx4OMyMWlN4HiXVXpgPrEJ9z7Dp5AhGTH4TzOHMA6qL9dSt/arwBkR21sYPpwBkby6Z+Bq50juZ0/4V31ZryZK0m6ndiydsFAkfi4D85Uhyeno6nlJTKeFV8VxW9o4D0FuiRltmZq77jnGJ",
    bookingLabel: "Book with Jenn",
    phone: "(317) 918-3780",
    phoneHref: "tel:+13179183780",
    instagram: "https://www.instagram.com/jenniferdoddstylist",
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
    email: "amandarose_hair@hotmail.com",
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
    phone: "(618) 660-4529",
    phoneHref: "tel:+16186604529",
    bookingLabel: "Call or Text Brittany",
  },
  {
    slug: "sydney",
    name: "Sydney",
    title: "Hairstylist",
    image: "/images/stylists/sydney.jpg",
    yearsExperience: "7 years",
    bio: "My name is Sydney. I've been in the hair industry for 7 years now. I grew up with a mom that loved doing hair, so I've known since I was young that this was the career path for me. I am recently married and in our free time you can find us traveling, riding around with my jeep top off, or playing in the backyard with our two pups.",
    specialties: ["Color", "Cuts", "Styling"],
    services: ["Color", "Cuts", "Styling"],
    email: "syney_strode@yahoo.com",
    phone: "(317) 460-3881",
    phoneHref: "tel:+13174603881",
    bookingLabel: "Contact Sydney",
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
    phone: "(317) 694-3677",
    phoneHref: "tel:+13176943677",
    bookingLabel: "Call Jillane",
  },
];

export function getStylistBySlug(slug: string): Stylist | undefined {
  return stylists.find((s) => s.slug === slug);
}
