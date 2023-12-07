import React, { FC } from "react";
import { Card, Badge, Button } from "components/common";
import moment from "moment";

export interface ArticleCardProps {
  imgUrl: string;
  title: string;
  description: string;
  category?: string;
  source?: string;
  author?: string;
  publishedAt: string;
}

export const ArticleCard: FC<ArticleCardProps> = (props) => {
  return (
    <Card className="flex items-stratch gap-3 text-sm">
      <div className="w-1/4">
        <img
          className="aspect-square rounded-xl"
          src={props.imgUrl}
          alt={props.imgUrl}
        />
      </div>
      <div className="w-3/4 flex flex-col justify-between gap-3 p-1">
        <div className="flex justify-between">
          <div className="w-3/4 flex flex-col gap-1">
            <h2 className="line-clamp-2 font-bold text-base break-all">
              {props.title}
            </h2>
            <p className="line-clamp-2 break-all">{props.description}</p>
          </div>
          <div className="w-1/4">
            <p className="text-gray-400 text-xs text-right">
              {moment(props.publishedAt, "YYYY-MM-DD").fromNow()}
            </p>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-bold">{props.author}</span>
            <div className="flex items-center gap-1">
              <Badge className="text-xs" bgColor="success">
                {props.category}
              </Badge>
              <Badge className="text-xs" bgColor="black">
                {props.source}
              </Badge>
            </div>
          </div>
          <Button bgColor="primary">Read More</Button>
        </div>
      </div>
    </Card>
  );
};
