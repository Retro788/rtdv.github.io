import axios from "axios";
import React from "react";
import useSWR from "swr";
import Image from "next/image";
import instagram from "../assets/images/instagram.png"; // Importa la imagen de Instagram

export default function InstagramCard() {
  const [available, setAvailable] = React.useState(false);

  const { data, isLoading } = useSWR("/api/instagram", (url) =>
    axios
      .get(url)
      .then((res) => {
        setAvailable(true);
        return res.data;
      })
      .catch((err) => {
        setAvailable(false);
      })
  );

  if (isLoading || !available) {
    return (
      <a
        href="https://www.instagram.com/fernandomixers/"
        target="_blank"
        className="flex flex-col group rounded-3xl bg-red-700/50 relative col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
      >
        <Image
          src={instagram}
          className="animate-pulse rounded-3xl"
          alt="instagram"
        />
      </a>
    );
  }

  return (
    <a
      href="https://www.instagram.com/tu_usuario_de_instagram/"
      target="_blank"
      className={`text-white flex flex-col group rounded-3xl overflow-hidden md:overflow-hidden relative col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out`}
    >
      {/* Contenido del enlace */}
    </a>
  );
}
