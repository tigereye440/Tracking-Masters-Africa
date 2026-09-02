import { FaWhatsapp } from "react-icons/fa6";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex-items-start-gap-3">
                <Phone size={18} className="mt-0.5 text-brand-maroon" />
                <div>
                    <p className="text-sm-font-medium-text-brand-charcoal">Phone</p>
                    <p className="text-sm text-brand-steel">+233 54 447 9545</p>
                </div>
            </div>

        <div className="flex items-start gap-3">
            <FaWhatsapp size={18} className="mt-0.5 text-brand-maroon" />
            <div>
            <p className="text-sm font-medium text-brand-charcoal">WhatsApp</p>
            <a href="https://wa.me/23354479545" className="text-sm text-brand-steel hover:text-brand-maroon">
                Chat with us
            </a>
            </div>
        </div>

        <div className="flex items-start gap-3">
            <Mail size={18} className="mt-0.5 text-brand-maroon" />
            <div>
            <p className="text-sm font-medium text-brand-charcoal">Email</p>
            <p className="text-sm text-brand-steel">trackingmastersafrica@gmail.com</p>
            </div>
        </div>

        <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 text-brand-maroon" />
            <div>
            <p className="text-sm font-medium text-brand-charcoal">Locations</p>
            <p className="text-sm text-brand-steel">Kumasi (DVLA) &middot; Accra &middot; Techiman &middot; Nationwide</p>
            </div>
        </div>

        <div className="flex items-start gap-3">
            <Clock size={18} className="mt-0.5 text-brand-maroon" />
            <div>
            <p className="text-sm font-medium text-brand-charcoal">Hours</p>
            <p className="text-sm text-brand-steel">Mon–Sat, 8am–6pm</p>
            </div>
        </div>
    </div>
    )
}