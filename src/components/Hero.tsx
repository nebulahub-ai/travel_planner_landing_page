import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-travel.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-accent/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <Button variant="hero" size="lg" className="text-xl px-10 py-7 h-auto">
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
