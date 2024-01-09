const express = require('express');
const router = express.Router();

// Simuler une base de données (à remplacer par votre logique MongoDB)
let films = [
  { id: 1, title: "Film A", genre: "Action" },
  { id: 2, title: "Film B", genre: "Comédie" }
];

// Route pour récupérer tous les films
router.get('/films', (req, res) => {
  res.json(films);
});

// Route pour récupérer un film par son ID
router.get('/films/:id', (req, res) => {
  const film = films.find(f => f.id === parseInt(req.params.id));
  if (!film) return res.status(404).send('Le film n\'a pas été trouvé.');
  res.json(film);
});

// Route pour ajouter un nouveau film
router.post('/films', (req, res) => {
  // Ici, vous ajouterez la logique pour ajouter un film
  // Pour l'exemple, nous allons juste simuler l'ajout
  const newFilm = {
    id: films.length + 1,
    title: req.body.title,
    genre: req.body.genre
  };
  films.push(newFilm);
  res.send(newFilm);
});

// Route pour mettre à jour un film
router.put('/films/:id', (req, res) => {
  // Logique pour mettre à jour un film
});

// Route pour supprimer un film
router.delete('/films/:id', (req, res) => {
  // Logique pour supprimer un film
});

module.exports = router;
