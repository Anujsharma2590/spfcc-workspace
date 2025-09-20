import Image from 'next/image'
import config from '@/content/site.config'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-white">
      <div className="container-responsive grid lg:grid-cols-2 gap-8 lg:gap-10 items-center py-8 sm:py-12 lg:py-20">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-brand-yellow px-3 py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-900 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Authorized UltraTech Dealer
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            {config.company.name}
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">{config.company.tagline}</p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#contact" className="btn-primary text-center py-3 sm:py-3">
              <span>📞</span>
              Call / WhatsApp
            </a>
            <a href="#services" className="btn-secondary text-center py-3 sm:py-3">
              <span>🔧</span>
              View Services
            </a>
          </div>
          <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-blue-50 rounded-xl border-l-4 border-brand-blue">
            <p className="text-xs sm:text-sm text-gray-700 font-medium">{config.company.about}</p>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <Image src={config.company.heroImage || '/hero.jpg'} alt="SFPCC Construction Materials" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-lg border">
            <div className="text-xl sm:text-2xl font-bold text-brand-blue">15+</div>
            <div className="text-xs sm:text-sm text-gray-600">Trusted Partners</div>
          </div>
        </div>
      </div>
    </section>
  )
}