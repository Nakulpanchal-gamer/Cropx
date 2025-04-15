    const userModel = require("../models/UserModels")
    const roleModel = require("../models/RoleModels");
    const bcrypt = require("bcrypt")
    const mailUtil = require('../utils/MailUtil')
    const jwt = require("jsonwebtoken")
    const secret = "secret"

    const loginUser = async (req, res) => {
        try {
            const  email = req.body.email;
            const  password = req.body.password;

            const foundUserFromEmail = await userModel.findOne({ email: email }).populate('roleId')

            if (!foundUserFromEmail) {
                console.log("Email Not Found");
                return res.status(404).json({ message: "Email not found" });
            }   
            if (!foundUserFromEmail.roleId) {
                console.warn("⚠️ roleId is missing in user data!");
            } else {
                console.log("✅ roleId:", foundUserFromEmail.roleId);
            }


            const isMatch = await bcrypt.compare(password, foundUserFromEmail.password);
            console.log("Password Match Result:", isMatch);

            if (!isMatch) {
                console.log("Invalid Credentials");
                return res.status(401).json({ message: "Invalid credentials" });
            }

            console.log("Login Successful");
            return res.status(200).json({
                message: "Login success",
                data: foundUserFromEmail
            });

        } catch (error) {
            console.error("🚨 Error during login:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    };


    const signUp = async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            req.body.password = hashedPassword;
            const createdUser = await userModel.create(req.body);
            // await mailUtil.sendingMail(createdUser.email,"welcome to eadvertisement","this is welcome mail")


            res.status(201).json({
                message: "User created successfully.",
                data: createdUser
            });

        } catch (err) {
            console.error("🚨 Signup Error:", err);
            res.status(500).json({
                message: "Error",
                data: err
            });
        }
    };

    const addUser = async (req ,res) => {
        const addUserData = await userModel.create(req.body)
        res.json({
            message:"User Added",
            data:addUserData
        })
    }

    const deleteUser = async(req,res) => {
        const deleteUserData = await userModel.findByIdAndDelete(req.params.id)
        res.json({
            message:"User Deleted",
            data: deleteUserData
        })
    }

    const findUser = async(req,res) => {
        const findUserData = await userModel.findById(req.params._id)
        res.json({
            message:"User Found",
            data: findUserData
        })
    }

    // const getAllUser = async(req, res) => {
    //     const getAllUserData = await userModel.find().populate("roleId")
    //     res.json({
    //         message:"Data Fetched",
    //         data: getAllUserData
    //     })
    // }
    const getAllUser = async (req, res) => {
        try {
            const getAllUserData = await userModel.find().populate("roleId");
            console.log("Fetched Users Data:", getAllUserData);  // Debugging log
            
            res.json({
                message: "Data Fetched",
                data: getAllUserData  // Ensure this is an array
            });
        } catch (err) {
            console.error("Error fetching users:", err);
            res.status(500).json({ message: "Error fetching users" });
        }
    };
    

    const forgotPassword = async (req,res ) => {
        const email = req.body.email
        const foundUser = await userModel.findOne({ email: email})
    
        if(foundUser){ 
            const token = jwt.sign(foundUser.toObject(), secret)
            console.log(token)
            const url = `http://localhost:5173/resetpassword?token=${token}`
            const mailContent = `<html>
                                    <a href="${url}">Reset Password</a>
                                </html>`
            await mailUtil.sendingMail(foundUser.email, "reset Password", mailContent)
            res.json({
                message: "reset password link sent to mail"
            })
        }
        else{
            res.json({
                message :"user not found register first..."
            })
        }
    }
    

const resetPassword = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // Extract token from headers
        const { password } = req.body;

        console.log("🟢 Received Token:", token);
        console.log("🟢 New Password:", password);

        if (!token || !password) {
            return res.status(400).json({ message: "Token and password are required." });
        }

        let decoded;
        try {
            decoded = jwt.verify(token, "secret");
            console.log("✅ Decoded Token:", decoded);
        } catch (error) {
            console.error("❌ Invalid or expired token:", error.message);
            return res.status(400).json({ message: "Invalid or expired token." });
        }

        const user = await userModel.findById(decoded._id); // Ensure correct ID
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        
        console.log("✅ Password Updated Successfully");
        res.json({ message: "Password updated successfully!" });

    } catch (error) {
        console.error("❌ Server Error in Password Reset:", error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

const getTotalUserCount = async (req, res) => {
    try {
      const totalUsers = await userModel.countDocuments();
      res.status(200).json({ totalUsers });
    } catch (err) {
      console.error("Error fetching user count:", err);
      res.status(500).json({ message: "Error fetching user count" });
    }
  };
  
 
  
  
  
  

    module.exports = {
                    addUser,
                    deleteUser,
                    findUser,
                    getAllUser,
                    signUp,
                    loginUser,
                    resetPassword,
                    forgotPassword,
                    getTotalUserCount,
    }