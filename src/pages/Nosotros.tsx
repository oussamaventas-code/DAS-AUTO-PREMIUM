import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';

export default function Nosotros() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  const team = [
    { 
      name: 'Francisco Guerrero', 
      role: 'CEO', 
      desc: 'La visión estratégica que nos posiciona como líderes.', 
      bio: 'Con más de 20 años de experiencia en el sector automotriz premium, Francisco fundó Das Auto Premium con la visión de ofrecer una alternativa real y de máxima calidad a los concesionarios oficiales. Su liderazgo se basa en la transparencia, la innovación constante y la búsqueda incansable de la excelencia.',
      image: 'https://dasautopremium.es/wp-content/uploads/2025/06/DA_200225_8_2.jpg',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-mechanic-working-on-a-car-engine-40074-large.mp4'
    },
    { 
      name: 'Gabriel Fructuoso', 
      role: 'Jefe de Taller Mercedes', 
      desc: 'La autoridad técnica y la supervisión experta.', 
      bio: 'Especialista certificado por Mercedes-Benz con un profundo conocimiento de la electrónica y mecánica de la marca. Gabriel supervisa cada diagnóstico complejo, asegurando que los estándares de la estrella se cumplan rigurosamente en cada intervención.',
      image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_4-200x200.jpg',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-mechanic-working-on-a-car-engine-40074-large.mp4'
    },
    { 
      name: 'Eduardo Ruiz', 
      role: 'Jefe de Taller Multimarca', 
      desc: 'La experiencia y el conocimiento que guían cada intervención.', 
      bio: 'Un maestro de la mecánica multimarca. Eduardo coordina el flujo de trabajo del taller general, aportando soluciones eficientes y duraderas para cualquier tipo de vehículo, respaldado por décadas de experiencia práctica y formación continua.',
      image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_11.jpg',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-mechanic-working-on-a-car-engine-40074-large.mp4'
    },
    { 
      name: 'Marcos Martínez', 
      role: 'Asesor de Servicios', 
      desc: 'Tu punto de contacto, garantizando comunicación clara.', 
      bio: 'El puente entre la técnica y el cliente. Marcos se asegura de que cada persona que entra por la puerta entienda exactamente qué necesita su vehículo, traduciendo la jerga mecánica a un lenguaje claro, honesto y transparente.',
      image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_11.jpg',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-mechanic-working-on-a-car-engine-40074-large.mp4'
    },
    { 
      name: 'Maite Albaladejo', 
      role: 'Administración', 
      desc: 'La eficiencia y organización que nos respaldan.', 
      bio: 'El motor invisible de Das Auto Premium. Maite gestiona la administración, recambios y atención al cliente con una precisión impecable, garantizando que la experiencia en el taller sea fluida de principio a fin.',
      image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_4-200x200.jpg',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-mechanic-working-on-a-car-engine-40074-large.mp4'
    },
    { 
      name: 'Ignacio López', 
      role: 'Mecánico Especialista', 
      desc: 'La precisión y el detalle en cada ajuste.', 
      bio: 'Apasionado por la precisión. Ignacio es nuestro especialista en ajustes finos y reparaciones minuciosas, donde cada milímetro cuenta para el rendimiento óptimo del motor y la seguridad del vehículo.',
      image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_11.jpg',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-mechanic-working-on-a-car-engine-40074-large.mp4'
    },
    { 
      name: 'Adrián Lozano', 
      role: 'Mecánico Especialista', 
      desc: 'La dedicación y el conocimiento profundo.', 
      bio: 'Juventud y conocimientos actualizados. Adrián domina las nuevas tecnologías de diagnosis y sistemas híbridos, aportando una visión moderna a las reparaciones mecánicas tradicionales.',
      image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_3.jpg',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-mechanic-working-on-a-car-engine-40074-large.mp4'
    },
    { 
      name: 'Germán Arias', 
      role: 'Mecánico', 
      desc: 'La destreza y precisión en cada detalle.', 
      bio: 'Versatilidad y rapidez. Germán es capaz de enfrentarse a los retos diarios del taller multimarca con una destreza técnica envidiable y un compromiso total con la seguridad en cada trabajo.',
      image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_11.jpg',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-mechanic-working-on-a-car-engine-40074-large.mp4'
    },
    { 
      name: 'Juan José Martínez', 
      role: 'Mecánico', 
      desc: 'La dedicación y el compromiso con la excelencia.', 
      bio: 'Dedicación absoluta en cada revisión. Juan José se encarga de que los mantenimientos preventivos se realicen con el máximo rigor, evitando averías futuras y prolongando la vida útil de los vehículos.',
      image: 'https://dasautopremium.es/wp-content/uploads/2025/05/MG_210225_3.jpg',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-mechanic-working-on-a-car-engine-40074-large.mp4'
    },
  ];

  return (
    <div className="bg-[#f5f5f4] text-[#0a0a0a] font-sans selection:bg-black selection:text-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-black/50">Nuestra Historia</p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.9]"
            >
              Pasión por <br/><span className="italic text-black/60">la excelencia.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-black/10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8">Más que un taller, <br/>una filosofía de trabajo.</h2>
            <p className="text-lg text-black/70 leading-relaxed mb-6">
              Das Auto Premium nace con una vocación clara: elevar el estándar del servicio automotriz. Desde nuestros inicios, hemos apostado por la especialización, la transparencia y el trato humano como pilares fundamentales de nuestra identidad.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              Nuestra misión es proporcionar a cada cliente la tranquilidad de saber que su vehículo está en las mejores manos. Ya sea un Mercedes-Benz que requiere la máxima precisión técnica, o un vehículo multimarca que necesita un mantenimiento integral, aplicamos el mismo rigor y dedicación en cada intervención.
            </p>
          </div>
          <div className="bg-black text-white p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-serif mb-8">Nuestros Valores</h3>
            <ul className="space-y-8">
              <li className="border-b border-white/20 pb-6">
                <span className="text-xs font-mono tracking-widest text-white/50 block mb-2">01</span>
                <strong className="block text-xl font-serif mb-2">Precisión Técnica</strong>
                <span className="text-white/70 text-sm leading-relaxed">Formación continua y tecnología de vanguardia para un diagnóstico exacto.</span>
              </li>
              <li className="border-b border-white/20 pb-6">
                <span className="text-xs font-mono tracking-widest text-white/50 block mb-2">02</span>
                <strong className="block text-xl font-serif mb-2">Transparencia Absoluta</strong>
                <span className="text-white/70 text-sm leading-relaxed">Comunicación clara y honesta en cada paso. Sin sorpresas.</span>
              </li>
              <li className="border-b border-white/20 pb-6">
                <span className="text-xs font-mono tracking-widest text-white/50 block mb-2">03</span>
                <strong className="block text-xl font-serif mb-2">Trato Humano</strong>
                <span className="text-white/70 text-sm leading-relaxed">Cuidamos de los coches, pero servimos a las personas.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Conoce a <span className="italic text-black/50">nuestro equipo.</span>
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Profesionales apasionados, altamente cualificados y comprometidos con la excelencia en cada detalle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer" onClick={() => setSelectedMember(member)}>
              <div className="w-full aspect-[4/5] overflow-hidden mb-6 bg-black/5 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-black transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-black/70 transition-colors">{member.name}</h3>
              <p className="text-xs font-semibold text-black/50 uppercase tracking-[0.2em] mb-3">{member.role}</p>
              <p className="text-sm text-black/70 leading-relaxed mb-4">{member.desc}</p>
              <span className="text-xs font-semibold uppercase tracking-widest border-b border-black/20 pb-1 w-fit group-hover:border-black transition-colors">
                Ver perfil completo
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Team Member Bio & Video */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col lg:flex-row relative"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 hover:bg-white rounded-full flex items-center justify-center text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full lg:w-1/2 bg-black relative aspect-video lg:aspect-auto">
                <video 
                  src={selectedMember.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              
              <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-black/50">{selectedMember.role}</p>
                <h3 className="text-4xl md:text-5xl font-serif mb-8">{selectedMember.name}</h3>
                <div className="w-12 h-px bg-black/20 mb-8" />
                <p className="text-lg text-black/70 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
