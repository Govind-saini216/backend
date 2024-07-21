import {User} from '../Model/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// register 
 const Register = async (req,res) =>{
            // req.body se name gamil password ki value prapt ki
        const { name, password, gmail } = req.body;
        // cheack the user register hy ya nhi 
        try {
            const user = await User.findOne({gmail});
            if (user) {
                return res.json({ message: "user register all ready" });                
            } else {
                const hashpass = await bcrypt.hash(password,10);             
                // data base my user ki deatils send krna
                const user = await User.create({ name, password:hashpass, gmail });
                res.json({ message: "user register successfully...", user });
            }
        } catch (error) {
            res.json({message:error});
        }
    }

    // Login

     const login = async (req,res)=>{
        const{gmail,password} = req.body;
        try {
            let user = await User.findOne({gmail});
            if(!user) return res.json({message:"user not exist..!"});

            const validpass = await bcrypt.compare(password,user.password);
            if(!validpass) return res.json({message:"invalid credentials"});

            // make jwt token
            const token = jwt.sign({userId:user._id},"qwertyuiop",{expiresIn:'1d'});

            res.json({message:`welcome to ${user.name}`,token})

        } catch (error) {
            res.json({message:error});
        }
    }

    const profile = async(req,res)=>{
        try {
            res.json({user:req.user})
        } catch (error) {
            console.log("this is profile error" , error)
        }
    } 

export default { Register, login, profile }