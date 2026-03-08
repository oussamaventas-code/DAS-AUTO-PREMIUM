import { motion } from 'motion/react';

export default function Privacidad() {
  return (
    <div className="bg-[#f5f5f4] text-[#0a0a0a] font-sans min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-black/5">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-serif mb-8"
        >
          Política de Privacidad
        </motion.h1>
        
        <div className="space-y-6 text-black/70 leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-semibold text-black mb-2">1. Protección de Datos (RGPD)</h2>
            <p>Das Auto Premium cumple con las directrices del Reglamento General de Protección de Datos (RGPD) y demás normativa vigente en cada momento, y vela por garantizar un correcto uso y tratamiento de los datos personales del usuario.</p>
          </section>
          
          <section>
            <h2 className="text-lg font-semibold text-black mb-2">2. Recogida y Finalidad</h2>
            <p>Los datos personales recogidos a través de los formularios de contacto o reservas serán utilizados exclusivamente para gestionar su solicitud, agendar citas en el taller y enviar comunicaciones relacionadas con el servicio solicitado.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-2">3. Derechos del Usuario</h2>
            <p>En cualquier momento, el usuario podrá ejercer sus derechos de acceso, rectificación, cancelación, oposición, portabilidad y limitación del tratamiento, dirigiéndose por escrito a info@dasautopremium.es o a nuestra dirección física en Polígono Industrial Oeste, Av. Principal, 123, 30169 San Ginés, Murcia.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
