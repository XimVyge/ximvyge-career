import emailjs from "@emailjs/browser"
import { notification } from 'antd';

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? '',
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ?? ''
    ).then(
        (result: any)=> {
            alert(
                "Your message has been successfully sent. You're gonna hear from me soon!"
            );
        },
        (error:any) => {
            console.log(error.status);
            alert(
                error.status === 400 ? "Please answer the CAPTCHA" : "Something went wrong while sending the message"
            );
        }
    );

}

export default sendEmail;
