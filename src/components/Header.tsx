import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import nebulaLogo from '@/assets/nebula_logo.svg'
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Plane } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'geo', name: 'ქართული' },
  ];

  const switchLanguage = ()=>{
    const switchingLanguage = language == 'en'? 'ka': 'en'
    setLanguage(switchingLanguage)

  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
          <img className='h-14 w-14' src={nebulaLogo}/>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nebula AI
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/contact">
            <Button variant="ghost" className="font-medium">
              {t('nav.contact')}
            </Button>
          </Link>


            <Button variant="ghost" size="icon" onClick={()=>switchLanguage()}>
                {language}
            </Button>

            {/* <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={language === lang.code ? 'bg-secondary' : ''}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent> */}


          <Link to="/demo">
            <Button variant="cta" size="lg">
              {t('nav.bookDemo')}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
