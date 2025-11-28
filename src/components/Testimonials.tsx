import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "./ui/card";
import test1 from "@/assets/testimonials/testimonial_1.jpg"
import test2 from "@/assets/testimonials/testimonial_2.jpg"
import test3 from "@/assets/testimonials/testimonial_3.jpg"
import test4 from "@/assets/testimonials/testimonial_4.jpg"
import test5 from "@/assets/testimonials/testimonial_5.jpg"
import test6 from "@/assets/testimonials/testimonial_6.jpg"
const Testimonials = ()=> {
    const { t } = useLanguage()
const reviews = [
    {
        imgUrl: test1,
        name: "Nika",
        country: "Georgia",
        review: "AI Travel Concierge helped me plan a weekend trip to Italy in under 5 minutes. Everything was perfectly tailored to my budget and interests. Amazing tool!"
    },
    {
        imgUrl: test2,
        name: "Anna",
        country: "Germany",
        review: "I love how the AI recommends destinations I would never think about myself. The itinerary download feature is super helpful and very detailed."
    },
    {
        imgUrl: test3,
        name: "David",
        country: "USA",
        review: "Planning trips used to be stressful, but this app changed everything. The recommendations were personalized and the itinerary file was extremely clear."
    },
    {
        imgUrl: test4,
        name: "Maya",
        country: "Israel",
        review: "Super quick and accurate travel suggestions. Saved me hours of googling. I’m using it for all my future trips!"
    },

    {
        imgUrl: test5,
        name: "Sofia",
        country: "Spain",
        review: "The AI instantly created a full 7-day itinerary for my trip to Greece. It even suggested hidden beaches and local restaurants. Super impressive experience!"
    },
    {
        imgUrl: test6,
        name: "Luka",
        country: "Croatia",
        review: "I used the app to plan my honeymoon. The recommendations were spot-on, and the daily schedule was incredibly well organized. Highly recommended!"
    }
]


    return (
        <section id="reviews" className="py-24 bg-secondary/80">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {t("testimonial.title")}
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    { reviews.map((review, index)=>{
                        return (
                            <Card
                            className="gradient-card border-border shadow-soft hover:shadow-hover transition-smooth hover:-translate-y-2 animate-fade-in"
                            style={{ animationDelay: `${index * 150}ms`}} 
                            key={index}>
                                <CardContent className="flex flex-col pt-8 pb-8 text-center">
                                    <img src={review.imgUrl} className="rounded-sm" alt="No Image"/>
                                    <h3 className="text-2xl font-bold text-foreground mb-4 mt-3">{review.name}, {review.country}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{review.review}</p>
                                </CardContent>
                            </Card>
                        )
                    }) }
                </div>
            </div>
        </section>
    )

}

export default Testimonials