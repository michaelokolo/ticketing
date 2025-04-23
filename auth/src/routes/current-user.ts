import express from 'express';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  if (!req.session?.jwt) {
    res.send({ currentUser: null });
    return;
  }
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
    res.send({ currentUser: payload });
  } catch (err) {
    res.send({ currentUser: null });
    return;
  }
});

export { router as currentuserRouter };
