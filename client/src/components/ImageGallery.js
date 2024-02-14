import axios from "axios";
import { Image } from "antd";
import emptyImage from "../assets/empty.jpeg";
import { DeleteFilled } from "@ant-design/icons";

const ImageGallery = ({ status, images, deleteImage }) => {
  if (status === "pending" && images.length === 0) {
    return <p>Loading...</p>;
  } else if (status === "rejected") {
    return <p>Error while fetching images</p>;
  }

  console.log("Images: " + images.length);
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="my-4">Image Gallery</h2>
      <div className="image-grid">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {images?.map((image, index) => (
            <div key={index} className="image-wrapper">
              <Image
                src={image.dataURL}
                alt={`User`}
                className="image"
                width={300}
                height={300}
              />
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  position: "absolute",
                  top: "4px",
                  right: "36px",
                }}
                onClick={() => deleteImage(image.Imgid)}
              >
                <DeleteFilled
                  style={{
                    color: "rgba(255,0,0,1)",
                  }}
                />
              </button>
            </div>
          ))}
        </Image.PreviewGroup>
        {images.length === 0 && (
          <div>
            <h4>Upload Images to see here &nbsp;</h4>
            <img src={emptyImage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
