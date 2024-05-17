import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export function Home() {
  return (
    <div>
      <Carousel />
    </div>
  );
}

function Carousel() {
  const [carousel, setCarousel] = useState([{ image: "", id: 0 }]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  };

  useEffect(() => {
    fetchCarouselData();
  }, []);

  const fetchCarouselData = async () => {
    try {
      const response = await fetch("http://localhost:8000/carousel");
      if (!response.ok) {
        throw new Error("Failed to fetch carousel data");
      }
      const data = await response.json();
      setCarousel(data);
    } catch (error) {
      console.error("Error fetching carousel data:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Authorization", `Token ${getCookie("token")}`);

      const response = await fetch(`http://localhost:8000/carousel/${id}`, {
        method: "DELETE",
        headers: headers,
      });

      if (!response.ok) {
        throw new Error("Failed to delete image");
      }

      // Update carousel state after successful deletion
      const updatedCarousel = carousel.filter((item) => item.id !== id);
      setCarousel(updatedCarousel);
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file");
      return;
    }
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Token ${getCookie("token")}`);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
        headers: headers,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      // After uploading image, fetch updated carousel data
      await fetchCarouselData();

      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image");
    }
  };

  return (
    <div>
      <p className="text-xl font-bold">Carousel</p>
      <div className="m-3 bg-fourth p-4 rounded-md">
        <p className="font-bold"> Add new Image</p>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload
          </button>
        </form>
      </div>
      <div className="flex gap-3 flex-wrap">
        {carousel.map((image, index) => (
          <div className="w-80 bg-fourth h-60" key={index}>
            <img
              src={https://github.com/anilkumar-011/epm/blob/master/backend/epm/media/home/carousel/2023wrapped_summary-share_1_2_Qg9ijN5.jpeg} // Assuming `image` contains the local path of the image
              alt={String(image.id)}
              className="bg-slate-400 w-full h-44 mx-auto"
            />
            <div className="flex justify-around">
              <button
                onClick={() => handleDelete(image.id)}
                className="p-3 my-2 bg-red-500 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
