import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Settings, Wrench } from 'lucide-react';

export default function Mercedes() {
  const team = [
    { name: 'Francisco Guerrero', role: 'CEO', desc: 'La visión estratégica que nos posiciona como líderes.', image: 'https://dasautopremium.es/wp-content/uploads/2025/06/DA_200225_8_2.jpg' },
    { name: 'Gabriel Fructuoso', role: 'Jefe de Taller', desc: 'La autoridad técnica y la supervisión experta.', image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_4-200x200.jpg' },
    { name: 'Marcos Martínez', role: 'Asesor de Servicios', desc: 'Tu punto de contacto, garantizando comunicación clara.', image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_11.jpg' },
    { name: 'Ignacio López', role: 'Mecánico Especialista', desc: 'La precisión y el detalle en cada ajuste.', image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_11.jpg' },
    { name: 'Adrián Lozano', role: 'Mecánico Especialista', desc: 'La dedicación y el conocimiento profundo.', image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_3.jpg' },
  ];

  const services = [
    { title: 'Mantenimiento A y B', desc: 'Revisiones oficiales siguiendo estrictamente las pautas del fabricante.' },
    { title: 'Diagnóstico XENTRY', desc: 'Software oficial Mercedes-Benz para precisión absoluta en la detección de fallos.' },
    { title: 'Codificación y SCN', desc: 'Programación de unidades de control y actualizaciones de software online.' },
    { title: 'Reparación de Motores', desc: 'Intervenciones complejas en motores diésel y gasolina con garantía.' },
    { title: 'Cajas Automáticas (ATF)', desc: 'Mantenimiento y reparación de transmisiones 7G-Tronic y 9G-Tronic.' },
    { title: 'Sistemas Airmatic', desc: 'Diagnóstico y reparación de suspensiones neumáticas.' },
  ];

  return (
    <div className="bg-[#050505] text-[#e5e5e5] font-sans selection:bg-white selection:text-black">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2670&auto=format&fit=crop"
            alt="Mercedes-Benz"
            className="w-full h-full object-cover opacity-30 grayscale-[30%]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-8 text-white/50"
          >
            Especialistas Mercedes-Benz
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-9xl font-serif font-light tracking-tight mb-8 leading-[0.85]"
          >
            La precisión<br />
            <span className="italic text-white/60">que tu estrella</span><br />
            merece.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto mt-8 leading-relaxed"
          >
            Tu alternativa de confianza al concesionario oficial en Murcia. Misma tecnología, recambios originales y un trato personalizado.
          </motion.p>
        </div>
      </section>

      {/* SERMI Certificate */}
      <section className="py-24 border-y border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-6 text-emerald-500">Acreditación Oficial</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 leading-tight">
                Certificado <span className="italic text-white/70">SERMI</span>
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  Das Auto Premium cuenta con la prestigiosa certificación europea SERMI (Security-Related Repair and Maintenance Information).
                </p>
                <p>
                  Esta acreditación nos otorga acceso oficial y directo a la información, software y sistemas de seguridad del fabricante Mercedes-Benz. Esto significa que podemos realizar intervenciones críticas como la programación de llaves, sustitución de unidades de control (EZS, ELV) y actualizaciones de software de seguridad con la misma autoridad y capacidad que un concesionario oficial.
                </p>
                <p>
                  Tu vehículo está en manos de un taller rigurosamente auditado y autorizado a nivel europeo.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-emerald-500/30 flex items-center justify-center p-8 bg-gradient-to-br from-emerald-500/10 to-transparent">
                <div className="absolute inset-0 border border-emerald-500/20 rounded-full scale-90 animate-[spin_60s_linear_infinite]" />
                <div className="text-center">
                  <ShieldCheck className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <span className="block text-sm font-semibold tracking-[0.2em] uppercase text-white/80">Operador<br/>Independiente<br/>Autorizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">Servicios Especializados</h2>
          <p className="text-white/50 uppercase tracking-widest text-sm">Tecnología oficial a tu servicio</p>
        </div>
        <div className="border-t border-white/10">
          {services.map((srv, i) => (
            <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 hover:border-white/40 transition-colors">
              <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 md:mb-0 group-hover:translate-x-4 transition-transform duration-500">{srv.title}</h3>
              <p className="text-sm text-white/50 max-w-sm md:text-right leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">¿Por qué elegirnos?</h2>
            <p className="text-black/50 uppercase tracking-widest text-sm">La alternativa inteligente al servicio oficial</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-[#f5f5f5] rounded-full flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Tecnología Oficial</h3>
              <p className="text-black/70 leading-relaxed">Disponemos de XENTRY Diagnosis, el mismo equipo que utilizan los concesionarios oficiales para diagnosticar tu Mercedes.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-[#f5f5f5] rounded-full flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Recambios Originales</h3>
              <p className="text-black/70 leading-relaxed">Utilizamos piezas originales o de calidad equivalente (OEM) para garantizar la fiabilidad y el rendimiento de tu vehículo.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-[#f5f5f5] rounded-full flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Trato Personalizado</h3>
              <p className="text-black/70 leading-relaxed">Hablas directamente con el mecánico que repara tu coche. Transparencia total en presupuestos y reparaciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team - Keeping the requested layout but elevating the typography */}
      <section className="py-24 lg:py-32 bg-[#e5e7eb] border-t border-white/5 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 md:flex justify-between items-end">
            <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight">
              El talento <br/><span className="italic text-slate-500">detrás del motor.</span>
            </h2>
            <p className="text-sm uppercase tracking-widest text-slate-500 max-w-xs mt-8 md:mt-0 text-right">
              Técnicos formados en la excelencia de la marca.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {team.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-full aspect-square overflow-hidden mb-6 bg-slate-300 rounded-sm">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" loading="lazy" />
                </div>
                <h3 className="text-2xl font-serif mb-2">{member.name}</h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-[#050505] text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-8 text-white">¿Tu Mercedes necesita mantenimiento?</h2>
          <Link to="/contacto" className="inline-block bg-white text-black px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Pide tu cita ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
