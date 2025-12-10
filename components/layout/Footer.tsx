import Link from "next/link";
import { Shield, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary/10 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <Shield className="h-8 w-8 text-accent group-hover:animate-pulse transition-all duration-0" />
                            <span className="font-display font-bold text-xl tracking-wider text-white">
                                EMPEROR<span className="text-accent">6</span>INCH
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed font-mono border-l-2 border-white/10 pl-4">
                            Empowering West Africa with advanced defense technology. Securing borders, protecting resources, and ensuring stability.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-display font-bold mb-6 uppercase tracking-wider text-sm">Solutions</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/products/terrashield-drone" className="text-gray-400 hover:text-accent text-sm transition-colors duration-0 font-mono uppercase tracking-wide">
                                    Aerial Surveillance
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/apex-apv6" className="text-gray-400 hover:text-accent text-sm transition-colors duration-0 font-mono uppercase tracking-wide">
                                    Armored Vehicles
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/gulfguardian-interceptor" className="text-gray-400 hover:text-accent text-sm transition-colors duration-0 font-mono uppercase tracking-wide">
                                    Maritime Security
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/cyberhawk-intel" className="text-gray-400 hover:text-accent text-sm transition-colors duration-0 font-mono uppercase tracking-wide">
                                    Cyber Intelligence
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-display font-bold mb-6 uppercase tracking-wider text-sm">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-accent text-sm transition-colors duration-0 font-mono uppercase tracking-wide">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/threats" className="text-gray-400 hover:text-accent text-sm transition-colors duration-0 font-mono uppercase tracking-wide">
                                    Regional Threats
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-accent text-sm transition-colors duration-0 font-mono uppercase tracking-wide">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-accent text-sm transition-colors duration-0 font-mono uppercase tracking-wide">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-display font-bold mb-6 uppercase tracking-wider text-sm">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm font-mono">
                                <MapPin className="h-5 w-5 text-accent shrink-0" />
                                <span>
                                    12 Victoria Island, Lagos,<br />
                                    Nigeria
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm font-mono">
                                <Mail className="h-5 w-5 text-accent shrink-0" />
                                <a href="mailto:info@emperor6inch.com" className="hover:text-white transition-colors duration-0">
                                    info@emperor6inch.com
                                </a>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-8">
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-0">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-0">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm font-mono">
                        © 2025 Emperor6inch Ltd. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
                        Designed for West African Security.
                    </p>
                </div>
            </div>
        </footer>
    );
}
