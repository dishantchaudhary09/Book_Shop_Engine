import express from 'express';
import { getPaidBook } from '../Controller/paidBook.controller.js';

const Router = express.Router();
Router.get('/', getPaidBook);
export default Router;