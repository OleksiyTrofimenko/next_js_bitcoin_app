import axios from 'axios';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = ({ bpi }) => (
  <Layout>
    <h1>BPI information</h1>
    <Prices bpiList={Object.values(bpi.bpi)} />
  </Layout>
);

// Get initial data for a component
Index.getInitialProps = async () => {
  const res = await axios(
    'https://api.coindesk.com/v1/bpi/historical/close.json'
  );

  return {
    bpi: res.data,
  };
};

export default Index;
