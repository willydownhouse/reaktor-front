import React from "react";
import { IPackage } from "../interfaces/package";
import { Link } from "react-router-dom";

type Props = {
  packages: IPackage[];
  singlePackageName: string;
};

function SinglePackageReverseDependencies({
  packages,
  singlePackageName,
}: Props) {
  const isReverseDependencie = packages.map((item) =>
    item.dependencies?.includes(singlePackageName)
  );

  if (!isReverseDependencie.includes(true)) {
    return <p className="fw-bold">No reverse dependencies</p>;
  }
  return (
    <div className="mb-5">
      <h5>Reverse dependencies:</h5>
      {packages
        .filter((item) => item.dependencies?.includes(singlePackageName))
        .map((item) => (
          <li key={item.package.name}>
            <Link to={`/${item.package.name}`}>{item.package.name}</Link>
          </li>
        ))}
    </div>
  );
}

export default SinglePackageReverseDependencies;
