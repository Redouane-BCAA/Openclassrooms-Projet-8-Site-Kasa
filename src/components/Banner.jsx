import '../Style/components/banner.css'
import classNames from "classnames"


export default function Banner({image, texte, className}) {
  return (
    <div className={classNames(className, "banner")}>
      <img className='banner_img' src={image} alt="Banner" />
      <h1 className='banner_txt'>{texte}</h1> 
    </div>
  )
}
