import React from "react";
import { Link } from "react-router-dom";
import { IPackage } from "../interfaces/package";
import * as _ from "lodash";

type PackagesListProps = {
  packages: IPackage[];
};

function PackagesList({ packages }: PackagesListProps) {
  if (packages.length === 0) return null;

  const sortedList = _.orderBy(packages, (item) => item.package.name, ["asc"]);

  const renderPackages = () => {
    return sortedList.map((item) => {
      return (
        <li key={item.package.name} className="list-group-item">
          <Link id={item.package.name} to={`/${item.package.name}`}>
            {item.package.name}
          </Link>
        </li>
      );
    });
  };
  return (
    <section id="package-list">
      <h2 className="mb-3">Package list</h2>
      <ul className="list-group list-group-numbered">{renderPackages()}</ul>
    </section>
  );
}

export default PackagesList;
