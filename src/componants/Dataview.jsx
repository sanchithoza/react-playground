import React, { useEffect, useState } from "react";
import axios from "axios";

function Dataview() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:7000/users`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div>
      <h1>{data.msg}</h1>
    </div>
  );
}

export default Dataview;
