import { Collapse, Layout, Space, Radio, Button, Divider, Typography } from 'antd'
import { useParams } from 'react-router';
import { useState } from 'react'
import useFetch from '../hooks/useFetch'
const { Panel } = Collapse;
const { Content, Sider } = Layout;
const { Text, Paragraph, Link } = Typography;

const radioStyle = {
    color: 'black',
};  

function ChapterDetail(props) {
    const [value, setValue] = useState(0);
    const [buttonDisable, setButtonDisable] = useState(true);
    const [answerCheck, setAnswerCheck] = useState(false);
    let num = 1

    const onRadioChange = e => {
        console.log(e)
        setValue(e.target.value)
        setButtonDisable(false)
    }

    const onButtonClick = () => {
        setAnswerCheck(true)
    }

    const AnswerDisplay = () => {
        let num = 1
        return (
            <Space direction="vertical" size="middle">
                <Divider />
                <Space>
                    <Text> 정답 : ({props.data.answer}) </Text>
                </Space>
                <Space>
                    <Text> 해설 : {props.data.explanation} </Text>
                </Space>
                <Space direction="vertical">
                    <Text> 참고자료 </Text>
                    <Paragraph>
                        <ul>
                            {props.data.references && props.data.references.map(reference => {
                                let url = reference[Object.keys(reference)]
                                return (
                                    <li key={"reference_"+num++}>
                                        <Link href={url} target="_blank">{url}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </Paragraph>
                </Space>
            </Space>
        )
    }

    return (
        <Space direction="vertical" size="middle">
            <Radio.Group name="example_radios" onChange={onRadioChange} value={value}>
                <Space direction="vertical">
                    {props.data.choices && props.data.choices.map(example => {
                        return (
                            <Radio value={num} key={"example_"+num} className={"example_"+num} style= {radioStyle}> {num++}. {example} </Radio>
                        )
                    })}
                </Space>
            </Radio.Group>
            <Button type="primary" disabled={buttonDisable} onClick={onButtonClick}>정답 확인</Button>
            {answerCheck === true ? <AnswerDisplay /> : null}
            
        </Space>
    )
}

function ChapterPage() {
    const { category, chapter } = useParams()
    const url = category + "/" + chapter + ".json"

    const data = useFetch(url)
    let num = 1

    return (
        <Layout>
            <Content>
                <Collapse>
                    {data.questions && data.questions.map(question => (
                        <Panel header={question.question} key={"question_" + num++}>
                            <ChapterDetail data={question}/>
                        </Panel>
                    ))}
                </Collapse>
            </Content>
            <Sider
                style={{
                    
                    backgroundColor: 'yellow'
                }}
            >
                    광고 넣자
            </Sider>
        </Layout>
        
    )
}

export default ChapterPage