import { getCookie } from "cookies-next";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface About {
  id: number;
  image: File | null;
  description: string;
}

const AboutUS: React.FC = () => {
  const [form, setFormData] = useState<About>({
    id: 0,
    image: null,
    description: "",
  });

  useEffect(() => {
    fetch("http://localhost:8000/aboutus/")
      .then((res) => res.json())
      .then((data) => {
        if (data.length != 0) {
          setFormData(data[0]);
        }
      });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    }
  };

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (form.image) {
      formData.append("image", form.image);
    }

    formData.append("description", form.description);
    fetch("http://localhost:8000/aboutus/", {
      method: "POST",
      headers: {
        Authorization: `Token ${getCookie("token")}`,
      },
      body: formData,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap p-3">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          htmlFor="image"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Image
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="w-full px-3 mb-6 md:mb-0">
        <label
          htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          placeholder="Description"
          name="description"
          value={form.description}
          onChange={handleChangeTextarea}
          className="shadow appearance-none border rounded w-full h-screen py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="w-full px-3">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AboutUS;
