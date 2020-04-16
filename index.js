var shell = require('shelljs');

/** Returns the UID for this username, if it exists, or else undefined */
function getUidByName(username) {
  var result = shell.exec(`id -u ${username}`, { silent: true });

  if (result.code !== 0) {
    return undefined;
  }

  var uid = parseInt(result, 10);

  if (Number.isNaN(uid)) {
    return undefined;
  }

  return uid;
}

module.exports = getUidByName;
