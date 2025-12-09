import Hero from "@/components/ui/Hero";
import ContactForm from "@/components/features/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
    title: "Contact Us | Emperor6inch Defense",
    description: "Get in touch with Emperor6inch Defense for inquiries about our security solutions.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-primary">
            <Hero
                title="Get in Touch"
                subtitle="Ready to secure your future? Contact our team of experts for a consultation or product demonstration."
                backgroundImage="/images/contact-hero.jpg"
            />

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8">
                            Headquarters
                        </h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-secondary p-3 rounded-lg border border-white/10">
                                    <MapPin className="h-6 w-6 text-accent-green" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                                    <p className="text-gray-400">
                                        12 Victoria Island<br />
                                        Lagos, Nigeria
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-secondary p-3 rounded-lg border border-white/10">
                                    <Mail className="h-6 w-6 text-accent-green" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                                    <p className="text-gray-400">
                                        info@emperor6inch.com<br />
                                        sales@emperor6inch.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-secondary p-3 rounded-lg border border-white/10">
                                    <Phone className="h-6 w-6 text-accent-green" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                                    <p className="text-gray-400">
                                        +234 800 DEFENSE<br />
                                        +234 800 SECURE
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-secondary p-3 rounded-lg border border-white/10">
                                    <Clock className="h-6 w-6 text-accent-green" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                                    <p className="text-gray-400">
                                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                                        Saturday: 9:00 AM - 2:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-12 h-64 bg-gray-800 rounded-2xl border border-white/10 overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                [Interactive Map of Lagos Office]
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
