
import { generateSecret, generateOTPCode } from "../common/otp";
import nodemailer from "nodemailer";
import User from "../../../database/models/user"
import speakeasy from "speakeasy";
const { compareSync, hashSync  } = require('bcrypt');
const jwt = require('jsonwebtoken');
import { login2faEmail } from "../common/login2fa";
import { baseTemplateEmail } from "../common/base.template.email";

class AuthController{

    async register(req: any, res:any){
        const encrypted_password= hashSync(req.body.password,10);
        const user=User.create(
            {
                username : req.body.username,
                email : req.body.email,
                password : encrypted_password,
                phoneNumber: req.body.phoneNumber,
                DOB: req.body.DOB,
                gender: req.body.gender,
                role: req.body.role,
                isAccepted: req.body.role =='user' || req.body.role =='superAdmin' ? true: false
            }
        );
        return user;
    }

    async login(req:any , res:any){
        

        const user= await User.findOne({email : req.body.email});

        if(!user){
            return res.status(401).json({
                msg: "Email not found"
            });
        }

        if(compareSync(req.body.password, user.password)==false){
            return res.status(401).json({
                msg: "Password Incorrect"
            });
        }

        if(user.role=='distributor' && user.isAccepted==false){
            return res.status(401).json({
                msg: "distributor is not accepted"
            });
        }
        
        
        const payload={
            username: user.username,
            email : user.email
        };
        var token = jwt.sign(payload, 'weljmwieuilsdcpoavqwebcskdiutregbc'
            ,{expiresIn: "3d"});
        return res.status(200).json({
            token :  token
        });
        
    }

    async sendOTP(req: any, res: any){

        const secret = generateSecret();
        const OTP = generateOTPCode(secret);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: '8glivofficial@gmail.com',
              pass: 'bxww dati zftn koeb',
            },
          });
          
          // Compose the email
          
          const temp = `
            <!-- Content Start -->
            <div>
                <div style=" text-align: center;top: 416px;padding: 27px;text-align: center;font-family: 'Poppins',sans-serif !important;margin: auto;color: #354052;opacity: 100%;line-height: 52px;font-size: 36px;font-weight: 700;">
                    OTP Verification Code 
                </div>
                <div style=" text-align: center;padding: 10px;top: 549px;text-align: center;font-family: 'Poppins',sans-serif !important;margin: auto;color: #354052;opacity: 100%;line-height: 26px;font-size: 18px;font-weight: 500;">
                Please enter this OTP in the designated field on the login page to proceed with your login. 
                <div style="text-align: center;font-weight:bold; line-height: 80px; ">
                        This code will expire within 10 min
                    </div> 
                </div>
                <div style="text-align: center;font-size: 72px;line-height: 52px;  font-family: 'Poppins',sans-serif !important;  font-weight: 700;color:#354052; padding-bottom:37px">
                    ${OTP}
                </div>
            </div>
            <!-- Content End -->
            `;
          const login2faEmail = baseTemplateEmail.replace('{{contentBody}}', temp);
          const mailOptions = {
            from: '8glivofficial@gmail.com',
            to: req.body.toMail,
            subject: 'Your OTP Code',
            html: login2faEmail, // Include the OTP here
          };

                // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
            return res.status(500).json({
                error: error.message
            });
            } else {
                return res.status(200).json({
                    secret
                })
            }
        });
    }

    async verifyOTP(req: any,res: any){

        try{
            const { secret, otp, email } = req.body;
        // Verify the OTP code with (secret + token + step + encoding)
        const verified = speakeasy.totp.verify({
            secret,
            encoding: 'base32',
            token: otp,
            step: 600 // OTP is valid for 600 seconds
        });

        if (verified) {
            // Update the emailVerified field
            return res.status(200).json({ message: 'OTP is valid' });
        } else {
            res.status(400).json({ message: 'Invalid OTP' });
        }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to verify OTP' });
        }
    }
}
export default new AuthController();

