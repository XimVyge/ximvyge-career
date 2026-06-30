import { Button, Col, Flex, Form, Input, Row } from 'antd';
import './Contact.css'
import EmailForm from './form/EmailForm';

const Contact = () => {

    const [form] = Form.useForm();

    return <>
        <h1>Contact</h1>
        <div className='scroll-container'>
            <Row>
                <Col span={6}></Col>
                <Col span={12}>
                    <EmailForm />
                </Col>
                <Col span={6}></Col>
            </Row>
            
        </div>
    </>

}

export default Contact;
