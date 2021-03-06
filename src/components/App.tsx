import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePackagePage from "./SinglePackagePage";
import MainPage from "./MainPage";
import PageNotFound from "./PageNotFound";
import Notification from "./Notification";
import { IPackage } from "../interfaces/package";

function App() {
  const [packages, setPackages] = useState<IPackage[]>([]);
  const [notification, setNotification] = useState<string>("");

  console.log(process.env.NODE_ENV);

  return (
    <div className="container">
      <Notification notification={notification} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                packages={packages}
                setPackages={setPackages}
                setNotification={setNotification}
              />
            }
          />
          <Route
            path="/:package"
            element={<SinglePackagePage packages={packages} />}
          />
          <Route
            path="*"
            element={
              <PageNotFound message={`There is nothing here, sorry 😎`} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
