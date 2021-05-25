module.exports = {
  // We run ncu (https://www.npmjs.com/package/npm-check-updates) in postinstall to check dependencies to the latest versions
  // We want/need to keep old version of some dependencies => we don't want to check it in postinstall
  // Add them here 👇
  // reject: ["@ph/questionbank"]
};
