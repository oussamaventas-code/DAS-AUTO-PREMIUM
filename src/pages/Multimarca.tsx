import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Wrench, FileText, CheckCircle2 } from 'lucide-react';

export default function Multimarca() {
  const team = [
    { name: 'Francisco Guerrero', role: 'CEO', desc: 'La visión y el liderazgo que nos impulsan.', image: 'https://dasautopremium.es/wp-content/uploads/2025/06/DA_200225_8_2.jpg' },
    { name: 'Maite Albaladejo', role: 'Administración', desc: 'La eficiencia y organización que nos respaldan.', image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_4-200x200.jpg' },
    { name: 'Eduardo Ruiz', role: 'Jefe de Taller', desc: 'La experiencia y el conocimiento que guían cada intervención.', image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_11.jpg' },
    { name: 'Germán Arias', role: 'Mecánico', desc: 'La destreza y precisión en cada detalle.', image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_11.jpg' },
    { name: 'Juan José Martínez', role: 'Mecánico', desc: 'La dedicación y el compromiso con la excelencia.', image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_3.jpg' },
  ];

  const services = [
    { id: '01', title: 'Mecánica General', desc: 'Mantenimiento integral, cambios de aceite, filtros y revisiones completas.' },
    { id: '02', title: 'Diagnóstico Avanzado', desc: 'Identificación precisa de averías electrónicas y mecánicas.' },
    { id: '03', title: 'Electromecánica', desc: 'Reparación de alternadores, baterías y unidades de control.' },
    { id: '04', title: 'Climatización', desc: 'Mantenimiento y carga de sistemas de aire acondicionado.' },
    { id: '05', title: 'Neumáticos', desc: 'Montaje, equilibrado y alineación de dirección.' },
    { id: '06', title: 'Cajas de Cambio', desc: 'Mantenimiento de transmisiones manuales y automáticas.' },
    { id: '07', title: 'Chapa y Pintura', desc: 'Reparación de carrocería con acabados de fábrica.' },
    { id: '08', title: 'ITV y Pre-ITV', desc: 'Revisión completa y gestión para pasar la inspección sin sorpresas.' },
  ];

  const brands = [
    'Volkswagen', 'BMW', 'Audi', 'Seat', 'Renault', 'Peugeot', 'Ford', 'Toyota', 'Nissan', 'Hyundai', 'Kia', 'Volvo'
  ];

  return (
    <div className="bg-[#f5f5f5] text-[#141414] font-sans">
      {/* Header/Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#141414]/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2664&auto=format&fit=crop" 
            alt="Taller Multimarca" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
          <div>
            <p className="text-xs font-mono tracking-widest uppercase mb-4 text-[#141414]/50">Servicio Integral</p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.9]"
            >
              Taller <br/><span className="italic text-[#141414]/60">Multimarca</span>
            </motion.h1>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#141414]/70">
            Reparamos todas las marcas con la misma dedicación. Diagnosticamos, reparamos y mantenemos tu coche con los más altos estándares de calidad.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-24 border-b border-[#141414]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Marcas que atendemos</h2>
          <p className="text-sm text-[#141414]/60 uppercase tracking-widest mb-16">Tengas el coche que tengas, somos tu taller</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {brands.map((brand, idx) => (
              <div key={idx} className="flex items-center justify-center p-6 border border-[#141414]/5 hover:border-[#141414]/20 transition-colors bg-[#f5f5f5]">
                <span className="font-serif text-xl text-[#141414]/80">{brand}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-[#141414]/50 italic">Y muchas más...</p>
        </div>
      </section>

      {/* Data Grid Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-serif mb-4">Nuestros Servicios</h2>
          <p className="text-sm text-[#141414]/60 uppercase tracking-widest">Soluciones completas para tu vehículo</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#141414]/10 border border-[#141414]/10">
          {services.map((srv) => (
            <div key={srv.id} className="bg-[#f5f5f5] p-8 hover:bg-white transition-colors">
              <span className="text-xs font-mono text-[#141414]/40 mb-8 block">{srv.id}</span>
              <h3 className="text-xl font-semibold mb-3">{srv.title}</h3>
              <p className="text-sm text-[#141414]/60 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work Process */}
      <section className="py-24 bg-[#141414] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Nuestro proceso de trabajo</h2>
            <p className="text-sm text-white/50 uppercase tracking-widest">Transparencia en cada paso</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-white/20"></div>
            
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-[#1a1a1a] border border-white/20 flex items-center justify-center mb-8 relative z-10 group-hover:bg-white group-hover:text-black transition-colors">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif mb-4">1. Diagnosticamos</h3>
              <p className="text-white/60 leading-relaxed">Analizamos tu vehículo con equipos de última generación para identificar el problema exacto.</p>
            </div>

            <div className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-[#1a1a1a] border border-white/20 flex items-center justify-center mb-8 relative z-10 group-hover:bg-white group-hover:text-black transition-colors">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif mb-4">2. Presupuestamos</h3>
              <p className="text-white/60 leading-relaxed">Te entregamos un presupuesto detallado y sin compromiso. Sin sorpresas ni costes ocultos.</p>
            </div>

            <div className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-[#1a1a1a] border border-white/20 flex items-center justify-center mb-8 relative z-10 group-hover:bg-white group-hover:text-black transition-colors">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif mb-4">3. Reparamos</h3>
              <p className="text-white/60 leading-relaxed">Ejecutamos la reparación con recambios de calidad y te entregamos el vehículo con total garantía.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team - Keeping the requested circular layout but making it look premium */}
      <section className="py-24 bg-[#e5e7eb] border-t border-[#141414]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif mb-4">Nuestro Equipo</h2>
            <p className="text-sm font-mono uppercase tracking-widest text-[#141414]/50">Profesionales a tu servicio</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {team.map((member, idx) => (
              <div key={idx} className="bg-[#eef0f2] rounded-xl p-8 border border-slate-200/60 text-center shadow-sm w-full max-w-sm group">
                <div className="w-28 h-28 mx-auto bg-slate-300 rounded-full mb-6 overflow-hidden flex items-center justify-center text-slate-500 border border-[#141414]/10 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#f5f5f5]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" loading="lazy" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-xs font-bold text-[#3b5998] uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white text-center border-t border-[#141414]/10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-8">¿Necesitas revisar tu vehículo?</h2>
          <Link to="/contacto" className="inline-block bg-[#141414] text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-black/80 transition-colors">
            Pide tu cita ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
