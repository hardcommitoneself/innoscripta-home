import React from "react";
import { ArticleCard, TrendingCard, Input, Button } from "components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const articles = [
  {
    imgUrl: "https://picsum.photos/id/237/200/300",
    title: "The overlooked benefits of real Christmas trees",
    description:
      "The environmental pros and cons of Christmas trees go far beyond the asdf adsf asdkjfljs d sskjd fjslkjd fkaskdf jaklsjd flaks jfasjdlkj asdj kj",
    author: "Rey",
    source: "Green",
    category: "Environment",
    publishedAt: "2023-12-01",
  },
];

export const Home = () => {
  return (
    <div className="flex flex-col py-20">
      <div className="flex items-end text-6xl font-bold text-primary">
        For you
      </div>
      {/* search & create accoutn */}
      <div className="flex items-center justify-between mt-4">
        <Input
          className="min-w-[300px] !rounded-full"
          placeholder="Search article..."
          icon={<MagnifyingGlassIcon />}
        />
      </div>

      <div className="flex gap-10 mt-5">
        <div className="flex flex-col gap-5 w-2/3">
          {/* filter */}
          <div className=""></div>

          {/* blog list */}
          <div className="flex flex-col gap-4">
            {articles.map((article, index) => (
              <ArticleCard {...article} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 w-1/3">
          {/* trending */}
          <TrendingCard />

          {/* recommended users */}
        </div>
      </div>
    </div>
  );
};
