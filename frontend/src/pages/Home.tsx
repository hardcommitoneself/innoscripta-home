import React from "react";
import { ArticleCard, Input } from "components";
import { useArticleContext } from "context";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const Home = () => {
  const { articles, search, setSearch } = useArticleContext();

  return (
    <div className="flex flex-col py-10">
      {/* search */}
      <div className="flex items-center justify-between">
        <Input
          className="min-w-[300px] !rounded-full"
          placeholder="Search article..."
          icon={<MagnifyingGlassIcon />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
