import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <div className="text-center px-4 max-w-4xl">
          <div className="text-secondary mb-4" style={{ fontFamily: "'Special Elite', cursive" }}>
            Get in Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90">
            We're here to answer your questions and discuss your needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-primary to-primary/90 rounded-xl text-white shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-white/90">+84 XXX XXX XXX</p>
              <p className="text-white/90">+84 YYY YYY YYY</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-primary to-primary/90 rounded-xl text-white shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-white/90">info@dongnhanstone.com</p>
              <p className="text-white/90">sales@dongnhanstone.com</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-primary to-primary/90 rounded-xl text-white shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-white/90">Vietnam</p>
              <p className="text-white/90">Serving 20+ Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="+84 XXX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="caco3">CaCO₃ Powder Inquiry</option>
                  <option value="whitestone">White Stone Inquiry</option>
                  <option value="quote">Request a Quote</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Our Facilities
            </h2>
            <p className="text-lg text-white/90">
              Operating across multiple locations to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-secondary mb-4">Vietnam Headquarters</h3>
              <p className="text-white/90 mb-4">
                Our main production facility and headquarters are located in Vietnam, where we operate state-of-the-art quarries and processing plants.
              </p>
              <div className="space-y-2 text-white/80">
                <p>✓ Main quarry operations</p>
                <p>✓ CaCO₃ processing facility</p>
                <p>✓ Quality control laboratory</p>
                <p>✓ Administrative offices</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-secondary mb-4">Laos Facility (Under Construction)</h3>
              <p className="text-white/90 mb-4">
                Our new facility in Laos will significantly expand our production capacity and strengthen our regional presence.
              </p>
              <div className="space-y-2 text-white/80">
                <p>✓ Expected completion: 2026</p>
                <p>✓ +50% production capacity</p>
                <p>✓ Advanced processing technology</p>
                <p>✓ 150+ new jobs created</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-primary mb-6">Business Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-primary/90">
            <div>
              <h4 className="font-bold text-lg mb-2">Office Hours</h4>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 8:00 AM - 12:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Support</h4>
              <p>24/7 Email Support</p>
              <p>Emergency Hotline Available</p>
              <p>Quick Response Guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
