import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const faqs = [
    { q: '¿Necesito cita previa?', a: 'Sí, recomendamos solicitar cita previa para garantizar que podamos atender tu vehículo con la dedicación y el tiempo que merece, minimizando tus tiempos de espera.' },
    { q: '¿Ofrecéis garantía en las reparaciones?', a: 'Por supuesto. Todas nuestras reparaciones cuentan con garantía legal, y utilizamos recambios originales o de calidad equivalente para asegurar el mejor resultado.' },
    { q: '¿Trabajáis con aseguradoras?', a: 'Sí, trabajamos con la mayoría de compañías aseguradoras para facilitar los trámites en caso de siniestro.' }
  ];

  return (
    <div className="bg-[#f5f5f4] text-[#0a0a0a] font-sans selection:bg-black selection:text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-black/50">Contacto y Reservas</p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.9]"
            >
              Estamos a <br/><span className="italic text-black/60">tu disposición.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-serif mb-6">Información</h3>
              <p className="text-black/70 leading-relaxed mb-8">
                Ponte en contacto con nosotros para solicitar un presupuesto, reservar una cita o resolver cualquier duda sobre tu vehículo.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-black/50 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1">Dirección</p>
                  <p className="text-black/70">Polígono Industrial Oeste, Av. Principal, 123<br/>30169 San Ginés, Murcia</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-black/50 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1">Teléfono</p>
                  <a href="tel:+34968123456" className="text-black/70 hover:text-black transition-colors">+34 968 123 456</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-black/50 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1">Email</p>
                  <a href="mailto:info@dasautopremium.es" className="text-black/70 hover:text-black transition-colors">info@dasautopremium.es</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-black/50 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1">Horario</p>
                  <p className="text-black/70">Lunes - Viernes:<br/>08:30 - 14:00 | 16:00 - 19:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 border border-black/10 relative overflow-hidden">
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-6" />
                  <h3 className="text-3xl font-serif mb-4">Solicitud enviada</h3>
                  <p className="text-black/70 max-w-md">
                    Hemos recibido tu solicitud correctamente. Nos pondremos en contacto contigo lo antes posible para confirmar tu cita.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <h3 className="text-2xl font-serif mb-8">Solicitar Cita</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-black/70">Nombre y apellidos *</label>
                  <input required type="text" className="w-full bg-[#f5f5f4] border-none p-4 focus:ring-1 focus:ring-black outline-none transition-shadow" placeholder="Ej. Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-black/70">Teléfono *</label>
                  <input required type="tel" className="w-full bg-[#f5f5f4] border-none p-4 focus:ring-1 focus:ring-black outline-none transition-shadow" placeholder="+34 ___ ___ ___" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-black/70">Email *</label>
                  <input required type="email" className="w-full bg-[#f5f5f4] border-none p-4 focus:ring-1 focus:ring-black outline-none transition-shadow" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-black/70">Tipo de Servicio *</label>
                  <select required className="w-full bg-[#f5f5f4] border-none p-4 focus:ring-1 focus:ring-black outline-none transition-shadow appearance-none">
                    <option value="">Seleccionar...</option>
                    <option value="revision">Revisión / Mantenimiento</option>
                    <option value="reparacion">Reparación / Avería</option>
                    <option value="itv">Pre-ITV / ITV</option>
                    <option value="presupuesto">Solicitar Presupuesto</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-black/70">Marca y Modelo *</label>
                  <input required type="text" className="w-full bg-[#f5f5f4] border-none p-4 focus:ring-1 focus:ring-black outline-none transition-shadow" placeholder="Ej. Mercedes Clase C" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-black/70">Año del vehículo</label>
                  <input type="text" className="w-full bg-[#f5f5f4] border-none p-4 focus:ring-1 focus:ring-black outline-none transition-shadow" placeholder="Ej. 2019" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-widest uppercase text-black/70">Mensaje o Detalles</label>
                <textarea rows={4} className="w-full bg-[#f5f5f4] border-none p-4 focus:ring-1 focus:ring-black outline-none transition-shadow resize-none" placeholder="Describe brevemente lo que necesitas..."></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input required type="checkbox" id="privacy" className="mt-1 accent-black" />
                <label htmlFor="privacy" className="text-xs text-black/60 leading-relaxed">
                  He leído y acepto la <a href="/privacidad" className="underline hover:text-black">Política de Privacidad</a> y consiento el tratamiento de mis datos para gestionar mi solicitud.
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 px-8 flex items-center justify-center gap-2 hover:bg-black/80 transition-colors group disabled:opacity-70"
              >
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">
                  {isSubmitting ? 'Enviando...' : 'Solicitar Cita'}
                </span>
                {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map & FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Map */}
          <div>
            <h3 className="text-2xl font-serif mb-8">Nuestra Ubicación</h3>
            <div className="w-full h-[400px] bg-black/5 rounded-sm overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.576822452377!2d-1.1812837!3d37.986968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6381e4d0b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sPol%C3%ADgono%20Industrial%20Oeste!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación"
              ></iframe>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-serif mb-8">Preguntas Frecuentes</h3>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-black/10 bg-white">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-black/5 transition-colors"
                  >
                    <span className="font-semibold text-sm">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-black/50 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-sm text-black/70 leading-relaxed border-t border-black/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
