import React from "react";
import { Button, Badge } from "components";
import { MultiSelect, Option } from "react-multi-select-component";
import { useArticleContext } from "context";

export const Settings = () => {
  const { categories, sources, selectedCategories, setSelectedCategories } =
    useArticleContext();

  const handleCategoryChange = (selectedCategories: Option[]) => {
    setSelectedCategories(selectedCategories);
  };

  return (
    <div className="mx-auto max-w-6xl flex flex-col py-10">
      <h1 className="text-3xl font-bold">Settings</h1>

      {/* categories */}
      <div className="flex flex-col gap-3 mt-10">
        <h3 className="text-2xl">Category</h3>

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
          onChange={handleCategoryChange}
          labelledBy="Select"
          // valueRenderer={(selected, _options) => {

          // }}
        />
      </div>
    </div>
  );
};
