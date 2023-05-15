

import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './FavList.css'


function FavList() {

  const [favArr, setFavArr] = useState([]);

  const getFavMovie = () => {
    const serverURL = `http://localhost:3017/favMovies`;
    fetch(serverURL)
      .then((response) => {
        response.json()
          .then(data => {
            setFavArr(data)
            console.log(data)
          })
      })
  }

  useEffect(() => {
    getFavMovie()
  }, [])

  
    const path = 'https://image.tmdb.org/t/p/w500';

  return (

    <>

      <h1>FavList</h1>
      {favArr.map(item => {
        return (
          <section key={item.id} className='Movie1'>
          <Card className='card1' key={item.id}>
            <Card.Img className='image1' variant="top" src={path + item.poster_path} />
            <Card.Body>
              <Card.Title className='text1'>{item.title}</Card.Title>
              <Card.Text >
                <p className='text2'>{item.note}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          </section>
        )
      })}
    </>
  )
}

export default FavList;