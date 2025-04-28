import DogCardCompound from "@/components/compound/DogCard";
import withImageFetch from "@/hoc/withImagesFetch";

interface ImageGridProps {
  images: Array<string>;
}

const ImageGridBig: React.FC<ImageGridProps> = ({ images }: ImageGridProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        width: "95dvw",
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      {" "}
      {images &&
        images.map((image, index) => (
          <div style={{}} key={index}>
            <DogCardCompound imageUrl={image} />
          </div>
        ))}
    </div>
  );
};
export const ImageGridWithFetch_v2 = withImageFetch(ImageGridBig, 30);

export default ImageGridBig;
