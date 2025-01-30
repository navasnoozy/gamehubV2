import NoImage from "@/assets/noImgThumbnail.jpg"

const CropImageUrl = (url: string) => {
  if (!url) return NoImage;
  return url.replace("/media/", "/media/crop/600/400/");
};

export default CropImageUrl;
