import React, { useEffect } from "react";
// import kakao from "images/kakao.png";

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton();
  }, []);
  const createKakaoButton = () => {
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
          title: "후원츠의 사연을 공유합니다",
          description: "#사연 #카카오 #공유",
          imageUrl:
            "https://images.unsplash.com/photo-1579208575657-c595a05383b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", // i.e. process.env.FETCH_URL + '/logo.png'
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
  };
  return <div id="kakao-link-btn">공유하기</div>;
};
export default KakaoShareButton;
