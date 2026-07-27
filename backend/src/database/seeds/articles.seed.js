module.exports = {
  name: "articles",

  async run(db) {
    await db.run(
      `
      INSERT INTO articles
      (
        title,
        slug,
        source_url,
        language,
        status
      )
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        "Wikipedia Main Page",
        "wikipedia-main-page",
        "https://www.wikipedia.org",
        "en",
        "active"
      ]
    );

    console.log("Articles seed completed");
  }
};
