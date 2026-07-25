'use client'

import Image from 'next/image'
import config from '@/content/site.config'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Add as many images as you like here — one slide per entry.
const ULTRATECH_IMAGES = [
  { src: '/ultra-tech-truck.png', alt: 'UltraTech cement delivery truck' },
  { src: '/ultratech-cement.webp', alt: 'UltraTech cement warehouse' },
  { src: '/ultra-tech-bags.jpg', alt: 'Stacked UltraTech cement bags' },
]

export default function UltraTechSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-yellow-500 to-yellow-700 text-gray-900">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-gray-900/10 px-3 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Authorized Dealer
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              UltraTech Cement
              <span className="block text-lg sm:text-xl lg:text-2xl font-normal text-gray-700">The Engineer's Choice</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Authorised dealer of non-trade UltraTech grey cement & RMC for all over India
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">✓</span>
                <span className="text-sm sm:text-base">Building Products Division</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">✓</span>
                <span className="text-sm sm:text-base">Grey Cement Supply</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">✓</span>
                <span className="text-sm sm:text-base">Ready Mix Concrete (RMC)</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">✓</span>
                <span className="text-sm sm:text-base">Pan India Delivery</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">✓</span>
                <span className="text-sm sm:text-base">Serving for project-based orders</span>
              </div>
            </div>
            <div className="mt-6 sm:mt-8">
              <a href="#contact" className="btn-primary bg-blue-600 text-white hover:bg-blue-500 text-center block sm:inline-block">
                Get UltraTech Quote
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ultratech-swiper">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                loop={ULTRATECH_IMAGES.length > 1}
                autoplay={ULTRATECH_IMAGES.length > 1 ? { delay: 3000, disableOnInteraction: false } : false}
                pagination={ULTRATECH_IMAGES.length > 1 ? { clickable: true } : false}
                navigation={ULTRATECH_IMAGES.length > 1}
                className="w-full h-full"
              >
                {ULTRATECH_IMAGES.map((img) => (
                  <SwiperSlide key={img.src}>
                    <div className="relative w-full h-full">
                      <Image src={img.src} alt={img.alt} fill className="object-cover" />
                      {/* subtle bottom gradient so the badge below stays legible over any part of the photo */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl shadow-lg border text-gray-900 z-10">
              <div className="text-lg sm:text-2xl font-bold text-blue-600">100%</div>
              <div className="text-xs sm:text-sm text-gray-600">Authentic Products</div>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper theming: white dots/arrows so they read against any photo */}
      <style jsx global>{`
        .ultratech-swiper .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.6;
        }
        .ultratech-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .ultratech-swiper .swiper-button-next,
        .ultratech-swiper .swiper-button-prev {
          color: #fff;
          width: 32px;
          height: 32px;
        }
        .ultratech-swiper .swiper-button-next::after,
        .ultratech-swiper .swiper-button-prev::after {
          font-size: 16px;
          font-weight: 700;
        }
        @media (max-width: 640px) {
          .ultratech-swiper .swiper-button-next,
          .ultratech-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
