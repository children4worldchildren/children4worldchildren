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
  country: string;
}

export const offices: Office[] = [
  // Ireland Offices
  {
    name: 'Dublin City Office',
    city: 'Dublin',
    address: 'Carmichael Centre\n4 North Brunswick Street\nDublin 7\nCo.Dublin, D07 RHA8',
    phone: '+353 89 967 8931',
    email: 'hello@children4worldchildren.com',
    image: `${import.meta.env.BASE_URL}mofc.JPG`,
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
    coordinates: { lat: 53.3498, lng: -6.2662 },
    country: 'Ireland',
  },
  {
    name: 'Dublin South Office',
    city: 'Dublin',
    address: 'Coming Soon\nCo.Dublin, D17 XXXX',
    phone: '',
    email: '',
    image: `${import.meta.env.BASE_URL}mofc.JPG`,
    hours: '',
    coordinates: { lat: 53.3498, lng: -6.2662 },
    country: 'Ireland',
  },
  {
    name: 'Fingal Office',
    city: 'Swords',
    address: 'Coming Soon\nSwords\nCo. Fingal, K67 XXXX',
    phone: '',
    email: '',
    image: `${import.meta.env.BASE_URL}mofc.JPG`,
    hours: '',
    coordinates: { lat: 53.4607, lng: -6.2184 },
    country: 'Ireland',
  },
  
  // Other Countries
  {
    name: 'Nigeria Office',
    city: 'Lagos',
    address: 'Children 4 World Childrens Place\nLagos, Nigeria',
    phone: '+234 800 000 0000',
    email: 'nigeria@children4worldchildren.com',
    image: `${import.meta.env.BASE_URL}bofc.jpg`,
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
    coordinates: { lat: 6.5244, lng: 3.3792 },
    country: 'Nigeria',
  },
  {
    name: 'Netherlands Office',
    city: 'Amsterdam',
    address: 'Coming Soon\nAmsterdam, Netherlands',
    phone: '+31 00 000 0000',
    email: 'netherlands@children4worldchildren.com',
    image: `${import.meta.env.BASE_URL}bofc.jpg`,
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
    coordinates: { lat: 52.3676, lng: 4.9041 },
    country: 'Netherlands',
  },
  {
    name: 'India Office',
    city: 'New Delhi',
    address: 'Coming Soon\nNew Delhi, India',
    phone: '+91 00 0000 0000',
    email: 'india@children4worldchildren.com',
    image: `${import.meta.env.BASE_URL}bofc.jpg`,
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
    coordinates: { lat: 28.6139, lng: 77.2090 },
    country: 'India',
  },
];
