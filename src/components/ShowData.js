import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

function ShowData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/upload-data").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="show-data mt-5">
      <div className="container">
        <div className="button">
          <Link to="/" className="btn btn-success">
            آپلود عکس
          </Link>
        </div>
        <div className="row">
          {data &&
            data.map((item) => (
              <div className="col-lg-3 mt-4" key={item.id}>
                <img
                  src={`http://localhost:8000/back/images/` + item.image}
                  className="w-100"
                  style={{ height: "300px", objectFit: "cover" }}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ShowData;
