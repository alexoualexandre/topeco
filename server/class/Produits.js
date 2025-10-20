/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const { connection } = require("../mysql.js");

class Produits {
  async getProduits() {
    const [produits] = await connection.query("SELECT * FROM produits");
    return produits;
  }
}

module.exports = { Produits };
