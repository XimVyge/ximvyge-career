import { IEducation } from '@/app/types/types';
import './Education.css';
import jsonData from '@/data/education.json'
import { Card, Flex, Tag } from 'antd';

const Education = () => {

    const education: IEducation[] = jsonData.map((item)=>({
        institution: item.institution,
        timePeriod: item.timePeriod,
        mentions: item.mentions
    }));

    const header = (institution: string, period: string) => {
        return <div style={{paddingBottom: '3%'}}>
            <h2>{institution}</h2>
            <Tag color='blue'>{period}</Tag>
        </div>
    }

    return <>
        <h1>Education</h1>
        <div className='scroll-container'>
            <Flex vertical className='flex-box'>
                {education && education.map((item:IEducation, index: number) => {
                    return <div key={index} className='experience-container'>
                        <Card title={header(item.institution ?? '', item.timePeriod ?? '')}>
                            {item.mentions && item.mentions.map((text: string, textIndex: number) => {
                                return <p key={textIndex}>- {text}</p>
                            })}
                        </Card>
                    </div>
                })}
            </Flex>
        </div>
    </>
}

export default Education;
