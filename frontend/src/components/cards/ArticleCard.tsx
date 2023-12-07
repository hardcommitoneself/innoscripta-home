import React, { FC } from "react";
import { Card, Badge, Button } from "components/common";
import moment from "moment";
import { Link } from "react-router-dom";

export interface ArticleCardProps {
  id: number;
  urlToImage: string;
  title: string;
  description: string;
  category: {
    id: number;
    name: string;
  };
  source: {
    id: number;
    name: string;
  };
  author: string;
  publishedAt: string;
}

export const ArticleCard: FC<ArticleCardProps> = (props) => {
  return (
    <Card className="flex items-stratch gap-3 text-sm">
      <div className="w-1/4">
        <img
          className="aspect-square rounded-xl"
          src={props.urlToImage}
          alt={props.urlToImage}
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
                {props.category.name}
              </Badge>
              <Badge className="text-xs" bgColor="black">
                {props.source.name}
              </Badge>
            </div>
          </div>
          <Button bgColor="primary">
            <Link to={`article/${props.id}`}>Read More</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
