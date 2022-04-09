import './Banner.css';
import { Layout, Image, Avatar, Input, Space, Typography } from 'antd';
import ReactStoreBadges from 'react-store-badges';
const { Header } = Layout;
const { Search } = Input;
const { Link } = Typography;

function Banner() {
    return (
        <Header style={{width: '100%', height: '15%', color: 'white'}}>
            <div className="logo">
                <Link href={'/'}>
                    <Avatar shape="square" size={58} src={<Image preview={false} src="https://raw.githubusercontent.com/hexoul/prepare-interview-data/master/logo.png" />}> /</Avatar>
                </Link>
            </div>
            <div className="search">
                <Search size="middle" placeholder="input search text" enterButton style={{width: '30em', margin: '2vh 2vh', float: "left"}}/>
            </div>
            <div className="badges">
                <Space>
                    <ReactStoreBadges
                        platform={'ios'}
                        url={'https://apps.apple.com/us/app/%EC%98%A4%EB%8A%98%EB%B6%80%ED%84%B0-%EC%A0%84%EA%B3%B5%EB%A9%B4%EC%A0%91/id1526993862?itsct=apps_box&amp;itscg=30200'}
                        locale={'en-us'}
                        target="_blank"
                    />

                    <ReactStoreBadges
                        platform={'android'}
                        url={'https://www.google.com/url?q=https://play.google.com/store/apps/details?id%3Dcom.whatseries.prepareinterview&sa=D&ust=1610863262712000&usg=AFQjCNEYBMtxK0WGw5vHNCGGxbE8Wh_BRQ&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'}
                        locale={'en-us'}
                        target="_blank"
                    />
                </Space>
            </div>
        </Header>
    )
}

export default Banner