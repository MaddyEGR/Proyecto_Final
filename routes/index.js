var express = require('express');
var router = express.Router();
const Habit = require ('../modelo/Habit');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/habits', async (req, res, next) => {
  try{
    const habits = await Habit.find();
    res.json(habits);  
  }catch (error){
    res.status(500).json({ message: "Error al obtener los habitos" });
  }
});

router.post('/habits', async (req, res, next) => {
  try{
    const { title, description } = req.body;
    const habit = new Habit({ title, description });
    await habit.save();
    res.json(habit);
  }
  catch (error){
    res.status.apply(400).json({ message: "Error al crear el habito" });
  }
});

router.delete('/habits/:id', async (req, res) => {
  try{
    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: "Habito Eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Habito no encontrado" });
  }
}); 

router.patch('/habits/markasdone/:id', async (req, res) => {
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
