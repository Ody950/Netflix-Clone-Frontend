
import axios from 'axios';
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from '../ModalMovie/ModalMovie';
import './Movie.css'

function Movie(props) {

    const [showFlag, setShowFlag] = useState(false);
    const [clickedMeme, setClickedMeme] = useState({});

    const handleShow = (item) => {
        setShowFlag(true)
        // console.log(item)
        setClickedMeme(item)
    }

    const handleClose = () => {
        setShowFlag(false)
    }

    const path = 'https://image.tmdb.org/t/p/w500';
    
    const posterUrl = `https://www.image.tmdb.org/t/p/w500`
    return (
        <>
        <section key={props.id} className='Movie1'>
            < Card className='card1' key={props.id} >
                <Card.Img className='image1' variant="top"  src={path + props.poster_path} />
                <Card.Body>
                    <Card.Title className='text1'>{props.title}</Card.Title>
                    <Button variant="primary" onClick={() => { handleShow(props.item) }}> Add to Favorite</Button>

                </Card.Body>
            </Card >
            </section>

            <ModalMovie showFlag={showFlag} handleClose={handleClose} clickedMeme={clickedMeme} item={props.item} comment={props.comment} />
        </>
    )
}

export default Movie;