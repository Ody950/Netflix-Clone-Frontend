
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './FavList.css'
import Button from 'react-bootstrap/Button';
import ModalUpdat from '../ModalUpdat/ModalUpdat';
import axios from 'axios';

function FavList() {

  const [favArr, setFavArr] = useState([]);
  const [updateMov, setupdateMov] = useState(false);
  const [passData, setpassData] = useState([]);

  const [newArr,setNewArr] = useState([])

 const funUpdateMov = (item) => {
  setupdateMov(true)
  setpassData(item)

 }


 const handleClose = () => {
  setupdateMov(false)
}


  const getFavMovie = () => {
    const serverURL = `http://localhost:3023/favMovies`;
    fetch(serverURL)
      .then((response) => {
        response.json()
          .then(data => {
            setFavArr(data)
            console.log(data)
          })
      })
  }




  const fundeleteMov  = (item) => {
    
    console.log('xxxxxxxxxxxxxxxx', item)
   const serverURL = `http://localhost:3023/DELETE/${item}`;
   console.log('yyyyyyyyyyyyyyyyyyyyyy', item)
   axios.delete(serverURL)
   .then(response=>{
    getFavMovie()
     console.log(response.data)
     
   })
   .catch((error)=>{
     console.log(error)
   })
   
   }
  









  const takeNewDataFromUpdatedModal = (arr)=>{
    setNewArr(arr)
}
  useEffect(()=>{
    setNewArr(favArr)
},[favArr])

useEffect(() => {
  getFavMovie()
}, [])

  
    const path = 'https://image.tmdb.org/t/p/w500';

  return (

    <>

      <h1>FavList</h1>
      {newArr.map(item => {
        return (
          <section key={item.id} className='Movie1'>
          <Card className='card1' key={item.id}>
            <Card.Img className='image1' variant="top" src={path + item.poster_path} />
            <Card.Body>
              <Card.Title className='text1'>{item.title}</Card.Title>
              <Card.Text >
                <p className='text2'>{item.note}</p>
              </Card.Text>
              <Button  variant="primary" onClick={()=> {funUpdateMov(item)}}>Update</Button>
              
              <Button  variant="primary"  onClick={()=> {fundeleteMov(item.id)}}>Delete</Button>
            </Card.Body>
          </Card>
          </section>
        )
      })}

      <ModalUpdat   updateMov={updateMov} passData={passData} handleClose={handleClose} takeNewDataFromUpdatedModal={takeNewDataFromUpdatedModal}/>
    </>
  )
}

export default FavList;