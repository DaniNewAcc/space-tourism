import { Link } from 'react-router-dom';
import Background from '../../components/Background/Index';
import mobile from '/home/background-home-mobile.jpg';
import tablet from '/home/background-home-tablet.jpg';
import desktop from '/home/background-home-desktop.jpg';
import './styles.css';

const Home = () => {
  return (
    <>
    <Background mobile={mobile} tablet={tablet} desktop={desktop} />
    <main className="position-relative z-1 d-flex flex-column flex-lg-row align-items-center justify-content-md-center justify-content-lg-between">
      <section className='home__wrapper'>
        <p className='home__subtitle'>SO, YOU WANT TO TRAVEL TO</p>
        <h1 className='home__title'>SPACE</h1>
        <p className='description'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section className='explore__wrapper'>
        <div className="circle d-flex align-items-center justify-content-center">
          <Link to='/Destination' className='explore'>EXPLORE</Link>
        </div>
      </section>
    </main>
    </>
  );
};

export default Home;
