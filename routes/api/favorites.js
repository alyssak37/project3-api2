const router = require('express').Router();
const favoritesCtrl = require('../../controllers/favorites');

router.post('/favorites', favoritesCtrl.createFavorite);
router.get('/favorites', favoritesCtrl.showFavorites);

module.exports = router;