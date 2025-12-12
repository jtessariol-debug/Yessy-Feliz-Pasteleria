import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, MessageCircle, Star, Sparkles, MapPin, Instagram, Menu as MenuIcon, ChevronRight, Check } from 'lucide-react';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';
import { FEATURES, PRODUCTS, TESTIMONIALS, PHONE_NUMBER } from './constants';
import { Product } from './types';

export default function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for sticky header styling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    if (cart.length === 0) setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleCheckout = () => {
    const itemsList = cart.map(p => `- ${p.name}`).join("%0A");
    const waText = `Hola Yessy Feliz! 👋%0A%0AMe gustaría ordenar:%0A${itemsList}%0A%0A¿Podrían confirmarme disponibilidad y precio? Gracias!`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${waText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl border-stone-100 py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <img 
              src="https://i.postimg.cc/WpGJVCGr/Logo.jpg" 
              alt="Yessy Feliz" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg object-cover ring-2 ring-white transition-transform duration-300 group-hover:scale-105" 
            />
            <span className={`font-serif text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-rose-600 ${isScrolled ? 'text-stone-800' : 'text-stone-800'}`}>
              Yessy Feliz
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Catálogo', 'Filosofía', 'Contacto'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace('ó', 'o')}`} 
                className="text-sm font-medium uppercase tracking-widest text-stone-500 hover:text-rose-500 transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-rose-50 rounded-full transition-all duration-300 hover:scale-110 active:scale-90"
            >
              <ShoppingBag className="w-5 h-5 text-stone-700" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm animate-pulse">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 transition-all duration-300 hover:scale-110 active:scale-90"
            >
              <ShoppingBag className="w-6 h-6 text-stone-700" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">
                  {cart.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 transition-transform duration-300 hover:rotate-180 active:scale-90"
            >
              <MenuIcon className="w-6 h-6 text-stone-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-b border-stone-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {['Catálogo', 'Filosofía', 'Contacto'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase().replace('ó', 'o')}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-stone-600 font-medium py-2 border-b border-stone-50 hover:text-rose-500 hover:pl-2 transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-rose-100/40 rounded-full blur-[100px] -z-10 animate-pulse" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-rose-100 text-rose-800 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
          >
            Artesanal & Premium
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-850 leading-[1.1] mb-8"
          >
            Repostería que cuenta <br /> 
            <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent italic pr-2">
              historias dulces
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Hecho a mano, bajo pedido, para los momentos que realmente importan.
            Desde una lasaña perfecta hasta el pastel de tus sueños.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              variant="whatsapp" 
              icon={<MessageCircle className="w-5 h-5" />}
              onClick={() => window.open(`https://wa.me/${PHONE_NUMBER}`, '_blank')}
            >
              Hacer Pedido WhatsApp
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver Nuestro Menú
            </Button>
          </motion.div>

          {/* Stats / Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {[
              { label: '+500 Clientes Felices', icon: '★' },
              { label: 'Eventos Semanales', icon: '🎉' },
              { label: 'Ingredientes 100% Frescos', icon: '🌿' }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2 px-5 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white shadow-sm text-sm font-medium text-stone-600 hover:scale-105 hover:bg-white/80 hover:shadow-md transition-all duration-300 cursor-default">
                <span className="text-gold-500">{stat.icon}</span>
                {stat.label}
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* --- Philosophy Section --- */}
      <section id="filosofia" className="py-24 max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Experiencia Yessy Feliz" title="¿Por qué elegirnos?" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-stone-50 shadow-xl shadow-stone-100 hover:shadow-2xl hover:shadow-rose-100 hover:-translate-y-2 transition-all duration-300 group cursor-default"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 filter group-hover:drop-shadow-sm">{feature.icon}</div>
              <h3 className="font-serif text-xl font-bold text-stone-800 mb-3 group-hover:text-rose-600 transition-colors">{feature.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Intermediate CTA Banner --- */}
      <section className="py-12 px-6">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-rose-400 to-rose-600 px-6 py-20 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-rose-200 transition-transform hover:scale-[1.01] duration-500"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">¿Tienes un evento pronto?</h2>
            <p className="text-white/90 text-lg mb-10 font-light">
              Bodas, cumpleaños o eventos corporativos. Escríbenos y diseñamos la mesa de postres perfecta para ti.
            </p>
            <Button variant="white" onClick={() => window.open(`https://wa.me/${PHONE_NUMBER}?text=Hola, quiero cotizar un evento`, '_blank')}>
              Cotizar Evento Personalizado
            </Button>
          </div>
        </motion.div>
      </section>

      {/* --- Catalog Section --- */}
      <section id="catalogo" className="py-24 max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Nuestras Creaciones" title="Catálogo Exclusivo" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-stone-100 border border-stone-50 group hover:shadow-2xl hover:shadow-rose-100/50 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors z-10 duration-500" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-rose-900 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {product.category}
                </span>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-2xl font-bold text-stone-800 group-hover:text-rose-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>
                <p className="text-stone-500 text-sm mb-8 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-4 border border-rose-200 rounded-xl text-rose-500 font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn active:scale-[0.98]"
                >
                  Agregar al pedido
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Testimonial --- */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Sparkles className="w-12 h-12 text-gold-400 mx-auto mb-8 opacity-50 animate-pulse" />
          <motion.blockquote 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-stone-700 leading-relaxed mb-10"
          >
            "{TESTIMONIALS[0].text}"
          </motion.blockquote>
          <div className="flex flex-col items-center">
            <span className="font-bold text-stone-900">{TESTIMONIALS[0].author}</span>
            <span className="text-xs font-bold text-gold-500 uppercase tracking-widest mt-1">{TESTIMONIALS[0].role}</span>
          </div>
        </div>
      </section>

      {/* --- Urgency/Banner --- */}
      <div className="py-12 text-center bg-rose-50 border-t border-rose-100">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-800 rounded-lg text-sm font-medium hover:bg-rose-200 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          Haz tu pedido hoy
        </span>
        <p className="mt-3 text-stone-500 text-sm">Cupos limitados por semana para garantizar máxima calidad.</p>
      </div>

      {/* --- Footer --- */}
      <footer id="contacto" className="bg-white border-t border-stone-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <img src="https://i.postimg.cc/WpGJVCGr/Logo.jpg" alt="Logo" className="h-16 w-16 rounded-full mx-auto mb-6 opacity-90 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500" />
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 text-stone-500 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>Calle Isabel De Torres #26 – Altos de Cancino</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-stone-300 rounded-full"></div>
            <div>Atención bajo cita previa</div>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <a href={`https://wa.me/${PHONE_NUMBER}`} className="text-stone-400 hover:text-[#25D366] transition-all duration-300 flex items-center gap-2 font-medium hover:scale-105 hover:-translate-y-0.5">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
            <a href="https://www.instagram.com/yessifelizpasteleria" className="text-stone-400 hover:text-[#E1306C] transition-all duration-300 flex items-center gap-2 font-medium hover:scale-105 hover:-translate-y-0.5">
              <Instagram className="w-5 h-5" /> Instagram
            </a>
          </div>

          <div className="text-xs text-stone-300 font-light">
            © 2025 Yessy Feliz Pastelería. All rights reserved.
          </div>
        </div>
      </footer>

      {/* --- Cart Sidebar --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
                <h2 className="font-serif text-2xl font-bold text-stone-800">Tu Selección</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-stone-50 rounded-full text-stone-400 hover:text-stone-600 transition-all duration-300 hover:rotate-90 active:scale-90">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                    <ShoppingBag className="w-16 h-16 text-stone-300" />
                    <p className="text-stone-500 font-medium">Tu carrito está vacío.<br />Agrega algo delicioso.</p>
                  </div>
                ) : (
                  cart.map((item, index) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={`${item.id}-${index}`}
                      className="flex gap-4 p-4 bg-stone-50 rounded-2xl border border-stone-100 hover:bg-white hover:shadow-md hover:border-rose-100 transition-all duration-300 group"
                    >
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="font-semibold text-stone-800 group-hover:text-rose-700 transition-colors">{item.name}</h4>
                        <span className="text-xs text-stone-500">{item.category}</span>
                      </div>
                      <button 
                        onClick={() => removeFromCart(index)}
                        className="text-red-300 hover:text-red-500 text-sm font-medium transition-colors px-2 hover:underline"
                      >
                        Eliminar
                      </button>
                    </motion.div>
                  ))
                )}
              </div>

              <div className="p-6 border-t border-stone-100 bg-stone-50 space-y-4">
                <div className="flex justify-between items-center text-sm text-stone-500 mb-2">
                  <span>Total artículos</span>
                  <span className="font-bold text-stone-800">{cart.length}</span>
                </div>
                <Button 
                  variant="whatsapp" 
                  className="w-full justify-center py-4 text-lg"
                  disabled={cart.length === 0}
                  onClick={handleCheckout}
                >
                  Confirmar Pedido en WhatsApp
                </Button>
                <p className="text-center text-xs text-stone-400">
                  Serás redirigido a WhatsApp para finalizar detalles y pago.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Action Button (Mobile Only context mostly, but visible always) */}
      <AnimatePresence>
        {!isCartOpen && cart.length > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-6 right-6 z-40 bg-stone-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 font-medium cursor-pointer border border-stone-700 hover:shadow-rose-900/20"
          >
            <span className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-rose-500 w-4 h-4 rounded-full text-[10px] flex items-center justify-center border border-stone-900">
                {cart.length}
              </span>
            </span>
            Ver Pedido
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}