"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 870 870" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0 C26.94909849 -0.65331148 51.07607722 5.70341472 72.6796875 22.15625 C73.6696875 22.81625 74.6596875 23.47625 75.6796875 24.15625 C75.6796875 24.81625 75.6796875 25.47625 75.6796875 26.15625 C76.25203125 26.38828125 76.824375 26.6203125 77.4140625 26.859375 C91.30871598 34.8128663 99.58376784 57.89413539 103.8671875 72.09375 C113.90430234 109.20679156 107.06182805 147.54125448 94.6796875 183.15625 C94.3604834 184.08453613 94.0412793 185.01282227 93.71240234 185.96923828 C87.58547173 203.59436527 79.8210722 220.39531989 71.6796875 237.15625 C71.36864075 237.797901 71.05759399 238.439552 70.73712158 239.10064697 C62.78863883 255.48137951 54.42408309 271.53818508 45.31103516 287.30810547 C43.01881772 291.31005228 40.78854526 295.34547854 38.55322266 299.37939453 C32.68942375 309.94929734 26.61430651 320.3661846 20.3581543 330.70825195 C14.56654108 340.29558326 8.97099923 349.98956124 3.39453125 359.703125 C0.90530573 364.0371206 -1.60251357 368.35943873 -4.12890625 372.671875 C-4.74459473 373.72310547 -5.3602832 374.77433594 -5.99462891 375.85742188 C-7.19591372 377.90465023 -8.3999424 379.95027141 -9.60693359 381.99414062 C-11.9846703 386.04141011 -14.33538861 390.06125573 -16.36328125 394.296875 C-19.6898004 401.2185633 -22.45313756 404.44472844 -29.16015625 408.171875 C-57.65431722 426.06437658 -75.18015972 460.67686053 -83.3203125 492.15625 C-83.63742187 493.36667969 -83.95453125 494.57710937 -84.28125 495.82421875 C-88.61153374 514.11002088 -89.31452002 533.18979035 -87.5703125 551.84375 C-87.4779834 552.97611084 -87.4779834 552.97611084 -87.38378906 554.13134766 C-86.86331425 558.91172526 -85.87776818 561.86112468 -82.3203125 565.15625 C-78.70481399 566.22960112 -75.289775 565.57883622 -71.8828125 564.09375 C-69.57000106 561.22586381 -69.50803928 558.7856345 -69.3203125 555.15625 C-69.47653076 554.39948975 -69.63274902 553.64272949 -69.79370117 552.86303711 C-76.16039497 520.13817197 -66.39663115 481.25523305 -48.29418945 453.78417969 C-35.03422975 434.37936061 -17.63129623 418.65711034 6.09375 413.81640625 C33.80886181 409.23014164 60.9914081 416.14099396 83.6796875 432.15625 C90.39265943 436.97207769 90.39265943 436.97207769 92.6796875 439.15625 C92.6796875 439.81625 92.6796875 440.47625 92.6796875 441.15625 C93.3396875 441.15625 93.9996875 441.15625 94.6796875 441.15625 C94.6796875 441.81625 94.6796875 442.47625 94.6796875 443.15625 C95.6696875 443.48625 96.6596875 443.81625 97.6796875 444.15625 C124.67239517 472.55821551 137.22044172 512.19493863 142.6796875 550.15625 C142.85701416 551.32333496 143.03434082 552.49041992 143.21704102 553.69287109 C144.89718717 565.57212804 145.01872631 577.41018234 144.99536133 589.39208984 C144.99221188 592.75521634 145.01571315 596.11745082 145.04101562 599.48046875 C145.0834019 613.92956082 144.00110173 627.8961074 141.6796875 642.15625 C141.48624756 643.35282227 141.29280762 644.54939453 141.09350586 645.78222656 C140.61159257 648.52552988 140.07698607 651.24570114 139.4921875 653.96875 C139.28352051 654.94408691 139.07485352 655.91942383 138.85986328 656.92431641 C129.07369584 700.86777062 109.64488723 740.46290107 78.6796875 773.15625 C78.18339844 773.68653809 77.68710937 774.21682617 77.17578125 774.76318359 C49.84440217 803.81588034 13.85301321 819.82213718 -25.3203125 825.15625 C-26.29097656 825.28902344 -27.26164063 825.42179688 -28.26171875 825.55859375 C-70.85238763 830.30534005 -117.73621719 821.0023425 -152.3203125 795.15625 C-153.1453125 794.55554688 -153.9703125 793.95484375 -154.8203125 793.3359375 C-174.31574914 778.52197084 -187.84141473 759.50709013 -199.3203125 738.15625 C-199.68753418 737.47401367 -200.05475586 736.79177734 -200.43310547 736.08886719 C-223.02313524 693.24314609 -228.29234442 641.84254724 -229.3203125 594.15625 C-229.34899414 592.8976416 -229.37767578 591.6390332 -229.40722656 590.34228516 C-231.44753256 485.11156648 -216.13415591 376.06239547 -186.3203125 252.15625 C-185.95893937 250.76107937 -185.59761129 249.36589706 -185.23632812 247.97070312 C-165.75968592 173.05418572 -138.78582039 89.20075497 -52.6953125 15.09375 C-36.74828169 6.0026353 -18.2972747 0.86104822 0 0 Z"
        fill="currentColor"
        transform="translate(477.3203125,29.84375)"
      />
    </svg>
  )
}

