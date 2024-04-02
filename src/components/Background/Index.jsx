import './styles.css';

function Background({ mobile, tablet, desktop }) {
  return (
      <div>
        <picture>
            <source className="bg" media="(min-width: 992px)" srcSet={desktop} />
            <source className="bg" media="(min-width: 768px)" srcSet={tablet} />
            <img className='bg object-fit-cover' src={mobile} alt="" />
        </picture>
      </div>
  )
}

export default Background