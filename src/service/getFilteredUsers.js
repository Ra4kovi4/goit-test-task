export const getFilteredUsers = (users, selectedButton) => {
  switch (selectedButton) {
    case 'show all':
      return users;
    case 'follow':
      return users.filter(
        user => localStorage.getItem(`isFollow-${user.id}`) === 'false'
      );
    case 'followings':
      return users.filter(
        user => localStorage.getItem(`isFollow-${user.id}`) === 'true'
      );
    default:
      return users;
  }
};
