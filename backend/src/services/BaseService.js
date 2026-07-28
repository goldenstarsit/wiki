class BaseService {
  success(data) {
    return {
      success: true,
      data
    };
  }

  failure(message) {
    return {
      success: false,
      error: message
    };
  }
}

module.exports = BaseService;
