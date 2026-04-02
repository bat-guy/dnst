import { Link } from 'react-router';
import { Factory, Beaker, Package, TrendingUp, CheckCircle } from 'lucide-react';

export function CaCO3Powder() {
  const applications = [
    {
      title: 'Construction & Building',
      description: 'Essential component in cement, concrete, and building materials for enhanced strength and durability.',
      icon: Factory,
    },
    {
      title: 'Paints & Coatings',
      description: 'Improves opacity, whiteness, and durability in paint formulations and protective coatings.',
      icon: Beaker,
    },
    {
      title: 'Plastics & Polymers',
      description: 'Acts as a filler to reduce costs and improve physical properties in plastic manufacturing.',
      icon: Package,
    },
    {
      title: 'Paper Industry',
      description: 'Enhances brightness, opacity, and printability in paper production processes.',
      icon: TrendingUp,
    },
  ];

  const specifications = [
    { property: 'Chemical Formula', value: 'CaCO₃' },
    { property: 'Purity', value: '≥ 99.5%' },
    { property: 'Whiteness', value: '≥ 95%' },
    { property: 'Particle Size', value: 'Custom (1-100 μm)' },
    { property: 'Moisture Content', value: '≤ 0.5%' },
    { property: 'pH Value', value: '8-10' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <div className="text-center px-4 max-w-4xl">
          <div className="text-secondary mb-4" style={{ fontFamily: "'Special Elite', cursive" }}>
            Premium Quality
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            CaCO₃ Powder
          </h1>
          <p className="text-xl text-white/90">
            High-purity calcium carbonate for diverse industrial applications
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Product Overview</h2>
              <p className="text-lg text-gray-600 mb-4">
                Our premium CaCO₃ (Calcium Carbonate) powder is produced using advanced processing techniques to ensure exceptional purity and consistency. Sourced from high-quality limestone deposits, our product meets the stringent requirements of various industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Available in multiple particle size distributions, our CaCO₃ powder can be customized to meet your specific application needs, from fine to ultra-fine grades.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  ≥99.5% Purity
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  Custom Particle Size
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  ISO Certified
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1772543983082-a8a8051ab612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="CaCO3 Production"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Applications in Modern Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our CaCO₃ powder is trusted across multiple sectors for its versatility and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Detailed product specifications for quality assurance
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary/90 p-10 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="text-secondary font-semibold mb-2">{spec.property}</div>
                    <div className="text-white text-2xl font-bold">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1761549052038-8f5aafbf236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quality control"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-primary mb-6">Quality Assurance</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every batch of our CaCO₃ powder undergoes rigorous testing to ensure it meets international quality standards. Our state-of-the-art laboratory facilities and experienced quality control team guarantee consistent product excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">ISO 9001:2015 Certified</h4>
                    <p className="text-gray-600">International quality management standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Advanced Testing</h4>
                    <p className="text-gray-600">XRF, particle size analysis, and purity testing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Complete Documentation</h4>
                    <p className="text-gray-600">Certificates of analysis with every shipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary to-secondary/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Request a Quote
          </h2>
          <p className="text-xl text-primary/80 mb-8">
            Get in touch to discuss your CaCO₃ powder requirements and pricing
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            Contact Our Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
}
