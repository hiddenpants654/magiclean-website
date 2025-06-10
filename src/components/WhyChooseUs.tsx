import { Shield, Clock, Users, Award, Heart, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely satisfied, we'll return within 24 hours to re-clean at no extra charge.",
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Same-day service available. We work around your schedule, including evenings and weekends.",
      color: "text-clean-blue-500"
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "All our cleaners are background-checked, trained, and certified in professional cleaning techniques.",
      color: "text-luxury-gold-500"
    },
    {
      icon: Award,
      title: "5+ Years Experience",
      description: "Trusted by 200+ satisfied customers. We've perfected our cleaning process over years of service.",
      color: "text-purple-500"
    },
    {
      icon: Heart,
      title: "Eco-Friendly Products",
      description: "We use only safe, non-toxic cleaning products that are gentle on your family, pets, and environment.",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Latest Equipment",
      description: "Professional-grade equipment and techniques ensure deeper cleaning and faster service delivery.",
      color: "text-clean-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-clean-blue-50 via-pure-white to-clean-blue-50" id="about">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-clean-blue-700 mb-6">
            Why Choose Magiclean?
          </h2>
          <p className="text-xl text-clean-gray-800 max-w-3xl mx-auto leading-relaxed">
            We don't just clean - we transform spaces. Here's what sets us apart from other cleaning services.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Image/Stats */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-gradient-to-br from-clean-blue-100 to-luxury-gold-100 rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-clean-blue-700">200+</div>
                  <div className="text-clean-gray-800">Happy Clients</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-clean-blue-700">5+</div>
                  <div className="text-clean-gray-800">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-clean-blue-700">99%</div>
                  <div className="text-clean-gray-800">Satisfaction Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-clean-blue-700">24/7</div>
                  <div className="text-clean-gray-800">Availability</div>
                </div>
              </div>
            </div>

            {/* Testimonial Preview */}
            <div className="bg-pure-white rounded-2xl p-6 shadow-lg border border-clean-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-luxury-gold-500 to-luxury-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-pure-white font-bold text-lg">S</span>
                </div>
                <div>
                  <p className="text-clean-gray-800 italic mb-2">
                    "Magiclean transformed my Airbnb! Guests constantly comment on how spotless everything is. Best investment I've made for my business."
                  </p>
                  <div className="font-semibold text-clean-blue-700">Sarah M.</div>
                  <div className="text-sm text-clean-gray-800">Airbnb Host, 5 Properties</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Reasons */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div 
                key={reason.title}
                className="flex items-start gap-4 bg-pure-white rounded-2xl p-6 shadow-lg border border-clean-blue-100 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-clean-blue-50 flex items-center justify-center`}>
                  <reason.icon className={`h-6 w-6 ${reason.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-clean-blue-700 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-clean-gray-800 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-clean-blue-600 to-clean-blue-700 rounded-3xl p-12 text-pure-white max-w-4xl mx-auto animate-fade-in">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Experience the Magiclean Difference?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied customers who trust us with their most important spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 bg-pure-white/20 rounded-lg px-6 py-3">
                <Shield className="h-5 w-5" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-pure-white/20 rounded-lg px-6 py-3">
                <Award className="h-5 w-5" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 bg-pure-white/20 rounded-lg px-6 py-3">
                <Heart className="h-5 w-5" />
                <span>Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;