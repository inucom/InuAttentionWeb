import React from "react";
import "../StyleCSS/Grid.css";
import Preview from "../tutorial/js/VoiceCloneTutorial"

function Main() {
    return (
        <>
            <br/>
            <br/>
        <div className="container"
                 style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                 }}>
            <h1>Team InuAttention</h1>
            <br/>
            <h2>Image2Voice</h2>
            <br/>
            <br/>
            <p>Image2Voice는 <br/>이미지를 분석하여 사용자 개인만의 유일한 음성을 생성하는<br/>서비스를 제공합니다.</p><br/><br/><br/>
            <h1>Preview</h1>
            <hr className="divider"/>
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
                    FinalFantasy Tifa
                    <img src="https://inu-attention.kr.object.ncloudstorage.com/style/1717083070333A5.JPEG" alt="lifeline" className="image" />
                    <div className="audio-container">
                        Generated
                        <audio src="https://kr.object.ncloudstorage.com/inu-attention/TTS/0530152634.wav" controls></audio>
                        Generated2
                        <audio src="https://kr.object.ncloudstorage.com/inu-attention/TTS/0530162148.wav" controls></audio>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
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
                <div className="item">
                    Professor X
                    <img src="https://inu-attention.kr.object.ncloudstorage.com/style/1717086885603A16.JPEG" alt="Thrall" className="image" />
                    <div className="audio-container">
                        Generated
                        <audio src="https://kr.object.ncloudstorage.com/inu-attention/TTS/0530163040.wav" controls></audio>
                        Generated2
                        <audio src="https://kr.object.ncloudstorage.com/inu-attention/TTS/0530163141.wav" controls></audio>
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
            </div>
        </div>


        </>
    );
}

export default Main;
