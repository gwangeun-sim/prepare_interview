import './App.css';
import Banner from './component/Banner'
import MainPage from './component/MainPage'
import ChapterPage from './component/ChapterPage';
import { Layout } from 'antd';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Layout className="layout">
            <Banner />
            <Layout.Content className="content">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/:category/:chapter" element={<ChapterPage />} />
                    {/* <Route path="/network/*" element={<ChapterPage />} />
                    <Route path="/ds/*" element={<ChapterPage />} /> */}
                    <Route path="/*" element={<p>Not Found</p>} />
                </Routes>
            </Layout.Content>
        </Layout>
    </BrowserRouter>
  );
}

export default App;