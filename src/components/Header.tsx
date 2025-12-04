import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import nebulaLogo from '@/assets/nebula_logo.png';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const switchLanguage = () => {
    const switchingLanguage = language === 'EN' ? 'KA' : 'EN';
    setLanguage(switchingLanguage);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4 md:gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 transition-smooth hover:opacity-80"
        >
          <img
            className="h-12 w-12 sm:h-14 sm:w-14 shrink-0"
            src={nebulaLogo}
            alt="Nebula AI Hub logo"
          />
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            AI Travel Concierge
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-3">
          <Link to="/contact">
            <Button variant="ghost" className="font-medium">
              {t('nav.contact')}
            </Button>
          </Link>

          <Button variant="ghost" size="icon" onClick={switchLanguage} aria-label="Switch language">
            {language}
          </Button>

          <Link to="https://calendly.com/nebulahub-info/new-meeting">
            <Button variant="cta" size="lg">
              {t('nav.bookDemo')}
            </Button>
          </Link>
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={switchLanguage}
            aria-label="Switch language"
          >
            {language}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-border bg-background/95 shadow-soft transition-smooth origin-top overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
          <Link to="/contact" onClick={closeMobileMenu}>
            <Button variant="ghost" className="w-full justify-start text-left">
              {t('nav.contact')}
            </Button>
          </Link>

          <Button
            variant="ghost"
            className="w-full justify-start text-left"
            onClick={() => {
              switchLanguage();
              closeMobileMenu();
            }}
          >
            {language === 'EN' ? 'Switch to KA' : 'Switch to EN'}
          </Button>

          <Link to="https://calendly.com/nebulahub-info/new-meeting" onClick={closeMobileMenu}>
            <Button variant="cta" size="lg" className="w-full justify-center">
              {t('nav.bookDemo')}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
