import Hero from "@/components/ui/Hero";
import ProductCard from "@/components/features/ProductCard";
import { products } from "@/lib/products";
import Link from "next/link";
import { ArrowRight, Shield, Map, Users } from "lucide-react";

export default function Home() {
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen">
            <Hero
                title="Advanced Defense Solutions for West Africa"
                subtitle="Securing borders, protecting resources, and empowering nations with cutting-edge technology designed for the region's unique challenges."
                backgroundImage="/images/hero-bg.jpg" // Placeholder
                ctaText="View Our Products"
                ctaLink="/products"
                secondaryCtaText="Contact Us"
                secondaryCtaLink="/contact"
            />

            {/* Stats Section */}
            <section className="py-16 bg-secondary border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-4xl font-bold text-accent-green mb-2">500+ km</div>
                            <div className="text-gray-400 uppercase tracking-wider text-sm">Borders Secured</div>
                        </div>
                        <div className="p-6 border-t md:border-t-0 md:border-l border-white/5">
                            <div className="text-4xl font-bold text-accent-green mb-2">98%</div>
                            <div className="text-gray-400 uppercase tracking-wider text-sm">Threat Detection Rate</div>
                        </div>
                        <div className="p-6 border-t md:border-t-0 md:border-l border-white/5">
                            <div className="text-4xl font-bold text-accent-green mb-2">24/7</div>
                            <div className="text-gray-400 uppercase tracking-wider text-sm">Operational Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Tactical Solutions
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Engineered for the specific security challenges of the Sahel, Gulf of Guinea, and West African interior.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/products"
                            className="inline-flex items-center text-accent-green hover:text-white font-medium transition-colors"
                        >
                            View All Products <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section className="py-24 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="bg-primary/50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                                <Shield className="h-8 w-8 text-accent-green" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Regional Expertise</h3>
                            <p className="text-gray-400">
                                Founded in Lagos, we understand the terrain, the threats, and the operational requirements of West African security forces.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                                <Map className="h-8 w-8 text-accent-green" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Strategic Coverage</h3>
                            <p className="text-gray-400">
                                From the Sahelian deserts to the coastal waters of the Gulf of Guinea, our solutions cover every domain.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary/50 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                                <Users className="h-8 w-8 text-accent-green" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Civilian Protection</h3>
                            <p className="text-gray-400">
                                Our technology prioritizes the safety of civilians and the stability of communities, adhering to international standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
