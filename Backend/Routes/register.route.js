import express from "express";
import { signup,login } from '../Controller/register.controller.js';

const Router = express.Router();
Router.post('/sign-up', signup);
Router.post("/login", login);
export default Router