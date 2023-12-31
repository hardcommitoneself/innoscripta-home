import React, { useState, useEffect, createContext, useContext } from "react";
import type { Article, Category, Source, Settings } from "types";
import { Option } from "react-multi-select-component";
import api from "utils/axios";

interface ArticleContextProps {
  articles: Article[];
  categories: Category[];
  sources: Source[];
  search: string;
  selectedCategories: number[];
  selectedSources: number[];
  settings: Settings;
  setSearch: (search: string) => void;
  setSelectedSources: (sources: Option[]) => void;
  setSelectedCategories: (categories: Option[]) => void;
  setSettings: (setting: Settings) => void;
}

export const ArticleContext = createContext<ArticleContextProps>({
  articles: [],
  categories: [],
  sources: [],
  search: "",
  selectedCategories: [],
  selectedSources: [],
  settings: { sources: [], categories: [] },
  setSearch: () => {},
  setSelectedSources: () => {},
  setSelectedCategories: () => {},
  setSettings: () => {},
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
  const [settings, setSettings] = useState<Settings>({
    sources: [],
    categories: [],
  });

  const handleSetSelectedCategories = (categories: Option[]) => {
    setSelectedCategories(categories.map((category) => category.value));
  };

  const handleSetSelectedSources = (sources: Option[]) => {
    setSelectedSources(sources.map((source) => source.value));
  };

  const handleSetSettings = (settings: Settings) => {
    setSettings(settings);

    api.post("/setting", settings);
  };

  const handleSetSearch = (search: string) => {
    setSearch(search);
  };

  useEffect(() => {
    api.get("/setting").then((res) => {
      const { categories, sources } = res.data.settings;

      setSettings({ categories, sources });
      setSelectedCategories(categories);
      setSelectedSources(sources);
    });
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      api
        .post("/news/articles/", {
          q: search,
          sources: selectedSources,
          categories: selectedCategories,
        })
        .then((res) => {
          const { articles } = res.data;
          setArticles(articles.data);
        });
      api.get("/news/sources/").then((res) => {
        const { sources } = res.data;
        setSources(sources.data);
      });

      api.get("/news/categories/").then((res) => {
        const { categories } = res.data;
        setCategories(categories.data);
      });
    }, 500);
    return () => clearTimeout(timerId);
  }, [search, selectedCategories, selectedSources]);

  return (
    <ArticleContext.Provider
      value={{
        articles,
        categories,
        sources,
        search,
        selectedCategories,
        selectedSources,
        settings,
        setSearch: handleSetSearch,
        setSelectedSources: handleSetSelectedSources,
        setSelectedCategories: handleSetSelectedCategories,
        setSettings: handleSetSettings,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => {
  return useContext(ArticleContext);
};
