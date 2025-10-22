import config from '@/content/site.config'

export default function Footer() {
  // Use a static year to avoid hydration issues
  const currentYear = 2025
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-responsive py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{config.company.shortName}</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {config.company.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Authorized UltraTech Dealer</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {config.nav.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-brand-yellow">📧</span>
                <a 
                  href={`mailto:${config.contacts.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {config.contacts.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-yellow">📞</span>
                <a 
                  href="tel:+919610961111"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 9610961111, +91 9610962222, +91 9610967777
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-yellow">📍</span>
                <span className="text-gray-300 text-sm">
                  Bhiwadi, Alwar, Rajasthan
                </span>
              </div>
              <div className="flex items-center gap-3">
              <span className="text-brand-yellow">🧾</span>
              <span className="text-gray-300 text-sm">
                <strong>GST No: 08ADAFS2300N1Z6</strong>
              </span>
    </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} {config.company.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="/" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                sgpcc.in
              </a>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">Building India's Future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
