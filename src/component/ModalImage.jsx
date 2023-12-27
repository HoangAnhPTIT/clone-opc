/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import './ModalImage.css'

export default function ModalImage({ title, dialog = false, closeDialog, imgSrc  }) {
  useEffect(() => {
    console.log('dialog', dialog)
  
  }, [dialog])
  

  return (
    <div className="container">
      {dialog && (
        <div className="dialog">
          <div className="dialog-content">
            <h3 style={{fontWeight: 200}}>{title}</h3>
            <button className="close-icon" onClick={() => closeDialog()}>&#10005;</button>
            <img className="popup-image" src={imgSrc} alt="Popup Image" />
          </div>
        </div>
      )}
    </div>
  );
}
