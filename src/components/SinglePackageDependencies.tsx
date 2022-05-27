import React from "react";
import { Link } from "react-router-dom";
import { IPackage } from "../interfaces/package";

type Props = {
  dependencies: string[] | undefined;
  packages: IPackage[];
};

function SinglePackageDependencies({ dependencies, packages }: Props) {
  if (dependencies?.length === 0 || !dependencies) {
    return <p className="fw-bold">No dependencies</p>;
  }

  return (
    <div className="mb-5">
      <h5>Dependencies</h5>
      <ul>
        {dependencies.map((item) => {
          return (
            <li key={item}>
              {packages.map((el) => el.package.name).includes(item) ? (
                <Link to={`/${item}`}>{item}</Link>
              ) : (
                <span>{item}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SinglePackageDependencies;
