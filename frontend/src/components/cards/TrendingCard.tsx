import React, { FC } from "react";
import { Card, Badge } from "components";

export interface TrendingArticleItemProps {
  imgUrl: string;
  title: string;
  category?: string;
  source?: string;
  author?: string;
  publishedAt: string;
}

export const TrendingArticleItem: FC<TrendingArticleItemProps> = (props) => {
  return (
    <div className="flex items-stratch gap-3 text-sm">
      <div>
        <img
          className="min-w-[100px] aspect-square border rounded-md"
          src={props.imgUrl}
          alt={props.imgUrl}
        />
      </div>
      <div className="w-full flex flex-col justify-between gap-3 p-1">
        <div className="w-3/4 flex flex-col gap-1">
          <h2 className="font-bold text-base break-all">{props.title}</h2>
        </div>
        <div className="flex items-end justify-between">
          <span className="font-medium">{props.author}</span>
          <div className="flex items-center gap-1">
            <Badge className="text-xs" bgColor="success">
              {props.category}
            </Badge>
            <Badge className="text-xs" bgColor="black">
              {props.source}
            </Badge>
          </div>
          <p className="text-gray-400 text-xs text-right">
            {props.publishedAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export const TrendingCard = () => {
  return (
    <Card>
      <TrendingArticleItem
        title="title"
        imgUrl="https://picsum.photos/id/237/200/300"
        author="author"
        source="source"
        category="category"
        publishedAt="publishedAt"
      />
    </Card>
  );
};
