import express from 'express';

let app = express();
app.use(express.json());
app.use(express.static(__dirname + `/../public/`));

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`app rodando na porta ${port}`));
