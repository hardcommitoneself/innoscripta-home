import React, { useState, useEffect, createContext, useContext } from "react";
import type { Article } from "types";

interface ArticleContextProps {
  articles: Article[];
  search: string;
  selectedCategories: number[];
  selectedSources: number[];
}

export const ArticleContext = createContext<ArticleContextProps>({
  articles: [],
  search: "",
  selectedCategories: [],
  selectedSources: [],
});

export const ArticleContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedSources, setSelectedSources] = useState<number[]>([]);

  useEffect(() => {
    // implement api call to fetch all articles
  }, []);

  return (
    <ArticleContext.Provider
      value={{ articles, search, selectedCategories, selectedSources }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => {
  return useContext(ArticleContext);
};
