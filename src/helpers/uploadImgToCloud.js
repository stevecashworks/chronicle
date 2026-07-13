import toast from "react-hot-toast";

const uploadImageToCloud = async (image, fn, setImgUrl, file_type="image") => {
  fn(true)
  console.log(image)
  if (!image) {
    throw new Error("No image file provided.");
  }

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "chronicle");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/lx5y6vjd/${file_type}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      toast.error("Failed to upload image.")
      console.log(response.ok)

      fn(false)
    }
    toast.success("uploaded successfully")
    const {secure_url, public_id}=data

    setImgUrl({secure_url, public_id});
    console.log({data})
    fn(false)
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    toast.error("Failed to upload image")
    console.log(error.message)
    fn(false)
  }
};
export default uploadImageToCloud