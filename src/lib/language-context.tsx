import { createContext, useContext, useState, type ReactNode } from "react";

import { translations, type Language, type Translation } from "./translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  translate: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];
  const translate = (key: string) => {
    const value = key.split(".").reduce<unknown>((current, part) => {
      if (typeof current !== "object" || current === null) return undefined;
      return (current as Record<string, unknown>)[part];
    }, t);

    if (typeof value !== "string") {
      throw new Error(`Translation key does not resolve to a string: ${key}`);
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
