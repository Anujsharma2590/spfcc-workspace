import Image from 'next/image'
import config from '@/content/site.config'

export default function Partners() {
  return (
    <section id="partners" className="py-12 sm:py-16 bg-white">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Trusted Partners</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We maintain a network of distributors and partners with leading organizations to ensure quality and reliability
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 items-center">
          {config.partners.map((p) => (
            <a 
              key={p.name} 
              href={p.url || '#'} 
              target={p.url ? '_blank' : undefined} 
              className="card p-3 sm:p-4 lg:p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 group min-h-[80px] sm:min-h-[100px]"
            >
              {p.logo ? (
                <Image 
                  src={p.logo} 
                  alt={p.name} 
                  width={80} 
                  height={40} 
                  className="object-contain group-hover:scale-105 transition-transform duration-300 sm:w-[100px] sm:h-[50px] lg:w-[120px] lg:h-[60px]" 
                />
              ) : (
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">🏢</div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 leading-tight">{p.name}</span>
                </div>
              )}
            </a>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-yellow px-4 sm:px-6 py-2 sm:py-3 rounded-full text-gray-900 font-semibold text-sm sm:text-base">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Authorized Dealer Network
          </div>
        </div>
      </div>
    </section>
  )
}