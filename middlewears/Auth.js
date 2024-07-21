import { User } from '../Model/User.js';
import jwt from 'jsonwebtoken';

export const Authenciate = async (req, res, next) => {
    try {
        const token = req.header('Auth');               
        if (!token) return res.json({ message: "please login" });

        const decode = jwt.verify(token, "qwertyuiop");
       
        const id = decode.userId;
        let user = await User.findById(id);
        if (!user) return res.json({ message: "user not exist" })
        req.user = user;
        next();
        
    } catch (error) {
         res.json({message:error})
    }

}