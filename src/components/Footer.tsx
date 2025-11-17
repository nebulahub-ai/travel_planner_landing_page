import { Plane } from 'lucide-react';
import nebulaLogo from '@/assets/nebula_logo.svg'
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className='h-20 w-20' src={nebulaLogo}/>

            <span className="text-xl font-bold text-foreground">Nebula AI Hub</span>
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            © {currentYear} Nebula AI Hub. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              {t('contact')}
            </a>
            <a href="/demo" className="text-muted-foreground hover:text-primary transition-colors">
              {t('bookDemo')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
