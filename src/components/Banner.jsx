import '../Style/components/banner.css'

export default function Banner({image, texte}) {
  return (
    <div className='banner'>
      <img className='banner_img' src={image} alt="Banner" />
      <h1 className='banner_txt'>{texte}</h1>
    </div>
  )
}
