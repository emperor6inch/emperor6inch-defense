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
        <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                    {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {ctaText && ctaLink && (
                        <Button href={ctaLink} variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
                            {ctaText}
                        </Button>
                    )}
                    {secondaryCtaText && secondaryCtaLink && (
                        <Button href={secondaryCtaLink} variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
                            {secondaryCtaText}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
