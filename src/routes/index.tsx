import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import {
  Video,
  Share2,
  Globe,
  Palette,
  Megaphone,
  Camera,
  Mail,
  Star,
  Sparkles,
  Instagram,
  Linkedin,
  MessageCircle,
  Scissors,
} from "lucide-react";
import { SiMeta, SiWhatsapp, SiWordpress } from "react-icons/si";

import portrait from "@/assets/Creating_professional_personal_b_2K_202609081957.png";
import creativeCube from "@/assets/creative-cube.png";
import riadhImmobiliereLogo from "@/assets/logos/398394267_302079816113932_1430445711663388421_n (1).jpg";
import arabicBrandLogo from "@/assets/logos/438159962_122095358324320688_2812803422439248961_n.jpg";
import alineroLogo from "@/assets/logos/alinero-logo-mint.png";
import gateOfGamersLogo from "@/assets/logos/LOGO AVEC DESIGN-modified.png";
import farmRanchLogo from "@/assets/logos/LOGO FINAL 1-modified.png";
import pocteoAcademyLogo from "@/assets/logos/pocteo-academy-blue.png";
import circularBrandLogo from "@/assets/logos/Screenshot 2026-09-13 014235-modified.png";
import cowboyBrandLogo from "@/assets/logos/Screenshot 2026-09-13 014254-modified.png";
import eActLogo from "@/assets/logos/Screenshot 2026-09-13 014324-modified.png";
import kolyzLogo from "@/assets/logos/SPLASH SCREEN BLANC-modified.png";
import { MouseFollow } from "@/components/MouseFollow";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/language-context";
import {
  LogoAfterEffects,
  LogoPhotoshop,
  LogoIllustrator,
  LogoCanva,
  LogoChatGPT,
  LogoClaude,
  LogoHubSpot,
} from "@/components/BrandLogos";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    icon: Video,
    title: "Content Creation",
  },
  {
    icon: Share2,
    title: "Social Media Management",
  },
  {
    icon: Globe,
    title: "Website Creation",
  },
  {
    icon: Palette,
    title: "Logo & Brand Identity",
  },
  {
    icon: Megaphone,
    title: "Meta Ads Management",
  },
  {
    icon: Camera,
    title: "Photography",
  },
];

const tools = [
  { name: "After Effects", Icon: LogoAfterEffects, size: 108, color: "#9999ff" },
  { name: "WordPress", Icon: SiWordpress, size: 86, color: "#21759b" },
  { name: "Meta Ads", Icon: SiMeta, size: 98, color: "#0866ff" },
  { name: "HubSpot", Icon: LogoHubSpot, size: 94, color: "#ff7a59" },
  { name: "Photoshop", Icon: LogoPhotoshop, size: 116, color: "#31a8ff" },
  { name: "Illustrator", Icon: LogoIllustrator, size: 86, color: "#ff9a00" },
  { name: "Canva", Icon: LogoCanva, size: 108, color: "#00c4cc" },
  { name: "CapCut", Icon: Scissors, size: 90, color: "#d7e8fa" },
  { name: "ChatGPT", Icon: LogoChatGPT, size: 112, color: "#74aa9c" },
  { name: "Claude", Icon: LogoClaude, size: 94, color: "#d97757" },
];

const testimonials = [
  {
    quote:
      "Wael completely transformed our social media presence. Engagement went up within weeks and the content finally feels aligned with our brand.",
    name: "Amine Trabelsi",
    role: "E-commerce Business Owner",
    rating: 4,
  },
  {
    quote:
      "Working with Wael was a turning point for us. The Meta Ads campaigns brought real, measurable results and the creative direction was spot on every time.",
    name: "Yasmine Ben Salah",
    role: "Founder & CEO",
    rating: 5,
  },
  {
    quote:
      "Professional, fast, and genuinely creative. Our new logo and brand identity gave us a much more confident presence in front of clients.",
    name: "Seif Gharbi",
    role: "Brand Owner",
    rating: 4,
  },
];

