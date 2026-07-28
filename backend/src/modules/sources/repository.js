module.exports = {
  async health() {
    return {
      success: true,
      module: "sources"
    };
  }
};
