import packageInfo from "../package.json";
import { toast } from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

// Package.json -> 0.5
// BuildVersion -> 0.5

// yarn build
// yarn preversion -> echo version number
// yarn version --new-version minor (0.5 -> 0.6)
// yarn postversion -> REACT_ENV=0.6
// This step -> somehow put either $npm_package_version // REACT_APP_VERSION to buildversion.version
// push --tags
// react-scripts build

//yarn build -> bump package.json to 0.6
// BuildVersion -> 0.6
// Build Deploy Complete

// app.avoma.com -> package.json -> 0.5 (client)
// BuildVersion.json -> 0.6 (Server)

// Snackbar Update App
// client -> 0.6, server -> 0.6

export const checkAppUpdate = () => {
  getBuildVersion().then((buildVersion) => {
    console.log("build", buildVersion);

    if (buildVersion.version) {
      if (buildVersion.version !== packageInfo.version) {
        toast(
          (t) => (
            <span>
              Updated!{" "}
              <button
                style={{ background: "none", border: "none" }}
                onClick={() => window.location.reload()}
              >
                <AiOutlineCloseCircle />
              </button>
            </span>
          ),
          {
            duration: 10000,
            style: {
              backgroundColor: "#FF5740",
              padding: "8px",
              color: "#FFFFFF",
            },
          }
        );
      }
    }
  });
};

const getBuildVersion = () => {
  return fetch("http://localhost:5000/buildVersion.json").then((res) =>
    res.json()
  );
};