const trustedLogos = [
  {
    image: riadhImmobiliereLogo,
    alt: "Riadh Immobiliere logo",
    needsWhiteBackground: true,
  },
  {
    image: arabicBrandLogo,
    alt: "Arabic brand logo",
    needsWhiteBackground: true,
  },
  {
    image: alineroLogo,
    alt: "Alinero logo",
    needsWhiteBackground: true,
    imagePadding: "p-1",
  },
  {
    image: gateOfGamersLogo,
    alt: "Gate of Gamers logo",
    needsWhiteBackground: false,
  },
  {
    image: farmRanchLogo,
    alt: "Farm Ranch logo",
    needsWhiteBackground: false,
  },
  {
    image: pocteoAcademyLogo,
    alt: "Pocteo Academy logo",
    needsWhiteBackground: true,
    imagePadding: "p-3",
  },
  {
    image: circularBrandLogo,
    alt: "Circular blue brand logo",
    needsWhiteBackground: false,
  },
  {
    image: cowboyBrandLogo,
    alt: "Farm Ranch cowboy logo",
    needsWhiteBackground: false,
  },
  {
    image: eActLogo,
    alt: "Eact logo",
    needsWhiteBackground: false,
  },
  {
    image: kolyzLogo,
    alt: "Kolyz logo",
    needsWhiteBackground: false,
  },
];

function useTaglineTypewriter(phrases: readonly string[]) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setPhraseIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [phrases]);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 70);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases]);

  return displayText;
}

