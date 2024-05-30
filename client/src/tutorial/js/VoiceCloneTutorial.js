import React, { useState } from 'react';

import '../css/TutorialDetail.css';


function VoiceCloneTutorial() {

  return (
    <div className='container'>
        <div className="item">
          <img src="https://kr.object.ncloudstorage.com/inu-attention/main/fuse_img.jpg" alt="Fuse" className="image" />
          <div className="audio-container">
            Generated
            <audio src="https://kr.object.ncloudstorage.com/inu-attention/main/fuse_gene.wav" controls></audio>
            Original
            <audio src="https://kr.object.ncloudstorage.com/inu-attention/main/fuse_ori.wav" controls></audio>
          </div>
        </div>
        <div className="item">
          <img src="https://kr.object.ncloudstorage.com/inu-attention/main/thrall_img.jpg" alt="Thrall" className="image" />
          <div className="audio-container">
            Generated
            <audio src="https://kr.object.ncloudstorage.com/inu-attention/main/thrall_gene.wav" controls></audio>
            Original
            <audio src="https://kr.object.ncloudstorage.com/inu-attention/main/thrall_ori.ogg" controls></audio>
          </div>
        </div>
      <div className="item">
        <img src="https://kr.object.ncloudstorage.com/inu-attention/main/lifeline_img.jpg" alt="lifeline" className="image" />
        <div className="audio-container">
          Generated
          <audio src="https://kr.object.ncloudstorage.com/inu-attention/main/lifeline_gene1.wav" controls></audio>
          Generated2
          <audio src="https://kr.object.ncloudstorage.com/inu-attention/main/lifeline_gene2.wav" controls></audio>
        </div>
      </div>
    </div>
  );
}

export default VoiceCloneTutorial;
