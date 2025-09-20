import config from '@/content/site.config'

export default function Contact() {
  const tel = config.contacts.phones?.[0]?.number?.replace(/\s+/g, '') || ''
  const wa = config.contacts.whatsapp?.replace(/\s+/g, '') || ''
  const waLink = `https://wa.me/${wa.replace('+','')}`
  return (
    <section id="contact" className="py-16 bg-brand.yellow/10">
      <div className="container-responsive grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold">{config.cta.heading}</h2>
          <p className="text-gray-700 mt-2">{config.cta.sub}</p>

          <div className="mt-6 space-y-3">
            {config.contacts.phones.map(p => (
              <div key={p.number} className="card p-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.label}</div>
                  <div className="text-gray-600">{p.number}</div>
                </div>
                <a className="btn-primary" href={`tel:${p.number.replace(/\s+/g,'')}`}>Call</a>
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-3">
            <a className="btn-primary" href={waLink} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="inline-flex items-center rounded-xl border px-5 py-3 font-semibold" href={`mailto:${config.contacts.email}`}>Email</a>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold">Visit us</h3>
          <p className="mt-2 text-gray-700">{config.contacts.address}</p>
          <iframe
            className="mt-4 w-full h-64 rounded-xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(config.contacts.address)}&output=embed`}
          />
        </div>
      </div>
    </section>
  )
}