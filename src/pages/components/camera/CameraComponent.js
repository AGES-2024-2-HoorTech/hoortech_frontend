import React, { useRef, useState, useEffect, useCallback } from "react";
import PrimaryButton from "../primaryButton/primaryButtonComponent";
import fullscreenIcon from "../../../assets/images/fullscreenIcon.svg";
import VideoCapture from "./VideoCapture";
import zIndex from "@mui/material/styles/zIndex";
import { Widgets } from "@mui/icons-material";
import { height, positions, width } from "@mui/system";

function CameraComponent() {

  const isEventListenerConnected = useRef(false);
  const [isFullScreen, setFullScreen] = useState(false)
  

  // function openFullscreen() {
  //   var elem = document.getElementById("teste");

  //   if (elem.requestFullscreen) {
  //     elem.requestFullscreen();
  //   } else if (elem.webkitRequestFullscreen) { /* Safari */
  //     elem.webkitRequestFullscreen();
  //   } else if (elem.msRequestFullscreen) { /* IE11 */
  //     elem.msRequestFullscreen();
  //   }
  // }




  const getFullScreenElement = (() => {
    if (document.fullscreenEnabled) {
      return document.fullscreenElement;
    } else if (document.webkitFullscreenEnabled) {
      return document.webkitFullscreenElement;
    } else if (document.mozFullScreenEnabled) {
      return document.mozFullScreenElement;
    } else if (document.msFullscreenEnabled) {
      return document.msFullscreenElement;
    } else {
      return;
    }
  });

  const hasEvent = ((contentElement, eventName) => {
    for (const key in contentElement) {
      if (eventName === key) {
        return true;
      }
    }
    return false;
  });

  const getFullScreenChangeEvent = ((contentElement) => {
    if (document.fullscreenEnabled && hasEvent(contentElement, 'onfullscreenchange')) {
      return 'fullscreenchange';
    } else if (document.webkitFullscreenEnabled && hasEvent(contentElement, 'onwebkitfullscreenchange')) {
      return 'webkitfullscreenchange';
    } else if (document.mozFullScreenEnabled && hasEvent(contentElement, 'onmozfullscreenchange')) {
      return 'mozfullscreenchange';
    } else if (document.msFullscreenEnabled && hasEvent(contentElement, 'onmsfullscreenchange')) {
      return 'msfullscreenchange';
    } else {
      return;
    }
  });

  const getFullScreenCancelMethod = (() => {
    if (document.fullscreenEnabled && document.exitFullscreen) {
      return document.exitFullscreen;
    } else if (document.webkitFullscreenEnabled && document.webkitExitFullscreen) {
      return document.webkitExitFullscreen;
    } else if (document.mozFullScreenEnabled && document.mozCancelFullScreen) {
      return document.mozCancelFullScreen;
    } else if (document.msFullscreenEnabled && document.msExitFullscreen) {
      return document.msExitFullscreen;
    } else {
      return;
    }
  });

  const getFullScreenRequestMethod = ((contentElement) => {
    if (document.fullscreenEnabled && contentElement.requestFullscreen) {
      return contentElement.requestFullscreen;
    } else if (document.webkitFullscreenEnabled && contentElement.webkitRequestFullscreen) {
      return contentElement.webkitRequestFullscreen;
    } else if (document.mozFullScreenEnabled && contentElement.mozRequestFullScreen) {
      return contentElement.mozRequestFullScreen;
    } else if (document.msFullscreenEnabled && contentElement.msRequestFullscreen) {
      return contentElement.msRequestFullscreen;
    } else {
      return;
    }
  });

  const fullScreenChangeListener = ((setFullScreen) => {
    const isFullScreenActive = getFullScreenElement() != null;
    setFullScreen(isFullScreenActive);
  });

  useEffect(() => {
    if (!isEventListenerConnected.current) {
      let contentElement = document.getElementById('app');
      if (contentElement) {

        let eventName = getFullScreenChangeEvent(contentElement);
        if (eventName) {
          contentElement.addEventListener(eventName, () => fullScreenChangeListener(setFullScreen));
        }

        isEventListenerConnected.current = true;
      }
    }
  }, [isEventListenerConnected, setFullScreen]);


  const toggleFullScreen = useCallback(() => {
    if (isFullScreen) {
      const requestMethod = getFullScreenCancelMethod();
      if (requestMethod) {
        requestMethod.call(document);
      }
    } else {
      const contentElement = document.getElementById('app');
      const requestMethod = getFullScreenRequestMethod(contentElement);
      if (requestMethod) {
        requestMethod.call(contentElement);
      }
    }
  }, [isFullScreen]);





  // if(isVisible) {
  //   return (<div style={{zIndex: 2,width: "100%", height: "100%", position: "absolute"}}>
  //   <VideoCapture id ="teste" style={{zIndex: 2, width: "100%", height: "100%", position: "absolute"}} />
  //   </div>);
  // }

  return (
    <div>
      <PrimaryButton
        text={"Tela cheia"}
        imageSrc={fullscreenIcon}
        onClick={toggleFullScreen} />



{isFullScreen && (
        <div id="app">
          <VideoCapture />
        </div>
)}


    </div>
  );
}


export default CameraComponent;