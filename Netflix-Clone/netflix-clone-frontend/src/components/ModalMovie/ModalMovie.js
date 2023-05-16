

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { useEffect, useState } from 'react';


function ModalMovie(props) {
  const [note, setNote] = useState('');
  const [clickedMeme, setClickedMeme] = useState(props.clickedMeme);

  const addToFav = (item) =>{
    const modifiedItem = {...item, note: note};
    const serverURL = `http://localhost:3023/addToFav`;
    axios.post(serverURL , modifiedItem)
    .then(response=>{
      console.log(response.data)
      
    })
    .catch((error)=>{
      console.log(error)
    })
  props.handleClose()
  }

  const path = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <Modal show={props.showFlag} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{props.clickedMeme.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={path + props.clickedMeme.poster_path} width='100%'></Image>
          {props.clickedMeme.overview}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>

          <div className="form-outline mb-4">
            <input type="text" id="addANote" className="form-control" placeholder="Type comment..." onChange={(e) => setNote(e.target.value)} />
          </div>

             <Button variant="primary" onClick={()=>{addToFav(props.item)}}>Add to Favorite</Button>

        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalMovie;