import { Collapse, Typography } from 'antd';
import { Link } from 'react-router-dom'
import useFetch  from '../hooks/useFetch';

const { Panel } = Collapse;
const { Paragraph } = Typography;

function ChapterList(props) {
    const contents = useFetch(props.data.link)
    
    // console.log("ChapterList")
    // console.log(contents)

    let num = 1

    return (
        <Paragraph>
            <ul>
                {contents && contents.map(content => {
                    let link = content.link.split('.', 1)
                    return (
                        <li key={"link_"+num++}>
                            <Link to={link[0]}>{content.content}</Link>
                        </li>
                    )
                })}
            </ul>
        </Paragraph>
    )
}

function MainPage() {
    const contents = useFetch("/contents.json")
    let num = 1

    return (
        <Collapse className="content_collapse">
            {contents && contents.map(content => (
                <Panel header={content.content} key={"panel_"+num}>
                    <ChapterList key={"chapterList_"+num++} data={content} />
                </Panel>
            ))}
            {/* {contents.map(content => {
                let link = content.link.split('.', 1)

                return (
                    <Panel header={content.content} key={num++}>
                        <Link to={link[0]}>{content.content}</Link>
                    </Panel>
                )
            })} */}
        </Collapse>
    )
}

export default MainPage