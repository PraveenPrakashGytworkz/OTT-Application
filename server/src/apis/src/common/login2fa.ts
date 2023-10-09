import { baseTemplateEmail } from "./base.template.email"

let otp;
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
        {{otp}}
    </div>
</div>
<!-- Content End -->
`;
export const login2faEmail = baseTemplateEmail.replace('{{contentBody}}', temp);