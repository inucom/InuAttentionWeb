import React, {useState} from "react";
import axios from "axios";
import { TtsUploadDiv } from "../../StyleCSS/TTSCSS.js";
function TTSUpload(props) {
    const [Text,setText] = useState("");

    const submitHandler = (e) =>{
        if(Text ===""){
            return alert("모든 공백을 채워주세요.");
        }
        e.preventDefault();
        let body={
            text: Text,
            styleId:props.styleId,
        }
        axios.post("/api/tts/submit", body).then((res)=>{
            if(res.data.success){
                window.location.reload();
            }else{
                alert("다시 시도해주세요.");
            }
        })
    }

    return (
        <div className="formbold-mb-5 flex">
            <input
                type="text"
                placeholder="Enter Text"
                className="formbold-form-input"
                value={Text}
                onChange={(e)=>{
                    setText(e.currentTarget.value);
                }}
            />
            <span className="formbold-browse" onClick={submitHandler}>AI</span>
        </div>
    )
}

export default TTSUpload;