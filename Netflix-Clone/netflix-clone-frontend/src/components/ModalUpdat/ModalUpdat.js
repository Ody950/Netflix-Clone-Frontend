

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

function ModalUpdat(props) {
  console.log('current meme', props.passData)

 const updateComment = async (e) =>{
  e.preventDefault();
  
  const obj = {
    note : e.target.note.value
  }

  console.log('xxxxxxxxxxxxxxxx', obj)
 const serverURL = `http://localhost:3023/update/${props.passData.id}`;

 const result = await axios.put(serverURL,obj);
 console.log('done',result.data)

 props.handleClose();

 props.takeNewDataFromUpdatedModal(result.data)

 }


  const path = 'https://image.tmdb.org/t/p/w500';
  return (


    <>

      <Modal show={props.updateMov} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{props.passData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={path + props.passData.poster_path} width='100%'></Image>
          <Form onSubmit={updateComment}>
            <Form.Group >
              <Form.Label>comment</Form.Label>
              <Form.Control name="note" type="text" defaultValue={props.passData.note} />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
         

        </Modal.Footer>
      </Modal>

    </>



  )



}


export default ModalUpdat;