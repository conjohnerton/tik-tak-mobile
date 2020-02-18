const cleanUsername = (name) => {
  return name.split("@")[0];
};

export default cleanUsername;
