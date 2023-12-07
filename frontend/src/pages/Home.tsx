import React from "react";
import { ArticleCard, TrendingCard, Input, Button } from "components";

export const Home = () => {
  return (
    <div className="flex flex-col py-20">
      <div className="flex items-end text-6xl font-bold text-primary">
        For you
      </div>
      {/* search & create accoutn */}
      <div className="flex items-center justify-between mt-4">
        <Input search rounded />
        <Button bgColor="primary" className="h-14">
          Create Account
        </Button>
      </div>

      <div className="flex gap-10 mt-5">
        <div className="flex flex-col gap-5 w-2/3">
          {/* filter */}
          <div className=""></div>

          {/* blog list */}
          <div className="flex flex-col gap-4">
            <ArticleCard
              title="title"
              description="description"
              author="author"
              source="source"
              category="category"
              imgUrl="https://picsum.photos/id/237/200/300"
              publishedAt="2023-12-01"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 w-1/3">
          {/* trending */}
          <TrendingCard></TrendingCard>

          {/* recommended users */}
        </div>
      </div>
    </div>
  );
};
