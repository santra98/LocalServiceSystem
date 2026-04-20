import type { Provider } from "../types/provider";

export const providers: Provider[] = [
  {
    id: 1,
    name: "Arun Electrical Works",
    category: "Electrician",
    rating: 4.8,
    reviewsCount: 128,
    location: "Indiranagar",
    startingPrice: 499,
    experience: 6,
    verified: true,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    description:
      "Reliable home electrical repair and installation services for wiring, lights, fans and switchboards.",
    availability: "Available Today",
    services: [
      "Fan installation",
      "Switch board repair",
      "Light fitting",
      "Wiring fixes",
      "Power issue troubleshooting",
    ],
  },
  {
    id: 2,
    name: "QuickFix Plumbing",
    category: "Plumber",
    rating: 4.6,
    reviewsCount: 94,
    location: "Koramangala",
    startingPrice: 399,
    experience: 5,
    verified: true,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
    description:
      "Expert plumbing support for leakage issues, pipe fitting, bathroom repairs and tap replacement.",
    availability: "Next Slot: 4:30 PM",
    services: [
      "Pipe fitting",
      "Tap replacement",
      "Leakage repair",
      "Drain blockage fixes",
      "Bathroom plumbing support",
    ],
  },
  {
    id: 3,
    name: "Sparkle Home Cleaning",
    category: "Cleaner",
    rating: 4.9,
    reviewsCount: 201,
    location: "HSR Layout",
    startingPrice: 699,
    experience: 7,
    verified: true,
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80",
    description:
      "Deep home cleaning services for apartments, villas, kitchens and post-move cleanup.",
    availability: "Available Tomorrow",
    services: [
      "Full home deep cleaning",
      "Kitchen cleaning",
      "Bathroom cleaning",
      "Move-in/move-out cleaning",
      "Sofa and surface cleanup",
    ],
  },
  {
    id: 4,
    name: "Glow Studio at Home",
    category: "Beautician",
    rating: 4.7,
    reviewsCount: 87,
    location: "Whitefield",
    startingPrice: 799,
    experience: 4,
    verified: true,
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    description:
      "Salon-at-home appointments for grooming, party makeup, skincare and bridal preparation.",
    availability: "Next Slot: 11:00 AM",
    services: [
      "Party makeup",
      "Hair styling",
      "Facial and skincare",
      "Bridal grooming",
      "Waxing and cleanup",
    ],
  },
  {
    id: 5,
    name: "CoolCare AC Services",
    category: "AC Repair",
    rating: 4.5,
    reviewsCount: 73,
    location: "Marathahalli",
    startingPrice: 599,
    experience: 8,
    verified: false,
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=80",
    description:
      "AC installation, servicing, gas refill and troubleshooting for home and office units.",
    availability: "Available Today",
    services: [
      "AC servicing",
      "Gas refill",
      "Installation support",
      "Cooling issue diagnosis",
      "General maintenance",
    ],
  },
  {
    id: 6,
    name: "BrightPath Tutors",
    category: "Tutor",
    rating: 4.8,
    reviewsCount: 62,
    location: "Jayanagar",
    startingPrice: 999,
    experience: 9,
    verified: true,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    description:
      "One-to-one tutoring for school students with flexible sessions and experienced mentors.",
    availability: "Available This Week",
    services: [
      "Math tutoring",
      "Science support",
      "Exam preparation",
      "Homework guidance",
      "Weekly learning plans",
    ],
  },
];
