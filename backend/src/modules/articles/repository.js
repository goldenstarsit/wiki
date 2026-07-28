module.exports = {
  async health() {
    return {
      success: true,
      module: "articles"
    };
  }
};
