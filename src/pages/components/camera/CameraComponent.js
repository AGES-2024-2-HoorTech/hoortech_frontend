import React from "react";
import PrimaryButton from "../primaryButton/primaryButtonComponent";
import fullscreenIcon from "../../../assets/images/fullscreenIcon.svg";

function CameraComponent() {
  return (
    <div>
      <PrimaryButton text={"Tela cheia"} 
      imageSrc={fullscreenIcon}></PrimaryButton>
      
    </div>
  );
}


export default CameraComponent;