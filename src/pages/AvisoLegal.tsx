import { motion } from 'motion/react';

export default function AvisoLegal() {
  return (
    <div className="bg-[#f5f5f4] text-[#0a0a0a] font-sans min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-black/5">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-serif mb-8"
        >
          Aviso Legal
        </motion.h1>
        
        <div className="space-y-6 text-black/70 leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-semibold text-black mb-2">1. Datos Identificativos</h2>
            <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos: la empresa titular de dominio web es Das Auto Premium (en adelante, el Taller), con domicilio a estos efectos en Polígono Industrial Oeste, Av. Principal, 123, 30169 San Ginés, Murcia. Correo electrónico de contacto: info@dasautopremium.es.</p>
          </section>
          
          <section>
            <h2 className="text-lg font-semibold text-black mb-2">2. Usuarios</h2>
            <p>El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-2">3. Propiedad Intelectual e Industrial</h2>
            <p>Das Auto Premium por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.). Todos los derechos reservados.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
