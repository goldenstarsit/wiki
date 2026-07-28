function success(data) {
  return {
    success: true,
    data
  };
}

function error(message) {
  return {
    success: false,
    error: message
  };
}

module.exports = {
  success,
  error
};
