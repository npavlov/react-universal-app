import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [a, setA] = useState(1);

  useEffect(() => {
    function tick() {
      setA(a + 1);
    }
    let id = setInterval(tick, 2000);
    return () => clearInterval(id);
  }, [a]);

  return (
    <div>
      {a.toString()}
      <Link to='home'>
        <button>Home</button>
      </Link>
      <Link to='second'>
        <button>Second page</button>
      </Link>
    </div>
  );
};

export default Nav;
