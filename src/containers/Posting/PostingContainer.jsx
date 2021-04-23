import React, { useState } from "react";
import Posting from "../../components/Posting";

const PostingContainer = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const [img, setImg] = useState("");

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
    />
  );
};

export default PostingContainer;
