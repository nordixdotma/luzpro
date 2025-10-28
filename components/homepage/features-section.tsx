"use client"

import { useState } from "react"

const features = [
  {
    id: 1,
    category: "Foundation",
    title: "One hub for every agreement that matters.",
    description: "Forget inbox hunts and folder chaos. Centralize every agreement in one secure, searchable place.",
    bgColor: "bg-[#a3e3fb]",
    textColor: "text-gray-900",
  },
  {
    id: 2,
    category: "Efficiency",
    title: "Less admin. More action",
    description:
      "Draft faster, review with AI, sign without bottlenecks. Kill the red tape and free up your team's time.",
    bgColor: "bg-[#ffd8ad]",
    textColor: "text-gray-900",
  },
  {
    id: 3,
    category: "Control & Compliance",
    title: "Stop risks before they stop you.",
    description: "Automated tracking, alerts and audit-ready logs. Zero missed renewals. Zero ugly surprises.",
    bgColor: "bg-[#fff3a5]",
    textColor: "text-gray-900",
  },
  {
    id: 4,
    category: "Business enablement",
    title: "Turn agreements into insights.",
    description: "Spot spend, forecast obligations, negotiate smarter, all powered by AI-extracted data.",
    bgColor: "bg-[#dec8fd]",
    textColor: "text-gray-900",
  },
  {
    id: 5,
    category: "Strategic confidence",
    title: "Know your business is safe to move.",
    description:
      "Total visibility, no hidden liabilities, faster decisions at the top. Agreements stop being blockers and start being an engine for growth.",
    bgColor: "bg-[#bef6c7]",
    textColor: "text-gray-900",
  },
]

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(1)

  const currentFeature = features.find((f) => f.id === activeFeature) || features[0]

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFeature === feature.id ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-gray-900 text-xs font-bold">
                {feature.id}
              </span>
              <span>{feature.category}</span>
            </button>
          ))}
        </div>

        {/* Feature Content */}
        <div
          className={`${currentFeature.bgColor} ${currentFeature.textColor} rounded-3xl overflow-hidden transition-all duration-500`}
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
                  {currentFeature.category}
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {currentFeature.title}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed opacity-90">{currentFeature.description}</p>
              </div>
            </div>

            {/* Right Content - Document Mockup */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Browser Chrome */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-500">Arbeitsvertrag - fynk</div>
                </div>

                {/* Document Content */}
                <div className="p-6 space-y-4 bg-white">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Arbeitsvertrag</h3>
                      <p className="text-sm text-gray-500 mt-1">Contract</p>
                    </div>
                    <div className="text-right">
                      <svg className="w-12 h-12 text-indigo-600" viewBox="0 0 48 48" fill="currentColor">
                        <path d="M24 4L8 12v12c0 10 6.8 19.4 16 22 9.2-2.6 16-12 16-22V12L24 4z" />
                      </svg>
                      <p className="text-xs font-semibold text-gray-900 mt-1">fynk</p>
                    </div>
                  </div>

                  {/* Document Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Date:</span>
                      <span className="text-gray-900 font-medium">Düsseldorf, 01.05.2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Between:</span>
                      <span className="text-gray-900 font-medium">Arbeitgeber GmbH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">And:</span>
                      <span className="text-gray-900 font-medium">Max Mustermann</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2">
                      <span className="font-semibold text-gray-700">§ 1. Aufgabengebiet und Arbeitsort</span>
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Der Arbeitnehmer wird als [Job Title] eingestellt. Sein Tätigkeitsbereich umfasst die Bereiche
                      [Details]. Der Arbeitgeber behält sich vor, dem Arbeitnehmer auch andere Aufgaben zu übertragen,
                      die seinen Fähigkeiten entsprechen.
                    </p>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs text-gray-500 mb-2">
                      <span className="font-semibold text-gray-700">§ 2. Vergütung und Arbeitszeit</span>
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Der Arbeitnehmer erhält eine monatliche Bruttovergütung in Höhe von [Amount]. Die regelmäßige
                      wöchentliche Arbeitszeit beträgt [Hours] Stunden...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
