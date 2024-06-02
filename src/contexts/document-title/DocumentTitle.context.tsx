import React, { createContext, useContext, useEffect } from 'react';

type DocumentTitleContextType = (title: string) => void;

type DocumentTitleProviderProps = {
  children: React.ReactNode;
};

const DocumentTitleContext = createContext<DocumentTitleContextType | null>(null);

export const DocumentTitleProvider: React.FC<DocumentTitleProviderProps> = ({ children }) => {
  const setDocumentTitle = (title: string) => {
    document.title = title;
  };

  return <DocumentTitleContext.Provider value={setDocumentTitle}>{children}</DocumentTitleContext.Provider>;
};

export const useDocumentTitle = (title: string) => {
  const setDocumentTitle = useContext(DocumentTitleContext);

  useEffect(() => {
    if (setDocumentTitle) {
      setDocumentTitle(title);
    }
  }, [title, setDocumentTitle]);
};
