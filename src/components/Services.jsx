import config from '@/content/site.config'

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container-responsive">
        <h2 className="text-3xl font-bold">Products & Services</h2>
        <p className="text-gray-600 mt-2">Wholesale supply for projects, contractors and distributors.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.services.map((s) => (
            <div key={s.title} className="card p-6">
              <div className="text-xl font-semibold">{s.title}</div>
              {s.description && <p className="mt-2 text-gray-600 text-sm">{s.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}