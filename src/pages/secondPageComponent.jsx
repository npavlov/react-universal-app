import React, { memo, useCallback, useState } from "react";
import { Helmet } from "react-helmet";

const Second = () => {
  const head = () => (
    <Helmet>
      <title>Second page</title>
    </Helmet>
  );

  return (
    <div>
      {head()}
      <h1>Second page</h1>
      <p>Content!</p>
    </div>
  );
};

export default Second;
