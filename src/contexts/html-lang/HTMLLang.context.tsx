import React, { createContext, useContext, useEffect } from 'react';

type HtmlLangContextType = (lang: string) => void;

type HtmlLangProviderProps = {
  children: React.ReactNode;
};

const HtmlLangContext = createContext<HtmlLangContextType | null>(null);

export const HtmlLangProvider: React.FC<HtmlLangProviderProps> = ({ children }) => {
  const setHtmlLang = (lang: string) => {
    document.documentElement.lang = lang;
  };

  return <HtmlLangContext.Provider value={setHtmlLang}>{children}</HtmlLangContext.Provider>;
};

export const useHtmlLang = (lang: string) => {
  const setHtmlLang = useContext(HtmlLangContext);

  useEffect(() => {
    if (setHtmlLang) {
      setHtmlLang(lang);
    }
  }, [lang, setHtmlLang]);
};
