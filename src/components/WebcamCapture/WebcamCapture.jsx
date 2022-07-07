import React, { useState, useEffect } from 'react';
import './WebcamCaptureStyles.css';
import Webcam from "react-webcam";

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user"
};

export const WebcamCapture = ({postCaptureCb, ...props}) => {
  const webcamRef = React.useRef(null);
  const [image, setImage] = useState('');
  const [isImageCaptured, setIsImageCaptured] = useState(false);
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
      setIsImageCaptured(true);
    });

  useEffect(() => {
    setWidth(document.defaultView.visualViewport.width);
    setHeight(document.defaultView.visualViewport.width * 0.90905);
  }, []);

  useEffect(() => {
    if (isImageCaptured) {
      postCaptureCb();
      setIsImageCaptured(false);
    }
  }, [isImageCaptured]);

  return (
    <div className="webcam-container">
      <div className="webcam-img">
        {image === ''
          ? <>
            <Webcam
              audio={false}
              height={height}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={width}
              videoConstraints={videoConstraints}
            />
            </>
          : <img src={image} alt="" id="image" />
        }

        <>
          {image !== ''
            ? <button onClick={(e) => { e.preventDefault(); setImage(''); }} className="webcam-btn"
                >Retake Image</button>
            : <button onClick={(e) => { e.preventDefault(); capture(); }} className="webcam-btn"
                >Capture</button>
          }
        </>
      </div>
    </div>
  );
};