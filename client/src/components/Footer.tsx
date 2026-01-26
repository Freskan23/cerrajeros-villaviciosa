import { APP_BUSINESS_NAME } from "@/const";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white">
      <div className="tesla-container px-6">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px] font-medium text-gray-500 tracking-wider">
          <span>{APP_BUSINESS_NAME} © {currentYear}</span>
          <Link href="/privacidad" className="hover:text-black transition-colors uppercase">Privacidad y Legal</Link>
          <Link href="/contacto" className="hover:text-black transition-colors uppercase">Contacto</Link>
          <Link href="/blog" className="hover:text-black transition-colors uppercase">Noticias</Link>
          <span className="cursor-default uppercase">Villaviciosa del Odón</span>
        </div>
      </div>
    </footer>
  );
}
