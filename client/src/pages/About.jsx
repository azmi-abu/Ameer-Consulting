import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import heroVideo from "../assets/hero-video.mp4";

function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar" || i18n.language === "he";
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setMuted(nextMuted);
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20 bg-primary/20 dark:bg-primary/10 scroll-mt-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-white/20 blur-3xl dark:bg-primary/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
            isRTL ? "lg:[direction:rtl]" : ""
          }`}
        >
          <div
            className={`order-1 ${isRTL ? "lg:order-2" : "lg:order-1"} flex justify-center`}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
              <div className="absolute -inset-4 rounded-[2.7rem] bg-primary/30 blur-3xl opacity-70" />

              <div className="relative rounded-[2.2rem] bg-[#0b0b0f] p-2 shadow-2xl border border-white/20 dark:border-white/10">
                <div className="relative rounded-[1.8rem] overflow-hidden bg-black">
                  <div className="aspect-[9/16] relative">
                    <video
                      ref={videoRef}
                      src={heroVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                      className="w-full h-full object-cover object-[50%_15%]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className="rounded-full bg-white/15 backdrop-blur-xl border border-white/20 px-3 py-1.5 text-white text-xs font-medium">
                        {t("brand")}
                      </div>

                      <button
                        type="button"
                        onClick={toggleSound}
                        className="pointer-events-auto rounded-full bg-black/40 backdrop-blur-xl border border-white/20 text-white w-11 h-11 flex items-center justify-center hover:bg-black/55 transition"
                        aria-label={muted ? "Unmute video" : "Mute video"}
                      >
                        {muted ? "🔇" : "🔊"}
                      </button>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="rounded-2xl bg-black/35 backdrop-blur-xl border border-white/15 px-4 py-3 text-white shadow-lg">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold">{t("about.title")}</p>
                            <p className="text-xs text-white/75">
                              {muted ? "Muted preview" : "Sound on"}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={toggleSound}
                            className="px-3 py-1.5 rounded-full bg-white text-gray-900 text-xs font-semibold hover:bg-white/90 transition"
                          >
                            {muted ? "Enable sound" : "Mute"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-1 h-16 rounded-full bg-white/10" />
                <div className="absolute top-24 -right-3 w-1 h-10 rounded-full bg-white/10" />
                <div className="absolute top-36 -right-3 w-1 h-14 rounded-full bg-white/10" />
              </div>
            </div>
          </div>

          <div
            className={`order-2 ${isRTL ? "lg:order-1" : "lg:order-2"} ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            <div className="max-w-xl mx-auto lg:mx-0">
              <div className="inline-flex rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-md border border-white/30 px-4 py-2 text-sm font-medium text-gray-800 dark:text-white">
                {t("brand")}
              </div>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {t("about.title")}
              </h1>

              <p className="mt-5 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-8">
                {t("about.description")}
              </p>

              <div className="mt-8 space-y-4">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-soft border border-white/50 dark:border-gray-700/50">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("mortgage.title")}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-6">
                    {t("about.feature1.desc")}
                  </p>
                </div>

                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-soft border border-white/50 dark:border-gray-700/50">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("business.title")}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-6">
                    {t("about.feature2.desc")}
                  </p>
                </div>

                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-soft border border-white/50 dark:border-gray-700/50">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("bank.title")}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-6">
                    {t("about.feature3.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;