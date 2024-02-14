
import { useEffect, useState } from 'react';
import ImageGallery from './components/ImageGallery';
import ImageUploadForm from './components/ImageUploadForm';
import axios from 'axios';
import Layout from './components/layout/layout';

function Dashboard() {

  const [images , setImages ] = useState({images : [] , reqStatus : 'idle'})
  const [hasChanges , sethasChanges] = useState(false)


  const deleteImage = async (imgId) => {
    try {
      console.log("DELETING ID: " + imgId)
      setImages(prevImg => ({
        images : prevImg.images,
        reqStatus: 'pending'
      }));
        const response = await axios.post(`http://localhost:5000/api/v1/transactions/delete-image`,{
            imgId : imgId
        });

        setImages(prevImg => ({
          images : prevImg.images.filter(img => img.Imgid !== imgId),
          reqStatus: 'resolved'
        }));

    } catch (error) {
        console.error('Error fetching images:', error);
    }
  }

  useEffect(() => {
    setImages(prevImg => ({
      ...prevImg,
      reqStatus: 'pending'
    }));
    const fetchImages = async () => {
      try {
          const response = await axios.post(`http://localhost:5000/api/v1/transactions/get-images`,{
              userid:JSON.parse(localStorage.getItem('user'))._id,
          });

            setImages({
              images : response.data,
              reqStatus: 'resolved'
            });

      } catch (error) {
          setImages(prevImg => ({
            ...prevImg,
            reqStatus: 'rejected'
          }));
          console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, [hasChanges]);

  return (
    <Layout>
      <ImageUploadForm  setHasChanges={sethasChanges} hasChanges={hasChanges}/>
      <ImageGallery images={images.images} status={images.reqStatus} deleteImage={deleteImage}/>
    </Layout>
  );
}


export default Dashboard;
