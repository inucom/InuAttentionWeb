import React from "react";
import {TtsContentDiv} from "../../StyleCSS/TTSCSS";
import axios from "axios";
import Button from "react-bootstrap/Button";

function TTSContent(props) {

    const DeleteHandler = (e) => {
        e.preventDefault();
        if (window.confirm("삭제하시겠습니까?")) {
            let body = {
                styleId: props.tts.styleId,
                ttsId:props.tts._id,
            }
            axios.post("/api/tts/delete", body)
                .then((res) => {
                    if (res.data.success) {
                        alert("삭제했습니다.");
                        window.location.reload();
                    }
                }).catch((err) => {
                alert("다시 시도해주세요.");
            })
        }
    }


    return (
        <div>
            <TtsContentDiv>
                            <div className="modalControl">
                                <p>{props.tts.text}</p>
                                <h4><span className="delete" onClick={(e)=>
                                    DeleteHandler(e)}>🗑</span></h4>
                            </div>
                {/*<audio src="https://ccrma.stanford.edu/~jos/mp3/harpsi-cs.mp3" controls*/}
                <audio src={props.tts.audio} controls
                style={{ width: '100%',
                    marginTop :"10px"
                }}></audio>
            </TtsContentDiv>
        </div>
    );
}

export default TTSContent;
