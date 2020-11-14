import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import PublicHeader from './layouts/PublicHeader';
import PublicContent from './layouts/PublicContent';
import PublicFooter from './layouts/PublicFooter';

import ErrorBoundary from './components/ErrorBoundary';

const { Header, Content, Footer } = Layout;
const LayoutStyle = { height: '100vh' };
const BesideStyle = { backgroundColor: 'White' };
const ContentStyle = { flex: 1, backgroundColor: 'WhiteSmoke' }

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Layout style={LayoutStyle}>
          <Header style={BesideStyle}><PublicHeader /></Header>
          <Content style={ContentStyle}><PublicContent /></Content>  
          <Footer style={BesideStyle}><PublicFooter /></Footer>
        </Layout>
      </ErrorBoundary>
    </div>
  );
}

export default App;
