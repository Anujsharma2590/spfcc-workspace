import config from '@/content/site.config'

export default function Contact() {
  const tel = config.contacts.phones?.[0]?.number?.replace(/\s+/g, '') || ''
  const wa = config.contacts.whatsapp?.replace(/\s+/g, '') || ''
  const waLink = `https://wa.me/${wa.replace('+','')}`
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{config.cta.heading}</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">{config.cta.sub}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="space-y-4">
              {config.contacts.phones.map(p => (
                <div key={p.number} className="card p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{p.label}</div>
                      <div className="text-gray-600">{p.number}</div>
                    </div>
                  </div>
                  <a className="btn-primary" href={`tel:${p.number.replace(/\s+/g,'')}`}>
                    Call Now
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a className="btn-primary flex-1 text-center" href={waLink} target="_blank" rel="noreferrer">
                <span>💬</span>
                WhatsApp
              </a>
              <a className="btn-secondary flex-1 text-center" href={`mailto:${config.contacts.email}`}>
                <span>📧</span>
                Email
              </a>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Response</h3>
              <div className="space-y-2 text-sm text-gray-600">
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

          <div className="card p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Visit Our Office</h3>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                <span className="text-xl">📍</span>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">{config.contacts.address}</p>
              </div>
            </div>
            <iframe
              className="w-full h-64 rounded-xl border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(config.contacts.address)}&output=embed`}
            />
            <div className="mt-4 text-center">
              <a 
                href={`https://www.google.com/maps?q=${encodeURIComponent(config.contacts.address)}`}
                target="_blank"
                rel="noreferrer"
                className="text-brand-blue hover:underline text-sm font-medium"
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