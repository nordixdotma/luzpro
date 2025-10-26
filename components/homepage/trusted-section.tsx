"use client"

export default function TrustedSection() {
  // 14 company/brand images with black filter
  const trustedImages = [
    "https://fynk.com/images/logos/mono/bridgemaker.png",
    "https://fynk.com/images/logos/mono/triumph.png",
    "https://fynk.com/images/logos/mono/falken.png",
    "https://fynk.com/images/logos/mono/bbhotels.png",
    "https://fynk.com/images/logos/mono/bridgemaker.png",
    "https://fynk.com/images/logos/mono/eliso.png",
    "https://fynk.com/images/logos/mono/oekostrom.png",
    "https://fynk.com/images/logos/mono/falken.png",
    "https://fynk.com/images/logos/mono/eliso.png",
    "https://fynk.com/images/logos/mono/bridgemaker.png",
    "https://fynk.com/images/logos/mono/eliso.png",
    "https://fynk.com/images/logos/mono/oekostrom.png",
    "https://fynk.com/images/logos/mono/maxenergy.png",
    "https://fynk.com/images/logos/mono/datarade.png",
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-black/50 font-bold"> <span className="font-bold text-black">Luz</span> is used by <span className="font-bold text-black">7.000+ teams</span> who've outgrown legal chaos.</p>
        </div>

        {/* 7-column grid with 14 images and black filter */}
        <div className="grid grid-cols-7 gap-4">
          {trustedImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden bg-background border-2 border-gray/20 p-4">
              <img
                src={image || "/placeholder.svg"}
                alt={`Trusted company ${index + 1}`}
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
