import React from "react";
import { IPackage } from "../interfaces/package";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SinglePackageDependencies from "./SinglePackageDependencies";
import SinglePackageReverseDependencies from "./SinglePackageReverseDependencies";

type SinglePackageProps = {
  packages: IPackage[];
};

function SinglePackagePage({ packages }: SinglePackageProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("single package renders");
    console.log(singlePackage);
  });

  const singlePackage = packages.find(
    (item) => item.package.name === pathname.slice(1)
  );

  if (!singlePackage) {
    return (
      <div>
        <h4 className="mt-5 mb-5">No package with that name</h4>
        <Link to={"/"}>Back</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 mt-5">
        <h3>Package info:</h3>
        <p>
          name: <span className="fw-bold">{singlePackage?.package.name}</span>
        </p>
        <p>description: {singlePackage?.package.description}</p>
      </div>
      <SinglePackageDependencies
        dependencies={singlePackage.dependencies}
        packages={packages}
      />
      <SinglePackageReverseDependencies
        packages={packages}
        singlePackageName={singlePackage.package.name}
      />
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default SinglePackagePage;
