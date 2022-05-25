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
  return (
    <div className="mb-5">
      <h3>Reverse dependencies:</h3>
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
