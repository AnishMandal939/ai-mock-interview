/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-mock-interview_owner:Tjfkc4v9RgUl@ep-purple-bar-a5r901m2.us-east-2.aws.neon.tech/ai-mock-interview?sslmode=require',
    }
  };