export default function TransformationSection() {
  const [isFixed, setIsFixed] = useState(false)

  return (
    <section className="w-full py-12 px-3 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-1">
          <h2 className="text-xl font-bold md:text-4xl text-balance">
            <span className="relative inline-block">
              <span className="relative z-10">Get clarity. Fast.</span>
              <svg
                className="absolute bottom-0 left-0 w-full h-[6px] md:h-[10px] text-primary select-none pointer-events-none"
                viewBox="0 0 200 40"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M5 20c40-5 90-5 130 2c35 5 55 5 65-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="28"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </svg>
            </span>{" "}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No heavy setup. No months of onboarding. Just three steps from PDF chaos to controlled, searchable agreements.
          </p>
        </div>

        {/* Chaos Visual Container */}
        <div className="relative max-w-7xl mx-auto min-h-[400px] md:min-h-[550px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isFixed ? (
              <motion.div
                key="chaos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-[400px] md:h-[500px]"
              >
                {/* Image Placeholder 3 - Center Biggest */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 w-88 md:w-[36rem] bg-white rounded-md shadow-xl border border-gray-200 overflow-hidden z-20"
                >
                  <img src="https://cdn.prod.website-files.com/66b1de5cb0d672ddaa14ef22/690dc9afa7b83318570a6d32_Monday.com.png" alt="Main chaotic document" className="w-full h-64 md:h-80 object-cover" />
                </motion.div>

                {/* Image Placeholder 1 - Left 1 (rotated little left) */}
                <motion.div
                  initial={{ opacity: 0, x: -20, rotate: -8 }}
                  animate={{ opacity: 1, x: 0, rotate: -5 }}
                  transition={{ delay: 0.1 }}
                  className="absolute top-0 md:top-10 left-0 md:left-1/8 w-88 md:w-[32rem] bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-10"
                >
                  <img src="https://cdnb.ganttpro.com/uploads/2021/11/wrike-for-small-business-project-management.png" alt="Chaos document 1" className="w-full h-64 md:h-80 object-cover" />
                </motion.div>

                {/* Image Placeholder 4 - Left 2 (rotated right) */}
                <motion.div
                  initial={{ opacity: 0, x: -25, rotate: 2 }}
                  animate={{ opacity: 1, x: 0, rotate: 10 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-0 md:bottom-8 left-0 md:left-12 w-76 md:w-[28rem] bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-25"
                >
                  <img src="https://sanity-images.imgix.net/production/790addddeddb4b254864c57b547c780765f28232-1096x720.png?w=1096&auto=format%2Ccompress" alt="Chaos document 2" className="w-full h-52 md:h-72 object-cover" />
                </motion.div>

                {/* Image Placeholder 2 - Right 1 (rotated just little left) */}
                <motion.div
                  initial={{ opacity: 0, x: 10, rotate: 0 }}
                  animate={{ opacity: 1, x: 0, rotate: -1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-2 md:top-8 right-0 md:right-1/8 w-80 md:w-[28rem] bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-15"
                >
                  <img src="https://sanity-images.imgix.net/production/790addddeddb4b254864c57b547c780765f28232-1096x720.png?w=1096&auto=format%2Ccompress" alt="Chaos document 3" className="w-full h-56 md:h-76 object-cover" />
                </motion.div>

                {/* Image Placeholder 5 - Right 2 (rotated a lot more to the left) */}
                <motion.div
                  initial={{ opacity: 0, x: 5, rotate: -5 }}
                  animate={{ opacity: 1, x: 0, rotate: -3 }}
                  transition={{ delay: 0.45 }}
                  className="absolute bottom-2 md:bottom-16 right-0 md:right-10 w-80 md:w-[28rem] bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-20"
                >
                  <img src="https://cdnb.ganttpro.com/uploads/2021/11/asana-for-small-business-project-management.png" alt="Chaos document 4" className="w-full h-56 md:h-[17rem] object-cover" />
                </motion.div>

                {/* Card 1 - Slack notification (Left) */}
                <motion.div
                  initial={{ opacity: 0, rotate: -2 }}
                  animate={{ opacity: 1, rotate: -5 }}
                  transition={{ delay: 0.35 }}
                  className="absolute top-1/3 left-0 md:left-8 -translate-y-1/2 w-72 bg-white rounded-md shadow-lg border border-gray-200 px-2 py-2 z-30"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                      <Logo className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-gray-500 line-clamp-1">New message in <span className="font-medium text-gray-700">#reminders</span></p>
                      <p className="text-xs md:text-sm font-medium text-gray-900">fmSMS</p>
                      <p className="text-[10px] md:text-xs text-gray-500">received</p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2 - Email notification (Right) */}
                <motion.div
                  initial={{ opacity: 0, rotate: 2 }}
                  animate={{ opacity: 1, rotate: 5 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-1/2 right-0 md:right-32 -translate-y-1/2 w-56 md:w-72 bg-white rounded-md shadow-lg border border-gray-200 px-2 py-2 z-30"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
                      <Logo className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-medium text-gray-900">Anna Huber</p>
                      <p className="text-[10px] md:text-xs text-gray-500">Contract update needed?</p>
                    </div>
                  </div>
                </motion.div>

                {/* Yellow Sticky Note - Top Right */}
                <motion.div
                  initial={{ opacity: 0, rotate: -8 }}
                  animate={{ opacity: 1, rotate: -10 }}
                  transition={{ delay: 0.25 }}
                  className="absolute top-0 md:top-2 right-10 md:right-36 w-36 md:w-48 h-28 md:h-40 z-40 font-(family-name:--font-caveat)"
                >
                  {/* Long perspective shadow connected to top corners */}
<div 
  className="absolute top-0 left-0 w-[300%] h-[150%]" // Wider container to allow drawing to the right
  style={{
    background: 'linear-gradient(to bottom right, rgba(0,0,0,0.18), rgba(0,0,0,0.1))',
    clipPath: 'polygon(0% 0%, 33.33% 0%, 43% 100%, 10% 100%)', // Reduced the rightward skew
    zIndex: -1,
    filter: 'blur(10px)',
    maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)', // Tiny distance fade
  }}
/>
                  {/* Card content */}
                  <div className="relative w-full h-full bg-[#fdec44] flex flex-col overflow-hidden border border-black/5">
                    <div className="h-3 md:h-6 bg-[#eadf2c] w-full" />
                    <div className="flex-1 flex items-start justify-start p-3 md:p-5">
                      <p className="text-xl md:text-2xl text-gray-800 leading-tight text-left">Why is this so slow?</p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button - Center */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                >
                  <Button
                    onClick={() => setIsFixed(true)}
                    className="h-10 md:h-12 px-6 md:px-8 text-sm md:text-base font-bold bg-black hover:bg-black/90 text-white rounded-full transition-all group cursor-pointer"
                  >
                    Click to fix the chaos
                    <Sparkles className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform text-primary" />
                  </Button>
                </motion.div>

                {/* Bottom Right Handwritten Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -bottom-12 right-5 md:right-32 flex flex-col items-center text-center font-(family-name:--font-caveat)"
                >
                  <div className="relative w-full">
                    <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto" viewBox="0 0 100 100" fill="none">
                      <path
                        d="M50 80 C 60 60, 50 30, 20 20"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M28 15 L 18 20 L 25 28"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <p className="text-sm md:text-lg text-gray-500 leading-tight -rotate-12">
                    Don't be shy, click the button.<br />
                    We know you want it.
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="clarity"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="relative w-full h-full flex items-center justify-center min-h-[400px] md:min-h-[550px]"
              >
                {/* Clean Dashboard Preview */}
                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs text-gray-500 ml-2">LUZ Pro Dashboard</span>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">All Agreements Organized</h3>
                        <p className="text-sm text-gray-500">32 contracts • 0 issues • 100% visibility</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Active", count: "24", color: "bg-green-100 text-green-700" },
                        { label: "Pending", count: "5", color: "bg-yellow-100 text-yellow-700" },
                        { label: "Expiring", count: "3", color: "bg-orange-100 text-orange-700" },
                      ].map((stat) => (
                        <div key={stat.label} className={`${stat.color} rounded-lg p-4 text-center`}>
                          <div className="text-2xl font-bold">{stat.count}</div>
                          <div className="text-xs font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reset Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  onClick={() => setIsFixed(false)}
                  className="absolute bottom-0 right-4 text-sm text-gray-400 hover:text-gray-600 underline cursor-pointer"
                >
                  ← Back to chaos
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
