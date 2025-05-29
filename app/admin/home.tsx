import { getCookie } from "cookies-next";
import Image from "next/image";
import {
  ChangeEvent,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export function Home() {
  return (
    <div className=" flex flex-col gap-10">
      <Carousel />
      <WorshipPlaces />
      <Magazine />
    </div>
  );
}

//-----------------------------------Carousel ---------------------------------
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
      console.log("Error fetching carousel data:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const headers = new Headers();
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
      console.log("Error deleting image:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file");
      return;
    }
    const headers = new Headers();
    headers.append("Authorization", `Token ${getCookie("token")}`);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/carousel/", {
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
      alert("Failed to upload image");
    }
  };

  return (
    <div>
      <p className="text-xl font-bold">Carousel</p>
      <div className="my-3 bg-fourth p-4 rounded-md">
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
            <Image
              src={image.image} // Assuming image.image is the path in your public directory (e.g., "/path/to/your/image.jpg")
              alt={String(image.id)}
              className="bg-slate-400 w-full h-44 mx-auto object-cover"
              width={1920}
              height={1080}
              objectFit="cover" // Ensures the image covers the area without distortion
            />
            <div className="flex justify-around">
              <button
                onClick={() => handleDelete(image.id)}
                className="p-3 my-2 bg-red-400 rounded-md"
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

//-------------------------------- Worship Places -----------------------------

const WorshipPlaces: React.FC = () => {
  interface WorshipPlace {
    id: number;
    name: string;
    image: string;
  }

  interface Prayer {
    id: number;
    day: string;
    time: string;
    description: string;
    place: number;
  }
  const [worshipPlaces, setWorshipPlaces] = useState<WorshipPlace[]>([]);
  const [editingWorshipPlace, setEditingWorshipPlace] =
    useState<WorshipPlace | null>(null);

  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [selectedPrayer, setSelectedPrayer] = useState<Prayer[]>([]);
  const [editingPrayer, setEditingPrayer] = useState<Prayer | null>(null);

  useEffect(() => {
    fetchWorshipPlaces();
    fetchPrayers();
  }, []);

  const fetchWorshipPlaces = async () => {
    try {
      const response = await fetch("http://localhost:8000/worshipplaces/");
      if (!response.ok) {
        throw new Error("Failed to fetch worship places");
      }
      const data = await response.json();
      setWorshipPlaces(data);
    } catch (error) {
      console.log("Error fetching worship places:", error);
    }
  };

  const fetchPrayers = async () => {
    try {
      const response = await fetch("http://localhost:8000/prayers/");
      if (!response.ok) {
        throw new Error("Failed to fetch prayers");
      }
      const data = await response.json();
      setPrayers(data);
    } catch (error) {
      console.log("Error fetching prayers:", error);
    }
  };

  const PostWorship: React.FC = () => {
    const [worshipPlace, setWorshipPlace] = useState({
      id: 0,
      name: "",
      image: null as File | null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setWorshipPlace((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        setWorshipPlace((prevState) => ({
          ...prevState,
          image: file,
        }));
      }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const formData = new FormData();
        formData.append("name", worshipPlace.name);
        if (worshipPlace.image) {
          formData.append("image", worshipPlace.image);
        }

        const response = await fetch("http://localhost:8000/worshipplaces/", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          // Data successfully posted
          alert("Data posted successfully");
        } else {
          // Error handling
          alert("Failed to post data");
        }
      } catch (error) {
        console.log("Error posting data:", error);
      }
    };

    return (
      <div className="my-3 mx-auto bg-fourth p-3 rounded-lg shadow-md">
        <h2 className=" font-bold mb-4">Add New Worship Place</h2>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-wrap justify-around"
        >
          <div className="mb-4 w-1/3">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={worshipPlace.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter the name of the worship place"
            />
          </div>
          <div className="w-1/3 mb-4">
            <label htmlFor="image" className="block text-sm font-semibold mb-2">
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className=" bg-blue-500 text-white w-1/4 h-10 my-auto px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
  const handleCloseEditForm = () => {
    setEditingWorshipPlace(null);
  };

  const EditForm: React.FC<{
    worshipPlace: WorshipPlace;
    onClose: () => void;
  }> = ({ worshipPlace, onClose }) => {
    const [editedWorshipPlace, setEditedWorshipPlace] =
      useState<WorshipPlace>(worshipPlace);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEditedWorshipPlace((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const [file, setFile] = useState<File | null>(null);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        if (!file) {
          alert("Please select a file");
          return;
        }
        const formData = new FormData();
        formData.append("id", editedWorshipPlace.id.toString());
        formData.append("name", editedWorshipPlace.name);
        formData.append("image", file);

        const response = await fetch(
          `http://localhost:8000/worshipplaces/${editedWorshipPlace.id}/`,
          {
            method: "PUT",
            body: formData,
          },
        );

        if (response.ok) {
          alert("Worship place updated successfully");
          fetchWorshipPlaces();
          onClose();
        } else {
          alert("Failed to update worship place");
        }
      } catch (error) {
        console.log("Error updating worship place:", error);
      }
    };
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      setFile(file || null);
    };

    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Edit Worship Place</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={editedWorshipPlace.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter the name of the worship place"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-semibold mb-2"
              >
                Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  const handleDelete = async (id: number) => {
    try {
      const headers = new Headers();
      headers.append("Authorization", `Token ${getCookie("token")}`);

      const response = await fetch(
        `http://localhost:8000/worshipplaces/${id}`,
        {
          method: "DELETE",
          headers: headers,
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete image");
      }
      alert("Deleted successfully");
      const updatedWorshipPlaces = worshipPlaces.filter(
        (item) => item.id !== id,
      );
      setWorshipPlaces(updatedWorshipPlaces);
    } catch (error) {
      console.log("Error deleting image:", error);
    }
  };

  const Prayers: React.FC<{
    placeId: number;
    onClose: () => void;
  }> = ({ placeId, onClose }) => {
    const [prayers, setPrayers] = useState<Prayer[]>([]);
    const [newPrayer, setNewPrayer] = useState<Prayer>({
      id: 0,
      day: "",
      time: "",
      description: "",
      place: placeId,
    });
    const [editingPrayer, setEditingPrayer] = useState<Prayer | null>(null);

    useEffect(() => {
      fetchPrayers();
    }, []);

    const fetchPrayers = async () => {
      try {
        const response = await fetch(`http://localhost:8000/prayers/`);
        if (!response.ok) {
          throw new Error("Failed to fetch prayers");
        }
        const data = await response.json();
        const filteredData = data.filter(
          (prayer: { place: number }) => prayer.place === placeId,
        );
        setPrayers(filteredData);
      } catch (error) {
        console.log("Error fetching prayers:", error);
      }
    };

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const { name, value } = e.target;
      setNewPrayer((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleAddPrayer = async () => {
      try {
        const response = await fetch("http://localhost:8000/prayers/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPrayer),
        });

        if (response.ok) {
          alert("Prayer added successfully");
          fetchPrayers(); // Refresh prayer list
          setNewPrayer({
            id: 0,
            day: "",
            time: "",
            description: "",
            place: placeId,
          }); // Reset form fields
        } else {
          alert("Failed to add prayer");
        }
      } catch (error) {
        console.log("Error adding prayer:", error);
      }
    };

    const handleEditPrayer = (prayer: Prayer) => {
      setEditingPrayer(prayer);
    };

    const handleSavePrayer = async () => {
      if (!editingPrayer) return;

      try {
        const response = await fetch(
          `http://localhost:8000/prayers/${editingPrayer.id}/`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editingPrayer),
          },
        );

        if (response.ok) {
          alert("Prayer edited successfully");
          fetchPrayers(); // Refresh prayer list
          setEditingPrayer(null); // Clear editing mode
        } else {
          alert("Failed to edit prayer");
        }
      } catch (error) {
        console.log("Error editing prayer:", error);
      }
    };

    const handleDeletePrayer = async (id: number) => {
      try {
        const response = await fetch(`http://localhost:8000/prayers/${id}/`, {
          method: "DELETE",
        });

        if (response.ok) {
          console.log("Prayer deleted successfully");
          fetchPrayers(); // Refresh prayer list
        } else {
          alert("Failed to delete prayer");
        }
      } catch (error) {
        console.log("Error deleting prayer:", error);
      }
    };

    const handleCancelEdit = () => {
      setEditingPrayer(null);
    };

    const handleRowSave = (prayer: Prayer) => {
      setEditingPrayer(prayer);
      handleSavePrayer();
    };

    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-2xl font-bold mb-4">Edit Prayers</p>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Day</th>
                <th className="border px-4 py-2">Time</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {prayers.map((prayer) => (
                <tr key={prayer.id}>
                  <td className="border px-4 py-2">
                    {editingPrayer && editingPrayer.id === prayer.id ? (
                      <input
                        type="text"
                        value={editingPrayer.day}
                        onChange={(e) =>
                          setEditingPrayer({
                            ...editingPrayer,
                            day: e.target.value,
                          })
                        }
                      />
                    ) : (
                      prayer.day
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingPrayer && editingPrayer.id === prayer.id ? (
                      <input
                        type="text"
                        value={editingPrayer.time}
                        onChange={(e) =>
                          setEditingPrayer({
                            ...editingPrayer,
                            time: e.target.value,
                          })
                        }
                      />
                    ) : (
                      prayer.time
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingPrayer && editingPrayer.id === prayer.id ? (
                      <input
                        type="text"
                        value={editingPrayer.description}
                        onChange={(e) =>
                          setEditingPrayer({
                            ...editingPrayer,
                            description: e.target.value,
                          })
                        }
                      />
                    ) : (
                      prayer.description
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingPrayer && editingPrayer.id === prayer.id ? (
                      <>
                        <button
                          className="mr-2 bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 transition duration-300"
                          onClick={() => handleRowSave(editingPrayer)}
                        >
                          Save
                        </button>
                        <button
                          className="bg-gray-500 text-white py-1 px-2 rounded-md hover:bg-gray-600 transition duration-300"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="mr-2 bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 transition duration-300"
                          onClick={() => handleEditPrayer(prayer)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition duration-300"
                          onClick={() => handleDeletePrayer(prayer.id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <p className="text-xl font-bold mb-2">Add New Prayer</p>
            <div className="flex">
              <input
                type="text"
                name="day"
                value={newPrayer.day}
                onChange={handleInputChange}
                placeholder="Day"
                className="mr-2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="time"
                value={newPrayer.time}
                onChange={handleInputChange}
                placeholder="Time"
                className="mr-2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <textarea
                name="description"
                value={newPrayer.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="mr-2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleAddPrayer}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Add
              </button>
              <button
                onClick={onClose}
                className="bg-gray-500 text-white py-2 px-4 rounded-md ml-2 hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleClosePlaces = () => {
    setSelectedPrayer([]);
    handleCloseEditForm();
  };

  const setPrayersPop = (id: number) => {
    setSelectedPrayer(prayers.filter((item) => item.place === id));
  };
  const [edit, setEdit] = useState(true);
  return (
    <div className="">
      <p className=" font-bold text-xl"> Worship places and prayers</p>
      <PostWorship />
      <div className=" flex flex-wrap gap-2">
        {worshipPlaces.map((place, index) => (
          <div key={index} className="my-2 bg-fourth w-80">
            <Image
              src={place.image.replace(/.*\/public/, "http://localhost:3000/")} // Assuming `image` contains the local path of the image
              alt={String(place.id)}
              className="bg-slate-400 w-80 h-44 mx-auto"
              width={1920}
              height={1080}
            />
            <p className="p-2 text-center">{place.name}</p>
            <div className="p-3 flex justify-around">
              <button
                className=" p-3 my-2 bg-blue-500 rounded-md"
                onClick={() => {
                  setEditingWorshipPlace(place);
                  setEdit(true);
                }}
              >
                Edit
              </button>
              <button
                className="p-3 my-2 text-white bg-gray-500 rounded-md"
                onClick={() => {
                  setEditingWorshipPlace(place);
                  setPrayersPop(place.id);
                  setEdit(false);
                }}
              >
                Prayers
              </button>
              <button
                onClick={() => handleDelete(place.id)}
                className="p-3 my-2 bg-red-400 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>{" "}
      {editingWorshipPlace && edit && (
        <EditForm
          worshipPlace={editingWorshipPlace}
          onClose={handleCloseEditForm}
        />
      )}
      {selectedPrayer && editingWorshipPlace && !edit && (
        <Prayers placeId={editingWorshipPlace.id} onClose={handleClosePlaces} />
      )}
    </div>
  );
};

//---------------------------------Devuni  Sparsha ----------------------------

const Magazine: React.FC = () => {
  interface Magazine {
    id: number;
    name: string;
    month: string;
    image: string;
    download_url: string;
  }
  interface MagazineTableProps {
    magazines: Magazine[];
  }
  const [magazine, setMagazine] = useState<Magazine[]>([
    {
      id: 0,
      name: "",
      month: "",
      image: "",
      download_url: "",
    },
  ]);
  useEffect(() => {
    fetch("http://localhost:8000/magazines/")
      .then((res) => res.json())
      .then((data) => {
        setMagazine(data);
      });
  }, []);

  const PostMagazineData = () => {
    const [name, setName] = useState<string>("");
    const [month, setMonth] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [pdfFile, setPdfFile] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setImage(e.target.files[0]);
      }
    };

    const handleFileChange2 = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setPdfFile(e.target.files[0]);
      }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!image || !pdfFile) {
        alert("Image or PDF file not selected");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("month", month);
      formData.append("image", image);
      formData.append("download_url", pdfFile);

      fetch("http://localhost:8000/magazines/", {
        method: "POST",
        headers: {
          Authorization: `Token ${getCookie("token")}`,
        },
        body: formData,
      });
    };

    return (
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-wrap p-3 bg-fourth m-3"
        style={{ maxWidth: "600px" }}
      >
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            htmlFor="month"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Month
          </label>
          <input
            id="month"
            type="text"
            placeholder="Month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

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
            onChange={handleFileChange}
            className="mb-4"
          />
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            htmlFor="pdfFile"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            PDF File
          </label>
          <input
            id="pdfFile"
            type="file"
            accept=".pdf"
            onChange={handleFileChange2}
            className="mb-4"
          />
        </div>

        <div className="w-full px-3">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload
          </button>
        </div>
      </form>
    );
  };
  const MagazineTable: React.FC<MagazineTableProps> = ({ magazines }) => {
    const [editMagazine, setEditMagazine] = useState<Magazine | null>(null);

    const handleEdit = (magazine: Magazine, id: number) => {
      setEditMagazine(magazine);
    };

    const handleDelete = (id: number) => {
      fetch("http://localhost:8000/magazines/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${getCookie("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMagazine(data);
        });
      alert("Magazine deleted successfully");
      window.location.reload();
    };

    interface Magazine {
      id: number;
      name: string;
      month: string;
      image: File | null | string;
      download_url: File | string | null;
    }

    interface MagazineEditFormProps {
      magazine: Magazine;
      onClose: () => void;
    }

    const MagazineEditForm: React.FC<MagazineEditFormProps> = ({
      magazine,
      onClose,
    }) => {
      const [editedMagazine, setEditedMagazine] = useState<Magazine>(magazine);

      const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          const image = e.target.files[0];
          setEditedMagazine((prevState) => ({
            ...prevState,
            image: image,
          }));
        }
      };

      const handleDownloadUrlChange = (
        e: React.ChangeEvent<HTMLInputElement>,
      ) => {
        if (e.target.files && e.target.files.length > 0) {
          const downloadUrl = e.target.files[0];
          setEditedMagazine((prevState) => ({
            ...prevState,
            download_url: downloadUrl,
          }));
        }
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", editedMagazine.name);
        formData.append("month", editedMagazine.month);
        formData.append("image", editedMagazine.image as File);
        formData.append("download_url", editedMagazine.download_url as File);

        fetch(`http://localhost:8000/magazines/${magazine.id}/`, {
          method: "PUT",
          headers: {
            Authorization: `Token ${getCookie("token")}`,
          },
          body: formData,
        });
        onClose();
      };

      return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Edit Magazine
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editedMagazine.name}
                  onChange={(e) =>
                    setEditedMagazine({
                      ...editedMagazine,
                      name: e.target.value,
                    })
                  }
                  className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Month</label>
                <input
                  type="text"
                  name="month"
                  value={editedMagazine.month}
                  onChange={(e) =>
                    setEditedMagazine({
                      ...editedMagazine,
                      month: e.target.value,
                    })
                  }
                  className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">
                  Download URL
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleDownloadUrlChange}
                  className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                Month
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                Download URL
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {magazines.map((magazine, index) => (
              <tr key={index}>
                <td className="px-6 py-4 w-1/6">{magazine.name}</td>
                <td className="px-6 py-4 w-1/6">{magazine.month}</td>
                <td className="px-6  text-blue-500 py-4 w-1/6">
                  <a href={magazine.image.toString()}>Image</a>
                </td>
                <td className="px-6 text-blue-500 py-4 w-1/6">
                  <a href={magazine.download_url.toString()}> Download</a>
                </td>
                <td className="px-6 py-4 w-1/6">
                  <button
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={() => handleEdit(magazine, magazine.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="ml-2 text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(magazine.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {editMagazine && (
          <MagazineEditForm
            magazine={editMagazine}
            onClose={() => setEditMagazine(null)}
          />
        )}
      </div>
    );
  };

  return (
    <div>
      <p className=" font-bold text-xl"> Devuni Sparsha</p>
      <PostMagazineData />
      <MagazineTable magazines={magazine} />
    </div>
  );
};
