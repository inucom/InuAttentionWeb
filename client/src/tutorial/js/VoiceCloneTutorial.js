import React from 'react';

import { useNavigate } from 'react-router-dom';

// css 디렉토리 확인
import '../css/TutorialDetail.css';
// gif 디렉토리 확인
import voiceClone from '../tutorialVideos/VoiceClone.gif';

function VoiceCloneTutorial() {
  const navigate = useNavigate();

  // voice clone 라우팅을 몰라서 일단 임시로 해놨습니다.
  const navigateVoiceClonePage = () => {
    navigate("/voice-clone");
  }

  return (
    <div className='Tutorial-container'>
      <div className='Tutorial-column'>
        <p>Voice Clone</p>
        <br />
        <br />
        <p>1. 클론하고 싶은 오디오 파일을 선택하세요.</p>
        <p>2. </p>
        <button className='navigateBtn' onClick={navigateVoiceClonePage}>Start for free</button>
      </div>
      <div className='Tutorial-column'>
        {/*<img className='Tutorial-gif' src={voiceClone} alt='VoiceClone Tutorial.gif' />*/}
      </div>
    </div>
  );
}

export default VoiceCloneTutorial;
