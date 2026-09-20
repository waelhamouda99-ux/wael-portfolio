export const translations = {
  en: {
    language: {
      english: "English",
      french: "French",
      switch: "Switch language",
    },
    hero: {
      eyebrow: "Brand Content Strategist",
      taglineLead: "Helping brands reach their audience through",
      phrases: ["smart content", "bold strategy", "sharp visuals", "social growth", "paid ads", "brand identity"],
      cta: "Let's Work Together",
      portraitAlt: "Portrait of Wael Hamouda, digital marketing specialist",
    },
    about: {
      eyebrow: "About",
      headingLine1: "Turning Strategy",
      headingLine2: "Into Stories",
      paragraph1:
        "Most brands post because they have to, not because it's working. Inconsistent content, no real strategy, and ad spend that disappears without results. Sound familiar?",
      paragraph2:
        "I help brands fix that. Content, social media, and Meta Ads built around a plan, not guesswork, backed by a team of photographers and designers who make sure every piece actually looks like it belongs to your brand.",
      visualAlt: "Creative design and marketing tools represented as colorful cubes",
    },
    services: {
      eyebrow: "Services",
      heading: "Where I Add Value",
      items: [
        "Content Creation",
        "Social Media Management",
        "Website Creation",
        "Logo & Brand Identity",
        "Meta Ads Management",
        "Photography",
      ],
    },
    toolkit: {
      eyebrow: "Toolkit",
      heading: "The Tools Behind The Magic",
      ariaLabel: "Tools I work with",
    },
    trusted: {
      heading: "Trusted By",
    },
    testimonials: {
      eyebrow: "Testimonials",
      heading: "The Work I'm Proud Of",
      quotes: [
        "Wael completely transformed our social media presence. Engagement went up within weeks and the content finally feels aligned with our brand.",
        "Working with Wael was a turning point for us. The Meta Ads campaigns brought real, measurable results and the creative direction was spot on every time.",
        "Professional, fast, and genuinely creative. Our new logo and brand identity gave us a much more confident presence in front of clients.",
      ],
      roles: ["E-commerce Business Owner", "Founder & CEO", "Brand Owner"],
    },
    contact: {
      headingLine1: "Let's Create",
      headingLine2: "Something Great",
      emailSubject: "Let's Work Together",
    },
    footer: {
      rights: "All rights reserved.",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
    },
  },
  fr: {
    language: {
      english: "Anglais",
      french: "Français",
      switch: "Changer de langue",
    },
    hero: {
      eyebrow: "Stratège en contenu de marque",
      taglineLead: "J'aide les marques à toucher leur audience grâce à",
      phrases: ["un contenu pertinent", "une stratégie audacieuse", "des visuels percutants", "une croissance sociale", "des publicités ciblées", "une identité de marque forte"],
      cta: "Travaillons ensemble",
      portraitAlt: "Portrait de Wael Hamouda, spécialiste en marketing digital",
    },
    about: {
      eyebrow: "À propos",
      headingLine1: "Transformer la stratégie",
      headingLine2: "en histoires",
      paragraph1:
        "La plupart des marques publient parce qu'elles y sont obligées, pas parce que ça fonctionne. Contenu incohérent, aucune vraie stratégie, et un budget pub qui disparaît sans résultats. Ça vous parle ?",
      paragraph2:
        "J'aide les marques à corriger ça. Du contenu, des réseaux sociaux et des Meta Ads pensés selon un vrai plan, pas au hasard, avec le soutien d'une équipe de photographes et de designers qui veillent à ce que chaque élément corresponde vraiment à votre marque.",
      visualAlt: "Design créatif et outils marketing représentés par des cubes colorés",
    },
    services: {
      eyebrow: "Services",
      heading: "Là Où J'apporte De La Valeur",
      items: [
        "Création de contenu",
        "Gestion des réseaux sociaux",
        "Création de sites web",
        "Logo et identité de marque",
        "Gestion des publicités Meta",
        "Photographie",
      ],
    },
    toolkit: {
      eyebrow: "Outils",
      heading: "Les Outils Derrière La Magie",
      ariaLabel: "Les outils que j'utilise",
    },
    trusted: {
      heading: "Ils me font confiance",
    },
    testimonials: {
      eyebrow: "Témoignages",
      heading: "Le Travail Dont Je Suis Fier",
      quotes: [
        "Wael a complètement transformé notre présence sur les réseaux sociaux. L'engagement a progressé en quelques semaines et le contenu reflète enfin notre marque.",
        "Travailler avec Wael a marqué un véritable tournant pour nous. Les campagnes Meta Ads ont généré des résultats concrets et mesurables, avec une direction créative toujours pertinente.",
        "Professionnel, rapide et vraiment créatif. Notre nouveau logo et notre identité de marque nous donnent une présence bien plus assurée auprès de nos clients.",
      ],
      roles: ["Propriétaire d'une activité e-commerce", "Fondateur et directeur général", "Propriétaire de marque"],
    },
    contact: {
      headingLine1: "Créons",
      headingLine2: "quelque chose de grand",
      emailSubject: "Travaillons ensemble",
    },
    footer: {
      rights: "Tous droits réservés.",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type Translation = (typeof translations)[Language];
