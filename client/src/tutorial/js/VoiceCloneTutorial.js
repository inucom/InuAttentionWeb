import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

// css 디렉토리 확인
import '../css/TutorialDetail.css';

// gif 디렉토리 확인
import voiceClone1 from '../img/voice-clone1.png';

function VoiceCloneTutorial() {
  const [imgSrc, setImgSrc] = useState(voiceClone1);
  const [clickedGuide, setClickedGuide] = useState(1)
  const navigate = useNavigate();

  // voice clone 라우팅을 몰라서 일단 임시로 해놨습니다.
  const navigateVoiceClonePage = () => {
    navigate("/voice-clone");
  }

  const handleGuideClick = (guideNumber) => {
    setClickedGuide(guideNumber);
    switch (guideNumber) {
      case 1:
        setImgSrc(voiceClone1);
        break;
      default:
        break;
    }
  };

  const getGuideMessageClass = (guideNumber) => {
    return clickedGuide === guideNumber ? 'guideMessage active' : 'guideMessage';
  };

  return (
    <div className='container'>
      <div className='Tutorial-column'>
        <p>Voice Clone</p>
        <br />
        <br />
        <p className={getGuideMessageClass(1)}
           onClick={() => handleGuideClick(1)}>
          1. 클론하고 싶은 오디오 파일을 선택하세요.
        </p>
        <p className={getGuideMessageClass(2)}
           onClick={() => handleGuideClick(2)}>
          2. AI 버튼을 눌러 음성을 복제해보세요.
        </p>
        <button className='navigateBtn' onClick={navigateVoiceClonePage}>Start for free</button>
      </div>
      <div className='Tutorial-column'>
        <img className='Tutorial-img' src={imgSrc} alt='VoiceClone Tutorial.gif' />
      </div>
    </div>
  );
}

export default VoiceCloneTutorial;
