import {Router}from 'express';
import {getCustomers, createCustomer,updateCostumer, deleteCustomer} from '../controller/CustomerController'
import {getOrders,createOrder,getOrder} from '../controller/OrderController'

const router = Router();

//Product's routers
router.get('/getCustomers', getCustomers);
router.post('/createCustomer', createCustomer);
router.put('/updateCostumer/:id',updateCostumer);
router.get('/deleteCustomer/:id', deleteCustomer);

//Orders
router.get('/getOrders',getOrders);
router.post('/createOrder',createOrder)
router.get('/getOrder',getOrder)
 

export default router; 
