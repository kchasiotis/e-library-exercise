export interface Hotel {
  imageUri: string;
  title: string;
  description: string;
  price: number;
  stars: string; // or number, if you prefer using a numeric type for ratings
}

export const cardList: Hotel[] = [
  {
    imageUri: 'assets/hotel1.jpg',
    title: 'Urban Luxe',
    description:
      'A serene retreat in the mountains with beautiful views and cozy amenities.',
    price: 120,
    stars: '4.5',
  },
  {
    imageUri: 'assets/hotel2.jpg',
    title: 'Luxury Hotel',
    description:
      'Experience the best in city luxury with top-class facilities and modern design.',
    price: 200,
    stars: '4.8',
  },
  {
    imageUri: 'assets/hotel3.jpg',
    title: 'Beachside Resort',
    description:
      'A tropical paradise with beach access, perfect for a relaxing vacation.',
    price: 180,
    stars: '4.6',
  },
  {
    imageUri: 'assets/hotel4.jpg',
    title: 'Historic Boutique Hotel',
    description:
      'A charming, historic hotel with vintage decor and modern amenities in the heart of downtown.',
    price: 150,
    stars: '4.7',
  },
  {
    imageUri: 'assets/hotel5.jpg',
    title: 'Eco-Friendly Lodge',
    description:
      'Sustainable and eco-friendly, nestled in nature with organic meals and a peaceful environment.',
    price: 110,
    stars: '4.4',
  },
  {
    imageUri: 'assets/hotel6.jpg',
    title: 'Luxury Desert Oasis',
    description:
      'A luxurious resort in the desert with spa services, pools, and unique experiences.',
    price: 250,
    stars: '4.9',
  },
];
