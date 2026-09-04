import './images.css'

const Images = ({ imgs }) => {

  return (
    <>
      {imgs.map((img, idx) => (
        <img 
          key={idx}
          className='image'
          src={img}
        />
      ))}
    </>
  )
}

export default Images
