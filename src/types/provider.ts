export interface Provider {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviewsCount: number;
  location: string;
  startingPrice: number;
  experience: number;
  verified: boolean;
  image: string;
  description: string;
  availability: string;
  services: string[];
}
