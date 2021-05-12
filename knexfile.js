require('dotenv').config();

// Default configuration for database connection
let connection = {
  filename: "./oildb.sqlite"
};

/**
 * Database configuration.
 */
module.exports = {
  connection,
  client: "sqlite3",
};

