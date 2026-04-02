import { Calendar, ArrowRight } from 'lucide-react';

export function News() {
  const newsArticles = [
    {
      title: 'New Laos Factory Under Construction – Dong Nhan Stone Expands Production',
      date: 'October 10, 2025',
      excerpt: 'Dong Nhan Stone announces major expansion with new state-of-the-art facility in Laos, set to increase production capacity by 50% and create over 150 new jobs in the region.',
      image: 'https://images.unsplash.com/photo-1695169152266-d9ac86fab9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Company News',
    },
    {
      title: 'Applications of CaCO₃ Powder in Modern Industries',
      date: 'September 15, 2025',
      excerpt: 'Exploring the diverse applications of calcium carbonate powder across construction, manufacturing, and emerging industries. Learn how CaCO₃ is shaping the future of sustainable materials.',
      image: 'https://images.unsplash.com/photo-1772543983082-a8a8051ab612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Industry Insights',
    },
    {
      title: 'Dong Nhan Stone Quality Assurance Process',
      date: 'August 22, 2025',
      excerpt: 'A behind-the-scenes look at our comprehensive quality control procedures that ensure every shipment meets the highest international standards.',
      image: 'https://images.unsplash.com/photo-1761549052038-8f5aafbf236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Quality & Standards',
    },
    {
      title: 'DNST CaCO₃ Powder Product Launch',
      date: 'July 5, 2025',
      excerpt: 'Introducing our new premium line of ultra-fine CaCO₃ powder, specially formulated for high-performance applications in the paint and coating industry.',
      image: 'https://images.unsplash.com/photo-1695169152303-fdbd96a95cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Product Launch',
    },
    {
      title: 'Sustainable Mining Practices at Dong Nhan Stone',
      date: 'June 18, 2025',
      excerpt: 'Our commitment to environmental responsibility through innovative mining techniques, land rehabilitation programs, and renewable energy adoption.',
      image: 'https://images.unsplash.com/photo-1759494373228-f2b9f5d0dc2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Sustainability',
    },
    {
      title: 'Partnership Announcement: Expanding into European Markets',
      date: 'May 30, 2025',
      excerpt: 'Dong Nhan Stone announces strategic partnership with leading European distributors to strengthen our presence in Western markets.',
      image: 'https://images.unsplash.com/photo-1695169152266-d9ac86fab9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMHF1YXJyeSUyMG1pbmluZ3xlbnwxfHx8fDE3NzUxMzA5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Partnerships',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <div className="text-center px-4 max-w-4xl">
          <div className="text-secondary mb-4" style={{ fontFamily: "'Special Elite', cursive" }}>
            Latest Updates
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            News & Insights
          </h1>
          <p className="text-xl text-white/90">
            Stay informed about our latest developments and industry trends
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="h-96 md:h-auto">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10 md:p-12 flex flex-col justify-center text-white">
                <div className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                  Featured
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {newsArticles[0].title}
                </h2>
                <div className="flex items-center text-secondary mb-4">
                  <Calendar size={18} className="mr-2" />
                  <span>{newsArticles[0].date}</span>
                </div>
                <p className="text-lg text-white/90 mb-6">
                  {newsArticles[0].excerpt}
                </p>
                <button className="flex items-center text-secondary font-semibold hover:translate-x-2 transition-transform w-fit">
                  Read Full Story <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Recent Articles</h2>
            <p className="text-lg text-gray-600">Explore our latest news and updates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight className="ml-2" size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest news, insights, and industry updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 border-2 border-primary/20 rounded-lg focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
