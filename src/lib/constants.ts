export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  duration: string;
  vehicle: string;
  price: string;
  image: string;
  category: string;
  highlights: string[];
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  image: string;
  description: string;
}

export const packagesData: TourPackage[] = [
  {
    id: "pkg-1",
    slug: "same-day-gokul-mathura-vrindavan",
    title: "Same Day Gokul, Mathura & Vrindavan Tour Package",
    duration: "1 Day / 1 Night",
    vehicle: "Private AC Vehicle",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800",
    category: "1 Day Packages",
    highlights: ["Banke Bihari Temple", "Krishna Janmabhoomi", "Gokul Brahamand Ghat", "Prem Mandir Light Show"]
  },
  {
    id: "pkg-2",
    slug: "mathura-vrindavan-tour",
    title: "Mathura Vrindavan Tour Package",
    duration: "1 Night / 2 Days",
    vehicle: "Private AC Vehicle",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800",
    category: "1 Night / 2 Days",
    highlights: ["Yamuna Aarti at Vishram Ghat", "ISKCON Vrindavan", "Govardhan Parikrama Overview", "Dwarkadhish Temple"]
  },
  {
    id: "pkg-3",
    slug: "gokul-mathura-vrindavan-agra",
    title: "Gokul Mathura Vrindavan with Agra Tour Package",
    duration: "2 Days / 1 Night",
    vehicle: "Private AC Vehicle",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800",
    category: "2 Days / 1 Night",
    highlights: ["Taj Mahal Sunrise", "Agra Fort", "Mathura & Vrindavan Temples", "Comfortable Hotel Stay"]
  },
  {
    id: "pkg-4",
    slug: "govardhan-nandgaon-barsana",
    title: "Govardhan, Nandgaon, Barsana Tour Package",
    duration: "1 Day",
    vehicle: "Private AC Vehicle",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
    category: "Special Packages",
    highlights: ["Radha Rani Temple Barsana", "Nand Bhavan Nandgaon", "Govardhan Giriraj Shila Pujan", "Daan Ghati Temple"]
  }
];

export const destinationsData: Destination[] = [
  {
    id: "dest-1",
    slug: "prem-mandir",
    name: "Prem Mandir",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600",
    description: "A magnificent temple built in white marble dedicated to divine love."
  },
  {
    id: "dest-2",
    slug: "banke-bihari-temple",
    name: "Banke Bihari Temple",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600",
    description: "One of the holiest and most vibrant shrines of Lord Krishna."
  },
  {
    id: "dest-3",
    slug: "yamuna-ghat",
    name: "Yamuna Ghat",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=600",
    description: "Serene riverbanks offering peaceful boat rides and evening aarti."
  },
  {
    id: "dest-4",
    slug: "govardhan-parvat",
    name: "Govardhan Parvat",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600",
    description: "Sacred hill lifted by Lord Krishna, central to Braj pilgrimage."
  },
  {
    id: "dest-5",
    slug: "barsana",
    name: "Barsana",
    image: "https://images.unsplash.com/photo-1599661046289-e3189878ce45?auto=format&fit=crop&q=80&w=600",
    description: "The legendary birthplace of Radha Rani featuring stunning hilltop architecture."
  },
  {
    id: "dest-6",
    slug: "nandgaon",
    name: "Nandgaon",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600",
    description: "Childhood home of Lord Krishna surrounded by tranquil hills."
  }
];

export const benefitsData = [
  {
    title: "Safe & Comfortable Travel",
    subtitle: "Private AC Vehicles with Experienced Drivers",
    iconName: "Shield"
  },
  {
    title: "Well-Planned Itineraries",
    subtitle: "Customized spiritual & sightseeing schedules",
    iconName: "Map"
  },
  {
    title: "24/7 Customer Support",
    subtitle: "Dedicated travel assistance round the clock",
    iconName: "Headphones"
  },
  {
    title: "Trusted & Safe Travel",
    subtitle: "Verified hotels and transparent pricing",
    iconName: "CheckCircle"
  }
];

export const whyChooseUsData = [
  {
    title: "Trusted & Safe Travel",
    description: "Complete peace of mind on every pilgrimage journey.",
    icon: "ShieldCheck"
  },
  {
    title: "Well Maintained Vehicles",
    description: "Clean, sanitized AC sedans, SUVs, and tempo travellers.",
    icon: "Car"
  },
  {
    title: "Experienced Drivers",
    description: "Courteous local drivers well-versed with Braj history and routes.",
    icon: "UserCheck"
  },
  {
    title: "Customizable Packages",
    description: "Tailor-made itineraries to fit your family and schedule needs.",
    icon: "Sliders"
  }
];