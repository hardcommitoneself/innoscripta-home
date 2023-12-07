import React from "react";
import { ArticleCard, TrendingCard, Input, Card } from "components";
import { useArticleContext } from "context";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const trends = [
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
  const { articles } = useArticleContext();

  return (
    <div className="flex flex-col py-10">
      {/* search */}
      <div className="flex items-center justify-between">
        <Input
          className="min-w-[300px] !rounded-full"
          placeholder="Search article..."
          icon={<MagnifyingGlassIcon />}
        />
      </div>

      <div className="flex gap-10 mt-5">
        <div className="flex gap-5 w-3/5 overflow-y-auto max-h-[60vh]">
          {/* blog list */}
          <div className="flex flex-col gap-4 mr-1">
            {articles.map((article, index) => (
              <div key={index}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 w-2/5">
          {/* trending */}
          <Card>
            <div className="flex flex-col gap-3">
              <h1 className="text-base font-bold">Trending</h1>

              <div className="flex flex-col gap-3">
                {trends.map((trend, index) => (
                  <div key={index}>
                    <TrendingCard {...trend} />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* recommended users */}
        </div>
      </div>
    </div>
  );
};
