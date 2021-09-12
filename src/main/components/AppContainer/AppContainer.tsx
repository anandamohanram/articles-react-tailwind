//
import { Content, Header } from "main/components";
import React from "react";

/**
 * AppContainer - main wrapper of the app
 *
 * @return {*}
 */
export const AppContainer = () => {
  return (
    <div className="grid grid-cols-1 container m-auto p-10 xl:px-60">
      <Header />
      <Content />
    </div>
  );
};
