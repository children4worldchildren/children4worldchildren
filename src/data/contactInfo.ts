export interface ContactInfo {
  headOffice: {
    address: string;
    phone: string;
    email: string;
  };
  annexOffice: {
    address: string;
    phone: string;
    email: string;
  };
  generalEmail: string;
  generalPhone: string;
  registration: {
    croNumber: string;
  };
}

export const defaultContactInfo: ContactInfo = {
  headOffice: {
    address: 'Carmichael Centre\n4 North Brunswick Street\nDublin 7\nCo.Dublin, D07 RHA8',
    phone: '+353 89 967 8931',
    email: 'hello@children4worldchildren.com'
  },
  annexOffice: {
    address: 'Children 4 World Childrens Place\nNigeria',
    phone: '+353 89 967 8931',
    email: 'hello@children4worldchildren.com'
  },
  generalEmail: 'hello@children4worldchildren.com',
  generalPhone: '+353 89 967 8931',
  registration: {
    croNumber: '553917'
  }
};
