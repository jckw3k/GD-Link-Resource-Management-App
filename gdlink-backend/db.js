// db.js
const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'GD',
  port: '3306',
  connectionLimit: 5 
});


// Function to get a connection from the pool
async function getConnection() {
  try {
    conn = await pool.getConnection();
    return conn;
  } catch (err) {
    console.error('Error getting connection:', err);
    throw err;
  }
}

module.exports = { getConnection };
