import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, Sparkles, Clock, ShieldCheck, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Airbnb Turnovers",
      description: "Professional turnover cleaning between guests",
      features: [
        "Complete sanitization of all surfaces",
        "Fresh linen and towel replacement",
        "Kitchen deep clean and restocking",
        "Bathroom disinfection",
        "Trash removal and fresh bags",
        "Final quality inspection"
      ],
      price: "Starting at $89",
      popular: true,
      gradient: "from-clean-blue-500 to-clean-blue-600"
    },
    {
      icon: Home,
      title: "Deep Cleaning",
      description: "Comprehensive deep cleaning for homes and offices",
      features: [
        "All rooms thoroughly cleaned",
        "Inside appliances & cabinets",
        "Baseboards and window sills",
        "Light fixtures and ceiling fans",
        "Carpet and upholstery cleaning",
        "Organized and decluttered spaces"
      ],
      price: "Starting at $149",
      popular: false,
      gradient: "from-luxury-gold-500 to-luxury-gold-600"
    },
    {
      icon: Sparkles,
      title: "Post-Construction",
      description: "Specialized cleaning after renovation or construction",
      features: [
        "Dust and debris removal",
        "Paint splatter cleanup",
        "Window and glass cleaning",
        "Floor deep cleaning/restoration",
        "Air vent cleaning",
        "Final polish and detailing"
      ],
      price: "Starting at $199",
      popular: false,
      gradient: "from-clean-blue-600 to-clean-blue-700"
    }
  ];

  return (
    <section className="py-20 bg-pure-white" id="services">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-clean-blue-700 mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-clean-gray-800 max-w-3xl mx-auto leading-relaxed">
            Choose from our specialized cleaning services, each designed to exceed your expectations 
            and deliver spotless results every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`relative overflow-hidden border-2 transform hover:scale-105 transition-all duration-300 animate-slide-up ${
                service.popular 
                  ? 'border-luxury-gold-500 shadow-2xl shadow-luxury-gold-500/20' 
                  : 'border-clean-blue-100 hover:border-clean-blue-300 shadow-xl'
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-luxury-gold-500 to-luxury-gold-600 text-pure-white px-6 py-2 text-sm font-bold rounded-bl-xl">
                  <Star className="inline h-4 w-4 mr-1" />
                  MOST POPULAR
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-pure-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-clean-blue-700">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-clean-gray-800 text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-clean-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing and CTA */}
                <div className="border-t border-clean-gray-200 pt-6">
                  <div className="text-center space-y-4">
                    <div className="text-3xl font-bold text-clean-blue-700">
                      {service.price}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-clean-gray-800">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Same day availability</span>
                    </div>
                    <Button 
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-pure-white font-semibold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300`}
                    >
                      Book This Service
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-clean-blue-50 to-clean-blue-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-clean-blue-700 mb-4">
              Need a Custom Cleaning Solution?
            </h3>
            <p className="text-clean-gray-800 mb-6">
              We offer tailored cleaning packages for businesses, property managers, and special events.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-luxury-gold-500 to-luxury-gold-600 hover:from-luxury-gold-600 hover:to-luxury-gold-500 text-pure-white px-8 py-4 text-lg rounded-xl shadow-lg font-semibold"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;