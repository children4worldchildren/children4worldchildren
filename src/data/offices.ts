export interface Office {
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const offices: Office[] = [
  {
    name: 'Head Office',
    city: 'Dublin',
    address: 'Carmichael Centre\n4 North Brunswick Street\nDublin 7\nCo.Dublin, D07 RHA8',
    phone: '+353 89 967 8931',
    email: 'hello@children4worldchildren.com',
    image: `${import.meta.env.BASE_URL}mofc.JPG`,
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
    coordinates: { lat: 53.3498, lng: -6.2662 },
  },
  {
    name: 'Annex Office',
    city: 'Nigeria',
    address: 'Children 4 World Childrens Place\nNigeria',
    phone: '+234 123 456 7890',
    email: 'nigeria@children4worldchildren.com',
    image: `${import.meta.env.BASE_URL}bofc.jpg`,
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
    coordinates: { lat: 9.0820, lng: 8.6753 },
  },
];
