import Image from 'next/image'
import config from '@/content/site.config'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-white">
      <div className="container-responsive grid lg:grid-cols-2 gap-10 items-center py-14 lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-yellow px-4 py-2 rounded-full text-sm font-semibold text-gray-900 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Authorized UltraTech Dealer
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            {config.company.name}
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">{config.company.tagline}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary text-center">
              <span>📞</span>
              Call / WhatsApp
            </a>
            <a href="#services" className="btn-secondary text-center">
              <span>🔧</span>
              View Services
            </a>
          </div>
          <div className="mt-8 p-4 bg-blue-50 rounded-xl border-l-4 border-brand-blue">
            <p className="text-sm text-gray-700 font-medium">{config.company.about}</p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image src={config.company.heroImage || '/hero.jpg'} alt="SFPCC Construction Materials" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
            <div className="text-2xl font-bold text-brand-blue">15+</div>
            <div className="text-sm text-gray-600">Trusted Partners</div>
          </div>
        </div>
      </div>
    </section>
  )
}