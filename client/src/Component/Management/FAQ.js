import React from "react";

function FAQ() {

    return (
        <div className="container"
             style={{
                 display: "flex",
                 flexDirection: "column",
                 justifyContent: "center",
                 alignItems: "center",
                 textAlign: "center",
             }}>

            <p><br/>
                <br/>
                <h3>저장 정보 처리</h3>
                계정 정보 포함 모든 저장된 정보는 24년 5월 31일 이후 전부 폐기됩니다.<br/><br/>

                <h3>웹페이지 소스코드</h3>
                <a href="https://github.com/inucom/InuAttentionWeb">https://github.com/inucom/InuAttentionWeb</a><br/><br/>

                <h3>모바일</h3>
                모바일 환경은 지원하지 않습니다.<br/><br/>


                <h3>기타 문의사항</h3>
                기타 문의사항은 inuattention@gmail.com 이메일로 문의주세요.<br/><br/>

            </p>
            <br/>

        </div>
    );
}

export default FAQ;
