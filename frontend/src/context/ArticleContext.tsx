import React, { useState, useEffect, createContext, useContext } from "react";
import type { Article, Category, Source } from "types";

interface ArticleContextProps {
  articles: Article[];
  categories: Category[];
  sources: Source[];
  search: string;
  selectedCategories: number[];
  selectedSources: number[];
}

export const ArticleContext = createContext<ArticleContextProps>({
  articles: [],
  categories: [],
  sources: [],
  search: "",
  selectedCategories: [],
  selectedSources: [],
});

export const ArticleContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [sources, setSources] = useState<Source[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedSources, setSelectedSources] = useState<number[]>([]);

  useEffect(() => {
    // implement api call to fetch all articles, categories, sources
  }, []);

  return (
    <ArticleContext.Provider
      value={{
        articles,
        categories,
        sources,
        search,
        selectedCategories,
        selectedSources,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => {
  return useContext(ArticleContext);
};
