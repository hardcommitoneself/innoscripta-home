import React, { useState, useEffect, createContext, useContext } from "react";
import type { Article, Category, Source } from "types";
import { Option } from "react-multi-select-component";

interface ArticleContextProps {
  articles: Article[];
  categories: Category[];
  sources: Source[];
  search: string;
  selectedCategories: number[];
  selectedSources: number[];
  setSelectedCategories: (categories: Option[]) => void;
}

export const ArticleContext = createContext<ArticleContextProps>({
  articles: [],
  categories: [],
  sources: [],
  search: "",
  selectedCategories: [],
  selectedSources: [],
  setSelectedCategories: () => {},
});

export const ArticleContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      name: "A",
    },
    {
      id: 2,
      name: "B",
    },
    {
      id: 3,
      name: "C",
    },
  ]);
  const [sources, setSources] = useState<Source[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedSources, setSelectedSources] = useState<number[]>([]);

  const handleSetSelectedCategories = (categories: Option[]) => {
    setSelectedCategories(categories.map((category) => category.value));
  };

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
        setSelectedCategories: handleSetSelectedCategories,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => {
  return useContext(ArticleContext);
};
