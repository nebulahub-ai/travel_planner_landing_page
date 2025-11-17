import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ka';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.contact': 'Contact',
    'nav.bookDemo': 'Book a Demo',
    
    // Hero
    'hero.title': 'Plan Your Perfect Journey with AI',
    'hero.subtitle': 'Get personalized travel recommendations and detailed itineraries powered by advanced AI. Your dream vacation starts here.',
    'hero.cta': 'Start Planning',
    
    // Process
    'process.title': 'How It Works',
    'process.step1.title': 'Ask Your Question',
    'process.step1.description': 'Share your travel preferences, budget, and interests with our AI chat assistant.',
    'process.step2.title': 'Get AI Recommendations',
    'process.step2.description': 'Receive personalized destination suggestions and travel tips tailored to your needs.',
    'process.step3.title': 'Download Your Itinerary',
    'process.step3.description': 'Get a comprehensive travel information file with all details for your perfect trip.',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have questions? We\'d love to hear from you.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.emailValue': 'info@nebulahub.ai',
    'contact.phoneValue': '+995 571 33 33 03',
    'contact.phone1Value': '+995 579 58 88 59',
    'contact.addressValue': 'St. Nino Street N4, Kutaisi, Georgia',
    
    // Demo
    'demo.title': 'Book a Demo',
    'demo.subtitle': 'See how our AI travel planner can transform your travel planning experience.',
    'demo.name': 'Full Name',
    'demo.email': 'Email Address',
    'demo.company': 'Company (Optional)',
    'demo.message': 'Tell us about your travel planning needs',
    'demo.submit': 'Schedule Demo',
    'demo.success': 'Thank you! We\'ll be in touch soon.',
  },
  ka: {
// Header
    'nav.contact': 'კონტაქტი',
    'nav.bookDemo': 'დემოს დაჯავშნა',
    
    // Hero
    'hero.title': 'დაგეგმე იდეალური მოგზაურობა ხელოვნური ინტელექტით',
    'hero.subtitle': 'მიიღე პერსონალიზებული სამოგზაურო რეკომენდაციები და დეტალური მარშრუტები მოწინავე ხელოვნური ინტელექტის დახმარებით. შენი საოცნებო არდადეგები აქ იწყება.',
    'hero.cta': 'დაგეგმვის დაწყება',
    
    // Process
    'process.title': 'როგორ მუშაობს',
    'process.step1.title': 'დასვი შეკითხვა',
    'process.step1.description': 'გაუზიარე შენი სამოგზაურო პრეფერენციები, ბიუჯეტი და ინტერესები ჩვენს AI ასისტენტს.',
    'process.step2.title': 'მიიღე AI რეკომენდაციები',
    'process.step2.description': 'მიიღე დანიშნულების ადგილების პერსონალიზებული შეთავაზებები და შენს საჭიროებებზე მორგებული სამოგზაურო რჩევები.',
    'process.step3.title': 'ჩამოტვირთე შენი მარშრუტი',
    'process.step3.description': 'მიიღე სრული საინფორმაციო ფაილი, რომელიც შეიცავს ყველა დეტალს შენი იდეალური მოგზაურობისთვის.',
    
    // Contact
    'contact.title': 'დაგვიკავშირდით',
    'contact.subtitle': 'გაქვთ შეკითხვები? სიამოვნებით გიპასუხებთ.',
    'contact.email': 'ელ. ფოსტა',
    'contact.phone': 'ტელეფონი',
    'contact.address': 'მისამართი',
    'contact.emailValue': 'info@nebulahub.ai',
    'contact.phoneValue': '+995 571 33 33 03',
    'contact.phone1Value': '+995 579 58 88 59',
    'contact.addressValue': 'წმ. ნინოს ქუჩა N4, ქუთაისი, საქართველო',
    
    // Demo
    'demo.title': 'დემოს დაჯავშნა',
    'demo.subtitle': 'აღმოაჩინე, თუ როგორ შეუძლია ჩვენს AI სამოგზაურო გეგმარს შეცვალოს შენი დაგეგმვის გამოცდილება.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
