export interface OfficeLocation {
  name: string;
  address: string;
  phone: string;
  email: string;
}

export interface ContactInfo {
  irelandOffices: OfficeLocation[];
  otherCountries: OfficeLocation[];
  generalEmail: string;
  generalPhone: string;
  registration: {
    croNumber: string;
  };
}

export const defaultContactInfo: ContactInfo = {
  irelandOffices: [
    {
      name: 'Dublin City',
      address: 'Carmichael Centre\n4 North Brunswick Street\nDublin 7\nCo.Dublin, D07 RHA8',
      phone: '+353 89 967 8931',
      email: 'hello@children4worldchildren.com'
    },
    {
      name: 'Dublin South',
      address: '6 North Brunswick Street\nDublin 7\nCo.Dublin, D17 RHA8',
      phone: '+353 89 967 8931',
      email: 'hello@children4worldchildren.com'
    }
  ],
  otherCountries: [
    {
      name: 'Nigeria',
      address: 'Children 4 World Childrens Place\nNigeria',
      phone: '+234 800 000 0000',
      email: 'nigeria@children4worldchildren.com'
    },
    {
      name: 'Netherlands',
      address: 'Coming Soon\nNetherlands',
      phone: '+31 00 000 0000',
      email: 'netherlands@children4worldchildren.com'
    },
    {
      name: 'India',
      address: 'Coming Soon\nIndia',
      phone: '+91 00 0000 0000',
      email: 'india@children4worldchildren.com'
    }
  ],
  generalEmail: 'hello@children4worldchildren.com',
  generalPhone: '+353 89 967 8931',
  registration: {
    croNumber: '553917'
  }
};
