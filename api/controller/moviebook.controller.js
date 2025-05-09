import {
  createMedia,
  getAllMedia,
  getMediaById,
  updateMedia,
  deleteMedia
} from '../services/moviebook.service.js';

export const create = async (req, res) => {
  try {
    const media = await createMedia(req.userId, req.body);
    res.status(201).json(media);
  } catch (err) {
    console.error('Error creating media item:', err);
    res.status(400).json({ error: 'Failed to create media item.' });
  }
};

export const getAll = async (req, res) => {
  try {
    const mediaList = await getAllMedia(req.userId);
    res.json(mediaList);
  } catch (err) {
    console.error('Error fetching media items:', err);
    res.status(500).json({ error: 'Failed to fetch media items.' });
  }
};

export const getById = async (req, res) => {
  try {
    const media = await getMediaById(req.userId, req.params.id);
    if (!media) {
      return res.status(404).json({ error: 'Media item not found.' });
    }
    res.json(media);
  } catch (err) {
    console.error('Error fetching media item:', err);
    res.status(500).json({ error: 'Failed to fetch media item.' });
  }
};

export const update = async (req, res) => {
  try {
    const media = await updateMedia(req.userId, req.params.id, req.body);
    if (!media) {
      return res.status(404).json({ error: 'Media item not found.' });
    }
    res.json(media);
  } catch (err) {
    console.error('Error updating media item:', err);
    res.status(400).json({ error: 'Failed to update media item.' });
  }
};

export const remove = async (req, res) => {
  try {
    const media = await deleteMedia(req.userId, req.params.id);
    if (!media) {
      return res.status(404).json({ error: 'Media item not found.' });
    }
    res.json({ message: 'Media item deleted successfully.' });
  } catch (err) {
    console.error('Error deleting media item:', err);
    res.status(500).json({ error: 'Failed to delete media item.' });
  }
};
