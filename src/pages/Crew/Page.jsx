import { useState } from 'react';
import data from '../../data.json';
import Background from '../../components/Background/Index';
import mobile from '/crew/background-crew-mobile.jpg';
import tablet from '/crew/background-crew-tablet.jpg';
import desktop from '/crew/background-crew-desktop.jpg';
import './styles.css';

const Crew = () => {
  const [current, setCurrent] = useState(0);
  const { name, images, role, bio } = data.crew[current];

    return (
      <>
      <Background mobile={mobile} tablet={tablet} desktop={desktop} />
      <main className='position-relative z-1 d-flex flex-column justify-content-center'>
        <div className='wrapper d-flex align-items-center justify-content-center justify-content-md-start gap-3'>
            <span className='number'>02</span>
            <h3 className='title'>MEET YOUR CREW</h3>
        </div>
        <section className='d-flex flex-column flex-lg-row justify-content-lg-between'>
          <div className="crew-img order-md-last">
            <picture className='img-wrapper mx-4 mx-md-auto mx-xxl-0 ms-lg-auto'>
              <img className='object-fit-cover mx-auto mx-lg-0 ms-lg-auto' src={images.png} alt="" />
            </picture>
          </div>
          <div className='content-wrapper d-flex flex-column'>
            <div className='gallery d-flex justify-content-center justify-content-lg-start'>
            {data.crew.map((d, index) => {
              return (
                <span className={`gallery__indicator${current === index  ? ' active__indicator' : ''}`} key={d.name} onClick={() => setCurrent(index)}></span>
              )
            })}
            </div>
            <div className="crew__member order-md-first text-lg-start">
              <span className='member__role'>{role}</span>
              <h1 className='member__name'>{name}</h1>
              <p className='member__bio'>{bio}</p>
            </div>
          </div>
        </section>
      </main>
      </>
    )
}
  
export default Crew