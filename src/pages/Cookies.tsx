import { motion } from 'motion/react';

export default function Cookies() {
  return (
    <div className="bg-[#f5f5f4] text-[#0a0a0a] font-sans min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-black/5">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-serif mb-8"
        >
          Política de Cookies
        </motion.h1>
        
        <div className="space-y-6 text-black/70 leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-semibold text-black mb-2">1. ¿Qué son las cookies?</h2>
            <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.</p>
          </section>
          
          <section>
            <h2 className="text-lg font-semibold text-black mb-2">2. Tipos de cookies que utilizamos</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cookies técnicas:</strong> Son aquellas necesarias para la navegación y el buen funcionamiento de nuestra página web.</li>
              <li><strong>Cookies de análisis:</strong> Son aquellas que nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
              <li><strong>Cookies publicitarias:</strong> Permiten la gestión eficaz de los espacios publicitarios que se pudieran incluir en la página web.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-2">3. Desactivación de cookies</h2>
            <p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. También puede utilizar el panel de configuración de cookies proporcionado en nuestro banner inicial.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
