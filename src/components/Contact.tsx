import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, MapPin, Clock, Star } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Now",
      description: "Speak directly with our team",
      value: "(210) 809-1010",
      action: "tel:5551232533",
      color: "from-green-500 to-green-600",
      badge: "Available 24/7"
    },
    {
      icon: MessageCircle,
      title: "Text for Quick Quote",
      description: "Get instant response via SMS",
      value: "(210) 809-1010",
      action: "sms:5551232533",
      color: "from-clean-blue-500 to-clean-blue-600",
      badge: "Response in 5 min"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Detailed inquiries welcome",
      value: "hello@magiclean.me",
      action: "mailto:hello@magiclean.me",
      color: "from-luxury-gold-500 to-luxury-gold-600",
      badge: "24h response"
    }
  ];

  const serviceAreas = [
    "Canyon Lake",
    "Spring Branch", 
    "New Braunfels",
    "San Marcos",
    "Wimberly",
    "Blanco"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.animate-on-scroll');
      const triggerBottom = window.innerHeight * 0.85;
      cards.forEach(card => {
        const cardTop = (card as HTMLElement).getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          (card as HTMLElement).classList.add('show');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-pure-white via-clean-blue-50 to-pure-white" id="contact">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-clean-blue-700 mb-6">
            Ready to Book Your Cleaning?
          </h2>
          <p className="text-xl text-clean-gray-800 max-w-3xl mx-auto leading-relaxed">
            Get your free quote today! Same-day service available for emergency cleanings.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title}
              className="border-2 border-clean-blue-100 hover:border-clean-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-on-scroll opacity-0 translate-y-12"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <method.icon className="h-8 w-8 text-pure-white" />
                </div>
                <div className="relative">
                  <CardTitle className="text-xl font-bold text-clean-blue-700">
                    {method.title}
                  </CardTitle>
                  <div className="absolute -top-2 -right-4 bg-luxury-gold-500 text-pure-white text-xs px-2 py-1 rounded-full">
                    {method.badge}
                  </div>
                </div>
                <p className="text-clean-gray-800">{method.description}</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-2xl font-bold text-clean-blue-700">
                  {method.value}
                </div>
                <Button 
                  asChild
                  className={`w-full bg-gradient-to-r ${method.color} hover:opacity-90 text-pure-white font-semibold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  <a href={method.action}>
                    Contact Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas & Hours */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Service Areas */}
          <Card className="border-2 border-clean-blue-100 shadow-lg animate-slide-up">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-r from-clean-blue-500 to-clean-blue-600 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-pure-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-clean-blue-700">
                Service Areas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div 
                    key={area}
                    className="flex items-center gap-2 p-3 bg-clean-blue-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-luxury-gold-500 rounded-full"></div>
                    <span className="text-clean-gray-800 font-medium">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-luxury-gold-100 to-luxury-gold-50 rounded-xl">
                <p className="text-clean-gray-800 text-center">
                  <strong>Don't see your area?</strong> Call us! We're expanding our service zones weekly.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Hours & Emergency */}
          <Card className="border-2 border-clean-blue-100 shadow-lg animate-slide-up" style={{animationDelay: '0.2s'}}>
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-pure-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-clean-blue-700">
                Hours & Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-clean-blue-50 rounded-lg">
                  <span className="font-medium text-clean-gray-800">Monday - Friday</span>
                  <span className="text-clean-blue-700 font-bold">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-clean-blue-50 rounded-lg">
                  <span className="font-medium text-clean-gray-800">Saturday</span>
                  <span className="text-clean-blue-700 font-bold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-clean-blue-50 rounded-lg">
                  <span className="font-medium text-clean-gray-800">Sunday</span>
                  <span className="text-clean-blue-700 font-bold">10:00 AM - 4:00 PM</span>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-100 to-green-50 rounded-xl border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-green-500" />
                  <span className="font-bold text-green-700">Emergency Service</span>
                </div>
                <p className="text-clean-gray-800">
                  Available 24/7 for urgent cleaning needs. Additional fees may apply for after-hours service.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-clean-blue-700 to-clean-blue-600 rounded-3xl p-12 text-pure-white max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">
              Don't Wait - Book Your Cleaning Today!
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Same-day service available. Free quotes. 100% satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-luxury-gold-500 hover:bg-luxury-gold-600 text-clean-blue-700 px-8 py-4 text-xl rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 font-bold"
              >
                <a href="tel:2108091010">
                  <Phone className="mr-2 h-6 w-6" />
                  Call (210) 809-1010
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-pure-white text-clean-blue-700 hover:bg-pure-white hover:text-clean-blue-700 px-8 py-4 text-xl rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 font-bold"
              >
                <a href="sms:2108091010">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Text for Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

<style>{`
  .animate-on-scroll {
    transition: opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1);
    opacity: 0;
    transform: translateY(48px);
  }
  .animate-on-scroll.show {
    opacity: 1;
    transform: translateY(0);
  }
`}</style>