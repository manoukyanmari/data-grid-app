import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Example static user endpoint
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Mariam', avatar: 'https://i.pravatar.cc/150?u=mariam' },
    { id: 2, name: 'Kaitlyn', avatar: 'https://i.pravatar.cc/150?u=kaitlyn' },
    { id: 3, name: 'Narek', avatar: 'https://i.pravatar.cc/150?u=narek' },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});