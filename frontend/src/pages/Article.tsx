import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "components";
import { useArticleContext } from "context";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import moment from "moment";

export const Article = () => {
  const { id } = useParams<{ id: string }>();
  const { articles } = useArticleContext();

  const article = id
    ? articles.find((article) => article.id === parseInt(id))
    : null;

  return (
    <div className="mx-auto max-w-5xl flex flex-col py-10">
      {/* header */}
      <div className="flex items-center justify-between">
        {/* Author */}
        <div className="flex items-center gap-1">
          {/* avatar */}
          <img
            src={article?.authorImg}
            className="w-8 h-8 rounded-full overflow-hidden border-[3px] border-primary"
            alt={article?.authorImg}
          />

          <span className="text-2xl font-medium">{article?.author}</span>
        </div>

        {/* Back */}
        <Button>
          <Link to="/" className="flex items-center gap-1">
            <ChevronLeftIcon className="w-4 h-4" /> <span>Back</span>
          </Link>
        </Button>
      </div>

      {/* Description */}
      <p className="font-bold text-5xl my-10">{article?.description}</p>

      {/* published date & image */}
      <div className="flex flex-col gap-4">
        <span className="text-gray-500">
          PUBLISHED AT{" "}
          {moment(article?.publishedAt).format("MMMM Do YYYY, h:mm:ss A")}
        </span>

        <img
          src={article?.urlToImage}
          className="aspect-[2/1] object-cover rounded-2xl"
          alt={article?.urlToImage}
        />
      </div>

      {/* content */}
      <p className="p-20 text-lg text-justify">
        {article?.content}{" "}
        <a
          className="underline text-primary"
          href={article?.url}
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>{" "}
      </p>
    </div>
  );
};
