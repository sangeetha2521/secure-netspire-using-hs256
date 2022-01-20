const express = require('express');
const router=express.Router();

const { create ,categoryById, read,update, remove,list } = require('../controllers/category');

const { userById } = require('../controllers/user');

const { requireSignin } = require("../controllers/auth");

router.get('/category/:categoryId',requireSignin,read);
// then use this route for social login
router.post('/category/create/:userId',requireSignin,create );

router.put('/category/:categoryId/:userId',requireSignin,update );
router.delete('/category/:categoryId/:userId',requireSignin,remove);
router.param("categoryId",categoryById);
router.param("userId", userById);

router.get('/categories',list);
module.exports = router;
