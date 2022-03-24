import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/login/userSlice';
import { useNavigate } from "react-router-dom";

import { fetchImageData } from '../services/imageData';
import { ImageGrid } from '../features/imageGrid/ImageGrid';
import Spinner from 'react-bootstrap/Spinner';

export default function Dashboard() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const name = useSelector(state => state.user.name)
  const [images, setImages] = useState([])
  const [imagesLoaded, setImagesLoaded] = useState(false)

  function button_logout(e) {
    dispatch(logout())
    navigate('/')
  }

  useEffect(() => {
    (async () => {
      setImagesLoaded(false);

      await new Promise(resolve => setTimeout(resolve, 5000))
      fetchImageData().then((res) => {
        setImages(res.data);
        setImagesLoaded(true);
      })
    })();
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>{name}</h2>
      <button onClick={button_logout}>Logout</button>
      <div >
      {imagesLoaded ? (
        <ImageGrid items={images}/>
      ) : (
        <Spinner animation="grow" role="status">
        </Spinner>
      )}
    </div>
    </main>
  );
}
