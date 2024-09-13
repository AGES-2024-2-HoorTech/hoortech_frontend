import React from "react";
import PrimaryButton from "../primaryButton/primaryButtonComponent";
import fullscreenIcon from "../../../assets/images/fullscreenIcon.svg";

function CameraComponent() {
  return (
    <div>
      <PrimaryButton  imageSrc={fullscreenIcon}></PrimaryButton>
      
    </div>
  );
}


export default CameraComponent;