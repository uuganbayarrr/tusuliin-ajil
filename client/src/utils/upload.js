import axios from "axios";

const upload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "fiverr"); // Assuming 'fiverr' is your upload preset

  try {
    const response = await axios.post('https://api.cloudinary.com/v1_1/uugnaadev/image/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data.secure_url; // Assuming Cloudinary returns the secure URL of the uploaded file
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export default upload;
