import React from "react";
import { Link } from "react-router-dom";
import { IPackage } from "../interfaces/package";

type PackagesListProps = {
  packages: IPackage[];
};

function PackagesList({ packages }: PackagesListProps) {
  if (packages.length === 0) return null;

  const renderPackages = () => {
    return packages.map((item) => {
      return (
        <li key={item.package.name} className="list-group-item">
          <Link to={`/${item.package.name}`}>{item.package.name}</Link>
        </li>
      );
    });
  };
  return (
    <section>
      <h2 className="mb-3">Package list</h2>
      <ul className="list-group list-group-numbered">{renderPackages()}</ul>
    </section>
  );
}

export default PackagesList;
