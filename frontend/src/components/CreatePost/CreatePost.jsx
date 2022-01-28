import React from "react";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import "./createPost.scss";
import { MdOutlineAddBox } from "react-icons/md";
import { useState } from "react";
import { IoMdImages, IoMdArrowRoundBack } from "react-icons/io";
import { createPost } from "../../redux/actions/postActions";

const CreatePost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const fileReader = new FileReader();
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState("");

  const handleImageInput = (event) => {
    fileReader.readAsDataURL(event.target.files[0]);
    setImageFile(event.target.files[0]);
    fileReader.onload = (e) => {
      setImage(e.target.result);
    };
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOnBackPress = () => {
    setImage("");
  };

  const handleCreatePost = async () => {
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("caption", caption);
    console.log(formData.get("caption"));
    dispatch(createPost(formData));
    handleClose();
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  return (
    <>
      <MdOutlineAddBox className="button" size={26} onClick={handleOpen} />
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <div className="create-post">
          {!image ? (
            <>
              <div className="header">Create new post</div>
              <div className="upload-image">
                <IoMdImages size={100} />
                <p>Upload Photos</p>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={handleImageInput}
                />
                <label for="file">Select from device</label>
              </div>
            </>
          ) : (
            <>
              <div className="header">
                <div className="back-share">
                  <IoMdArrowRoundBack size={20} onClick={handleOnBackPress} />
                  <span onClick={handleCreatePost}>Share</span>
                </div>
              </div>
              <textarea
                name="caption"
                className="caption-input"
                placeholder="Write Caption"
                value={caption}
                onChange={handleCaptionChange}
              />
              <img
                className="uploaded-image"
                src={image}
                alt="uploaded-image"
              />
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CreatePost;
