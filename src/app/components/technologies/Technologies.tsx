import { Card, Flex } from 'antd';
import './Technologies.css'
import jsonData from '@/data/technologies.json'
import { IImageData } from '@/app/types/types';


const { Meta } = Card;


const Technologies = () => {

    const backendList: IImageData[] = Object.entries(jsonData.backend).map(([key,value]) => ({
        name: key,
        link: value,
    }));

    const frontendList: IImageData[] = Object.entries(jsonData.frontend).map(([key,value]) => ({
        name: key,
        link: value,
    }));

    const testingList: IImageData[] = Object.entries(jsonData.testing).map(([key,value]) => ({
        name: key,
        link: value,
    }));

    const cicdList: IImageData[] = Object.entries(jsonData['ci-cd']).map(([key,value]) => ({
        name: key,
        link: value,
    }));

    const reportsList: IImageData[] = Object.entries(jsonData.reports).map(([key,value]) => ({
        name: key,
        link: value,
    }));

    const databaseList: IImageData[] = Object.entries(jsonData.database).map(([key,value]) => ({
        name: key,
        link: value,
    }));

    const cloudList: IImageData[] = Object.entries(jsonData.cloud).map(([key,value]) => ({
        name: key,
        link: value,
    }));

    return (
        <>
            <h1>Technologies</h1>
            <div className='scroll-container'>
                <Flex vertical className='flex-box'>
                    <h3>Backend</h3>
                    <div className='card-container'>
                        <Flex className='flex-horizontal'>
                            {backendList.map((item: IImageData, index: number) => {
                                return <div key={index}>
                                <Card 
                                className='detail-card'
                                cover={
                                    <div className='image-wrapper'>
                                        <img className='detail-image' alt={item.name} src={item.link} style={{width:"12vh"}}/>
                                    </div>
                                    }>
                                    <Meta title={item.name}/>
                                </Card>
                                </div>
                            })}
                        </Flex>
                    </div>
                    <h3>Frontend</h3>
                    <div className='card-container'>
                        <Flex className='flex-horizontal'>
                            {frontendList.map((item: IImageData, index: number) => {
                                return <div key={index}>
                                <Card 
                                className='detail-card'
                                cover={
                                    <div className='image-wrapper'>
                                        <img className='detail-image' alt={item.name} src={item.link} style={{width:"12vh"}}/>
                                    </div>
                                    }>
                                    <Meta title={item.name}/>
                                </Card>
                                </div>
                            })}
                        </Flex>
                    </div>
                    <h3>Testing</h3>
                    <div className='card-container'>
                        <Flex className='flex-horizontal'>
                            {testingList.map((item: IImageData, index: number) => {
                                return <div key={index}>
                                <Card 
                                className='detail-card'
                                cover={
                                    <div className='image-wrapper'>
                                        <img className='detail-image' alt={item.name} src={item.link} style={{width:"12vh"}}/>
                                    </div>
                                    }>
                                    <Meta title={item.name}/>
                                </Card>
                                </div>
                            })}
                        </Flex>
                    </div>
                    <h3>CI/CD</h3>
                    <div className='card-container'>
                        <Flex className='flex-horizontal'>
                            {cicdList.map((item: IImageData, index: number) => {
                                return <div key={index}>
                                <Card 
                                className='detail-card'
                                cover={
                                    <div className='image-wrapper'>
                                        <img className='detail-image' alt={item.name} src={item.link} style={{width:"12vh"}}/>
                                    </div>
                                    }>
                                    <Meta title={item.name}/>
                                </Card>
                                </div>
                            })}
                        </Flex>
                    </div>
                    <h3>Reports</h3>
                    <div className='card-container'>
                        <Flex className='flex-horizontal'>
                            {reportsList.map((item: IImageData, index: number) => {
                                return <div key={index}>
                                <Card 
                                className='detail-card'
                                cover={
                                    <div className='image-wrapper'>
                                        <img className='detail-image' alt={item.name} src={item.link} style={{width:"12vh"}}/>
                                    </div>
                                    }>
                                    <Meta title={item.name}/>
                                </Card>
                                </div>
                            })}
                        </Flex>
                    </div>
                    <h3>Database</h3>
                    <div className='card-container'>
                        <Flex className='flex-horizontal'>
                            {databaseList.map((item: IImageData, index: number) => {
                                return <div key={index}>
                                <Card 
                                className='detail-card'
                                cover={
                                    <div className='image-wrapper'>
                                        <img className='detail-image' alt={item.name} src={item.link} style={{width:"12vh"}}/>
                                    </div>
                                    }>
                                    <Meta title={item.name}/>
                                </Card>
                                </div>
                            })}
                        </Flex>
                    </div>
                    <h3>Cloud Platforms</h3>
                    <div className='card-container'>
                        <Flex className='flex-horizontal'>
                            {cloudList.map((item: IImageData, index: number) => {
                                return <div key={index}>
                                <Card 
                                className='detail-card'
                                cover={
                                    <div className='image-wrapper'>
                                        <img className='detail-image' alt={item.name} src={item.link} style={{width:"12vh"}}/>
                                    </div>
                                    }>
                                    <Meta title={item.name}/>
                                </Card>
                                </div>
                            })}
                        </Flex>
                    </div>
                </Flex>
            </div>
        </>
    )
}

export default Technologies;
