"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

interface Testimonial {
  id: number
  videoUrl: string
  quote: string
  profession: string
  thumbnail: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    videoUrl: "https://youtu.be/C8JC023Z4SE?si=_Fd_gMtk9io0r9p7",
    thumbnail: "https://i1.ytimg.com/vi/C8JC023Z4SE/hqdefault.jpg",
    quote:
      "fynk makes life much easier for us and our clients when it comes to contract management and digital signatures!",
    profession: "Brandon Zell - Chief Accounting Officer",
  },
  {
    id: 2,
    videoUrl: "https://youtu.be/C8JC023Z4SE?si=_Fd_gMtk9io0r9p7",
    thumbnail: "https://i1.ytimg.com/vi/C8JC023Z4SE/hqdefault.jpg",
    quote: "The automation features have saved us countless hours. It's transformed how we handle contracts.",
    profession: "Sarah Harris - Secretary",
  },
  {
    id: 3,
    videoUrl: "https://youtu.be/C8JC023Z4SE?si=_Fd_gMtk9io0r9p7",
    thumbnail: "https://i1.ytimg.com/vi/C8JC023Z4SE/hqdefault.jpg",
    quote: "Implementation was seamless and the support team was incredibly helpful throughout the process.",
    profession: "Michael Chen - Operations Director",
  },
  {
    id: 4,
    videoUrl: "https://youtu.be/C8JC023Z4SE?si=_Fd_gMtk9io0r9p7",
    thumbnail: "https://i1.ytimg.com/vi/C8JC023Z4SE/hqdefault.jpg",
    quote: "Our contract turnaround time has decreased by 60% since we started using this platform.",
    profession: "Emily Rodriguez - Legal Counsel",
  },
  {
    id: 5,
    videoUrl: "https://youtu.be/C8JC023Z4SE?si=_Fd_gMtk9io0r9p7",
    thumbnail: "https://i1.ytimg.com/vi/C8JC023Z4SE/hqdefault.jpg",
    quote: "The best investment we've made for our legal operations. Highly recommend to any growing business.",
    profession: "David Thompson - CEO",
  },
]

function getYouTubeEmbedUrl(url: string) {
  try {
    const u = new URL(url)
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1)
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v")
      if (id) return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
    }
  } catch (e) {
    // fallback
  }
  return url
}

export default function TestimonialsSection() {
  const swiperRef = useRef<any | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  // pause/start autoplay when video plays/stops
  useEffect(() => {
    const s = swiperRef.current
    if (!s || !s.autoplay) return
    if (playingVideo !== null) s.autoplay.stop()
    else s.autoplay.start()
  }, [playingVideo])

  return (
    <section className="w-full py-20 bg-background overflow-visible">
      <div className="w-full">
        <h2 className="text-4xl font-medium md:text-5xl text-center mb-8 text-balance">
          Don't just take our word for it.
        </h2>

        <Swiper
          modules={[Autoplay]}
          onSwiper={(s) => {
            swiperRef.current = s
            setActiveIndex(s?.realIndex ?? 0)
          }}
          onSlideChange={() => {
            setActiveIndex(swiperRef.current?.realIndex ?? 0)
          }}
          slidesPerView="auto"
          centeredSlides
          loop
          // negative spaceBetween makes slides overlap slightly so side slides peek more
          spaceBetween={16}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            // mobile: show 1 slide full width
            0: { slidesPerView: 1, centeredSlides: true },
            768: { slidesPerView: "auto", centeredSlides: true },
          }}
          className="py-6"
        >
          {testimonials.map((t, idx) => {
            // compute center based on Swiper's active index
            const isCenter = idx === activeIndex

            // CTA styles: non-center gets the "hover" visual by default
            const ctaHoverStyle = "hidden"
            const ctaNormalStyle =
              "shrink-0 font-semibold rounded-sm py-1 px-2 transition-all border-0 bg-primary hover:bg-primary text-white text-xs cursor-pointer"

            return (
              // force the slide width to 550px (important: !w- to override any Swiper inline styles)
              <SwiperSlide key={t.id} className="w-[550px]! flex justify-center">
                {/* card: fixed width 550px, no border, no shadow */}
                <div
                  className={`w-[550px] rounded-md overflow-hidden transition-opacity duration-300 bg-transparent shadow-none border-0
                    ${isCenter ? "opacity-100" : "opacity-60"}
                  `}
                >
                  <div className="relative aspect-video bg-muted">
                    {playingVideo === t.id ? (
                      <>
                        <iframe
                          title={`video-${t.id}`}
                          className="w-full h-full"
                          src={getYouTubeEmbedUrl(t.videoUrl)}
                          allow="autoplay; encrypted-media; picture-in-picture"
                          allowFullScreen
                        />
                        {/* close button to exit video playback */}
                        <button
                          onClick={() => setPlayingVideo(null)}
                          aria-label="Close video"
                          className="absolute top-2 right-2 rounded-full px-2.5 py-1 bg-black/60 text-white text-sm cursor-pointer"
                        >
                          ×
                        </button>
                      </>
                    ) : (
                      <>
                        <img
                          src={t.thumbnail || "/placeholder.svg"}
                          alt={t.profession}
                          className="w-full h-full object-cover"
                        />

                        {/* Play button ONLY on the center card */}
                        {isCenter && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button
                              onClick={() => setPlayingVideo(t.id)}
                              className="flex items-center gap-2 bg-white/5 backdrop-blur-lg rounded-full px-2 py-2 hover:scale-105 transition-transform cursor-pointer"
                            >
                              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-none">
                                <Play className="w-4 h-4 text-black fill-black ml-0.5" />
                              </div>
                              <span className="text-white text-xs font-bold">Watch customer video</span>
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className="px-4 py-4">
                    <div className="flex items-start justify-between gap-1">
                      <div className="flex-1">
                        <p className="text-sm text-foreground mb-2 italic">"{t.quote}"</p>
                        <div>
                          <p className="text-xs text-muted-foreground">{t.profession}</p>
                        </div>
                      </div>

                      <Button variant="ghost" className={isCenter ? ctaNormalStyle : ctaHoverStyle}>
                        Read customer story →
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
