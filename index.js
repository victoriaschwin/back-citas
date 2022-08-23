import express from 'express';
import cors from 'cors';
import citas from './cites.js';

const port = 5000;
const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/api/citas', function (req,res){
  res.json(citas)
})

app.get('/api/citarandom', function (req, res){
  
  function randomCita(max){
    return Math.floor(Math.random()* max)} 
  
  let numeroRandom = randomCita(citas.length)
  res.json(citas[numeroRandom])
})


app.listen(port, function(){
  console.log('Listening port'+ port)
})