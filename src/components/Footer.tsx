import { Plane } from 'lucide-react';
import nebulaLogo from '@/assets/nebula_logo.png'
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-card border-t border-border mt-auto">
  <div className="container mx-auto px-6 py-12">
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <img src={nebulaLogo} className="h-16 w-16" alt="Nebula Logo" style={{ background: 'none' }}/>
          <span className="text-2xl font-bold text-foreground">Nebula AI Hub</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {t('footer.description')}
        </p>

    <Link to={"https://calendly.com/nebulahub-info/new-meeting"}>
        <Button variant='cta' className='mt-3'>
          {t('nav.bookDemo')}
        </Button>
    </Link>
        
      </div>


      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">{t('footer.links')}</h3>
        <ul className="space-y-2 text-muted-foreground text-sm">
          <li><a href="/" className="hover:text-primary transition-colors">{t('footer.home')}</a></li>
          <li><a href="#reviews" className="hover:text-primary transition-colors">{t('footer.reviews')}</a></li>
          <li><a href="/contact" className="hover:text-primary transition-colors">{t('footer.contact')}</a></li>
        </ul>
      </div>




      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">{t('footer.contactUs')}</h3>
        <ul className="space-y-2 text-muted-foreground text-sm">
          <li>{t('contact.email')}: <a href="mailto:info@nebula.com" className="hover:text-primary transition-colors">info@nebula.com</a></li>
          <li className="hover:text-primary transition-colors">{t('contact.phone')}: (+995) 571 33 33 03</li>
          <li className="hover:text-primary transition-colors">{t('contact.phone')}: (+995) 579 58 88 59</li>
          <li className='max-lg:max-w-[80%]'>{t('contact.address')}: {t('contact.addressValue')}</li>
        </ul>

    
        <div className="flex gap-4 mt-4">
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#"><i className="fab fa-facebook text-xl"></i></a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#"><i className="fab fa-twitter text-xl"></i></a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#"><i className="fab fa-linkedin text-xl"></i></a>
          <a className="text-muted-foreground hover:text-primary transition-colors" href="#"><i className="fab fa-github text-xl"></i></a>
        </div>
      </div>

    </div>

    
    <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground text-sm">
      © 2025 Nebula AI Hub. All rights reserved.
    </div>

  </div>
</footer>

  );
};

export default Footer;
