import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Demo = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('demo.success'),
      description: t('demo.subtitle'),
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t('demo.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('demo.subtitle')}
            </p>
          </div>

          <Card className="max-w-2xl mx-auto gradient-card border-border shadow-soft animate-fade-in">
            <CardContent className="pt-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    {t('demo.name')}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-background border-border focus:border-primary transition-smooth"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    {t('demo.email')}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-background border-border focus:border-primary transition-smooth"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-foreground font-medium">
                    {t('demo.company')}
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 bg-background border-border focus:border-primary transition-smooth"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    {t('demo.message')}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 bg-background border-border focus:border-primary transition-smooth resize-none"
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full text-lg">
                  {t('demo.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
