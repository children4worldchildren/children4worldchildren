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
  name: 'Johnbabs Environmental and Engineering Services Ltd',
  tagline: 'Environmental Excellence, Engineering Solutions',
  mission: 'To provide innovative, sustainable, and cost-effective environmental and engineering solutions that protect natural resources, ensure regulatory compliance, and support sustainable development across Nigeria and West Africa.',
  vision: 'To be the leading environmental and engineering consultancy firm in Nigeria, recognized for our technical excellence, innovative solutions, and unwavering commitment to environmental stewardship and sustainable development.',
  description: 'Leading environmental consultancy and engineering services provider in Nigeria, committed to sustainable development and environmental protection.',
  foundedYear: '2008',
  employees: '50+'
};

const defaultContactInfo: ContactInfo = {
  headOffice: {
    address: '123 Environmental Way, Victoria Island, Lagos, Nigeria',
    phone: '+234 (0) 123 456 7890',
    email: 'lagos@johnbabs.com'
  },
  annexOffice: {
    address: '456 Federal Way, Central Business District, Abuja, Nigeria',
    phone: '+234 (0) 987 654 3210',
    email: 'abuja@johnbabs.com'
  },
  generalEmail: 'info@johnbabs.com',
  generalPhone: '+234 (0) 123 456 7890'
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
  const [data, setData] = useState<WebsiteData>(() => {
    // Load data from localStorage on initialization
    const savedCompanyInfo = localStorage.getItem('johnbabs_company_info');
    const savedContactInfo = localStorage.getItem('johnbabs_contact_info');
    const savedImages = localStorage.getItem('johnbabs_images');
    
    return {
      companyInfo: savedCompanyInfo ? JSON.parse(savedCompanyInfo) : defaultCompanyInfo,
      contactInfo: savedContactInfo ? JSON.parse(savedContactInfo) : defaultContactInfo,
      images: savedImages ? JSON.parse(savedImages) : {}
    };
  });

  const updateData = (newData: Partial<WebsiteData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('johnbabs_company_info', JSON.stringify(data.companyInfo));
  }, [data.companyInfo]);

  useEffect(() => {
    localStorage.setItem('johnbabs_contact_info', JSON.stringify(data.contactInfo));
  }, [data.contactInfo]);

  useEffect(() => {
    localStorage.setItem('johnbabs_images', JSON.stringify(data.images));
  }, [data.images]);

  return (
    <WebsiteDataContext.Provider value={{ data, updateData }}>
      {children}
    </WebsiteDataContext.Provider>
  );
}; 