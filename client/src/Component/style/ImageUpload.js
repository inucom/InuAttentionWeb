import React, {useState} from "react";
import {Form} from "react-bootstrap";
import axios from "axios";
import Resizer from "react-image-file-resizer";

function ImageUpload({ setImage }) {
    const [ImageList, setImageList] = useState([]);
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
        axios.post("/api/style/image/upload", formData)
            .then((res) => {
                setImage(res.data.filePaths);
                setImageList(res.data.filePaths);
            })
            .catch((error) => {
                console.error("Error uploading images: ", error);
            });
    };
    const FileUpload = async (e) => {
        const resizedFiles = await resizeImages(e.target.files);
        if (resizedFiles.length > 5) {
            alert("이미지는 최대 5개까지 사용 가능합니다.");
            return;
        }
        uploadToServer(resizedFiles);
    };

    return (
        <div>
            <h3>업로드한 이미지가 다 표시된 후 다음으로</h3>
            <Form.Control
                type="file" multiple
                className="shadow-none"
                accept="image/*"
                onChange={(e) => FileUpload(e)}
            />
            {ImageList && ImageList.map((image, idx) => (
                    <img
                        src={image}
                        alt={`${idx}`}
                        style={{width: "224px", height: "224px", objectFit: "none"}}
                    />
            ))}
        </div>
    );
}

export default ImageUpload;
