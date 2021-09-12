// imports
import { HTTPMethods } from "./types";

/**
 * fetchData - wrapper over fetch Api
 * returns {data, error} - when both are null, its assumed the fetch is loading.
 *
 * @param {RequestInfo} url
 * @param {HTTPMethods} method
 * @param {Headers} [headers]
 * @param {Record<string, unknown>} [body]
 * @return {*}  {(Promise<{data: any, error: undefined | Error}>)}
 */
 export const fetchData = async (
    url: RequestInfo, 
    method: HTTPMethods, 
    headers?: Headers, 
    body?:Record<string, unknown>): Promise<{data: any, error: undefined | Error}> => 
    fetch(url, {
        headers, method, body: JSON.stringify(body)
    })
    .then((response) => {        
        if(response.status === 200)  
        return response.json();   
        else
        throw new Error(`${response.status}: ${response.statusText}`); 
    })
    .then((resBody) => {
        return({data: resBody, error: undefined});
      })    
      .catch((e) => {
        return({data: undefined, error: e});
      });
    ;