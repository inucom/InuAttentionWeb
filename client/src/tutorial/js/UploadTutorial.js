import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// css 디렉토리 확인
import '../css/TutorialDetail.css';

// 이미지 파일 디렉토리 확인
import img2voice1 from '../img/img2voice1.png';
import img2voice2 from '../img/img2voice2.png';
import img2voice3 from '../img/img2voice3.png';
import img2voice4 from '../img/img2voice4.png';
import img2voice5 from '../img/img2voice5.png';

function UploadTutorial() {
  const [imgSrc, setImgSrc] = useState(img2voice1);
  const [clickedGuide, setClickedGuide] = useState(1)
  const navigate = useNavigate();

  // 이미지 업로드 라우팅 맞는지 몰라서 일단 해놨습니다.
  const navigateImgUploadPage = () => {
    navigate('/upload');
  };

  const handleGuideClick = (guideNumber) => {
    setClickedGuide(guideNumber);
    switch (guideNumber) {
      case 1:
        setImgSrc(img2voice1);
        break;
      case 2:
        setImgSrc(img2voice2);
        break;
      case 3:
        setImgSrc(img2voice3);
        break;
      case 4:
        setImgSrc(img2voice4);  
        break;
      case 5:
        setImgSrc(img2voice5);
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
            <p>Image2Voice</p>
            <br />
            <br />
            <p className={getGuideMessageClass(1)}
               onClick={() => handleGuideClick(1)}>
              1. 로그인 후 Image2Voice 페이지로 들어와주세요.
            </p>
            <p className={getGuideMessageClass(2)}
               onClick={() => handleGuideClick(2)}>
              2. 원하는 스타일 프로젝트의 이름과 사진을 최대 5개 선택해주세요.
            </p>
            <p className={getGuideMessageClass(3)}
               onClick={() => handleGuideClick(3)}>
              3. Generate 버튼을 눌러 스타일을 생성해보세요.
            </p>
            <p className={getGuideMessageClass(4)}
               onClick={() => handleGuideClick(4)}>
              4.프로젝트는 Image2Voice 페이지에 저장됩니다.
            </p>
            <p className={getGuideMessageClass(5)}
               onClick={() => handleGuideClick(5)}>
              5.Details 버튼을 눌러 생성된 결과를 확인해보세요.
            </p>
            <button className='navigateBtn' onClick={navigateImgUploadPage}>Start</button>
        </div>
        <div className='Tutorial-column'>
          <img className='Tutorial-img' src={imgSrc} alt='Img2Voice Tutorial.gif'/>
        </div>
    </div>
  );
}

export default UploadTutorial;
