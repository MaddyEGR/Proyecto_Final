const mongoose = require('mongoose');
const habitSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
        
    },
    description: {
      type: String,
      required: true
    },
    createdAT: {
      type: Date,
      default: Date.now
    },

    lastUpdate: {
      type: Date,
      default: Date.now
    },

    lastDone: {
      type: Date,
      default: Date.now
    },

    days: {
      type: [Number],
      required: 1
    },

    startedAt: {
      type: Date,
      default: Date.now
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
    
  });
  const Habit = mongoose.model('Habit', habitSchema, 'habits');
  
  module.exports = Habit;