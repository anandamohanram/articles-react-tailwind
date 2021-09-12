// imports
import React, { useEffect, useState } from "react";

import { Button, Card, LoadingSpinner } from "common/components";

import { setMyFetch } from "./utils";
import { apiEnums, ArticleDataType } from "main/utils";

export const Content = () => {
  const [data, setData] = useState<ArticleDataType[]>([]);
  const [error, setError] = useState<Error | string | null>(null);
  const url = apiEnums.articles;

  useEffect(() => {
    if (url) {
      setMyFetch(url, { _limit: "6", _start: "0" }, setData, setError);
    }
  }, [url]);

  const updateData = (data: ArticleDataType[]) => {
    setData((prevData) => [...prevData, ...data]);
  };

  const loadMoreHandler = () => {
    setMyFetch(
      url,
      { _limit: "6", _start: data ? `${data?.length}` : `0` },
      updateData,
      setError
    );
  };

  if (data === [] && !error) return <LoadingSpinner />;
  return (
    <div className="grid py-5">
      <div className="border-5 grid auto-rows-fr lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 items-stretch">
        {data &&
          data.map(({ id, publishedAt, title, summary, url }) => (
            <Card
              key={id}
              readMoreLink={url}
              date={new Date(publishedAt).toLocaleDateString()}
              heading={title}
              content={summary}
            />
          ))}
      </div>
      <div className="text-center py-10">
        <Button text="Load More" onClick={loadMoreHandler} />
      </div>
    </div>
  );
};
