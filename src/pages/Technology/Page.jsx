import { useState } from 'react';
import data from '../../data.json';
import Background from '../../components/Background/Index';
import mobile from '/technology/background-technology-mobile.jpg';
import tablet from '/technology/background-technology-tablet.jpg';
import desktop from '/technology/background-technology-desktop.jpg';
import './styles.css';

const Technology = () => {
  const [current, setCurrent] = useState(0)
  const { name, images, description } = data.technology[current];
  return (
    <>
    <Background mobile={mobile} tablet={tablet} desktop={desktop} />
    <main className='position-relative z-1 d-flex flex-column justify-content-center'>
        <section className="wrapper d-flex align-items-center justify-content-center justify-content-md-start gap-3">
          <span className='number'>03</span>
          <h3 className='title'>SPACE LAUNCH 101</h3>
        </section>
        <section className='technology d-lg-flex align-items-lg-center'>
          <picture className='technology__img order-lg-last ms-lg-auto'>
            <source media="(min-width: 992px)" srcSet={images.portrait} />
            <img className='object-fit-contain' src={images.landscape} alt="" />
          </picture>
          <div className='indicator-wrapper d-flex flex-lg-column justify-content-center gap-lg-3'>
            {data.technology.map((d, index) => {
              return (
                <button className={`technology__btn${name === d.name  ? ' active__btn' : ''}`} key={d.name} onClick={() => setCurrent(index)}>{index + 1}</button>
              )
            })}
          </div>
          <div className='technology__details text-lg-start'>
            <span>THE TERMINOLOGY...</span>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </section>
    </main>
    </>
  )
}

export default Technology;
