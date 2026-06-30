import { Card, Flex, Tag } from 'antd';
import './WorkExperience.css';
import jsonData from '@/data/work_experience.json'
import { IWorkExperience } from '@/app/types/types';


const WorkExperience = () => {

    const experience: IWorkExperience[] = jsonData.map((item)=>({
        company: item.company,
        timePeriod: item.timePeriod,
        position: item.position,
        responsibilities: item.responsibilities,
        techStack: item.techStack
    }));

    const header = (company: string, position: string, period: string) => {
        return <div style={{paddingBottom: '3%'}}>
            <h2>{company}</h2>
            <h4 style={{color:'gray'}}>{position}</h4>
            <Tag color='blue'>{period}</Tag>
        </div>
    }

    return <>
        <h1>Work Experience</h1>
        <div className='scroll-container'>
            <Flex vertical className='flex-box'>
                {experience && experience.map((item:IWorkExperience, index: number) => {
                    return <div key={index} className='experience-container'>
                        <Card title={header(item.company ?? '', item.position ?? '', item.timePeriod ?? '')}>
                            {item.responsibilities && item.responsibilities.map((text: string, textIndex: number) => {
                                return <p key={textIndex}>- {text}</p>
                            })}
                            {item.techStack && item.techStack.map((tag: string, tagIndex: number) => {
                                return <Tag key={tagIndex} color='cyan'>{tag}</Tag>
                            })}
                        </Card>
                    </div>
                })}
            </Flex>
        </div>
    </>
}

export default WorkExperience;
