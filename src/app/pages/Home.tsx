import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Award, Users, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1695169152266-d9ac86fab9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Stone quarry"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <div className="text-secondary mb-4" style={{ fontFamily: "'Special Elite', cursive" }}>
            Think alike, grow together
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Premium CaCO₃ Powder & White Stone Supplier
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Quality, Innovation, and Sustainable Solutions from Vietnam
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/caco3-powder"
              className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105"
            >
              Explore CaCO₃ Powder
            </Link>
            <Link
              to="/white-stone"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              View White Stone
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-secondary mb-2" style={{ fontFamily: "'Special Elite', cursive" }}>
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Thinking Alike, Growing Together for a Stronger Future
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Dong Nhan Stone, we are committed to delivering premium quality CaCO₃ powder and white stone products to industries worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-muted rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorous testing and quality control standards</p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Global Reach</h3>
              <p className="text-gray-600">Serving customers across multiple countries</p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals dedicated to excellence</p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Sustainable</h3>
              <p className="text-gray-600">Environmentally responsible practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-secondary mb-2" style={{ fontFamily: "'Special Elite', cursive" }}>
              Our Specialties
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Premium Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/caco3-powder" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1772543983082-a8a8051ab612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="CaCO3 Powder"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">CaCO₃ Powder</h3>
                  <p className="text-gray-600 mb-4">
                    High-purity calcium carbonate powder for diverse industrial applications, from construction to manufacturing.
                  </p>
                  <div className="flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2" size={20} />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/white-stone" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1759494373228-f2b9f5d0dc2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="White Stone Blocks"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">White Stone Blocks</h3>
                  <p className="text-gray-600 mb-4">
                    Premium quality white stone blocks perfect for construction, landscaping, and decorative applications.
                  </p>
                  <div className="flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2" size={20} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-secondary mb-2" style={{ fontFamily: "'Special Elite', cursive" }}>
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Experience, Quality, and Reliability You Can Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary mb-4">15+</div>
              <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
              <p className="text-white/80">Proven track record in the stone industry</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary mb-4">99.9%</div>
              <h3 className="text-xl font-semibold mb-2">Purity Standard</h3>
              <p className="text-white/80">Premium quality CaCO₃ products</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary mb-4">20+</div>
              <h3 className="text-xl font-semibold mb-2">Countries Served</h3>
              <p className="text-white/80">Global distribution network</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary to-secondary/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-primary/80 mb-8">
            Contact us today to discuss your stone and powder needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
