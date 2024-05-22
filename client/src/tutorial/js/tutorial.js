import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// css 디렉토리 확인
import '../css/Tutorial.css'

// js 디렉토리 확인
import UploadTutorial from "./UploadTutorial";
import VoiceCloneTutorial from "./VoiceCloneTutorial";

function Tutorial() {
    const navigate = useNavigate();
    const location = useLocation();
    const type = location.state?.type;

    const handleUploadClick = () => {
        navigate('/tutorial', { state: { type: 'upload' } });
    };
    
    const handleVoiceCloneClick = () => {
        navigate('/tutorial', { state: { type: 'voiceClone' } });
    };

    return(
        <div className="tutorial-container">
            <div className="tutorial-header">
                <p>Here is your Playground</p>
                <div className="tutorial-headerBtns">
                    <button className="tutorial-uploadBtn" onClick={handleUploadClick}>Upload Tutorial</button>
                    <button className="tutorial-cloneBtn" onClick={handleVoiceCloneClick}>Voice Clone Tutorial</button>

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