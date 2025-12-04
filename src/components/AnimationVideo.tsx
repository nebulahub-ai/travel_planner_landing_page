import { useLanguage } from "@/contexts/LanguageContext";
import playButton from "@/assets/playButton.svg"


const AnimationVideo = ()=>{
    const { t } = useLanguage()

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-center text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {t("animationVideo.title")}
                    </h2>
                    <p className="text-base sm:text-lg font-medium text-slate-600 text-foreground mb-4 text-balance">
                        {t('animationVideo.subTitle')}
                    </p>
                    <p className="text-sm sm:text-base font-normal text-slate-600 text-foreground mb-4">
                        {t('animationVideo.comingSoon')}
                    </p>
                </div>
            <div className="relative max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden aspect-video bg-black/10 backdrop-blur-sm">
                <iframe className="w-full h-full border-0"></iframe>
                <img 
                    src={playButton} 
                    width={50} 
                    height={50}
                    className="absolute inset-0 m-auto cursor-pointer"
                />
            </div>

            </div>
        </section>
    )    

}


export default AnimationVideo
