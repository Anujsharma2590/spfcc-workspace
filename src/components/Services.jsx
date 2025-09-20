import config from '@/content/site.config'

const serviceIcons = {
  'Cement (Grey & RMC)': '🏗️',
  'Steel & Steel Fibers': '🔩',
  'Construction Chemicals': '🧪',
  'AAC Blocks': '🧱',
  'Shuttering Plywood & Pinewood': '🪵',
  'Epoxy, PU & Industrial Flooring': '🏭'
}

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 bg-gray-50">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Products & Services</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Wholesale supply for projects, contractors and distributors across India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {config.services.map((s, index) => (
            <div key={s.title} className="card p-4 sm:p-6 hover:shadow-lg transition-shadow group">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl flex-shrink-0">{serviceIcons[s.title] || '📦'}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-brand-blue transition-colors">
                    {s.title}
                  </div>
                  {s.description && (
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">{s.description}</p>
                  )}
                  <div className="mt-3 sm:mt-4">
                    <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-brand-yellow text-gray-900">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">One Stop Solution</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              From cement to chemicals, we provide everything you need for your construction projects
            </p>
            <a href="#contact" className="btn-primary">
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}