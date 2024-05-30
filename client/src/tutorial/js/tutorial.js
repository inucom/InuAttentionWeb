import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// css 디렉토리 확인
import '../css/Tutorial.css';

// js 디렉토리 확인
import UploadTutorial from "./UploadTutorial";
import VoiceCloneTutorial from "./VoiceCloneTutorial";

function Tutorial() {
    const [activeButton, setActiveButton] = useState('upload');

    const navigate = useNavigate();
    const location = useLocation();
    const type = location.state?.type;

    const handleUploadClick = (event) => {
        setActiveButton('upload');
        navigate('/tutorial', { state: { type: 'upload' } });
    };

    const handleVoiceCloneClick = (event) => {
        setActiveButton('voiceClone');
        navigate('/tutorial', { state: { type: 'voiceClone' } });
    };

    return(
        <div className="tutorial-container">
            <div className="tutorial-header">
                <br/>
                <br/>
                <p>Tutorial</p>
                <div className="tutorial-headerBtns">
                    <button className={`tutorial-uploadBtn ${activeButton === 'upload' ? 'active' : ''}`}
                            onClick={handleUploadClick}>How to use
                    </button>
                    {/*<button className={`tutorial-cloneBtn ${activeButton === 'voiceClone' ? 'active' : ''}`}*/}
                    {/*        onClick={handleVoiceCloneClick}>Preview*/}
                    {/*</button>*/}
                </div>
            </div>
            <div>
                {(type === 'upload' || type === undefined) && <UploadTutorial />}
                {type === 'voiceClone' && <VoiceCloneTutorial />}
            </div>
        </div>
    );
}

export default Tutorial;