'use client'

import Image from 'next/image'
import config from '@/content/site.config'
import TypingText from './TypingText'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'

// Add as many background photos as you like — one slide per entry.
const HERO_IMAGES = [
  { src: '/cover_image.png', alt: 'cover-1' },
  { src: '/cover_image_2.png', alt: '' },
  { src: '/cover_image_3.png', alt: '' },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center">
      {/* Full-bleed background carousel */}
      <div className="absolute inset-0 -z-20">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={HERO_IMAGES.length > 1}
          autoplay={
            HERO_IMAGES.length > 1 ? { delay: 3500, disableOnInteraction: false } : false
          }
          allowTouchMove={false}
          className="w-full h-full"
        >
          {HERO_IMAGES.map((img) => (
            <SwiperSlide key={img.src}>
              <div className="relative w-full h-full">
                <Image src={img.src} alt={img.alt} fill priority className="object-cover object-center" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overlay: dark gradient for text contrast, brand-tinted at the edges */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

      <div className="container-responsive relative py-16 sm:py-20 lg:py-28 lg:-ml-4 xl:-ml-10">
        <div className="max-w-2xl lg:max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-yellow px-3 py-2 rounded-full text-xs sm:text-sm font-semibold text-gray-900 mb-5 sm:mb-6">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            Authorized UltraTech Dealer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white [text-wrap:balance]">
            {config.company.name}
          </h1>

          <TypingText
            as="p"
            text={config.company.tagline}
            typingSpeed={28}
            loop={false}
            className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl min-h-[4.5rem] sm:min-h-[3.5rem] lg:min-h-[4rem]"
          />

          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#contact" className="btn-primary text-center py-3 sm:py-3.5 text-sm sm:text-base">
              <span>📞</span>
              Call / WhatsApp
            </a>
            <a
              href="#services"
              className="text-center py-3 sm:py-3.5 px-6 rounded-lg font-semibold text-sm sm:text-base bg-white/10 text-white border border-white/40 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <span>🔧</span> View Services
            </a>
          </div>

          {/* Highlighted callout for the "about" line */}
          <div className="mt-7 sm:mt-9 bg-white/10 backdrop-blur-sm border-l-4 border-brand-yellow rounded-lg p-4 sm:p-5 max-w-2xl">
            <p className="text-sm sm:text-base text-gray-100 leading-relaxed font-medium">{config.company.about}</p>
          </div>

          {/* Stat cards */}
          <div className="mt-5 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 sm:px-6 sm:py-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-yellow">15+</div>
              <div className="text-xs sm:text-sm text-gray-200 mt-0.5">Trusted Partners</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 sm:px-6 sm:py-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-yellow">1 hr</div>
              <div className="text-xs sm:text-sm text-gray-200 mt-0.5">Avg. Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
