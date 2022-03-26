import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "@mui/material";
import AvatarEditor from 'react-avatar-editor'

const AvatarCrop = ({ src, close }) => {

  const [imageSrc, setImageSrc] = useState(null);
  const [scale, setScale] = useState(1);
  const editor = useRef(null);

  const handleNewImage = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };
  const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setScale(scale);
  };

  const onClickSave = () => {
    if (editor) {
      console.log(editor);
      const base64Image = editor.current.getImageScaledToCanvas().toDataURL("image/jpeg"); //canvas to DataURL
      src(base64Image); //prepare it to the database
      console.log(base64Image)
      close(false);
    }
  }

  return (
    <div>
      <AvatarEditor ref={editor} className="avatarEditor" onDropFile={true} scale={scale} width={250} height={250} image={imageSrc} borderRadius={140} />
      <p>New File:</p>
      <input name="newImage" type="file" accept="image/*" onChange={handleNewImage} />
      Zoom:
      <input type="range" name="scale" onChange={handleScale} min="0.1" max="2" step="0.01" defaultValue="1" />
      <Button onClick={onClickSave}>Save</Button>
    </div>
  );
};

export default AvatarCrop;
