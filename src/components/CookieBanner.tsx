import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay so it doesn't pop up instantly
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', 'custom');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:max-w-[400px] z-50"
        >
          <div className="bg-white border border-black/10 shadow-2xl p-6 relative">
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
            
            {!showPreferences ? (
              <>
                <h3 className="text-lg font-serif mb-2 pr-6">Privacidad y Cookies</h3>
                <p className="text-sm text-black/60 leading-relaxed mb-6">
                  Utilizamos cookies propias y de terceros para fines analíticos y para mostrarte publicidad personalizada en base a un perfil elaborado a partir de tus hábitos de navegación.
                </p>
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={handleAcceptAll}
                    className="w-full bg-black text-white text-xs font-semibold uppercase tracking-widest py-3 px-4 hover:bg-black/80 transition-colors text-center"
                  >
                    Aceptar todas
                  </button>
                  <div className="flex gap-3">
                    <button 
                      onClick={handleRejectAll}
                      className="flex-1 bg-[#f5f5f5] text-black text-xs font-semibold uppercase tracking-widest py-3 px-4 hover:bg-[#e5e5e5] transition-colors text-center"
                    >
                      Rechazar
                    </button>
                    <button 
                      onClick={() => setShowPreferences(true)}
                      className="flex-1 bg-white border border-black/10 text-black text-xs font-semibold uppercase tracking-widest py-3 px-4 hover:bg-black/5 transition-colors text-center"
                    >
                      Configurar
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-serif mb-2 pr-6">Preferencias</h3>
                <p className="text-sm text-black/60 leading-relaxed mb-6">
                  Selecciona qué tipo de cookies permites que utilicemos.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold">Técnicas (Necesarias)</p>
                      <p className="text-xs text-black/50">Imprescindibles para que la web funcione.</p>
                    </div>
                    <input type="checkbox" checked disabled className="mt-1 accent-black" />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold">Analíticas</p>
                      <p className="text-xs text-black/50">Para entender cómo interactúas con la web.</p>
                    </div>
                    <input type="checkbox" defaultChecked className="mt-1 accent-black" />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold">Publicidad</p>
                      <p className="text-xs text-black/50">Para mostrarte anuncios relevantes.</p>
                    </div>
                    <input type="checkbox" defaultChecked className="mt-1 accent-black" />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={handleSavePreferences}
                    className="flex-1 bg-black text-white text-xs font-semibold uppercase tracking-widest py-3 px-4 hover:bg-black/80 transition-colors text-center"
                  >
                    Guardar
                  </button>
                  <button 
                    onClick={() => setShowPreferences(false)}
                    className="flex-1 bg-[#f5f5f5] text-black text-xs font-semibold uppercase tracking-widest py-3 px-4 hover:bg-[#e5e5e5] transition-colors text-center"
                  >
                    Volver
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
