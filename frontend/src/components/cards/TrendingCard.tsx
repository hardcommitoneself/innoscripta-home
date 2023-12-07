import React, { FC } from "react";
import { Card, Badge } from "components";
import moment from "moment";

export interface TrendingCardProps {
  imgUrl: string;
  title: string;
  category?: string;
  source?: string;
  author?: string;
  publishedAt: string;
}

export const TrendingCard: FC<TrendingCardProps> = (props) => {
  return (
    <div className="flex items-stratch gap-3 text-sm">
      <div>
        <img
          className="w-[80px] aspect-square border rounded-md"
          src={props.imgUrl}
          alt={props.imgUrl}
        />
      </div>
      <div className="w-full flex flex-col justify-center gap-1">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-base break-all line-clamp-1">
            {props.title}
          </h2>
        </div>
        <div className="flex w-full items-center justify-between">
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
            {moment(props.publishedAt, "YYYY-MM-DD").fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};
