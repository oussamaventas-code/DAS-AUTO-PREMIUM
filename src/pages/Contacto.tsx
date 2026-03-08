import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Contacto() {
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
                  <p className="text-black/70">Calle Ejemplo 123, Polígono Industrial<br/>28000 Madrid, España</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-black/50 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1">Teléfono</p>
                  <p className="text-black/70">+34 900 123 456</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-black/50 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1">Email</p>
                  <p className="text-black/70">info@dasautopremium.es</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-black/50 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1">Horario</p>
                  <p className="text-black/70">Lunes - Viernes: 08:00 - 18:00<br/>Sábados: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 border border-black/10">
            <h3 className="text-2xl font-serif mb-8">Solicitar Cita</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-black/70">Nombre completo</label>
                  <input type="text" className="w-full bg-[#f5f5f4] border-none p-4 focus:ring-1 focus:ring-black outline-none transition-shadow" placeholder="Ej. Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-black/70">Teléfono</label>
                  <input type="tel" className="w-full bg-[#f5f5f4] border-none p-4 focus:ring-1 focus:ring-black outline-none transition-shadow" placeholder="+34 ___ ___ ___" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-black/70">Marca y Modelo</label>
                  <input type="text" className="w-full bg-[#f5f5f4] border-none p-4 focus:ring-1 focus:ring-black outline-none transition-shadow" placeholder="Ej. Mercedes Clase C" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-black/70">Tipo de Servicio</label>
                  <select className="w-full bg-[#f5f5f4] border-none p-4 focus:ring-1 focus:ring-black outline-none transition-shadow appearance-none">
                    <option value="">Seleccionar...</option>
                    <option value="mantenimiento">Mantenimiento Programado</option>
                    <option value="averia">Diagnóstico de Avería</option>
                    <option value="neumaticos">Neumáticos</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-widest uppercase text-black/70">Mensaje o Detalles</label>
                <textarea rows={4} className="w-full bg-[#f5f5f4] border-none p-4 focus:ring-1 focus:ring-black outline-none transition-shadow resize-none" placeholder="Describe brevemente lo que necesitas..."></textarea>
              </div>

              <button className="w-full bg-black text-white py-4 px-8 flex items-center justify-center gap-2 hover:bg-black/80 transition-colors group">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">Enviar Solicitud</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
