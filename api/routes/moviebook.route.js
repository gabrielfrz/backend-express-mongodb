import express from 'express';
import {
  create,
  getAll,
  getById,
  update,
  remove
} from '../controller/moviebook.controller.js';
import authenticate from '../middleware/jwt.token.middleware.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: MovieBooks
 *   description: CRUD operations for movies and books
 */

/**
 * @swagger
 * /moviesbooks:
 *   post:
 *     summary: Create a new movie or book
 *     tags: [MovieBooks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 enum: [movie, book]
 *               title:
 *                 type: string
 *               authorOrDirector:
 *                 type: string
 *               genre:
 *                 type: string
 *               releaseYear:
 *                 type: number
 *               completed:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Created successfully
 *       401:
 *         description: Unauthorized
 */
router.post('/', authenticate, create);

/**
 * @swagger
 * /moviesbooks:
 *   get:
 *     summary: Get all items from authenticated user
 *     tags: [MovieBooks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of media items
 *       401:
 *         description: Unauthorized
 */
router.get('/', authenticate, getAll);

/**
 * @swagger
 * /moviesbooks/{id}:
 *   get:
 *     summary: Get a specific movie or book by ID
 *     tags: [MovieBooks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item found
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */
router.get('/:id', authenticate, getById);

/**
 * @swagger
 * /moviesbooks/{id}:
 *   put:
 *     summary: Update a movie or book completely
 *     tags: [MovieBooks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               title:
 *                 type: string
 *               authorOrDirector:
 *                 type: string
 *               genre:
 *                 type: string
 *               releaseYear:
 *                 type: number
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Updated successfully
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */
router.put('/:id', authenticate, update);

/**
 * @swagger
 * /moviesbooks/{id}:
 *   patch:
 *     summary: Partially update a movie or book
 *     tags: [MovieBooks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Partially updated successfully
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */
router.patch('/:id', authenticate, update);

/**
 * @swagger
 * /moviesbooks/{id}:
 *   delete:
 *     summary: Delete a movie or book
 *     tags: [MovieBooks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */
router.delete('/:id', authenticate, remove);

export default router;
