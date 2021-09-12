// @ts-nocheck
import { Button, Card, LoadingSpinner } from "common/components";
import React, { useEffect, useState } from "react";
import { fetchData, HTTPMethods } from "utils";

const url = "/v3/articles";

const setMyFetch = async (url, params, setData, setError) => {
  if (params) {
    url += "?" + new URLSearchParams(params).toString();
  }
  const { data, error } = await fetchData(url, HTTPMethods.GET);
  if (data) setData(data);
  if (error) setError(error);
};

export const Content = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const updateData = (data) => {
    setData((prevData) => [...prevData, ...data]);
  };

  const loadMoreHandler = () => {
    console.log("LOADING MORE....");

    setMyFetch(
      url,
      { _limit: 6, _start: data ? data.length : 0 },
      updateData,
      setError
    );
  };

  useEffect(() => {
    if (url) {
      setMyFetch(url, { _limit: 6, _start: 0 }, setData, setError);
    }
  }, []);
  console.log("🚀 ~ file: Content.tsx ~ line 22 ~ data", data, error);

  if (!data && !error) return <LoadingSpinner />;
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

/*

id: 10703
imageUrl: "https://spacenews.com/wp-content/uploads/2021/09/goest-goesu.jpg"
launches: []
newsSite: "SpaceNews"
publishedAt: "2021-09-11T18:30:59.000Z"
summary: "NASA has selected SpaceX to launch the last in a series of geostationary weather satellites that had previously been launched by United Launch Alliance."
title: "SpaceX wins contract to launch weather satellite after ULA withdraws"
updatedAt: "2021-09-11T18:30:59.221Z"
url: "https://spacenews.com/spacex-wins-contract-to-launch-weather-satellite-after-ula-withdraws/"



*/
