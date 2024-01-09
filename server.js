const express = require('express');
const app = express();
const filmRoutes = require('./routes');

app.use(express.json()); // Pour parser les requêtes JSON
app.use('/api', filmRoutes); // Utiliser filmRoutes avec un préfixe de chemin

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
