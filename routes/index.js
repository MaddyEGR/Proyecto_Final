var express = require('express');
var router = express.Router();
const Habit = require ('../modelo/Habit');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: "Acceso denegado. No se proporciono el token" });
  }

  try {
    const tokenWithoutBearer = token.replace("Bearer ", "");
    const verified = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
    req.user = verified; //Guardamos el usuario verificado en la request
    next();
  }catch (error) {
    console.error(error);
    return res.status(403).json({ error: "Token invalido o expirado" });
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/habits',authenticateToken, async (req, res, next) => {
  try{
    let userId = req.user && req.user.userId ? req.user.userId : res.status(500).json({ error: "No se pudo obtener el id del usuario" });
    const habits = await Habit.find({'userId': new mongoose.Types.ObjectId(userId) });
    res.json(habits);  
  }catch (error){
    res.status(500).json({ message: "Error al obtener los habitos" });
  }
});

router.post('/habits',authenticateToken, async (req, res, next) => {
  try{
    const { title, description } = req.body;
    let userId = req.user && req.user.userId ? req.user.userId : res.status(500).json({ error: "Error al agregar el habito" });
    userId = new mongoose.Types.ObjectId(userId);
    const habit = new Habit({ title, description, userId });
    await habit.save();
    res.json(habit);
  }
  catch (error){
    res.status.apply(400).json({ message: "Error al crear el habito" });
  }
});

router.delete('/habits/:id',authenticateToken, async (req, res) => {
  try{
    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: "Habito Eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Habito no encontrado" });
  }
}); 

router.patch('/habits/markasdone/:id',authenticateToken, async (req, res) => {
  try{
    const habit = await Habit.findById(req.params.id);
    habit.lastDone = new Date();
    if (timeDifferenceInHours(habit.lastDone, habit.lastUpdate) < 24) {
      habit.days = timeDifferenceInDays(habit.lastDone, habit.startedAt);
      habit.lastUpdate = new Date();
      habit.save();
      res.status(200).json({ message: "Habito marcado como completado" });
    }else{
      habit.days = 1;
      habit.lastUpdate = new Date();
      habit.save();
      res.status(200).json({ message: "Habito reiniciado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al marcar el habito como completado" });
  }
});

const timeDifferenceInHours = (date1, date2) => {
  const differenceMs = Math.abs(date1 - date2);
  return differenceMs / (1000 * 60 * 60);
};

const timeDifferenceInDays = (date1, date2) => {
  const differenceMs = Math.abs(date1 - date2);
  return Math.floor(differenceMs / (1000 * 60 * 60 * 24));
}

module.exports = router;
