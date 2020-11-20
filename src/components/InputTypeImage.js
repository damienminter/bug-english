import React, { useState } from "react";

export default function InputTypeImage({ input, setInput }) {
  // const classes = useStyles();

  const previewInit = () => {
    if (input.typeImage !== "") return URL.createObjectURL(input.typeImage);
  };

  const [preview, setPreview] = useState(previewInit); // Temp location of the selected file
  const [error, setError] = useState(null);

  // Validation
  const types = ["image/png", "image/jpeg"];

  // Add Photo to UI
  const handleChangePhoto = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setPreview(URL.createObjectURL(selected));
      setInput({ ...input, typeImage: selected });
      setError("");
    } else {
      setPreview(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChangePhoto} />
      <div className="output">
        {preview && (
          <img src={preview} alt={preview.name} className="main-image"></img>
        )}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
