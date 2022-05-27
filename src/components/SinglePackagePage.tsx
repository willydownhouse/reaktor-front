import React from "react";
import { IPackage } from "../interfaces/package";
import { useLocation, Link } from "react-router-dom";
import SinglePackageDependencies from "./SinglePackageDependencies";
import SinglePackageReverseDependencies from "./SinglePackageReverseDependencies";
import SinglePackageInfo from "./SinglePackageInfo";
import PageNotFound from "./PageNotFound";

type SinglePackageProps = {
  packages: IPackage[];
};

function SinglePackagePage({ packages }: SinglePackageProps) {
  const { pathname } = useLocation();
  const singlePackage = packages.find(
    (item) => item.package.name === pathname.slice(1)
  );

  if (!singlePackage) {
    return <PageNotFound message="No package with that name" />;
  }

  return (
    <div>
      <SinglePackageInfo singlePackage={singlePackage} />
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
