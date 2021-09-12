// imports
import { Dispatch, SetStateAction } from "react";

import { fetchData, HTTPMethods } from "common/utils";

/**
 * setMyFetch - fetches dat and sets them using the setdata and setError functions
 *
 * @param {RequestInfo} url
 * @param {Record<string, | number>} params
 * @param {(data: any)=>void)} setData
 * @param {Dispatch<SetStateAction<string | Error | null>>} setError
 */
export const setMyFetch = async <T>(
    url: RequestInfo, 
    params: string | string[][] | Record<string, string> | URLSearchParams | undefined, 
    setData: React.Dispatch<React.SetStateAction<T[]>> | ((data: T[])=> void), 
    setError: Dispatch<SetStateAction<string | Error | null>>) => {
    if (params) {
      url += "?" + new URLSearchParams(params).toString();
    }

    const { data, error } = await fetchData(url, HTTPMethods.GET);

    if (data) setData(data);
    if (error) setError(error);
  };
  