import { FC, useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import * as Styles from "./styles";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

type ImageViewerComponentProps = {
  images: string[];
};

const ImageViewerComponent: FC<ImageViewerComponentProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div>
      <Styles.ProductComponentMainImage
        src={images[0]}
        onClick={() => openImageViewer(0)}
      />

      <Styles.ProductComponentImagesContainer ref={ref} {...events}>
        {images.map((src, index) => {
          if (index > 0) {
            return (
              <Styles.ProductComponentSecondaryImage
                src={src}
                onClick={() => openImageViewer(0)}
                key={index}
                alt=""
              />
            );
          }
          return null;
        })}
      </Styles.ProductComponentImagesContainer>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        />
      )}
    </div>
  );
};

export default ImageViewerComponent;
