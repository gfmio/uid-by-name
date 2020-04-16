var spawnSync = require("child_process").spawnSync;

/** Returns the UID for this username, if it exists, or else undefined */
function getUidByName(username) {
  var result = spawnSync("id", ["-u", username], { shell: true, encoding: "utf8" });

  if (result.status !== 0) {
    return undefined;
  }

  var uid = parseInt(result.stdout, 10);

  if (Number.isNaN(uid)) {
    return undefined;
  }

  return uid;
}

module.exports = getUidByName;
