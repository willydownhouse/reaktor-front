import React from "react";
import { Link } from "react-router-dom";

type PageNotFound = {
  message: string;
};

function PageNotFound({ message }: PageNotFound) {
  return (
    <div>
      <p>{message}</p>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default PageNotFound;
