import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

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
  ];

  return (
    <div className="bg-[#f5f5f5] text-[#141414] font-sans">
      {/* Header/Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#141414]/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-xs font-mono tracking-widest uppercase mb-4 text-[#141414]/50">Servicio Integral</p>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-none">
              Taller <br/><span className="italic text-[#141414]/60">Multimarca</span>
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#141414]/70">
            Soluciones técnicas precisas para cualquier vehículo. Diagnosticamos, reparamos y mantenemos tu coche con los más altos estándares de calidad.
          </p>
        </div>
      </section>

      {/* Data Grid Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#141414]/10 border border-[#141414]/10">
          {services.map((srv) => (
            <div key={srv.id} className="bg-[#f5f5f5] p-8 hover:bg-white transition-colors">
              <span className="text-xs font-mono text-[#141414]/40 mb-8 block">{srv.id}</span>
              <h3 className="text-xl font-semibold mb-3">{srv.title}</h3>
              <p className="text-sm text-[#141414]/60 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
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
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
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
    </div>
  );
}
