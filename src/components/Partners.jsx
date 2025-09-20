import Image from 'next/image'
import config from '@/content/site.config'

export default function Partners() {
  return (
    <section id="partners" className="py-16 bg-white">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We maintain a network of distributors and partners with leading organizations to ensure quality and reliability
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
          {config.partners.map((p) => (
            <a 
              key={p.name} 
              href={p.url || '#'} 
              target={p.url ? '_blank' : undefined} 
              className="card p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
            >
              {p.logo ? (
                <Image 
                  src={p.logo} 
                  alt={p.name} 
                  width={120} 
                  height={60} 
                  className="object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              ) : (
                <div className="text-center">
                  <div className="text-2xl mb-2">🏢</div>
                  <span className="text-sm font-medium text-gray-700">{p.name}</span>
                </div>
              )}
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-yellow px-6 py-3 rounded-full text-gray-900 font-semibold">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Authorized Dealer Network
          </div>
        </div>
      </div>
    </section>
  )
}