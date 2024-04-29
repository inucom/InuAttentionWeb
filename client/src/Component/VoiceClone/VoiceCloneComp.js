import React from "react";
import "./VoiceClone.css";

function VoiceCloneComp() {

    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <label className="formbold-form-label formbold-form-label-3">
                        Voice Clone
                    </label>
                    <div className="formbold-mb-5">

                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Style Title"
                            className="formbold-form-input"s    
                        />
                    </div>

                    <div className="mb-6 pt-4">
                        <label className="formbold-form-label formbold-form-label-2">
                            Upload Sample Voice
                        </label>

                        <div className="formbold-mb-5 formbold-file-input">
                            <input type="file" name="file" id="file" />
                            <label htmlFor="file">
                                <div>
                                    <span className="formbold-drop-file"> Drop Sample here </span>
                                    <span className="formbold-or"> Or </span>
                                    <span className="formbold-browse"> Browse </span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="formbold-mb-5 flex">
                        <input
                            type="text"
                            placeholder="Enter Text"
                            className="formbold-form-input"
                        />
                        <span className="formbold-browse">AI</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default VoiceCloneComp;
