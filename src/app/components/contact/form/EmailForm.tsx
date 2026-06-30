import sendEmail from "@/service/emailService";
import './EmailForm.css'
import { useEffect } from "react";
import { Flex } from "antd";

const EmailForm: React.FC = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
      
    return (
      <form onSubmit={sendEmail} style={{width:'100%'}}>
        <Flex vertical className="form-flex">
            <div className="input-container">
                <p>Name</p>
                <input className="form-text-input" type="text" name="from_name" placeholder="Name" required />
            </div>
            <div className="input-container">
                <p>Email</p>
                <input className="form-text-input" type="email" name="from_email" placeholder="Email" required/>
            </div>
            <div className="input-container">
                <p>Message</p>
                <textarea className="form-text-area" name="message" placeholder="Message" required></textarea>
            </div>
            <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}></div>
            <button type="submit" className="submit-button">Send</button>
            <h3>or you can email me at ximvyge@gmail.com</h3>
        </Flex>
      </form>
    );
  };
  
export default EmailForm;