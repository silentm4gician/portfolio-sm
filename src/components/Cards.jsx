import { useState } from "react";

const Cards = ({ proyect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Para la imagen seleccionada

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="max-w-sm h-full bg-transparent border border-gray-600 rounded-lg shadow-md hover:shadow-sky-300/50 place-items-stretch hover:scale-105 duration-300">
        <div className="h-[220px]">
          <a href={proyect.link} target="_blank">
            <img
              className="rounded-t-lg w-full h-full"
              src={proyect.img}
              alt={proyect.name}
            />
          </a>
        </div>
        <div className="p-5">
          <a href={proyect.link} target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {proyect.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {proyect.desc}
          </p>
          <a
            href={proyect.link}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-transparent rounded-lg shadow hover:shadow-sky-300/50 duration-300"
          >
            Visit Site
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          {proyect.repo && (
            <a
              href={proyect.repo}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-transparent rounded-lg shadow hover:shadow-sky-300/50 duration-300"
            >
              View Repo
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          )}
          {proyect.screenshots && (
            <button
              className="mx-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-transparent rounded-lg shadow hover:shadow-sky-300/50 duration-300"
              onClick={toggleModal}
            >
              View Screenshots
            </button>
          )}
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50"
          onClick={toggleModal}
        >
          <div
            className="bg-black/60 rounded-lg p-6 relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()} // Evitar cerrar el modal al hacer clic dentro de él
          >
            <button
              className="absolute top-5 right-2 text-red-500 text-2xl hover:text-red-600 duration-200"
              onClick={toggleModal}
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="30"
                width="2em"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
              </svg>
            </button>
            <h3 className="text-lg font-medium text-white mb-4">
              Screenshots of {proyect.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {proyect.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="rounded-lg border-2 border-gray-300 cursor-pointer hover:scale-105 duration-200 h-full"
                  onClick={() => openImageModal(screenshot)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20"
          onClick={closeImageModal}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Evitar cerrar el modal al hacer clic en la imagen
          >
            <button
              className="absolute top-2 right-2 text-red-500 text-2xl hover:text-red-600 duration-200"
              onClick={closeImageModal}
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="30"
                width="2em"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Full-size screenshot"
              className="max-w-[80vw] max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
