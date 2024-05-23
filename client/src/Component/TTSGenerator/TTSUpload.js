import React, { useState } from "react";
import axios from "axios";

function TTSUpload(props) {
    const [Text, setText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = (e) => {
        if (Text === "") {
            return alert("모든 공백을 채워주세요.");
        }
        e.preventDefault();
        setIsLoading(true); // 로딩 상태 시작
        let body = {
            text: Text,
            styleId: props.styleId,
        };
        axios.post("/api/tts/submit", body).then((res) => {
            setIsLoading(false); // 로딩 상태 종료
            if (res.data.success) {
                window.location.reload();
            } else {
                alert("다시 시도해주세요.");
            }
        }).catch((err) => {
            setIsLoading(false); // 로딩 상태 종료
            alert("에러가 발생했습니다. 다시 시도해주세요.");
            console.log(err);
        });
    };

    return (
        <div className="formbold-mb-5 flex">
            {isLoading ? (
                <div className="loader">
                    <p><br/>생성중입니다...</p>
                </div>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Enter Text"
                        className="formbold-form-input"
                        value={Text}
                        onChange={(e) => {
                            setText(e.currentTarget.value);
                        }}
                    />
                    <span className="formbold-browse" onClick={submitHandler}>AI</span>
                </>
            )}
        </div>
    );
}

export default TTSUpload;
