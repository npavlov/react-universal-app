import React, { memo, useCallback, useState } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  const [clickedTimes, setTimes] = useState(0);

  const clickCallback = useCallback(times => {
    console.log(`Clicked!!! ${times + 1}`);
    setTimes(times + 1);
  }, []);

  const head = () => (
    <Helmet>
      <title>My homepage</title>
    </Helmet>
  );

  return (
    <div>
      {head()}
      <h1>My home page</h1>
      <p>Content!</p>
      <button onClick={() => clickCallback(clickedTimes)}>
        Consloe log some text
      </button>
    </div>
  );
};

export default Home;
