import Image from 'next/image'
import config from '@/content/site.config'

export default function Partners() {
  return (
    <section id="partners" className="py-16">
      <div className="container-responsive">
        <h2 className="text-3xl font-bold">Trusted Partners</h2>
        <p className="text-gray-600 mt-2">We work with leading brands to ensure quality and reliability.</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {config.partners.map((p) => (
            <a key={p.name} href={p.url || '#'} target={p.url ? '_blank' : undefined} className="card p-4 flex items-center justify-center">
              {p.logo ? (
                <Image src={p.logo} alt={p.name} width={120} height={60} className="object-contain" />
              ) : (
                <span className="text-sm text-center font-medium">{p.name}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}