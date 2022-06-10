export const userName = getUserName();

function getUserName() {
  const userName = process.argv.slice(2).join('').split('=')[1];
  return userName;
}
