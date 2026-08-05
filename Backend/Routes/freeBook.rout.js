import express from 'express';
import { getFreeBook } from '../Controller/freeBook.controller.js';

const Router = express.Router();
Router.get('/', getFreeBook);
export default Router