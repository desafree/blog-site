import HalfSection from '../components/about/HalfSection';
import Layout from '../components/ui/Layout';
import HalfLinks from '../components/about/HalfLinks';
import Newsletter from '../components/homepage/Newsletter';
import { useContext } from 'react';
import notificationContext from '../context/notificationsContext';
import Notification from '../components/shared/Notification';
import useScrollToTop from '../hooks/useScrollTop';

const AboutPage = () => {
  useScrollToTop();
  const notification = useContext(notificationContext).type;
  return (
    <>
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
