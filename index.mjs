import shell from "shelljs";

/** Returns the UID for this username, if it exists, or else undefined */
export default function getUid(username) {
  const result = shell.exec(`id -u ${username}`, { silent: true });

  if (result.code !== 0) {
    return undefined;
  }

  const uid = parseInt(result, 10);

  if (Number.isNaN(uid)) {
    return undefined;
  }

  return uid;
}
