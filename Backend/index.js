const express =  require ('express');
const app = express();
const genres = require ('./routes/genres');
const HeaderElements = require ('./routes/HeaderElements');
app.use (express.json());
app.use('/api/genres/', genres);
app.use('/api/HeaderElements/', HeaderElements);

const port = process.env.NodePort || 4000 ;

app.listen(port, ()=> console.log(`listening on port ${port}`));