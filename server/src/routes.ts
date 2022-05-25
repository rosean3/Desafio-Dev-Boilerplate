import express from 'express';
import UserController from '@controllers/UserController'
import RestaurantController from '@controllers/RestaurantController'

const routes = express.Router();
const userController = new UserController();
const restaurantController = new RestaurantController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/restaurant', restaurantController.create);
routes.get('/restaurant', restaurantController.get);
routes.delete('/restaurant/:id', restaurantController.delete);
routes.put('/restaurant/:id', restaurantController.update);


export default routes;