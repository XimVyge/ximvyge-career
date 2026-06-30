import { Col, Row, Image } from "antd";
import Card from "antd/es/card/Card";
import React from "react";

export interface DetailCardProps {
    imageSource: string;
    title: string;
    details: string;
}

const DetailCard = (props : DetailCardProps) => {

    const {imageSource, title, details} = props;

    const style = {borderColor:'black'}

    return(<>
        <Card style={style} hoverable>
            <Row>
                <Col span={8}>
                <Image height={"150px"} style={{borderRadius:'20px'}} src={imageSource}/>
                </Col>
                <Col span={2}></Col>
                <Col span={10}>
                    <Card style={style}>
                        <Card style={style}>
                            <Row><h3>{title}</h3></Row>
                        </Card>
                        <Row><p>{details}</p></Row>
                    </Card>
                </Col>
            </Row>
        </Card>
    </>)

}

export default DetailCard;
