export const getVisibleUsers = (users, page) => {
  return users.slice(0, 3 * page);
};
