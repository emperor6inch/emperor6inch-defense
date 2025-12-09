import Hero from "@/components/ui/Hero";
import { Shield, Target, Users, Award } from "lucide-react";

export const metadata = {
    title: "About Us | Emperor6inch Defense",
    description: "Learn about Emperor6inch Defense, our mission to secure West Africa, and our team of experts.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-primary">
            <Hero
                title="Our Mission"
                subtitle="Empowering West Africa against insecurity through innovation, partnership, and unwavering commitment."
                backgroundImage="/images/about-hero.jpg"
            />

            {/* Story Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Forged in Lagos, Built for the Region
                        </h2>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Founded in 2020, Emperor6inch Defense emerged from a critical need: security solutions that are not just imported, but engineered for the specific realities of West Africa.
                            </p>
                            <p>
                                From the dense forests of the South to the arid Sahel in the North, our technology is tested in the environments where it matters most. We partner with leading manufacturers like Proforce and Saab to bring world-class defense capabilities to Nigeria and the ECOWAS region.
                            </p>
                            <p>
                                Our team of 50+ experts includes former military officers, cybersecurity analysts, and aerospace engineers dedicated to one goal: a safer, more stable West Africa.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-secondary p-8 rounded-2xl border border-white/5 text-center">
                            <Shield className="h-10 w-10 text-accent-green mx-auto mb-4" />
                            <div className="text-3xl font-bold text-white mb-1">2020</div>
                            <div className="text-sm text-gray-400">Founded</div>
                        </div>
                        <div className="bg-secondary p-8 rounded-2xl border border-white/5 text-center">
                            <Users className="h-10 w-10 text-accent-green mx-auto mb-4" />
                            <div className="text-3xl font-bold text-white mb-1">50+</div>
                            <div className="text-sm text-gray-400">Experts</div>
                        </div>
                        <div className="bg-secondary p-8 rounded-2xl border border-white/5 text-center">
                            <Target className="h-10 w-10 text-accent-green mx-auto mb-4" />
                            <div className="text-3xl font-bold text-white mb-1">6</div>
                            <div className="text-sm text-gray-400">Core Products</div>
                        </div>
                        <div className="bg-secondary p-8 rounded-2xl border border-white/5 text-center">
                            <Award className="h-10 w-10 text-accent-green mx-auto mb-4" />
                            <div className="text-3xl font-bold text-white mb-1">ISO</div>
                            <div className="text-sm text-gray-400">Certified</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section Placeholder */}
            <section className="py-24 bg-secondary border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Leadership</h2>
                        <p className="text-gray-400">Guided by experience and vision.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-primary rounded-xl overflow-hidden border border-white/5">
                                <div className="h-64 bg-gray-800" />
                                <div className="p-6">
                                    <h3 className="text-white font-bold text-lg">Executive Name</h3>
                                    <p className="text-accent-green text-sm">Position Title</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
