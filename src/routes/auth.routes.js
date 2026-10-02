import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.get("/verify", authMiddleware.verifyIdToken, (req, res) => {
console.log("-----")
    return res.json({
        status: "OK",
        message: "Authentication successful.",
        user: res.locals.user
    });
});

export default router;