import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Button, Input } from 'antd';

import './ImageUpload.css'

const ImageUploadForm = ({setHasChanges , hasChanges }) => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null)
  
  const handleImageChange = (e) => {
        setImage(e.target.files[0])
  };

  const [uploading , setUploading ] = useState(false)

  const handleUpload = async () => {
    try {
      setUploading(true)
      const formData = new FormData();
      formData.append('file', image);
      formData.append('userid', JSON.parse(localStorage.getItem('user'))._id);


      const response = await axios.post('http://localhost:5000/api/v1/transactions/add-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setUploading(false)
      fileInputRef.current.value = ""
      setImage(null)
      setHasChanges(!hasChanges)
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploading(false)
    }
  };

  return (
    <div className=''>
      <h2 className='bold'>Image Upload</h2>
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} style={{ borderRadius : '4px' , border : '1px solid rgba(0,0,0,0.5)', padding : '4px' , margin: '10px 20px'}}  />
      <Button disabled={uploading} type='primary' styles={{ color : 'green'  , marginleft : '4px'}} onClick={handleUpload} >Upload</Button>
    </div>
  );
};
export default ImageUploadForm;
