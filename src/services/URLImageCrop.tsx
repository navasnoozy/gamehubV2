const CropImageUrl = (url: string) => {
  if (!url) return ''
  return url.replace("/media/", "/media/crop/600/400/");
};

export default CropImageUrl;
