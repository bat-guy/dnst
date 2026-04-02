import { Target, TrendingUp, Shield, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <div className="text-center px-4 max-w-4xl">
          <div className="text-secondary mb-4" style={{ fontFamily: "'Special Elite', cursive" }}>
            About Dong Nhan Stone
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Thinking Alike, Growing Together for a Stronger Future
          </h1>
          <p className="text-xl text-white/90">
            Building partnerships through quality and innovation
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Dong Nhan Stone has been at the forefront of Vietnam's stone and mineral industry for over 15 years. What began as a small quarry operation has grown into a leading supplier of premium CaCO₃ powder and white stone products.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our commitment to quality and customer satisfaction has enabled us to expand our operations across Southeast Asia and beyond, serving clients in over 20 countries worldwide.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to invest in cutting-edge technology and sustainable practices, ensuring that we deliver the highest quality products while minimizing our environmental impact.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1695169152303-fdbd96a95cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our quarry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our products, ensuring every shipment meets the highest standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuous improvement through research, technology, and modern processing techniques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Reliability</h3>
              <p className="text-gray-600">
                Consistent delivery, transparent communication, and dependable partnerships with our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Environmentally responsible practices that protect our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-xl">
              <h2 className="text-3xl font-bold text-secondary mb-6">Our Mission</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To provide premium quality CaCO₃ powder and white stone products that exceed customer expectations while maintaining sustainable and environmentally responsible operations. We strive to be a trusted partner in our clients' success through innovation, reliability, and exceptional service.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-xl">
              <h2 className="text-3xl font-bold text-secondary mb-6">Our Vision</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To become the leading stone and mineral supplier in Southeast Asia, recognized globally for our commitment to quality, innovation, and sustainability. We envision a future where our products contribute to building stronger communities and a better world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Expanding Our Reach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              New Laos factory under construction - strengthening our regional presence
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary/90 p-12 rounded-2xl text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">Our Commitment to Growth</h3>
              <p className="text-lg mb-6 leading-relaxed">
                We are currently expanding our operations with a new state-of-the-art facility in Laos. This strategic investment will increase our production capacity, improve efficiency, and allow us to better serve our growing customer base across the region.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-2">2026</div>
                  <div className="text-sm">Expected Completion</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-2">+50%</div>
                  <div className="text-sm">Increased Capacity</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-2">150+</div>
                  <div className="text-sm">New Jobs Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
