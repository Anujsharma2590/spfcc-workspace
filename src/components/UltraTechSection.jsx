import Image from 'next/image'
import config from '@/content/site.config'

export default function UltraTechSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Authorized Dealer
            </div>
            <h2 className="text-4xl font-bold mb-4">
              UltraTech Cement
              <span className="block text-2xl font-normal text-blue-100">The Engineer's Choice</span>
            </h2>
            <p className="text-lg text-blue-100 mb-6">
              Authorised dealer of non-trade UltraTech grey cement & RMC for all over India
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm">✓</span>
                <span>Building Products Division</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm">✓</span>
                <span>Grey Cement Supply</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm">✓</span>
                <span>Ready Mix Concrete (RMC)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm">✓</span>
                <span>Pan India Delivery</span>
              </div>
            </div>
            <div className="mt-8">
              <a href="#contact" className="btn-primary bg-yellow-400 text-blue-900 hover:bg-yellow-300">
                Get UltraTech Quote
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-yellow-400 mb-4">UltraTech</div>
                  <div className="text-xl text-white">The Engineer's Choice</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border text-gray-900">
              <div className="text-2xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Authentic Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
