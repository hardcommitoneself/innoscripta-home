import React from "react";
import { Badge } from "components";
import { MultiSelect } from "react-multi-select-component";
import { useArticleContext } from "context";
import stc from "string-to-color";
import { Option } from "react-multi-select-component";

export const Settings = () => {
  const { categories, sources, settings, setSettings } = useArticleContext();

  const handleSetSourceSettings = (sources: Option[]) => {
    setSettings({
      ...settings,
      sources: sources.map((source) => source.value),
    });
  };

  const handleSetCategorieSettings = (categories: Option[]) => {
    setSettings({
      ...settings,
      categories: categories.map((category) => category.value),
    });
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
          value={settings.categories.map((category) => {
            return {
              label: categories.find((c) => c.id === category)?.name ?? "",
              value: category,
            };
          })}
          onChange={handleSetCategorieSettings}
          labelledBy="Select"
          valueRenderer={(selected, _options) => {
            return (
              <div className="flex items-center gap-2">
                {selected.map((option) => (
                  <Badge key={option.value} bgColor={stc(option.label)}>
                    {option.label}
                  </Badge>
                ))}
              </div>
            );
          }}
        />
      </div>

      {/* sources */}
      <div className="flex flex-col gap-3 mt-10">
        <h3 className="text-2xl">Source</h3>

        <MultiSelect
          options={sources.map((source) => {
            return {
              label: source.name,
              value: source.id,
            };
          })}
          value={settings.sources.map((source) => {
            return {
              label: sources.find((c) => c.id === source)?.name ?? "",
              value: source,
            };
          })}
          onChange={handleSetSourceSettings}
          labelledBy="Select"
          valueRenderer={(selected, _options) => {
            return (
              <div className="flex items-center gap-2">
                {selected.map((option) => (
                  <Badge key={option.value} bgColor={stc(option.label)}>
                    {option.label}
                  </Badge>
                ))}
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};
