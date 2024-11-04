/** @type { import ("drizzle-kit").Config } */ 
export default {
    schema: "./configs/schema.js", 
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://carMarketplace_owner:xDm6t1nrlAOT@ep-crimson-meadow-a8pf9mbe.eastus2.azure.neon.tech/carMarketplace?sslmode=require',
    }
};