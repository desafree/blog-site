import HalfSection from '../components/about/HalfSection';
import Layout from '../components/ui/Layout';
import HalfLinks from '../components/about/HalfLinks';
import Newsletter from '../components/homepage/Newsletter';
import { useContext } from 'react';
import notificationContext from '../context/notificationsContext';
import Notification from '../components/shared/Notification';
import useScrollToTop from '../hooks/useScrollTop';
import Disclaimer from '../components/shared/Disclaimer';
import Navigation from '../components/shared/Navigation';
import NavigationMobile from '../components/shared/NavigationMobile';
import Head from 'next/head';

const AboutPage = () => {
  useScrollToTop();
  const notification = useContext(notificationContext).type;
  return (
    <>
      <Head>
        <title>About me</title>
        <meta
          name="description"
          content="Personal project of Nicola De Sanctis"
        ></meta>
      </Head>
      <Disclaimer></Disclaimer>
      <Navigation></Navigation>
      <NavigationMobile></NavigationMobile>
      <Layout>
        <HalfSection></HalfSection>
        <HalfLinks></HalfLinks>
      </Layout>
      {notification.length > 0 && <Notification></Notification>}
      <Newsletter></Newsletter>
    </>
  );
};

export default AboutPage;
