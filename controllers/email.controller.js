const nodemailer = require("nodemailer");
const { OAuth2Client } = require("google-auth-library");
require("dotenv").config();
const GOOGLE_MAILER_CLIENT_ID = process.env.GOOGLE_MAILER_CLIENT_ID;
const GOOGLE_MAILER_CLIENT_SECRET = process.env.GOOGLE_MAILER_CLIENT_SECRET;
const GOOGLE_MAILER_REFRESH_TOKEN = process.env.GOOGLE_MAILER_REFRESH_TOKEN;
const ADMIN_EMAIL_ADDRESS = process.env.ADMIN_EMAIL_ADDRESS;

function isValidPhoneNumber(phoneNumber) {

  const phoneRegex = /^\d{10}$/;

  return phoneRegex.test(phoneNumber);
}

function isValidEmail(email) {
  // Sử dụng regex để kiểm tra chuỗi
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Sử dụng test() để kiểm tra xem chuỗi có khớp với regex hay không
  return emailRegex.test(email);
}

class EmailController {
  async sendEmail(req, res) {
    if (req.body !== null) {
      const { name, phone, email, year, country, whyKnowUs } = req.body;
      

      if(isValidEmail(email) || isValidPhoneNumber(phone)){
        const myOAuth2Client = new OAuth2Client(
          GOOGLE_MAILER_CLIENT_ID,
          GOOGLE_MAILER_CLIENT_SECRET
        );
        myOAuth2Client.setCredentials({
          refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
        });
        const myAccessTokenObject = await myOAuth2Client.getAccessToken();
        const myAccessToken = myAccessTokenObject?.token;
        const transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: ADMIN_EMAIL_ADDRESS,
            clientId: GOOGLE_MAILER_CLIENT_ID,
            clientSecret: GOOGLE_MAILER_CLIENT_SECRET,
            refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
            accessToken: myAccessToken,
          },
        });
        const mailOptions = {
          to: "tmtuan5389@gmail.com", // Gửi đến ai?
          subject: "Khách Hàng Tân Du Cần Hỗ Trợ", // Tiêu đề email
          html: `<h3>Tên khách hàng: ${name}</h3>  <h3>Số điện thoại: ${phone}</h3> <h3>email: ${email}</h3> <h3>năm học dự kiến: ${year}</h3> <h3>đất nước muốn du học: ${country}</h3> <h3>vì sao bạn biết về Tân Du: ${whyKnowUs}</h3>`, // Nội dung email
        };
  
        await transport.sendMail(mailOptions, (error) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ error: "Error sending email" });
          }
          res.status(200).json({ message: "Email sent successfully" });
        });
      }
      else{
        res.status(200).json({ message: "Email sent successfully" });
      }
    }
  }
}

module.exports = new EmailController();
