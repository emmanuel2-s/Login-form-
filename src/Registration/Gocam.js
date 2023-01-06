import React,{useState} from "react";
import Webcam from "react-webcam";
// import {useState} from 'react-hook-form'

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  const WebcamCapture = () => {
    const [hasPhoto, setHasphoto]= useState(false);

    const webcamRef = React.useRef(null);
    const photoRef = React.useRef(null)
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc)
        const width = 1280;
            const height =720
        
            let video = webcamRef.current;
            let photo = photoRef.current;
        
            photo.width = width;
            photo.height = height;
        
            let ctx = photo.getContext('2d');
            ctx.drawImage(video,0,0, width,height);
            setHasphoto(true);


      },
      [webcamRef]
    );
    return (
      <>
        <Webcam
          audio={false} 
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <div>
        <button className="capture" onClick={capture}>Capture</button>

        </div>

        <div className={'result ' +  (hasPhoto ? 'hasPhoto' : '')}>
        <canvas ref={photoRef}></canvas>
        <button className="close" onClick={capture}>Cancel</button>
        </div>
        
      
      </>
    );
  };
export default WebcamCapture;