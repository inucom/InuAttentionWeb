import React from 'react';

import '../css/TutorialDetail.css';


function VoiceCloneTutorial() {

  return (
    <div className='container'>
        <div className="item">
            Apex Legend Fuse
          <img src="https://kr.object.ncloudstorage.com/inu-attention/main/fuse_img.jpg" alt="Fuse" className="image" />
          <div className="audio-container">
            Generated
            <audio src="https://kr.object.ncloudstorage.com/inu-attention/main/fuse_gene.wav" controls></audio>
            Original
            <audio src="https://kr.object.ncloudstorage.com/inu-attention/main/fuse_ori.wav" controls></audio>
          </div>
        </div>
        <div className="item">
            WOW Thrall
          <img src="https://kr.object.ncloudstorage.com/inu-attention/main/thrall_img.jpg" alt="Thrall" className="image" />
          <div className="audio-container">
            Generated
            <audio src="https://kr.object.ncloudstorage.com/inu-attention/main/thrall_gene.wav" controls></audio>
            Original
            <audio src="https://kr.object.ncloudstorage.com/inu-attention/main/thrall_ori.ogg" controls></audio>
          </div>
        </div>
      <div className="item">
          Apex Legend Lifeline
        <img src="https://kr.object.ncloudstorage.com/inu-attention/main/lifeline_img.jpg" alt="lifeline" className="image" />
        <div className="audio-container">
          Generated
          <audio src="https://kr.object.ncloudstorage.com/inu-attention/main/lifeline_gene1.wav" controls></audio>
          Generated2
          <audio src="https://kr.object.ncloudstorage.com/inu-attention/main/lifeline_gene2.wav" controls></audio>
        </div>
      </div>
        <div className="item">
            RDR2 Arthur Morgan
            <img src="https://inu-attention.kr.object.ncloudstorage.com/style/1716566157368A23.JPEG" alt="lifeline" className="image" />
            <div className="audio-container">
                Generated
                <audio src="https://kr.object.ncloudstorage.com/inu-attention/TTS/0530154743.wav" controls></audio>
                Generated2
                <audio src="https://kr.object.ncloudstorage.com/inu-attention/TTS/0530154948.wav" controls></audio>
            </div>
        </div>
    </div>
  );
}

export default VoiceCloneTutorial;
