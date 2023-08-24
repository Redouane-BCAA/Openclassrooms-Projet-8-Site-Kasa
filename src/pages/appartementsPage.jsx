import Header from '../components/Header'
import Footer from '../components/Footer'
import Slideshow from '../components/slideshow'
import Datas from '../datas/data.json'
import { useParams } from 'react-router-dom'

export default function AppartementsPage() {

  const { id } = useParams(); 
  
  const apptSelected = Datas.find((appartement) => appartement.id === id)

  const apptSlideImage = apptSelected.pictures;

  return (
    <div>
      <Header/>
      <Slideshow image={apptSlideImage} />       
      <Footer/>

    </div>
  )
}
