"use client"

export default function TrustedSection() {
  // 14 company/brand images with black filter
  // 14 company/brand images with their official links
  const trustedData = [
    { logo: "https://fynk.com/images/logos/mono/bridgemaker.png", url: "https://bridgemaker.com" },
    { logo: "https://fynk.com/images/logos/mono/triumph.png", url: "https://triumph.com" },
    { logo: "https://fynk.com/images/logos/mono/falken.png", url: "https://falkentire.com" },
    { logo: "https://fynk.com/images/logos/mono/bbhotels.png", url: "https://www.hotel-bb.com" },
    { logo: "https://fynk.com/images/logos/mono/bridgemaker.png", url: "https://bridgemaker.com" },
    { logo: "https://fynk.com/images/logos/mono/eliso.png", url: "https://eliso.io" },
    { logo: "https://fynk.com/images/logos/mono/oekostrom.png", url: "https://oekostrom.at" },
    { logo: "https://fynk.com/images/logos/mono/falken.png", url: "https://falkentire.com" },
    { logo: "https://fynk.com/images/logos/mono/eliso.png", url: "https://eliso.io" },
    { logo: "https://fynk.com/images/logos/mono/bridgemaker.png", url: "https://bridgemaker.com" },
    { logo: "https://fynk.com/images/logos/mono/eliso.png", url: "https://eliso.io" },
    { logo: "https://fynk.com/images/logos/mono/oekostrom.png", url: "https://oekostrom.at" },
    { logo: "https://fynk.com/images/logos/mono/maxenergy.png", url: "https://maxenergy.at" },
    { logo: "https://fynk.com/images/logos/mono/datarade.png", url: "https://datarade.ai" },
  ]

  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-2">
          <p className="text-black/50 font-bold text-xs md:text-md"> <span className="font-bold text-black">Luz</span> is used by <span className="font-bold text-black">7.000+ teams</span> who've outgrown legal chaos.</p>
        </div>

        {/* Mobile: Marquee Scrollers */}
        <div className="md:hidden">
          {/* Row 1: Forward Marquee */}
          <div className="group flex overflow-hidden py-1 [--gap:0.5rem] [gap:var(--gap)] flex-row max-w-full [--duration:30s] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
                  key={i}
                >
                  {trustedData.slice(0, 7).map((item, idx) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={idx}
                      className="w-24 h-14 rounded-sm bg-background border-2 border-gray-200 p-2 flex items-center justify-center active:border-black transition-all"
                    >
                      <img
                        src={item.logo || "/placeholder.svg"}
                        alt={`Trusted branding ${idx}`}
                        className="w-full h-full object-contain grayscale"
                      />
                    </a>
                  ))}
                </div>
              ))}
          </div>

          {/* Row 2: Reverse Marquee */}
          <div className="group flex overflow-hidden py-1 [--gap:0.5rem] [gap:var(--gap)] flex-row max-w-full [--duration:35s] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row"
                  key={i}
                >
                  {trustedData.slice(7, 14).map((item, idx) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={idx}
                      className="w-24 h-14 rounded-sm bg-background border-2 border-gray-200 p-2 flex items-center justify-center active:border-black transition-all"
                    >
                      <img
                        src={item.logo || "/placeholder.svg"}
                        alt={`Trusted branding reverse ${idx}`}
                        className="w-full h-full object-contain grayscale"
                      />
                    </a>
                  ))}
                </div>
              ))}
          </div>
        </div>

        {/* Desktop: 7-column grid */}
        <div className="hidden md:grid grid-cols-7 gap-4">
          {trustedData.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="rounded-sm overflow-hidden bg-background border-2 border-gray-200 p-2 hover:border-black transition-all duration-300 group"
            >
              <img
                src={item.logo || "/placeholder.svg"}
                alt={`Trusted company ${index + 1}`}
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
