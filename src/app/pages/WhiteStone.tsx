import { Link } from 'react-router';
import { Home, TreePine, Palette, Building2, CheckCircle, Ruler } from 'lucide-react';

export function WhiteStone() {
  const applications = [
    {
      title: 'Construction Projects',
      description: 'Ideal for structural foundations, walls, and building facades with excellent load-bearing properties.',
      icon: Building2,
    },
    {
      title: 'Landscaping',
      description: 'Perfect for garden features, retaining walls, pathways, and decorative outdoor elements.',
      icon: TreePine,
    },
    {
      title: 'Interior Design',
      description: 'Elegant flooring, wall cladding, and architectural features for modern and classic interiors.',
      icon: Home,
    },
    {
      title: 'Decorative Applications',
      description: 'Sculptures, monuments, and artistic installations showcasing the natural beauty of white stone.',
      icon: Palette,
    },
  ];

  const sizes = [
    '100 x 100 x 50 mm',
    '200 x 100 x 50 mm',
    '200 x 200 x 100 mm',
    '300 x 150 x 100 mm',
    '400 x 200 x 100 mm',
    'Custom sizes available',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <div className="text-center px-4 max-w-4xl">
          <div className="text-secondary mb-4" style={{ fontFamily: "'Special Elite', cursive" }}>
            Natural Beauty
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            White Stone Blocks
          </h1>
          <p className="text-xl text-white/90">
            Premium quality natural white stone for construction and design
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1759494373228-f2b9f5d0dc2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="White stone blocks"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-primary mb-6">Product Overview</h2>
              <p className="text-lg text-gray-600 mb-4">
                Our white stone blocks are carefully extracted from premium quarries, selected for their exceptional whiteness, uniformity, and structural integrity. Each block undergoes precise cutting and finishing to meet exact specifications.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The natural beauty and durability of our white stone makes it an ideal choice for both functional construction and aesthetic applications, from modern architecture to traditional craftsmanship.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  Natural White
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  High Durability
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  Custom Sizes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Versatile Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From construction to decoration, our white stone serves countless purposes
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

      {/* Sizes & Specifications */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Available Sizes & Specifications
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer a wide range of standard sizes and can also provide custom-cut blocks to meet your specific project requirements. All blocks are precision-cut and quality-checked before shipment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sizes.map((size, index) => (
                  <div key={index} className="flex items-center bg-muted p-4 rounded-lg">
                    <Ruler className="text-secondary mr-3 flex-shrink-0" size={20} />
                    <span className="font-semibold text-primary">{size}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary/90 p-10 rounded-2xl shadow-2xl text-white">
              <h3 className="text-2xl font-bold text-secondary mb-6">Product Characteristics</h3>
              <div className="space-y-4">
                <div className="border-b border-white/20 pb-3">
                  <div className="text-sm text-white/70 mb-1">Color</div>
                  <div className="text-lg font-semibold">Pure White to Off-White</div>
                </div>
                <div className="border-b border-white/20 pb-3">
                  <div className="text-sm text-white/70 mb-1">Density</div>
                  <div className="text-lg font-semibold">2.6 - 2.8 g/cm³</div>
                </div>
                <div className="border-b border-white/20 pb-3">
                  <div className="text-sm text-white/70 mb-1">Compressive Strength</div>
                  <div className="text-lg font-semibold">≥ 100 MPa</div>
                </div>
                <div className="border-b border-white/20 pb-3">
                  <div className="text-sm text-white/70 mb-1">Water Absorption</div>
                  <div className="text-lg font-semibold">≤ 0.5%</div>
                </div>
                <div className="pb-3">
                  <div className="text-sm text-white/70 mb-1">Finish Options</div>
                  <div className="text-lg font-semibold">Natural, Polished, Honed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Our White Stone
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CheckCircle className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold text-primary mb-3">Superior Quality</h3>
              <p className="text-gray-600">
                Carefully selected from premium quarries, each block meets strict quality standards for color consistency and structural integrity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CheckCircle className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold text-primary mb-3">Weather Resistant</h3>
              <p className="text-gray-600">
                Excellent durability and resistance to weathering, making it ideal for both interior and exterior applications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CheckCircle className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold text-primary mb-3">Sustainable Sourcing</h3>
              <p className="text-gray-600">
                Responsibly quarried with minimal environmental impact, supporting sustainable construction practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CheckCircle className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold text-primary mb-3">Easy to Work With</h3>
              <p className="text-gray-600">
                Can be easily cut, shaped, and finished to meet specific design requirements and architectural visions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CheckCircle className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold text-primary mb-3">Timeless Elegance</h3>
              <p className="text-gray-600">
                Natural white stone brings classic beauty and sophistication to any project, from traditional to contemporary.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CheckCircle className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold text-primary mb-3">Cost-Effective</h3>
              <p className="text-gray-600">
                Competitive pricing with excellent value for money, combined with long-lasting durability that reduces replacement costs.
              </p>
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
            Contact us to discuss your white stone requirements and receive a custom quote
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
