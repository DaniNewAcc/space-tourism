import { useState } from 'react';
import data from '../../data.json';
import Background from '../../components/Background/Index';
import mobile from '../../assets/destination/background-destination-mobile.jpg';
import tablet from '../../assets/destination/background-destination-tablet.jpg';
import desktop from '../../assets/destination/background-destination-desktop.jpg';
import './styles.css';


const Destination = () => {
    const [current, setCurrent] = useState(0);
    const { name, images, description, distance, travel } = data.destinations[current];
    return (
        <>
        <Background mobile={mobile} tablet={tablet} desktop={desktop} />
        <main className='position-relative z-1 d-flex flex-column justify-content-center'>
            <section className="wrapper d-flex align-items-center justify-content-center justify-content-md-start me-0 gap-3">
                <span className='number'>01</span>
                <h3 className='title'>PICK YOUR DESTINATION</h3>
            </section>
            <section className='d-flex flex-column flex-lg-row justify-content-lg-center'>
                <picture className='destination'>
                    <img className='object-fit-scale' src={images.png} alt={name} />
                </picture>
                <div className='destination__wrapper d-flex flex-column'>
                    <ul className='nav-group d-flex justify-content-center justify-content-lg-start px-0'>
                    {data.destinations.map((d, index) => {
                        return (
                        <li className={`destination__nav-link${current === index  ? ' active__link' : ''}`} key={index} onClick={() => setCurrent(index)}><a>{d.name}</a></li>
                        )
                    })}
                    </ul>
                    <div className='destination__details d-flex flex-column align-items-lg-start'>
                        <h1 className='destination__name'>{name}</h1>
                        <p className='destination__desc'>{description}</p>
                    </div>
                    <div className='details-wrapper d-flex flex-column flex-md-row justify-content-center justify-content-lg-start'>
                        <div className='destination__distance'>
                            <small>AVG. DISTANCE</small>
                            <p>{distance}</p>
                        </div>
                        <div className='destination__travel'>
                            <small>EST. TRAVEL TIME</small>
                            <p>{travel}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
  }
  
export default Destination
