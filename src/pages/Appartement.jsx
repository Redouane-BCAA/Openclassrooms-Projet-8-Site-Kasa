import Header from '../components/Header'
import Footer from '../components/Footer'
// import Error404 from "./Error404"
import Slideshow from '../components/slideshow'
import AppartementCard from '../components/AppartementCard'
import Datas from '../datas/data.json'
import { useParams, Navigate } from 'react-router-dom'


export default function Appartement() {

  const { id } = useParams(); 
  const apptSelected = Datas.find((appartement) => appartement.id === id)
  const apptSlideImage = apptSelected.pictures;

  // if(!apptSelected) {return <Navigate to={Error404}  />}

  return (
    <div>
      <Header/>
      <Slideshow image={apptSlideImage} />
      <AppartementCard appartement={apptSelected}/>
      <Footer/>

    </div>
  )
}
