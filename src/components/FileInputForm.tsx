import React, { FormEvent, useState } from "react";
import { IPackage } from "../interfaces/package";

import { handleParsingRequest } from "../utils/handleParsingRequest";

type FileInputProps = {
  setPackages: (val: IPackage[]) => void;
  setNotification: (val: string) => void;
};

function FileInputForm({ setPackages, setNotification }: FileInputProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("upload_file", file as Blob);

    handleParsingRequest(data, setPackages, setNotification);
  };

  const handleChange = (files: FileList | null) => {
    if (!files) return;
    const { 0: file } = files;

    setFile(file);
  };
  return (
    <div className="mb-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="toml" className="form-label">
            Choose a toml file
          </label>
          <input
            id="file"
            onChange={(e) => handleChange(e.target.files)}
            name="toml"
            type={"file"}
            accept=".toml, .lock"
            className="form-control"
          />
        </div>
        <button
          id="submit"
          disabled={!file}
          className="btn btn-primary"
          type="submit"
        >
          Parse
        </button>
      </form>
    </div>
  );
}

export default FileInputForm;
