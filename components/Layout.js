import Head from 'next/head';
import NavBar from './NavBar';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Next.js app</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      />
    </Head>
    <NavBar />
    <div className="container">{children}</div>
  </div>
);

export default Layout;
