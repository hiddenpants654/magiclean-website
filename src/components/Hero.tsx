import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-clean-blue-50 via-pure-white to-clean-blue-100 flex items-center justify-center overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-luxury-gold-100 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-clean-blue-100 rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-luxury-gold-100 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-luxury-gold-500 text-luxury-gold-500" />
              ))}
            </div>
            <span className="text-clean-gray-800 font-medium">4.9/5 from 200+ happy clients</span>
          </div>

          {/* Main Headlines */}
          <h1 className="text-5xl md:text-7xl font-bold text-clean-blue-700 mb-6 leading-tight">
            Premium Cleaning<br />
            <span className="bg-gradient-to-r from-luxury-gold-500 to-luxury-gold-600 bg-clip-text text-transparent">
              Redefined
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-clean-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your Airbnb and home with our <strong>professional deep cleaning</strong> services. 
            Spotless results guaranteed, every single time.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-pure-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-clean-blue-100 animate-slide-up">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-clean-blue-700 mb-2">Same Day Service</h3>
              <p className="text-clean-gray-800 text-sm">Emergency cleaning available 24/7</p>
            </div>
            
            <div className="bg-pure-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-clean-blue-100 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="font-semibold text-clean-blue-700 mb-2">100% Guarantee</h3>
              <p className="text-clean-gray-800 text-sm">Not satisfied? We'll re-clean for free</p>
            </div>
            
            <div className="bg-pure-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-clean-blue-100 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="text-2xl mb-2">🧽</div>
              <h3 className="font-semibold text-clean-blue-700 mb-2">Eco-Friendly</h3>
              <p className="text-clean-gray-800 text-sm">Safe products for family & pets</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-clean-blue-600 to-clean-blue-700 hover:from-clean-blue-700 hover:to-clean-blue-600 text-pure-white px-8 py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Now - (210) 809-1010
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-luxury-gold-500 text-luxury-gold-600 hover:bg-luxury-gold-500 hover:text-pure-white px-8 py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Free Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-clean-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-pure-white text-xs">✓</span>
              </div>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-pure-white text-xs">✓</span>
              </div>
              <span>Background Checked Staff</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-pure-white text-xs">✓</span>
              </div>
              <span>5 Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;