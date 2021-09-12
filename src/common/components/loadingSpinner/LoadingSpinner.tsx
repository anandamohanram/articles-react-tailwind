// imports
import React from "react";

/**
 * Loading spinner - a blue circular loading spinner
 *
 * @return {React.ReactElement<any, any>}
 */
export const LoadingSpinner = (): React.ReactElement<any, any> => {
  return (
    <div className="block">
      <div
        style={{ borderTopColor: "transparent" }}
        className="m-auto w-16 h-16 border-8 border-blue-400 rounded-full animate-spin"
      ></div>
    </div>
  );
};
