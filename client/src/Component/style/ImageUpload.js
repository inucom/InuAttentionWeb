import React, { useState } from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";

function ImageUpload({ setImage }) {
    const [imageList, setImageList] = useState([]);

    const resizeImages = (files) =>
        Promise.all(
            Array.from(files).map((file) =>
                new Promise((resolve) => {
                    Resizer.imageFileResizer(
                        file,
                        224, // maxwidth
                        224, // maxheight
                        "JPEG",
                        100,
                        0,
                        (uri) => {
                            resolve(uri);
                        },
                        "file"
                    );
                })
            )
        );

    const uploadToServer = (files) => {
        const formData = new FormData();
        files.forEach((file) => {
            formData.append("files", file);
        });
        axios
            .post("/api/style/image/upload", formData)
            .then((res) => {
                setImage(res.data.filePaths);
                setImageList(res.data.filePaths);
            })
            .catch((error) => {
                console.error("Error uploading images: ", error);
            });
    };

    const fileUploadHandler = async (e) => {
        const selectedFiles = Array.from(e.target.files);
        // 이미지 이외의 파일이 있는지 확인
        const nonImageFiles = selectedFiles.filter((file) => !file.type.startsWith("image/"));
        if (nonImageFiles.length > 0) {
            alert("이미지 파일만 업로드할 수 있습니다.");
            return;
        }
        // 이미지 파일 리사이징 및 업로드
        const resizedFiles = await resizeImages(selectedFiles);
        if (resizedFiles.length > 5) {
            alert("이미지는 최대 5개까지 사용 가능합니다.");
            return;
        }
        uploadToServer(resizedFiles);
    };

    return (
        <div className="formbold-mb-5 formbold-file-input">
            <input type="file" name="file" id="file" accept="image/*" onChange={(e) => fileUploadHandler(e)} multiple />
            <label htmlFor="file">
                <div>
                    <span className="formbold-drop-file"> Drop Images here </span>
                    <span className="formbold-or"> Or </span>
                    <span className="formbold-browse"> Browse </span>
                </div>
            </label>
            {/*<div style={{ display: "flex", flexWrap: "wrap" }}>*/}
            {/*    {Array.from({ length: 5 }).map((_, idx) => (*/}
            {/*        <div key={idx} style={{ width: "184px", height: "184px", border: "1px solid black", margin: "4px" }}>*/}
            {/*            {imageList[idx] && (*/}
            {/*                <img*/}
            {/*                    src={imageList[idx]}*/}
            {/*                    alt={`${idx}`}*/}
            {/*                    style={{ width: "100%", height: "100%", objectFit: "cover" }}*/}
            {/*                />*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
}

export default ImageUpload;
