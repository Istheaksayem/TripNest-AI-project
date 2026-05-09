"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
// User routes
router.get('/profile/:id', user_controller_1.getProfile);
router.put('/profile/:id', user_controller_1.updateProfile);
exports.default = router;
