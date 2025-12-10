import Hero from "@/components/ui/Hero";
import ProductCard from "@/components/features/ProductCard";
import { products } from "@/lib/products";
import Link from "next/link";
import { ArrowRight, Shield, Map, Users } from "lucide-react";

export default function Home() {
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen bg-primary relative">
            {/* Global Noise Overlay */}
            <div className="noise" />
            <div className="scanline" />

            <Hero
                title="Advanced Defense Solutions"
                subtitle="Securing borders and empowering nations with combat-proven technology designed for the harshest environments."
                backgroundImage="/images/hero-bg.png"
                ctaText="Deploy Systems"
                ctaLink="/products"
                secondaryCtaText="Intel Brief"
                secondaryCtaLink="/contact"
            />

            {/* Stats Section - Tactical Dashboard Style */}
            <section className="py-20 bg-secondary/10 border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <div className="p-8 group hover:bg-white/5 transition-colors duration-0">
                            <div className="text-6xl font-display font-bold text-accent mb-4 text-glow group-hover:scale-105 transition-transform duration-0">500+</div>
                            <div className="text-accent/70 font-mono uppercase tracking-widest text-sm font-bold">Km Borders Secured</div>
                        </div>
                        <div className="p-8 group hover:bg-white/5 transition-colors duration-0">
                            <div className="text-6xl font-display font-bold text-accent mb-4 text-glow group-hover:scale-105 transition-transform duration-0">99.9%</div>
                            <div className="text-accent/70 font-mono uppercase tracking-widest text-sm font-bold">Threat Neutralization</div>
                        </div>
                        <div className="p-8 group hover:bg-white/5 transition-colors duration-0">
                            <div className="text-6xl font-display font-bold text-accent mb-4 text-glow group-hover:scale-105 transition-transform duration-0">24/7</div>
                            <div className="text-accent/70 font-mono uppercase tracking-widest text-sm font-bold">Active Monitoring</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-32 bg-primary relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b-2 border-white/10 pb-8">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
                                Tactical <span className="text-accent">Arsenal</span>
                            </h2>
                            <p className="text-gray-400 max-w-xl font-mono text-sm leading-relaxed border-l-2 border-accent pl-4">
                                // CLASSIFIED: ELITE TIER EQUIPMENT
                                <br />
                                Engineered for the specific security challenges of the Sahel, Gulf of Guinea, and West African interior.
                            </p>
                        </div>
                        <Link
                            href="/products"
                            className="hidden md:inline-flex items-center text-accent font-mono uppercase tracking-widest hover:text-white transition-colors duration-0 border border-accent/30 px-8 py-4 hover:bg-accent/10 font-bold"
                        >
                            View Full Inventory <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-16 text-center md:hidden">
                        <Link
                            href="/products"
                            className="inline-flex items-center text-accent font-mono uppercase tracking-widest hover:text-white transition-colors duration-0 font-bold"
                        >
                            View Full Inventory <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Value Props - Intel Section */}
            <section className="py-32 bg-secondary/20 relative overflow-hidden border-t border-accent/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-primary/80 p-10 border border-white/5 hover:border-accent transition-colors duration-0 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full -mr-8 -mt-8 transition-transform duration-0 group-hover:scale-150" />
                            <Shield className="h-14 w-14 text-accent mb-8 group-hover:animate-pulse" />
                            <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase">Regional Dominance</h3>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                &gt;&gt; Founded in Lagos.
                                <br />
                                &gt;&gt; Terrain Optimized.
                                <br />
                                &gt;&gt; Threat Adaptive.
                            </p>
                        </div>
                        <div className="bg-primary/80 p-10 border border-white/5 hover:border-accent transition-colors duration-0 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full -mr-8 -mt-8 transition-transform duration-0 group-hover:scale-150" />
                            <Map className="h-14 w-14 text-accent mb-8 group-hover:animate-pulse" />
                            <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase">Strategic Coverage</h3>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                &gt;&gt; Sahelian Deserts.
                                <br />
                                &gt;&gt; Gulf Coastal Waters.
                                <br />
                                &gt;&gt; Urban Centers.
                            </p>
                        </div>
                        <div className="bg-primary/80 p-10 border border-white/5 hover:border-accent transition-colors duration-0 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full -mr-8 -mt-8 transition-transform duration-0 group-hover:scale-150" />
                            <Users className="h-14 w-14 text-accent mb-8 group-hover:animate-pulse" />
                            <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase">Civilian Shield</h3>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                &gt;&gt; Collateral Mitigation.
                                <br />
                                &gt;&gt; Community Stability.
                                <br />
                                &gt;&gt; Human Rights Compliant.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
