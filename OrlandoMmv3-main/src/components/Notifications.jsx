import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Notifications() {
  const [t, i18n] = useTranslation("global");
  const [show, setShow] = React.useState(true);

  const notifications = [
    {
      id: 1,
      es: {
        title: "RetroTheDev",
        description:
          "🎮 Hola Viajero 🚀 Este es mi portafolio de desarrollo de software, disfruten de los demos e imagenes interactuables que he diseñado",
      },
      en: {
        title: "RetroTheDev",
        description:
          "🎮 Hello Traveler 🚀 This is my software development portfolio, enjoy the demos and interactive images that I have designed.",
      },
      link: "https://discord.dog/1029594358426648616",
      img: "https://i.pinimg.com/564x/55/bc/c5/55bcc5aed42c9cbf2550c5f168505190.jpg",
      link_view: "ven a mi discord",
    },
  ];
  return (
    <div className="fixed bottom-5 right-5 flex flex-col left-5 md:left-auto md:w-[512px] z-50 pointer-events-none">
      {notifications.map((notification, index) => (
        <motion.div
          key={notification.id}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: show ? 0 : "150%" }}
          className="w-full flex flex-col md:flex-row p-4 rounded-md shadow-md text-black bg-white items-center pointer-events-auto"
        >
          <button
            className="absolute top-2 right-2 z-10"
            onClick={() => setShow(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 hover:text-gray-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 11.414l4.95 4.95 1.414-1.414L11.414 10l4.95-4.95L14.95 3.636 10 8.586 5.05 3.636 3.636 5.05 8.586 10l-4.95 4.95 1.414 1.414L10 11.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="flex-col justify-center items-center mr-4 h-full w-1/2 md:w-[350px] hidden md:flex aspect-square">
            <img
              src={notification.img}
              className="w-full h-full object-contain"
              alt=""
              draggable="false"
            />
          </div>
          <div className="flex flex-col w-full md:w-auto">
            <h3 className="text-lg font-semibold">
              {i18n.language == "en"
                ? notification.en.title
                : notification.es.title}
            </h3>
            <p className="text-sm">
              {i18n.language == "en"
                ? notification.en.description
                : notification.es.description}
            </p>
            <a
              href={notification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline mt-2.5"
            >
              {notification.link_view}
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
