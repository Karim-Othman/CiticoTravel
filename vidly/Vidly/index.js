const express =  require ('express');
const app = express();
const genres = require ('./routes/genres');

app.use (express.json());
app.use('/api/genres/', genres);


const port = process.env.NodePort || 3000 ;

app.listen(port, ()=> console.log(`listening on port ${port}`));