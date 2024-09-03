export const uploadToCloudinary = async (pics) => {
  if (pics) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "food-ordering");
    data.append("cloud_name", "dnxc7jh1y");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dnxc7jh1y/image/upload`,
      {
        method: "post",
        body: data,
      }
    );

    const fileData = await res.json();
    console.log("url : ", fileData);
    return fileData.url;
  } else {
    console.log("error");
  }
};