function Index() {
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const displayText = useTaglineTypewriter(t.hero.phrases);

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsContactVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  const languageOptions = [
    { code: "en" as const, flag: "EN", label: t.language.english },
    { code: "fr" as const, flag: "FR", label: t.language.french },
  ];

  const whatsappLink = "https://wa.me/21625189464";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Wael Hamouda on WhatsApp"
        className={`floating-whatsapp ${isContactVisible ? "floating-whatsapp-hidden" : ""}`}
      >
        <SiWhatsapp size={28} aria-hidden="true" />
      </a>
      <div className="fixed top-5 right-5 z-50">
        <button
          type="button"
          aria-label={t.language.switch}
          aria-expanded={isLanguageMenuOpen}
          onClick={() => setIsLanguageMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card p-0 text-sm font-medium shadow-lg transition-colors hover:border-primary hover:bg-primary"
        >
          {language === "en" ? "EN" : "FR"}
        </button>
        {isLanguageMenuOpen && (
          <div className="absolute top-14 right-0 w-36 rounded-2xl border border-border bg-card p-1.5 shadow-xl">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => {
                  setLanguage(option.code);
                  setIsLanguageMenuOpen(false);
                }}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground ${language === option.code ? "bg-primary/15 text-primary" : "text-foreground"}`}
              >
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-medium"
                >
                  {option.flag}
                </span>
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden pt-4 sm:pt-6">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--lime), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="relative flex flex-col items-center text-center">
            {/* Hidden for now - remove hero-eyebrow-hidden to re-enable later. */}
            <p className="hero-eyebrow hero-eyebrow-hidden text-xs font-medium tracking-[0.35em] text-primary uppercase">
              {t.hero.eyebrow}
            </p>
            <h1 className="font-display hero-headline-font mt-6 text-[13vw] leading-[0.85] text-primary sm:text-[11vw] lg:text-[8.5vw]">
              DIGITAL
              <br />
              <span className="text-outline-lime">MARKETING</span>
              <br />
              SPECIALIST
            </h1>

            <div className="relative -mt-[22vw] w-full sm:-mt-[18vw] lg:-mt-[15vw]">
              <MouseFollow className="mx-auto w-full max-w-xl">
                <img
                  src={portrait}
                  alt={t.hero.portraitAlt}
                  width={1920}
                  height={1080}
                  loading="eager"
                  className="mx-auto w-full object-contain [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
                />
              </MouseFollow>
            </div>

            <div className="relative mt-10 flex flex-col items-center gap-8 pb-20 sm:mt-14">
              <p className="hero-tagline text-[19px] font-medium text-muted-foreground sm:text-[22px]">
                <span>{t.hero.taglineLead}</span>{" "}
                <span className="hero-tagline-rotating font-bold text-primary">
                  {displayText}
                  <span className="hero-tagline-cursor">|</span>
                </span>
              </p>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {t.hero.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-5 lg:gap-7">
          <Reveal className="about-copy text-center md:text-left">
            <div className="mb-3 flex items-center justify-center pl-2 md:justify-start md:pl-2">
              <p className="text-xs font-medium tracking-[0.35em] text-primary uppercase">{t.about.eyebrow}</p>
            </div>
            <h2 className="font-display mt-0 text-4xl leading-[0.96] sm:text-5xl">
              {t.about.headingLine1}
              <br />
              {t.about.headingLine2}
            </h2>
            <div className="mt-5 max-w-xl space-y-3 text-[19px] font-medium leading-[1.65] text-muted-foreground sm:text-[20px]">
              <p className="font-medium">{t.about.paragraph1}</p>
              <p className="font-medium">{t.about.paragraph2}</p>
            </div>
          </Reveal>
          <Reveal delay={120} className="about-visual relative flex min-h-[20rem] items-center justify-center md:min-h-[26rem]">
            <div className="about-glow" aria-hidden="true" />
            <div className="about-art-stage">
              <img
                src={creativeCube}
                alt={t.about.visualAlt}
                width={1120}
                height={1152}
                loading="lazy"
                className="about-dna relative z-10 w-full max-w-[22rem] object-contain sm:max-w-[26rem]"
              />
              <div className="about-ground-shadow" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.35em] text-primary uppercase">{t.services.eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl">{t.services.heading}</h2>
        </Reveal>
        <div className="services-grid mt-14">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 80}
              as="article"
              className="service-card"
            >
              <service.icon size={28} strokeWidth={2.2} aria-hidden="true" />
              <h3>{t.services.items[index]}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.35em] text-primary uppercase">{t.toolkit.eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl">{t.toolkit.heading}</h2>
        </Reveal>
        <div className="toolkit-stage" aria-label={t.toolkit.ariaLabel}>
          <svg className="toolkit-network" viewBox="0 0 900 360" fill="none" aria-hidden="true">
            <path d="M70 130L205 75L350 150L490 76L638 147L820 92M105 270L250 205L390 278L540 208L720 275L830 205M205 75L250 205M350 150L390 278M490 76L540 208M638 147L720 275" />
            <circle cx="70" cy="130" r="2" />
            <circle cx="205" cy="75" r="2" />
            <circle cx="350" cy="150" r="2" />
            <circle cx="490" cy="76" r="2" />
            <circle cx="638" cy="147" r="2" />
            <circle cx="820" cy="92" r="2" />
            <circle cx="105" cy="270" r="2" />
            <circle cx="250" cy="205" r="2" />
            <circle cx="390" cy="278" r="2" />
            <circle cx="540" cy="208" r="2" />
            <circle cx="720" cy="275" r="2" />
            <circle cx="830" cy="205" r="2" />
          </svg>
          <ul className="toolkit-grid">
          {tools.map((t, i) => (
            <li
              key={t.name}
              className="tool-bubble group"
              style={{
                "--tool-color": t.color,
                "--tool-delay": `${i * -0.65}s`,
                "--tool-offset": `${[0.4, -1.2, 1.1, -0.5, 1.6, -1, 0.8, -1.4, 1.2, -0.2][i]}rem`,
              } as CSSProperties}
            >
              <div className="tool-bubble-core" style={{ width: t.size, height: t.size }}>
                <t.Icon className="tool-bubble-icon" size={t.size * 0.4} aria-hidden />
                <span className="sr-only">{t.name}</span>
              </div>
              <span className="tool-bubble-label">
                {t.name}
              </span>
            </li>
          ))}
          </ul>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-20">
        <Reveal className="px-6 text-center">
          <h2 className="font-display text-4xl sm:text-5xl">{t.trusted.heading}</h2>
        </Reveal>
        <div className="marquee group mt-10">
          <div className="marquee-track group-hover:[animation-play-state:paused]">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="marquee-group" aria-hidden={dup === 1}>
                {trustedLogos.map((logo) => (
                  <div
                    key={logo.alt + logo.image}
                    className={`flex h-44 w-44 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border text-xs tracking-widest text-muted-foreground uppercase ${logo.needsWhiteBackground ? "bg-white" : "bg-transparent"}`}
                  >
                    <img
                      src={logo.image}
                      alt={logo.alt}
                      width={512}
                      height={512}
                      loading="lazy"
                      className={`h-full w-full rounded-full object-contain ${logo.needsWhiteBackground ? logo.imagePadding ?? "p-6" : "p-0"}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="mx-auto max-w-[1280px] px-6 py-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.35em] text-primary uppercase">{t.testimonials.eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl">{t.testimonials.heading}</h2>
        </Reveal>
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3 md:gap-5 lg:gap-7">
          {testimonials.map((testimonial, i) => {
            const featured = i === 1;
            return (
              <Reveal
                key={i}
                delay={i * 100}
                as="article"
                className={
                  featured
                    ? "relative z-10 h-full rounded-3xl bg-primary p-10 md:p-9 lg:p-12 text-primary-foreground shadow-[0_25px_60px_rgba(0,0,0,0.45)] md:scale-[1.08]"
                    : "h-full rounded-3xl border border-border bg-card p-10 md:p-8 lg:p-10 md:scale-[1.02]"
                }
              >
                <div className={`flex gap-1 ${featured ? "text-primary-foreground" : "text-primary"}`}>
                  {Array.from({ length: testimonial.rating }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" />
                  ))}
                </div>
                <p
                  className={`mt-7 text-[15px] font-medium leading-relaxed ${featured ? "text-primary-foreground/90" : "text-muted-foreground"}`}
                >
                  "{t.testimonials.quotes[i]}"
                </p>
                <div
                  className={`mt-7 border-t pt-5 ${featured ? "border-primary-foreground/25" : "border-border"}`}
                >
                  <p className="font-sans text-base font-medium tracking-[-0.02em]">{testimonial.name}</p>
                  <p
                    className={`text-sm font-medium ${featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}
                  >
                    {t.testimonials.roles[i]}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-charcoal px-6 py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl leading-[0.95] sm:text-6xl">
              {t.contact.headingLine1}
              <br />
              <span className="text-primary">{t.contact.headingLine2}</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:hamoudawael08@gmail.com?subject=${encodeURIComponent(t.contact.emailSubject)}`}
              aria-label="Email Wael Hamouda"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-primary/40 bg-card px-8 py-5 text-sm font-medium transition-colors hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <Mail className="text-primary transition-colors group-hover:text-secondary-foreground" size={20} />
              hamoudawael08@gmail.com
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Wael Hamouda on WhatsApp"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-primary/40 bg-card px-8 py-5 text-sm font-medium transition-colors hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <SiWhatsapp className="text-primary transition-colors group-hover:text-secondary-foreground" size={20} aria-hidden="true" />
              +216 25 189 464
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <p className="min-w-0 truncate text-xs font-medium text-muted-foreground">
            © {new Date().getFullYear()} Wael Hamouda. {t.footer.rights}
          </p>
          <div className="flex shrink-0 items-center gap-5 text-muted-foreground">
            <a href="#" aria-label={t.footer.instagram} className="transition-colors hover:text-primary">
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/wael-hamouda-8543201b8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.linkedin}
              className="transition-colors hover:text-primary"
            >
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label={t.footer.whatsapp} className="transition-colors hover:text-primary">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
