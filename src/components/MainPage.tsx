import React from "react";
import { IPackage } from "../interfaces/package";
import FileInputForm from "./FileInputForm";
import PackagesList from "./PackagesList";

type MainPageProps = {
  packages: IPackage[];
  setPackages: (val: IPackage[]) => void;
  setNotification: (val: string) => void;
};

function MainPage({ packages, setPackages, setNotification }: MainPageProps) {
  return (
    <>
      <h1 className="mb-5 mt-3">file parser</h1>
      <FileInputForm
        setPackages={setPackages}
        setNotification={setNotification}
      />
      <PackagesList packages={packages} />
    </>
  );
}

export default MainPage;
