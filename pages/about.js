import Link from 'next/link'
import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <h1>About Page</h1>
    <div class="container">...All cool stuff at <Link href="/">home</Link> page :)</div>
  </Layout>
);

export default About;
