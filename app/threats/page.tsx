import Hero from "@/components/ui/Hero";
import dynamic from "next/dynamic";
import { AlertTriangle, ShieldAlert, Anchor, Users } from "lucide-react";

// Dynamically import map to avoid SSR issues
const ThreatMap = dynamic(() => import("@/components/features/ThreatMap"), {
    ssr: false,
    loading: () => (
        <div className="h-[600px] w-full bg-gray-900 animate-pulse rounded-2xl flex items-center justify-center text-gray-500">
            Loading Threat Intelligence Map...
        </div>
    ),
});

export const metadata = {
    title: "Regional Threats | Emperor6inch Defense",
    description: "Interactive map of security threats in West Africa including terrorism, banditry, and piracy.",
};

export default function ThreatsPage() {
    return (
        <div className="min-h-screen bg-primary">
            <Hero
                title="Regional Threat Landscape"
                subtitle="Real-time intelligence on the evolving security challenges across West Africa and the Sahel."
                backgroundImage="/images/threats-hero.jpg"
            />

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Live Threat Monitoring
                    </h2>
                    <p className="text-gray-400 max-w-3xl text-lg">
                        Our systems aggregate data from satellite imagery, local reports, and open-source intelligence to provide a comprehensive view of regional instability.
                    </p>
                </div>

                {/* Map Section */}
                <div className="mb-16">
                    <ThreatMap />
                </div>

                {/* Threat Analysis */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-secondary p-6 rounded-xl border border-white/5">
                        <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Insurgency</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Jihadist groups in the Sahel continue to expand southward, threatening coastal states.
                        </p>
                        <div className="text-2xl font-bold text-white">3,500+</div>
                        <div className="text-xs text-gray-500">Casualties in H1 2025</div>
                    </div>

                    <div className="bg-secondary p-6 rounded-xl border border-white/5">
                        <ShieldAlert className="h-8 w-8 text-orange-500 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Banditry</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Rural violence and kidnapping for ransom in Northwest Nigeria disrupt agriculture.
                        </p>
                        <div className="text-2xl font-bold text-white">15%</div>
                        <div className="text-xs text-gray-500">Increase in incidents</div>
                    </div>

                    <div className="bg-secondary p-6 rounded-xl border border-white/5">
                        <Anchor className="h-8 w-8 text-yellow-500 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Piracy</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Attacks on commercial vessels in the Gulf of Guinea targeting oil and cargo.
                        </p>
                        <div className="text-2xl font-bold text-white">20%</div>
                        <div className="text-xs text-gray-500">Rise in Q1 2025</div>
                    </div>

                    <div className="bg-secondary p-6 rounded-xl border border-white/5">
                        <Users className="h-8 w-8 text-accent-green mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Civil Unrest</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Resource conflicts between farmers and herders in the Middle Belt region.
                        </p>
                        <div className="text-2xl font-bold text-white">High</div>
                        <div className="text-xs text-gray-500">Risk Level</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
