import React, { useRef, useState, useEffect, useCallback } from "react";
import PrimaryButton from "../primaryButton/primaryButtonComponent";
import fullscreenIcon from "../../../assets/images/fullscreenIcon.svg";

function CameraComponent({fullscreenRef} ) {

  const onButtonFullscreenClick = () => {
    fullscreenRef.current.requestFullscreen();
  }


  return (
    <div>
      <PrimaryButton
        text={"Tela cheia"}
        imageSrc={fullscreenIcon}
        onClick={onButtonFullscreenClick} />

    </div>
  );
}


export default CameraComponent;