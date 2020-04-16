import { spawnSync } from "child_process";

/** Returns the UID for this username, if it exists, or else undefined */
export default function getUidByName(username) {
  const result = spawnSync("id", ["-u", username], { shell: true, encoding: "utf8" });

  if (result.status !== 0) {
    return undefined;
  }

  const uid = parseInt(result.stdout, 10);

  if (Number.isNaN(uid)) {
    return undefined;
  }

  return uid;
}
