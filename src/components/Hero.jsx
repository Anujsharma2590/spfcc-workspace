import Image from 'next/image'
import config from '@/content/site.config'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-responsive grid lg:grid-cols-2 gap-10 items-center py-14 lg:py-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {config.company.name}
          </h1>
          <p className="mt-4 text-lg text-gray-700">{config.company.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="btn-primary">Call / WhatsApp</a>
            <a href="#services" className="inline-flex items-center rounded-xl border px-5 py-3 font-semibold">View Services</a>
          </div>
          <p className="mt-6 text-sm text-gray-600 max-w-prose">{config.company.about}</p>
        </div>

        <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg">
          <Image src={config.company.heroImage || '/hero.jpg'} alt="SFPCC" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}