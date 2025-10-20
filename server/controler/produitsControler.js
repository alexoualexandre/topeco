/* eslint-disable no-undef */

const { Produits } = require("../class/Produits.js");

const getProduits = async (req, res, next) => {
  try {
    const produits = await new Produits().getProduits();
    res.json(produits);
  } catch (err) {
    next({ error: `erreur:${err}` });
  }
};

module.exports = { getProduits };
