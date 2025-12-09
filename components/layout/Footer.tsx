import Link from "next/link";
import { Shield, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary border-t border-white/10 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Shield className="h-6 w-6 text-accent-green" />
                            <span className="font-bold text-lg tracking-wider text-white">
                                EMPEROR<span className="text-accent-green">6</span>INCH
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering West Africa with advanced defense technology. Securing borders, protecting resources, and ensuring stability.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Solutions</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/products/terrashield-drone" className="text-gray-400 hover:text-accent-green text-sm transition-colors">
                                    Aerial Surveillance
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/apex-apv6" className="text-gray-400 hover:text-accent-green text-sm transition-colors">
                                    Armored Vehicles
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/gulfguardian-interceptor" className="text-gray-400 hover:text-accent-green text-sm transition-colors">
                                    Maritime Security
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/cyberhawk-intel" className="text-gray-400 hover:text-accent-green text-sm transition-colors">
                                    Cyber Intelligence
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-accent-green text-sm transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/threats" className="text-gray-400 hover:text-accent-green text-sm transition-colors">
                                    Regional Threats
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-accent-green text-sm transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-accent-green text-sm transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="h-5 w-5 text-accent-green shrink-0" />
                                <span>
                                    12 Victoria Island, Lagos,<br />
                                    Nigeria
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="h-5 w-5 text-accent-green shrink-0" />
                                <a href="mailto:info@emperor6inch.com" className="hover:text-white transition-colors">
                                    info@emperor6inch.com
                                </a>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2025 Emperor6inch Ltd. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs">
                        Designed for West African Security.
                    </p>
                </div>
            </div>
        </footer>
    );
}
