import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-white text-slate-900 p-2 rounded-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none tracking-tight text-white">Das Auto</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Premium</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Tu taller de confianza en Murcia para todas las marcas y especialistas en Mercedes-Benz. Calidad, transparencia y tecnología avanzada.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/multimarca" className="text-sm hover:text-white transition-colors">Taller Multimarca</Link></li>
              <li><Link to="/mercedes" className="text-sm hover:text-white transition-colors">Taller Mercedes-Benz</Link></li>
              <li><Link to="/nosotros" className="text-sm hover:text-white transition-colors">Quiénes Somos</Link></li>
              <li><Link to="/contacto" className="text-sm hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-sm">Polígono Industrial Oeste, Av. Principal, 123, 30169 San Ginés, Murcia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                <span className="text-sm">+34 968 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                <span className="text-sm">info@dasautopremium.es</span>
              </li>
            </ul>
          </div>

          {/* Hours & Certs */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Horario</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-slate-500 shrink-0" />
                <div className="text-sm">
                  <p>Lunes - Viernes</p>
                  <p className="text-slate-400">08:30 - 14:00 | 16:00 - 19:30</p>
                </div>
              </li>
            </ul>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-500" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Certificado SERMI</p>
                <p className="text-xs text-slate-400">Único taller independiente en la Región</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Das Auto Premium. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link to="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link to="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
