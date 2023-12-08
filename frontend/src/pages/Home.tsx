import React from "react";
import { ArticleCard, Input, Badge } from "components";
import { useArticleContext } from "context";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MultiSelect } from "react-multi-select-component";
import stc from "string-to-color";

export const Home = () => {
  const {
    articles,
    categories,
    sources,
    search,
    selectedCategories,
    selectedSources,
    setSearch,
    setSelectedCategories,
    setSelectedSources,
  } = useArticleContext();

  return (
    <div className="flex flex-col py-10">
      {/* search & filter */}
      <div className="flex flex-col gap-2">
        <Input
          className="min-w-[300px] !rounded-full"
          placeholder="Search article..."
          icon={<MagnifyingGlassIcon />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* filter */}
        <div className="grid grid-cols-2 gap-4">
          <MultiSelect
            options={categories.map((category) => {
              return {
                label: category.name,
                value: category.id,
              };
            })}
            value={selectedCategories.map((category) => {
              return {
                label: categories.find((c) => c.id === category)?.name ?? "",
                value: category,
              };
            })}
            onChange={setSelectedCategories}
            labelledBy="Select"
            valueRenderer={(selected, _options) => {
              return (
                <div className="flex items-center gap-2">
                  {selected.map((option) => (
                    <Badge
                      key={option.value}
                      bgColor={stc(option.label)}
                      className="text-xs h-5"
                    >
                      {option.label}
                    </Badge>
                  ))}
                </div>
              );
            }}
          />

          <MultiSelect
            options={sources.map((source) => {
              return {
                label: source.name,
                value: source.id,
              };
            })}
            value={selectedSources.map((source) => {
              return {
                label: sources.find((c) => c.id === source)?.name ?? "",
                value: source,
              };
            })}
            onChange={setSelectedSources}
            labelledBy="Select"
            valueRenderer={(selected, _options) => {
              return (
                <div className="flex items-center gap-2">
                  {selected.map((option) => (
                    <Badge
                      key={option.value}
                      bgColor={stc(option.label)}
                      className="text-xs h-5"
                    >
                      {option.label}
                    </Badge>
                  ))}
                </div>
              );
            }}
          />
        </div>
      </div>

      <div className="flex gap-10 mt-5">
        <div className="flex gap-5 overflow-y-auto max-h-[60vh]">
          {/* blog list */}
          <div className="flex flex-col gap-4 mr-1">
            {articles.map((article, index) => (
              <div key={index}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
