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
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: t('contact.phoneValue'),
      additionalValue: t('contact.phone1Value'),
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: t('contact.addressValue'),
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {t('contact.title')}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                    <p className="text-muted-foreground">{info.value}</p>
                  {info.additionalValue && <p className="text-muted-foreground">{info.additionalValue}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className='m-auto flex w-full justify-center gap-5 mt-5'>
            <a href="https://www.facebook.com/profile.php?id=61573891437689">facebook</a>
            <a href="https://www.linkedin.com/company/nebula-ai-hub/posts/?feedView=all">linkedin</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
