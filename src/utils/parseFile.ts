import parserApi from "../api/parserApi";
import { IPackage } from "../interfaces/package";

export function parseFileToPackagesArray(
  data: FormData,
  setPackages: (val: IPackage[]) => void,
  setNotification: (val: string) => void
) {
  parserApi
    .post("/upload", data)
    .then((res) => {
      const { data } = res.data;

      console.log(data);
      setPackages(data);
      localStorage.setItem("data", JSON.stringify(data));
    })
    .catch((err) => {
      if (err.name === "AxiosError") {
        setNotification(err.response.data.message);
        setTimeout(() => setNotification(""), 3000);
      }
    });
}
