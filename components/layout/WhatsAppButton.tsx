import { FaWhatsapp } from "react-icons/fa6";
import { WhatsApp } from "@/lib/data/handles";



export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WhatsApp.name}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
