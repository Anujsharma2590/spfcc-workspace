import config from '@/content/site.config'

export default function Contact() {
  const tel = config.contacts.phones?.[0]?.number?.replace(/\s+/g, '') || ''
  const wa = config.contacts.whatsapp?.replace(/\s+/g, '') || ''
  const waLink = `https://wa.me/${wa.replace('+','')}`
  
  return (
    <section id="contact" className="py-12 sm:py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{config.cta.heading}</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4">{config.cta.sub}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <div className="space-y-3 sm:space-y-4">
              {config.contacts.phones.map(p => (
                <div key={p.number} className="card p-4 sm:p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg sm:text-xl">📞</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{p.label}</div>
                      <div className="text-gray-600 text-sm sm:text-base">{p.number}</div>
                    </div>
                  </div>
                  <a className="btn-primary text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2 flex-shrink-0" href={`tel:${p.number.replace(/\s+/g,'')}`}>
                    Call
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a className="btn-primary flex-1 text-center py-3" href={waLink} target="_blank" rel="noreferrer">
                <span>💬</span>
                WhatsApp
              </a>
              <a className="btn-secondary flex-1 text-center py-3" href={`mailto:${config.contacts.email}`}>
                <span>📧</span>
                Email
              </a>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white rounded-xl border">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Quick Response</h3>
              <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Response within 1 hour</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>24/7 WhatsApp support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Bulk pricing available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Visit Our Office</h3>
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg sm:text-xl">📍</span>
              </div>
              <div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{config.contacts.address}</p>
              </div>
            </div>
            <iframe
              className="w-full h-48 sm:h-64 rounded-xl border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(config.contacts.address)}&output=embed`}
            />
            <div className="mt-3 sm:mt-4 text-center">
              <a 
                href={`https://www.google.com/maps?q=${encodeURIComponent(config.contacts.address)}`}
                target="_blank"
                rel="noreferrer"
                className="text-brand-blue hover:underline text-xs sm:text-sm font-medium"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}