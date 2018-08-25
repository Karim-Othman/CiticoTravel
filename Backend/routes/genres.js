const express =  require ('express');
const router = express.Router();
const Joi = require('joi');
let genres = [


    {id:1, name:'Action'},
    {id:2, name:'Romance'},
    {id:3, name:'Horror'}

];


router.get('/',(req, res) => {


    res.send(genres);

});



router.post('/',(req, res) => {

    let JoiObject = ValidateGenresSchema (req.body);

    if (JoiObject.error)
    {
        return res.status(400).send(JoiObject.error.details[0].message);
    }

    const genresList = genres.length;
    const NewGenre = {

        id: genresList + 1,
        name: req.body.name
    };
    genres.push(NewGenre);
    res.send(NewGenre);
    
});


router.put('/:id',(req,res)=>{

    const genre = genres.find(G => G.id === parseInt(req.params.id));
    if (!genre)
    return res.status('404').send('Genre Does not exist');

    let JoiObject = ValidateGenresSchema (req.body);

    if (JoiObject.error)
    {
        return res.status(400).send(JoiObject.error.details[0].message);
    }

    genre.name = req.body.name;

    res.send(genre);


});


router.delete('/:id',(req,res)=>{

    const genre = genres.find(G => G.id === parseInt(req.params.id));
    if (!genre)
    return res.status('404').send('Genre Does not exist');


    const index = genres.indexOf(genre);

    genres.splice(index);

    res.send(genre);


});

module.exports = router;






function ValidateGenresSchema (Body)
{
const Schema ={
    name: Joi.string().min(3).required()
};
    return Joi.validate(Body, Schema);

}


