import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Detail from "./Detail";
import {SpinnerDiv} from "../../StyleCSS/StyleDetailCSS";
import Spinner from "react-bootstrap/Spinner";
import TTSArea from "../TTSGenerator/TTSArea";
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";

function StyleArea() {
    let params = useParams();
    const [StyleInfo, setStyleInfo] = useState({});
    const [Flag, setFlag] = useState(false);
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        let body = {
            styleNum: params.styleNum
        }
        axios.post("/api/style/detail", body)
            .then((res) => {
                if (res.data.success) {
                    setStyleInfo(res.data.style);
                    setFlag(true);
                } else {
                    setStyleInfo({});
                }
            }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <>
            {Flag ?
                (!StyleInfo || user.uid !== StyleInfo.author?.uid) ? (
                    <div style={{
                        width: "1200px",
                        margin: "0 auto",
                    }}>
                        <h1>Unauthorized</h1>
                        <p>You are not authorized to read this style.</p>
                        <Button variant="dark"
                                style={{marginTop: '20px'}}
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate(-1);
                                }}>Go back</Button>
                    </div>
                ) : (
                    <div className="container">
                        <div className="left">
                            <Detail StyleInfo={StyleInfo}/>
                        </div>
                        <div className="right">
                            <TTSArea styleId={StyleInfo._id}/>
                        </div>
                    </div>
                )
                : (
                    <SpinnerDiv>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </SpinnerDiv>
                )}
        </>
    )
}

export default StyleArea;
