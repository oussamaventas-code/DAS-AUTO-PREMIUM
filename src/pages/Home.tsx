import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Wrench, Thermometer, Car, Star, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[#f5f5f4] text-[#0a0a0a] font-sans selection:bg-black selection:text-white">
      {/* Editorial Hero */}
      <section className="min-h-[90vh] flex flex-col lg:flex-row border-b border-black/10">
        <div className="flex-1 flex flex-col justify-center p-8 lg:p-16 xl:p-24 pt-32">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-8 text-black/50">
            Especialistas en Mercedes-Benz y taller multimarca en Murcia
          </p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight mb-8"
          >
            La excelencia<br />
            <span className="italic text-black/60">en el cuidado</span><br />
            de tu vehículo.
          </motion.h1>
          <p className="text-lg max-w-md text-black/70 leading-relaxed mb-12">
            Das Auto Premium. Especialistas en Mercedes-Benz y servicio integral multimarca. Precisión técnica con un trato humano inigualable.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <Link to="/contacto" className="group flex items-center justify-between border-b border-black pb-2 text-sm font-semibold uppercase tracking-widest hover:text-black/60 transition-colors w-fit gap-8">
              <span>Pide tu cita</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/multimarca" className="group flex items-center justify-between border-b border-black/30 pb-2 text-sm font-semibold uppercase tracking-widest text-black/60 hover:text-black transition-colors w-fit gap-8">
              <span>Conoce nuestros servicios</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="flex-1 relative min-h-[50vh] lg:min-h-screen border-l border-black/10">
          <img 
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2574&auto=format&fit=crop" 
            alt="Taller mecánico" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-black text-white py-12 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-12 h-12 text-emerald-500 shrink-0" />
              <div>
                <h3 className="text-lg font-serif">Certificado SERMI</h3>
                <p className="text-sm text-white/60">Único taller independiente de la Región</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="flex items-center gap-4">
              <div className="text-3xl font-serif">15+</div>
              <p className="text-sm text-white/60 leading-tight">Años de<br/>experiencia</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="flex items-center gap-4">
              <div className="text-3xl font-serif">100%</div>
              <p className="text-sm text-white/60 leading-tight">Técnicos<br/>certificados</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="flex items-center gap-4">
              <div className="text-3xl font-serif">✓</div>
              <p className="text-sm text-white/60 leading-tight">Garantía total<br/>en reparaciones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Specialties */}
      <section className="border-b border-black/10">
        <div className="grid lg:grid-cols-2">
          <Link to="/multimarca" className="group relative h-[60vh] lg:h-[80vh] border-b lg:border-b-0 lg:border-r border-black/10 overflow-hidden flex flex-col justify-end p-8 lg:p-16 bg-black text-white">
            <img 
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2664&auto=format&fit=crop" 
              alt="Multimarca" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-white/60">01 — Servicio Integral</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Taller Multimarca</h2>
              <p className="text-white/70 max-w-sm mb-8">Cuidado experto para cada vehículo, sin importar la marca. Diagnóstico y reparación con tecnología avanzada.</p>
              <span className="inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-widest border-b border-white/30 pb-2 group-hover:border-white transition-colors">
                Descubrir <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          <Link to="/mercedes" className="group relative h-[60vh] lg:h-[80vh] overflow-hidden flex flex-col justify-end p-8 lg:p-16 bg-black text-white">
            <img 
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2670&auto=format&fit=crop" 
              alt="Mercedes-Benz" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-white/60">02 — Especialización</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Mercedes-Benz</h2>
              <p className="text-white/70 max-w-sm mb-8">La precisión que tu estrella merece. Software oficial y técnicos formados en la marca.</p>
              <span className="inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-widest border-b border-white/30 pb-2 group-hover:border-white transition-colors">
                Descubrir <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Services Icons */}
      <section className="py-16 border-b border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-6 group">
              <div className="w-16 h-16 rounded-full bg-[#f5f5f4] flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                <Wrench className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg mb-2">Mecánica General</h4>
              <p className="text-sm text-black/60">Mantenimiento y reparación integral</p>
            </div>
            <div className="flex flex-col items-center p-6 group">
              <div className="w-16 h-16 rounded-full bg-[#f5f5f4] flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg mb-2">Diagnóstico</h4>
              <p className="text-sm text-black/60">Tecnología avanzada oficial</p>
            </div>
            <div className="flex flex-col items-center p-6 group">
              <div className="w-16 h-16 rounded-full bg-[#f5f5f4] flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                <Thermometer className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg mb-2">Climatización</h4>
              <p className="text-sm text-black/60">Sistemas de A/C y calefacción</p>
            </div>
            <div className="flex flex-col items-center p-6 group">
              <div className="w-16 h-16 rounded-full bg-[#f5f5f4] flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                <Car className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg mb-2">Chapa y Pintura</h4>
              <p className="text-sm text-black/60">Acabados de fábrica garantizados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brutalist Features */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight max-w-3xl">
            Redefiniendo el estándar <br/><span className="italic text-black/50">del servicio automotriz.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {[
            { num: '01', title: 'Transparencia', desc: 'Presupuestos claros y comunicación constante. Sin sorpresas.' },
            { num: '02', title: 'Tecnología', desc: 'Equipos de diagnóstico de última generación para una precisión absoluta.' },
            { num: '03', title: 'Experiencia', desc: 'Técnicos altamente cualificados y en constante formación.' },
            { num: '04', title: 'Garantía', desc: 'Certificado SERMI y respaldo total en cada intervención que realizamos.' },
          ].map((feat, i) => (
            <div key={i} className="border-t border-black pt-6">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-semibold tracking-widest text-black/40">{feat.num}</span>
                <h3 className="text-2xl font-serif">{feat.title}</h3>
              </div>
              <p className="text-black/70 leading-relaxed ml-9">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-white/60">La satisfacción de quienes confían en nosotros es nuestra mejor garantía.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Carlos M.', text: 'Excelente servicio, mi Mercedes quedó como nuevo. Trato muy profesional y transparente desde el primer momento.', rating: 5 },
              { name: 'Laura G.', text: 'Llevé mi coche para una revisión completa y el trato fue inmejorable. Te explican todo con detalle y sin sorpresas en la factura.', rating: 5 },
              { name: 'Antonio R.', text: 'El mejor taller de Murcia sin duda. Tienen equipos de diagnóstico oficiales y resolvieron un problema eléctrico que en otros sitios no supieron.', rating: 5 }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/5 p-8 border border-white/10 rounded-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-8 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-serif text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-white/50 uppercase tracking-widest">Cliente Verificado</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">¿Listo para cuidar <br/><span className="italic text-black/50">tu vehículo?</span></h2>
        <p className="text-lg text-black/60 mb-12 max-w-2xl mx-auto">Reserva tu cita hoy mismo y descubre por qué somos el taller de referencia en Murcia.</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/contacto" className="bg-black text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-black/80 transition-colors flex items-center gap-3 w-full sm:w-auto justify-center">
            Pide tu cita ahora <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:+34968123456" className="bg-white border border-black/10 text-black px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-black/5 transition-colors flex items-center gap-3 w-full sm:w-auto justify-center">
            <Phone className="w-4 h-4" /> +34 968 123 456
          </a>
        </div>
      </section>
    </div>
  );
}
