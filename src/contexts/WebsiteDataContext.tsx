import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CompanyInfo {
  name: string;
  tagline: string;
  mission: string;
  vision: string;
  description: string;
  foundedYear: string;
  employees: string;
}

interface ContactInfo {
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
}

interface WebsiteData {
  companyInfo: CompanyInfo;
  contactInfo: ContactInfo;
  images: {[key: string]: string};
}

const defaultCompanyInfo: CompanyInfo = {
  name: 'Children 4 World Children',
  tagline: 'Empowering Kids And Changing Lives',
  mission: 'To create positive change in children\'s lives through education, healthcare, and community support programs that empower them to build a brighter future.',
  vision: 'A world where every child has access to education, healthcare, and the opportunity to reach their full potential.',
  description: 'Children 4 World Children is a leading charitable organization dedicated to creating positive change in children\'s lives worldwide. We focus on comprehensive programs that address the root causes of child poverty and create lasting positive change.',
  foundedYear: '2021',
  employees: '50+'
};

const defaultContactInfo: ContactInfo = {
  headOffice: {
    address: '123 Charity Lane, Dublin 1, Ireland',
    phone: '+353 1 234 5678',
    email: 'info@children4worldchildren.org'
  },
  annexOffice: {
    address: '456 Hope Street, Cork, Ireland',
    phone: '+353 21 987 6543',
    email: 'cork@children4worldchildren.org'
  },
  generalEmail: 'info@children4worldchildren.org',
  generalPhone: '+353 1 234 5678'
};

const WebsiteDataContext = createContext<{
  data: WebsiteData;
  updateData: (newData: Partial<WebsiteData>) => void;
}>({
  data: {
    companyInfo: defaultCompanyInfo,
    contactInfo: defaultContactInfo,
    images: {}
  },
  updateData: () => {}
});

export const useWebsiteData = () => useContext(WebsiteDataContext);

interface WebsiteDataProviderProps {
  children: ReactNode;
}

export const WebsiteDataProvider: React.FC<WebsiteDataProviderProps> = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: 'Children 4 World Children',
    tagline: 'Empowering Kids And Changing Lives',
    mission: 'To create positive change in children\'s lives through education, healthcare, and community support programs that empower them to build a brighter future.',
    vision: 'A world where every child has access to education, healthcare, and the opportunity to reach their full potential.',
    description: 'Children 4 World Children is a leading charitable organization dedicated to creating positive change in children\'s lives worldwide. We focus on comprehensive programs that address the root causes of child poverty and create lasting positive change.',
    foundedYear: '2021',
    employees: '50+',
  });

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    headOffice: {
      address: '123 Charity Lane, Dublin 1, Ireland',
      phone: '+353 1 234 5678',
      email: 'info@children4worldchildren.org'
    },
    annexOffice: {
      address: '456 Hope Street, Cork, Ireland',
      phone: '+353 21 987 6543',
      email: 'cork@children4worldchildren.org'
    },
    generalEmail: 'info@children4worldchildren.org',
    generalPhone: '+353 1 234 5678',
  });

  const [images, setImages] = useState<Images>({
    hero: `${import.meta.env.BASE_URL}children-4-world-children.png`,
    about: `${import.meta.env.BASE_URL}children-4-world-children.png`,
    logo: `${import.meta.env.BASE_URL}logo.png`,
  });

  useEffect(() => {
    // Load saved data from localStorage
    const savedCompanyInfo = localStorage.getItem('charity_company_info');
    const savedContactInfo = localStorage.getItem('charity_contact_info');
    const savedImages = localStorage.getItem('charity_images');

    if (savedCompanyInfo) {
      setCompanyInfo(JSON.parse(savedCompanyInfo));
    }
    if (savedContactInfo) {
      setContactInfo(JSON.parse(savedContactInfo));
    }
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    }
  }, []);

  const updateData = (data: { companyInfo?: CompanyInfo; contactInfo?: ContactInfo; images?: Images }) => {
    if (data.companyInfo) {
      setCompanyInfo(data.companyInfo);
      localStorage.setItem('charity_company_info', JSON.stringify(data.companyInfo));
    }
    if (data.contactInfo) {
      setContactInfo(data.contactInfo);
      localStorage.setItem('charity_contact_info', JSON.stringify(data.contactInfo));
    }
    if (data.images) {
      setImages(data.images);
      localStorage.setItem('charity_images', JSON.stringify(data.images));
    }
  };

  return (
    <WebsiteDataContext.Provider value={{ data: { companyInfo, contactInfo, images }, updateData }}>
      {children}
    </WebsiteDataContext.Provider>
  );
}; 