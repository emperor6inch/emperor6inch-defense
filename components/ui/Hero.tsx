import Link from "next/link";
import Button from "@/components/ui/Button";

interface HeroProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaText?: string;
    ctaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}

export default function Hero({
    title,
    subtitle,
    backgroundImage,
    ctaText,
    ctaLink,
    secondaryCtaText,
    secondaryCtaLink,
}: HeroProps) {
    return (
        <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b-4 border-accent">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-primary/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/80" />
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-20 pointer-events-none" />
            </div>

            {/* HUD Elements */}
            <div className="absolute top-10 left-10 w-24 h-24 border-l-4 border-t-4 border-accent opacity-70" />
            <div className="absolute top-10 right-10 w-24 h-24 border-r-4 border-t-4 border-accent opacity-70" />
            <div className="absolute bottom-10 left-10 w-24 h-24 border-l-4 border-b-4 border-accent opacity-70" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border-r-4 border-b-4 border-accent opacity-70" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-block mb-6 px-4 py-1 border border-accent/30 bg-primary/80 backdrop-blur-sm rounded-none transform -skew-x-12">
                    <span className="text-accent font-mono text-sm tracking-[0.2em] transform skew-x-12 inline-block font-bold">
                        SYSTEM STATUS: ONLINE
                    </span>
                </div>

                <h1 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter mb-8 drop-shadow-2xl uppercase animate-glitch cursor-default">
                    {title}
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-mono border-l-4 border-accent pl-6 text-left bg-primary/40 backdrop-blur-sm py-6">
                    {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    {ctaText && ctaLink && (
                        <Button href={ctaLink} variant="primary" className="w-full sm:w-auto text-lg px-12 py-5 uppercase tracking-widest font-bold clip-path-polygon hover:bg-accent hover:text-white transition-all duration-0 bg-accent text-primary">
                            {ctaText}
                        </Button>
                    )}
                    {secondaryCtaText && secondaryCtaLink && (
                        <Button href={secondaryCtaLink} variant="outline" className="w-full sm:w-auto text-lg px-12 py-5 uppercase tracking-widest font-mono border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-0">
                            {secondaryCtaText}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
