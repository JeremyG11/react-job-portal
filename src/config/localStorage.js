// Get the token from localStorage
export const getToken = () => {
  const currentTime = new Date(Date.now()).getTime();
  const allowedTime = 1000 * 60 * 30;
  const timeSinceLastLogin =
    currentTime - localStorage.getItem('lastTimeLogin');

  if (timeSinceLastLogin < allowedTime) {
    const { access } = JSON.parse(localStorage.getItem('tokens'));
    return access;
  }
};

// Set TOKEN
export const setToken = (tokens) => {
  localStorage.setItem('tokens', JSON.stringify(tokens));
  localStorage.setItem('lastTimeLogin', new Date(Date.now()).getTime());
};

// Remove the Token from localStorage
export const removeToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('lastTimeLogin');
};
