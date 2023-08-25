import Header from '../components/Header'
import Footer from '../components/Footer'
import Slideshow from '../components/slideshow'
import AppartementCard from '../components/AppartementCard'
import Datas from '../datas/data.json'
import { useParams, Navigate } from 'react-router-dom'


export default function Appartement() {


  const { id } = useParams(); 
  console.log(id)
  const apptSelected = Datas.find((appartement) => appartement.id === id)
  if(!apptSelected) {return <Navigate to="/notfound" />}

  const apptSlideImage = apptSelected.pictures;
  console.log(apptSelected)


  return (
    <div>
      <Header/>
      <Slideshow image={apptSlideImage} />
      <AppartementCard appartement={apptSelected}/>
      <Footer/>

    </div>
  )
}
