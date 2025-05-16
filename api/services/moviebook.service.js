import MovieBook from '../models/MovieBook.js';

export const createMedia = async (userId, data) => {
  return await MovieBook.create({ ...data, user: userId });
};

export const getAllMedia = async (userId) => {
  return await MovieBook.find({ user: userId });
};

export const getMediaById = async (userId, id) => {
  return await MovieBook.findOne({ _id: id, user: userId });
};

export const updateMedia = async (userId, id, data) => {
  return await MovieBook.findOneAndUpdate(
    { _id: id, user: userId },
    data,
    { new: true }
  );
};

export const deleteMedia = async (userId, id) => {
  return await MovieBook.findOneAndDelete({ _id: id, user: userId });
};
