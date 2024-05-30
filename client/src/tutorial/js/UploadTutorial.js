import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// css 디렉토리 확인
import '../css/TutorialDetail.css';


function UploadTutorial() {

    const img2voice1 = 'https://kr.object.ncloudstorage.com/inu-attention/main/img2voice1.png';
    const img2voice2 = 'https://kr.object.ncloudstorage.com/inu-attention/main/img2voice2.png';
    const img2voice3 = 'https://kr.object.ncloudstorage.com/inu-attention/main/img2voice3.png';
    const img2voice4 = 'https://kr.object.ncloudstorage.com/inu-attention/main/img2voice4.png';
    const img2voice5 = 'https://kr.object.ncloudstorage.com/inu-attention/main/img2voice5.png';
  const [imgSrc, setImgSrc] = useState(img2voice1);
  const [clickedGuide, setClickedGuide] = useState(1);


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
              2. 원하는 스타일 프로젝트의 이름과 사진을 최대 5개 입력해주세요.
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
        </div>
        <div className='Tutorial-column'>
          <img className='Tutorial-img' src={imgSrc} alt='Img2Voice Tutorial.gif'/>
        </div>
    </div>
  );
}

export default UploadTutorial;
