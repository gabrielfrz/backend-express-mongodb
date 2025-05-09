import mongoose from 'mongoose';

const moviesBooksSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['book', 'movie'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  authorOrDirector: {
    type: String
  },
  genre: {
    type: String
  },
  releaseYear: {
    type: Number
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model('MovieBook', moviesBooksSchema);
