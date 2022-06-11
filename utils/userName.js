const getUserName = () => {
  const args = process.argv.slice(2).join('').split('=');
  const userNameIndex = args.findIndex((arg) => arg === '--username');
  const userName = userNameIndex !== -1 ? args[userNameIndex + 1] : 'Stranger';
  return userName;
};

export const userName = getUserName();
