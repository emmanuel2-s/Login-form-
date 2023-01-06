import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Webcamera() {
  const videoRef = useRef(null);
  const photoRef = useRef(null)
  const [hasPhoto, setHasphoto]= useState(false);




  const getVideo = ()=>{
    
    navigator.mediaDevices.getUserMedia({video: {width:1280,
    height: 720}})
    .then(stream =>{
      let video = videoRef.current;
      video.srcObject = stream;
      video.play();
    })
    .catch(err =>{
      console.error(err)
    })
  } 

  useEffect(()=>{
    getVideo();
  }, [videoRef])

  
  const takePhoto = () =>{
    const width = 1280;
    const height =720

    
    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext('2d');
    ctx.drawImage(video,0,0, width,height);
    setHasphoto(true);
  }

  const closePhoto = ()=>{
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');

     ctx.clearRect(0, 0, photo.width, photo.height)

    setHasphoto(false)
  }

  const Save = () =>{
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');


    const imageSrc = photo.current.getScreenshot();
    console.log(imageSrc)
   
  
  }

  return (
    <div className=''>
      <div className='camera'>
        <video ref={videoRef}></video>
        <button className='capture' onClick={takePhoto}>Capture</button>
      </div>
      <div className={'result ' + (hasPhoto ? 'hasPhoto' : '')}>
        <canvas id='photoFx' ref={photoRef}></canvas>
        <button className='close' onClick={closePhoto}>Cancel</button>
        <button className='save' onClick={Save} >Save</button>
      </div>

     <div>
      <img id='myFiles' />
     </div>

    </div>
  )
  
}

export default Webcamera;
