import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Sparkles, Download } from 'lucide-react';

const ProcessCards = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Sparkles,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Download,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('process.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="gradient-card border-border shadow-soft hover:shadow-hover transition-smooth hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-8 pb-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.bgColor} mb-6`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessCards;
