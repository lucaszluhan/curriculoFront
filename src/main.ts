import express from 'express';
import cors from 'cors';

let app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + `/../public/`));

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`app rodando na porta ${port}`));
