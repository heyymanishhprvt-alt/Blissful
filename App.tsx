import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Heart, 
  Sparkles, 
  Share2, 
  Star, 
  ChevronDown, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Twitter,
  CheckCircle2,
  Zap,
  Globe,
  Users,
  MessageCircle,
  Mail,
  ArrowRight,
  Play
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/917351730970?text=Hi!%20I'm%20interested%20in%20booking%20an%20E-invite.";

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-peach-50/90 backdrop-blur-md border-b border-rose-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center gap-2">
            <Heart className="w-8 h-8 text-rose-gold fill-rose-gold/20" />
            <span className="font-serif text-2xl font-bold text-ink tracking-tight">Blissful Invitations</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#templates" className="text-ink/80 hover:text-rose-gold transition-colors font-medium">Templates</Link>
            <Link to="/#pricing" className="text-ink/80 hover:text-rose-gold transition-colors font-medium">Pricing</Link>
            <Link to="/#why-us" className="text-ink/80 hover:text-rose-gold transition-colors font-medium">Why Us</Link>
            <Link to="/blogs" className="text-ink/80 hover:text-rose-gold transition-colors font-medium">Blogs</Link>
            <Link to="/#faq" className="text-ink/80 hover:text-rose-gold transition-colors font-medium">FAQ</Link>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-gold text-white px-6 py-2.5 rounded-full font-medium hover:bg-rose-gold/90 transition-all shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Book your E invite
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-ink hover:text-rose-gold">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-peach-50 border-b border-rose-gold/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link to="/#templates" onClick={closeMenu} className="block px-3 py-2 text-ink/80 hover:text-rose-gold font-medium">Templates</Link>
              <Link to="/#pricing" onClick={closeMenu} className="block px-3 py-2 text-ink/80 hover:text-rose-gold font-medium">Pricing</Link>
              <Link to="/#why-us" onClick={closeMenu} className="block px-3 py-2 text-ink/80 hover:text-rose-gold font-medium">Why Us</Link>
              <Link to="/blogs" onClick={closeMenu} className="block px-3 py-2 text-ink/80 hover:text-rose-gold font-medium">Blogs</Link>
              <Link to="/#faq" onClick={closeMenu} className="block px-3 py-2 text-ink/80 hover:text-rose-gold font-medium">FAQ</Link>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full mt-4 bg-rose-gold text-white px-6 py-3 rounded-full font-medium hover:bg-rose-gold/90 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Book your E invite
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-peach-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-rose-gold/10 text-rose-gold font-medium text-sm mb-6 border border-rose-gold/20">
            ✨ Beautifully designed digital wedding invitations
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-ink mb-6 leading-tight">
            Create Stunning <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-gold to-peach-600 italic font-serif">Digital Invitations</span>
          </h1>
          <p className="mt-4 text-xl text-ink/70 max-w-2xl mx-auto mb-10 font-light">
            Design elegant e-invites, Nikah Namas, and much more for your special moments. Custom Designs | Fast Delivery | Affordable Prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-ink text-white rounded-full font-medium text-lg hover:bg-ink/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Book your E invite
            </a>
            <Link 
              to="/#templates"
              className="px-8 py-4 bg-white text-ink border border-rose-gold/30 rounded-full font-medium text-lg hover:bg-peach-50 transition-all w-full sm:w-auto"
            >
              Explore Templates
            </Link>
          </div>
          
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-ink/60 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Starting at just ₹799/-
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Fully Customized
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Super Fast Delivery
            </div>
          </div>

          <div className="mt-24 pt-10 border-t border-rose-gold/10">
            <p className="text-sm text-ink/50 uppercase tracking-widest font-semibold mb-8">Trusted by hundreds of couples worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              <div className="text-xl font-serif font-bold">VOGUE</div>
              <div className="text-xl font-serif font-bold">BRIDES</div>
              <div className="text-xl font-serif font-bold">The Knot</div>
              <div className="text-xl font-serif font-bold">WeddingWire</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-rose-gold" />,
      title: "Starting at just ₹799/-",
      description: "Affordable luxury for your special day. Premium designs that fit your budget."
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-gold" />,
      title: "Fully Customized Invitations",
      description: "Your story, your way. We tailor every detail to match your unique style."
    },
    {
      icon: <Zap className="w-6 h-6 text-rose-gold" />,
      title: "Super Fast Delivery",
      description: "Get your stunning digital invitations delivered quickly without compromising quality."
    },
    {
      icon: <Globe className="w-6 h-6 text-rose-gold" />,
      title: "Millions of Reach Across India",
      description: "Join our vast community of happy couples across the nation."
    },
    {
      icon: <Users className="w-6 h-6 text-rose-gold" />,
      title: "Trusted by Hundreds of Couples",
      description: "We've helped countless couples announce their big day with elegance."
    },
    {
      icon: <Star className="w-6 h-6 text-rose-gold" />,
      title: "Rated 4.9/5 on Google",
      description: "Our commitment to excellence is reflected in our outstanding customer reviews."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">Why Choose Us?</h2>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">Discover what makes Blissful Invitations the perfect choice for your special moments.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-peach-50 p-8 rounded-3xl border border-rose-gold/10 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{feature.title}</h3>
              <p className="text-ink/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Simple Designs",
      subtitle: "Elegant & Budget Friendly",
      features: [
        { name: "Single Function", price: "₹799" },
        { name: "Two Functions", price: "₹899" },
        { name: "Three Functions", price: "₹999" },
        { name: "+ ₹100 for each additional function", price: "" }
      ]
    },
    {
      name: "Standard Designs",
      subtitle: "Enhanced Visuals & Transitions",
      features: [
        { name: "Single Function", price: "₹999" },
        { name: "Two Functions", price: "₹1099" },
        { name: "Three Functions", price: "₹1199" },
        { name: "+ ₹100 for each additional function", price: "" }
      ]
    },
    {
      name: "Premium Designs",
      subtitle: "Cinematic & Royal Experience",
      features: [
        { name: "Single Function", price: "₹1299" },
        { name: "Two Functions", price: "₹1399" },
        { name: "+ ₹100 per additional function", price: "" }
      ]
    },
    {
      name: "Premium 3D Designs",
      subtitle: "Luxury 3D Effects & Premium Animations",
      features: [
        { name: "Two Functions", price: "₹1699" },
        { name: "Three Functions", price: "₹1799" },
        { name: "+ ₹100 per additional function", price: "" }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-peach-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">Pricing Plans</h2>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">Choose the perfect package for your dream invitation.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-rose-gold/20 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-gold to-peach-400"></div>
              <h3 className="text-2xl font-serif font-bold text-ink mb-1">{plan.name}</h3>
              <p className="text-sm text-rose-gold font-medium mb-6">{plan.subtitle}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex justify-between items-center text-ink/80 text-sm">
                    <span>{feature.name}</span>
                    <span className="font-bold text-ink">{feature.price}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-4 bg-peach-50 text-ink font-medium rounded-xl hover:bg-rose-gold hover:text-white transition-colors"
              >
                Select Plan
              </a>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-ink to-ink/90 p-8 rounded-3xl text-white text-center mb-8 shadow-xl"
          >
            <h3 className="text-2xl font-serif font-bold mb-2 text-rose-gold">Ultra Luxury Shoot Designs</h3>
            <p className="text-white/80 mb-4">Fully Customized Shoot Video</p>
            <div className="text-3xl font-bold mb-6">Starting from ₹2699</div>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 bg-rose-gold text-white font-medium rounded-full hover:bg-white hover:text-ink transition-colors"
            >
              Enquire Now
            </a>
          </motion.div>

          <div className="bg-white p-6 rounded-2xl border border-rose-gold/20 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="font-bold text-ink mb-2">Add-ons (If Required)</h4>
              <ul className="text-sm text-ink/70 space-y-1">
                <li>• QR Code / Location Link - ₹50</li>
                <li>• Custom Design (Not from Profile) - Charges Applicable</li>
                <li>• Changes After Final Delivery - ₹150</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Templates = () => {
  const categories = ["All", "Wedding", "Nikah Nama", "Birthday", "Baby Shower"];
  const [activeCategory, setActiveCategory] = useState("All");

  const templates = [
    { id: 1, title: "Elegant Floral", category: "Wedding", image: "https://images.unsplash.com/photo-1532713031318-db2d14e4b3e1?auto=format&fit=crop&q=80&w=600&h=800" },
    { id: 2, title: "Minimalist Gold", category: "Wedding", image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=600&h=800" },
    { id: 3, title: "Royal Nikah", category: "Nikah Nama", image: "https://images.unsplash.com/photo-1584362432244-64b4d6676150?auto=format&fit=crop&q=80&w=600&h=800" },
    { id: 4, title: "Boho Chic", category: "Baby Shower", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600&h=800" },
    { id: 5, title: "Classic Rose", category: "Wedding", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600&h=800" },
    { id: 6, title: "Kids Safari", category: "Birthday", image: "https://images.unsplash.com/photo-1530103862676-de8892b07439?auto=format&fit=crop&q=80&w=600&h=800" },
  ];

  const filteredTemplates = activeCategory === "All" 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  return (
    <section id="templates" className="py-24 bg-peach-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">Trending Designs</h2>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">Find the perfect template for your special day.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-ink text-white' 
                  : 'bg-white text-ink/70 hover:bg-rose-gold/10 hover:text-rose-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTemplates.map(template => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={template.id}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <a 
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white text-ink py-3 rounded-full font-medium hover:bg-rose-gold hover:text-white transition-colors text-center flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Book this Design
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs font-medium text-rose-gold uppercase tracking-wider mb-1">{template.category}</div>
                  <h3 className="text-xl font-serif font-bold text-ink">{template.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white border-2 border-ink text-ink rounded-full font-medium text-lg hover:bg-ink hover:text-white transition-all"
          >
            View All Templates on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

const ReelsShowcase = () => {
  const reels = [
    { id: 1, title: "Royal Rajputana Wedding", views: "12K", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=400&h=711" },
    { id: 2, title: "Modern Muslim Nikah", views: "8.5K", image: "https://images.unsplash.com/photo-1591604466107-ec97de577faa?auto=format&fit=crop&q=80&w=400&h=711" },
    { id: 3, title: "Elegant Floral Engagement", views: "15K", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400&h=711" },
    { id: 4, title: "Traditional South Indian", views: "20K", image: "https://images.unsplash.com/photo-1583339824000-68e9b111241c?auto=format&fit=crop&q=80&w=400&h=711" },
    { id: 5, title: "Pastel Theme Haldi", views: "10K", image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=400&h=711" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">Our Best Work</h2>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">Watch our trending Instagram reels and video invitations.</p>
        </div>

        {/* Carousel Container */}
        <div 
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel) => (
            <a 
              key={reel.id} 
              href="https://www.instagram.com/blissfulinvitations_/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-none w-64 sm:w-72 aspect-[9/16] rounded-3xl overflow-hidden snap-center group cursor-pointer shadow-lg border border-rose-gold/20 block"
            >
              <img 
                src={reel.image} 
                alt={reel.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/50">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Play className="w-4 h-4 text-rose-gold fill-rose-gold" />
                  <span className="text-sm font-medium text-white/90">{reel.views} views</span>
                </div>
                <h3 className="text-lg font-serif font-bold leading-tight">{reel.title}</h3>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://instagram.com/blissfulinvitations_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rose-gold font-medium hover:text-ink transition-colors"
          >
            <Instagram className="w-5 h-5" />
            View more on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Priya & Rahul",
      event: "Wedding",
      text: "Bohot hi sundar design tha! Sabko e-invite bohot pasand aaya. Thank you Blissful Invitations humara din special banane ke liye.",
      rating: 5
    },
    {
      name: "Zoya Ahmed",
      event: "Nikah",
      text: "Mashallah, cards ki quality aur design dono lajawab hain. Customer service bhi bohat achi thi. Shukriya!",
      rating: 5
    },
    {
      name: "Neha Sharma",
      event: "Baby Shower",
      text: "Ekdum mast invite banaya! Kaam bohot jaldi ho gaya aur price bhi ekdum sahi tha. Sab relatives ne tareef ki.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-peach-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">Hear from Our Happy Users</h2>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">Join thousands of people who have created beautiful memories with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-peach-50/50 p-8 rounded-3xl border border-rose-gold/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-rose-gold text-rose-gold" />
                ))}
              </div>
              <p className="text-ink/80 text-lg mb-6 italic">"{review.text}"</p>
              <div>
                <div className="font-bold text-ink">{review.name}</div>
                <div className="text-sm text-rose-gold font-medium">{review.event}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "How can I design a wedding card for free?",
      a: "Simply browse our collection of free templates, select your favorite, and use our intuitive editor to add your details. You can download the final design at no cost."
    },
    {
      q: "Can I send the invitations via WhatsApp?",
      a: "Yes! Once you finish designing, you can download your invitation as an image or PDF and easily share it via WhatsApp, Email, or any social media platform."
    },
    {
      q: "Are the designs high-quality for printing?",
      a: "Absolutely. You can download your designs in high-resolution PDF format, which is perfect for professional printing if you prefer physical cards."
    },
    {
      q: "Can I edit my invitation after downloading it?",
      a: "Yes, if you create a free account, your designs are saved in your dashboard. You can come back, make edits, and re-download them anytime."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-peach-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-rose-gold/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-lg text-ink">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-rose-gold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-ink/70 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-rose-gold relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white mix-blend-overlay blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white mix-blend-overlay blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">Ready to create your perfect invitation?</h2>
        <p className="text-xl text-white/80 mb-10 font-light">Join thousands of users who have already designed beautiful, memorable invitations with Blissful Invitations.</p>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-5 bg-white text-rose-gold rounded-full font-bold text-lg hover:bg-peach-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          <MessageCircle className="w-6 h-6" />
          Book your E invite
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-rose-gold fill-rose-gold" />
              <span className="font-serif text-3xl font-bold tracking-tight">Blissful Invitations</span>
            </div>
            <p className="text-white/70 max-w-md mb-8 leading-relaxed">
              Beautifully designed digital wedding invitations, Nikah Namas, and much more for your special moments. Custom Designs | Fast Delivery | Affordable Prices
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/blissfulinvitations_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-gold transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-gold" />
                <a href="mailto:main.blissfulinvitations@gmail.com" className="hover:text-rose-gold transition-colors">main.blissfulinvitations@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-rose-gold" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-rose-gold transition-colors">+91 73517 30970</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-rose-gold" />
                <a href="https://instagram.com/blissfulinvitations_" target="_blank" rel="noopener noreferrer" className="hover:text-rose-gold transition-colors">@blissfulinvitations_</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 font-serif">Company</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/#why-us" className="hover:text-rose-gold transition-colors">Why Choose Us</Link></li>
              <li><Link to="/#pricing" className="hover:text-rose-gold transition-colors">Pricing</Link></li>
              <li><Link to="/#templates" className="hover:text-rose-gold transition-colors">Templates</Link></li>
              <li><Link to="/blogs" className="hover:text-rose-gold transition-colors">Blogs</Link></li>
              <li><Link to="/#faq" className="hover:text-rose-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Blissful Invitations. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            Made with <Heart className="w-4 h-4 text-rose-gold fill-rose-gold" /> for your special moments
          </div>
        </div>
      </div>
    </footer>
  );
};

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Wedding Invitation Trends for 2026",
      excerpt: "Discover the latest trends in digital wedding invitations, from minimalist designs to interactive elements.",
      date: "March 15, 2026",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800&h=500",
      category: "Wedding Trends"
    },
    {
      id: 2,
      title: "Why Digital Invitations are the Future",
      excerpt: "Eco-friendly, cost-effective, and instantly deliverable. Here's why more couples are choosing e-invites.",
      date: "March 10, 2026",
      image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&q=80&w=800&h=500",
      category: "Digital Invites"
    },
    {
      id: 3,
      title: "How to Choose the Perfect Nikah Nama Design",
      excerpt: "A guide to selecting a Nikah Nama that reflects your personal style and cultural heritage.",
      date: "March 5, 2026",
      image: "https://images.unsplash.com/photo-1584362432244-64b4d6676150?auto=format&fit=crop&q=80&w=800&h=500",
      category: "Nikah"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-peach-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">Our Blog</h1>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">Insights, trends, and inspiration for your special moments.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden border border-rose-gold/20 shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-rose-gold uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-ink/50">{post.date}</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-ink mb-3">{post.title}</h2>
                <p className="text-ink/70 mb-6 flex-grow">{post.excerpt}</p>
                <a href="#" className="text-rose-gold font-medium hover:text-ink transition-colors flex items-center gap-2 mt-auto">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <main>
      <Hero />
      <ReelsShowcase />
      <WhyChooseUs />
      <Pricing />
      <Templates />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="min-h-screen bg-peach-50 font-sans selection:bg-rose-gold/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

