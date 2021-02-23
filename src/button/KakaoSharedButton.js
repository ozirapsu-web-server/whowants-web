import React, { useEffect, useCallback } from "react";

const KakaoShareButton = ({ title, img }) => {
  const createKakaoButton = useCallback(() => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다

    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: `${title}`,
          description: "#사연 #카카오 #공유",
          imageUrl: `${img}`, // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: document.location.href,
            webUrl: document.location.href,
          },
        },
        social: {
          likeCount: 0,
          commentCount: 0,
          sharedCount: 0,
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: document.location.href,
              webUrl: document.location.href,
            },
          },
          {
            title: "앱으로 보기",
            link: {
              mobileWebUrl: document.location.href,
              webUrl: document.location.href,
            },
          },
        ],
      });
    }
  }, [img,title]);

  useEffect(() => {
    // console.log(title, img);
    createKakaoButton();
  }, [createKakaoButton, img, title]);
  return <div id="kakao-link-btn">카카오톡으로 공유하기</div>;
};
export default KakaoShareButton;
