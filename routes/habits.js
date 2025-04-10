var express = require('express');
var router = express.Router();
const Habit = require('../modelo/Habit'); 

// Ruta para obtener todos los hábitos

router.get('/', async (req, res) => {
    try {
      const habits = await Habit.find();  // Obtiene todos los hábitos desde MongoDB
      res.json(habits);  // Devuelve los hábitos como respuesta JSON
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los hábitos", error: error.message });
    }
  });

// Ruta para marcar un hábito como hecho (actualiza lastDone)
router.patch('/markasdone/:id', async (req, res) => {
    try {
      const habit = await Habit.findByIdAndUpdate(
        req.params.id,
        { lastDone: Date.now(), lastUpdate: Date.now() },
        { new: true }
      );
  
      if (!habit) {
        return res.status(404).json({ message: 'Hábito no encontrado' });
      }
  
      res.json({ message: 'Hábito marcado como completado', habit });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el hábito', error: error.message });
    }
  });  

module.exports = router;