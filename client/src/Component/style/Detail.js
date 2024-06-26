import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {StyleDiv} from "../../StyleCSS/StyleDetailCSS";

import {TtsContentDiv} from "../../StyleCSS/TTSCSS";
import {useClickAway} from "@uidotdev/usehooks";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import "../../StyleCSS/Grid.css";

function Detail(props) {
    const [ModalFlag, setModalFlag] = useState(false);
    const ref = useClickAway(() => {
        setModalFlag(false);
    });

    const handleOpenModal = () => {
        if (ModalFlag === false) {
            setModalFlag(true);
        }
    };

    let params = useParams();
    let navigate = useNavigate();

    const DeleteHandler = () => {
        if (window.confirm("삭제하시겠습니까?")) {
            let body = {
                styleNum: params.styleNum
            }
            axios.post("/api/style/delete", body)
                .then((res) => {
                    if (res.data.success) {
                        alert("삭제되었습니다.");
                        navigate("/list");
                    }
                }).catch((err) => {
                alert("삭제에 실패하였습니다.");
            })
        }
    }

    return (
        <StyleDiv>
            <>
                <TtsContentDiv>
                    <div className="modalControl">
                        <h1>{props.StyleInfo.title}</h1>
                        <p className="delete" onClick={DeleteHandler}>삭제</p>
                    </div>
                    <div style={{
                        display: "flex",
                        overflowX: "auto",
                        whiteSpace: "nowrap"
                    }}>
                    </div>
                </TtsContentDiv>
                    <Carousel>
                        {props.StyleInfo.image && props.StyleInfo.image.map((image, index) => (
                            <div key={index} style={{height: "224px" }}>
                                <img src={image} alt={`${index + 1}`} style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}/>
                            </div>
                        ))}
                    </Carousel>
            </>
        </StyleDiv>
    );
}

export default Detail;