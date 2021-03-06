import React, { useState, useEffect, useRef, useCallback } from "react";
import PostApi from "../../assets/API/PostApi";
import Main from "../../components/Main";

const MainContainer = () => {
  const bannerPage = useRef();
  const postPage = useRef();

  const [boradId, setBoradId] = useState([-1]);
  const [isLoading, setIsLoading] = useState(false);
  const [postings, setPostings] = useState([]);

  let isScroll = false;

  // const [isScroll, setIsScroll] = useState(false);

  const getPosting = async () => {
    setIsLoading(true);
    await PostApi.getBoard(0, 4)
      .then(response => {
        console.log(response.data.projectList);
        response.data.projectList.map(current => {
          setPostings([...postings, current]);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleScroll = useCallback(
    e => {
      // 브라우저 총 내용의 크기 (스크롤을 포함한다)
      const { scrollHeight } = document.body;
      // 현재 스크롤바의 위치
      const { scrollTop } = document.documentElement;
      console.log(e);
      if (e.deltaY > 0) {
        //페이지 다운할때
        setTimeout(() => {
          bannerPage.current.classList.add("backPage");
          postPage.current.classList.add("backPage");
        }, 100);
        if (!isScroll) {
          e.preventDefault();
        }
        setTimeout(() => {
          isScroll = true;
        }, 700);
      } else if (scrollHeight / 100 > scrollTop) {
        //전체 height/100 만큼 스크롤 했을때
        isScroll = false;
        setTimeout(() => {
          bannerPage.current.classList.remove("backPage");
          postPage.current.classList.remove("backPage");
        }, 10);
      }
    },
    [isScroll]
  );

  useEffect(() => {
    console.log("in", isScroll);
    window.addEventListener("wheel", handleScroll, { passive: isScroll });
    // 스크롤이 발생할때마다 handleScroll 함수를 호출하도록 추가합니다.
    return () => {
      console.log("out");
      window.removeEventListener("wheel", handleScroll, { passive: true });
      // 해당 컴포넌트가 언마운트 될때, 스크롤 이벤트를 제거합니다.
    };
  }, [isScroll]);

  const handleNextPosting = () => {
    console.log("next");
  };

  return (
    <Main
      isLoading={isLoading}
      bannerPage={bannerPage}
      postPage={postPage}
      handleNextPosting={handleNextPosting}
      getPosting={getPosting}
      postings={postings}
    />
  );
};

export default MainContainer;
