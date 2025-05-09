import MovieBook from '../models/MovieBook.js';

export const createMedia = async (userId, data) => {
  return await MovieBook.create({ ...data, userId });
};

export const getAllMedia = async (userId) => {
  return await MovieBook.find({ userId });
};

export const getMediaById = async (userId, id) => {
  return await MovieBook.findOne({ _id: id, userId });
};

export const updateMedia = async (userId, id, data) => {
  return await MovieBook.findOneAndUpdate({ _id: id, userId }, data, { new: true });
};

export const deleteMedia = async (userId, id) => {
  return await MovieBook.findOneAndDelete({ _id: id, userId });
};
