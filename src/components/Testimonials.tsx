import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Property Manager",
      location: "Downtown Properties",
      rating: 5,
      text: "Magiclean has been managing all 12 of our Airbnb properties for over 2 years. Their consistency and attention to detail is unmatched. Our guest ratings have improved significantly since we started using their services.",
      initials: "MR",
      color: "from-clean-blue-500 to-clean-blue-600"
    },
    {
      name: "David Chen",
      role: "Homeowner",
      location: "Suburban Family Home",
      rating: 5,
      text: "After our kitchen renovation, Magiclean did an incredible post-construction cleanup. They removed every speck of dust and made our home livable again. The team was professional, efficient, and thorough.",
      initials: "DC",
      color: "from-luxury-gold-500 to-luxury-gold-600"
    },
    {
      name: "Jennifer Walsh",
      role: "Airbnb Host",
      location: "4 Properties",
      rating: 5,
      text: "I've tried 3 other cleaning services before finding Magiclean. The difference is night and day. They arrive on time, follow my specific checklist, and guests always comment on how clean everything is. Worth every penny!",
      initials: "JW",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Robert Kim",
      role: "Business Owner",
      location: "Office Complex",
      rating: 5,
      text: "Our office has never looked better. Magiclean's deep cleaning service transformed our workspace. Employees love coming to work now, and clients are impressed by our professional environment.",
      initials: "RK",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Lisa Thompson",
      role: "Busy Mom",
      location: "Family Home",
      rating: 5,
      text: "As a working mother of three, Magiclean is a lifesaver. They clean our home monthly, and it's like getting a fresh start every time. The eco-friendly products give me peace of mind with my kids and pets.",
      initials: "LT",
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Michael Brown",
      role: "Real Estate Agent",
      location: "Luxury Homes",
      rating: 5,
      text: "I recommend Magiclean to all my clients preparing to sell their homes. Their deep cleaning service helps properties show beautifully and often leads to faster sales at better prices. Exceptional service!",
      initials: "MB",
      color: "from-clean-blue-600 to-clean-blue-700"
    }
  ];

  return (
    <section className="py-20 bg-clean-blue-50" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-clean-blue-700 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-clean-gray-800 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what real customers say about their Magiclean experience.
          </p>
          
          {/* Average Rating */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-luxury-gold-500 text-luxury-gold-500" />
              ))}
            </div>
            <div className="text-2xl font-bold text-clean-blue-700">4.9/5</div>
            <div className="text-clean-gray-800">from 200+ reviews</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-pure-white border-2 border-clean-blue-100 hover:border-clean-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-luxury-gold-500 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-luxury-gold-500 text-luxury-gold-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-clean-gray-800 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center`}>
                    <span className="text-pure-white font-bold text-sm">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-clean-blue-700">
                      {testimonial.name}
                    </div>
                    <div className="text-clean-gray-800 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-clean-gray-800 text-xs">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-clean-blue-600 to-clean-blue-700 rounded-3xl p-12 text-pure-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Experience the Magiclean difference and see why our clients rate us 4.9/5 stars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-luxury-gold-500 hover:bg-luxury-gold-600 text-pure-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                Book Your Cleaning Today
              </button>
              <button className="border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-clean-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;