import React, { useState } from "react";
import Posting from "../../components/Posting";

const PostingContainer = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([]);

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const onChangeContent = ({ data }) => {
    setContent(data);
  };

  const onChangeImg = e => {
    setImg(e.target.files[0]);
  };

  const handlePosting = () => {
    const formData = new FormData();
    formData.append("file", img);
    console.log(title, formData, content, formData.get("file"));
  };
  const postImgs = () => {
    setImgs([
      {
        imgUrl:
          "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F99A059345B17BBE006B4CD",
      },
      {
        imgUrl: "https://pbs.twimg.com/media/EhUlB9RU0AccQvY.jpg:large",
      },
      {
        imgUrl:
          "http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2017/02/06/9c8f6e5e-95e2-4d88-b904-841b0be5fcc4.jpg",
      },
      {
        imgUrl:
          "https://mocah.org/uploads/posts/346362-Seulgi-Kang-Seul-Gi-Red-Velvet-K-Pop-Kpop-Girls.jpg",
      },
      {
        imgUrl: "https://images2.imgbox.com/d9/af/Ekr9db87_o.jpg",
      },
      {
        imgUrl:
          "http://image.tving.com/upload/smr/clip/C11/2021/02/07/C01_D727899.jpg",
      },
      {
        imgUrl:
          "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F99A059345B17BBE006B4CD",
      },
    ]);
  };

  return (
    <Posting
      title={title}
      content={content}
      img={img}
      setContent={setContent}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeImg={onChangeImg}
      handlePosting={handlePosting}
      postImgs={postImgs}
      imgs={imgs}
    />
  );
};

export default PostingContainer;
