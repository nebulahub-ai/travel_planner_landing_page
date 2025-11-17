import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: t('contact.emailValue'),
      href: `mailto:${t('contact.emailValue')}`,
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: t('contact.phoneValue'),
      additionalValue: t('contact.phone1Value'),
      href: `tel:${t('contact.phoneValue')}`,
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: t('contact.addressValue'),
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="gradient-card border-border shadow-soft hover:shadow-hover transition-smooth hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <info.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {info.label}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {info.value}
                    </a>
                    
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                    
                  )}

                  {info.additionalValue && <p className="text-muted-foreground">{info.additionalValue}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
