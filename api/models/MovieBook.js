import mongoose from 'mongoose';

const movieBookSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['movie', 'book'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  authorOrDirector: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('MovieBook', movieBookSchema);
