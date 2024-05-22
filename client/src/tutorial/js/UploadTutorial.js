import React from 'react';
import { useNavigate } from 'react-router-dom';

// css 디렉토리 확인
import '../css/TutorialDetail.css';

// gif 파일 디렉토리 확인
import img2VoiceGif from '../tutorialVideos/Img2Voice.gif';

function UploadTutorial() {
  const navigate = useNavigate();

  // 이미지 업로드 라우팅 맞는지 몰라서 일단 해놨습니다.
  const navigateImgUploadPage = () => {
    navigate('/upload');
  };

  return (
    <div className='Tutorial-container'>
        <div className='Tutorial-column'>
            <p>Img to Voice</p>
            <br />
            <br />
            <p>1. 음성을 생성하고 싶은 이미지를 선택합니다.</p>
            <p>2. 업로드 버튼을 누릅니다.</p>
            <p>3. 생성된 스타일을 저장합니다.</p>
            <p>4. 저장된 스타일을 확인할 수 있습니다.</p>
            <button className='navigateBtn' onClick={navigateImgUploadPage}>Start for free</button>
        </div>
        <div className='Tutorial-column'>
          {/*<img className='Tutorial-gif' src={img2VoiceGif} alt='Img2Voice Tutorial.gif'/>*/}
        </div>
    </div>
  );
}

export default UploadTutorial;
