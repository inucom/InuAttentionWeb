import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import ImageUpload from "./ImageUpload";
import '../VoiceClone/VoiceClone.css';

function Upload() {
    const [Title, setTitle] = useState("");
    const [Image, setImage] = useState([]);
    let navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (!user.accessToken) {
            alert("로그인한 회원만 스타일을 생성 할 수 있습니다.");
            navigate("/login");
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        if (Title === "") {
            return alert("모든 항목을 채워주세요");
        }
        let body = {
            title: Title,
            image: Image,
            uid: user.uid,
        };
        //console.log(body);
        axios.post("/api/style/submit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("스타일 생성에 성공하였습니다.");
                    navigate("/list");
                } else {
                    alert("스타일 생성에 실패했습니다.");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <form>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between"
                    }}>
                    <label className="formbold-form-label formbold-form-label-3">
                        Image2Voice
                    </label>
                        <div>
                    <span onClick={(e) => {
                        onSubmit(e);}} className="formbold-browse">Generate</span>
                        </div>
                    </div>
                    <div className="formbold-mb-5">
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter Style Title"
                            className="formbold-form-input"
                            value={Title}
                            onChange={(event) => setTitle(event.currentTarget.value)}
                        />
                    </div>
                    <div className="mb-6 pt-4">
                        <label className="formbold-form-label formbold-form-label-2">
                            Upload Images
                        </label>

                        <ImageUpload setImage={setImage}/>
                    </div>


                </form>
            </div>
        </div>

    )
}

export default Upload;
