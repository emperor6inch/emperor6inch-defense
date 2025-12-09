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
        <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b-4 border-accent-green">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-20 pointer-events-none" />
            </div>

            {/* HUD Elements */}
            <div className="absolute top-10 left-10 w-24 h-24 border-l-2 border-t-2 border-accent-green opacity-50" />
            <div className="absolute top-10 right-10 w-24 h-24 border-r-2 border-t-2 border-accent-green opacity-50" />
            <div className="absolute bottom-10 left-10 w-24 h-24 border-l-2 border-b-2 border-accent-green opacity-50" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border-r-2 border-b-2 border-accent-green opacity-50" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-block mb-4 px-4 py-1 border border-accent-green/30 bg-black/50 backdrop-blur-sm rounded-none transform -skew-x-12">
                    <span className="text-accent-green font-mono text-sm tracking-[0.2em] transform skew-x-12 inline-block">
                        SYSTEM STATUS: ONLINE
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter mb-6 drop-shadow-2xl uppercase animate-glitch cursor-default">
                    {title}
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light border-l-4 border-accent-red pl-6 text-left bg-black/20 backdrop-blur-sm py-4">
                    {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    {ctaText && ctaLink && (
                        <Button href={ctaLink} variant="primary" className="w-full sm:w-auto text-lg px-10 py-4 uppercase tracking-widest font-bold clip-path-polygon hover:bg-accent-green hover:text-black transition-all duration-300">
                            {ctaText}
                        </Button>
                    )}
                    {secondaryCtaText && secondaryCtaLink && (
                        <Button href={secondaryCtaLink} variant="outline" className="w-full sm:w-auto text-lg px-10 py-4 uppercase tracking-widest font-mono border-accent-green text-accent-green hover:bg-accent-green/10">
                            {secondaryCtaText}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
