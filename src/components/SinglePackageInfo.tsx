import React from "react";
import { IPackage } from "../interfaces/package";

type SinglePackageInfoProps = {
  singlePackage: IPackage;
};

function SinglePackageInfo({ singlePackage }: SinglePackageInfoProps) {
  return (
    <div className="mb-5 mt-5">
      <h3 className="mb-3">Package info:</h3>
      <p>
        name: <span className="fw-bold">{singlePackage?.package.name}</span>
      </p>
      <p>
        description:{" "}
        <span className="fw-bold">{singlePackage?.package.description}</span>
      </p>
      <p>
        category:{" "}
        <span className="fw-bold">{singlePackage?.package.category}</span>
      </p>
      <p>{singlePackage.package.optional ? "This is optional package." : ""}</p>
    </div>
  );
}

export default SinglePackageInfo;
