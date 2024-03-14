import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import styles from "@/styles/TimeCard.module.css";

const WEATHER_API_KEY = "4b4fc56eb5fe4d4db39175636241203";
const CITY = "Xalapa";

export default function NightComponent() {
  const { data, isLoading } = useSWR(
    `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${CITY}&aqi=no`,
    (url) => axios.get(url).then((res) => res.data)
  );

  const [time, setTime] = useState("");

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Bogota",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatter.format(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Función para manejar los datos de clima
  const handleWeatherData = () => {
    if (isLoading || !data) {
      // Si todavía se está cargando o no hay datos, muestra un mensaje de carga
      return "Cargando...";
    } else if (data.error) {
      // Si hay un error en los datos, muestra un mensaje de error
      return "Error al cargar los datos";
    } else {
      // Si hay datos disponibles, muestra la temperatura y la descripción del clima
      return `${data.current.temp_c}°C, ${data.current.condition.text}`;
    }
  };

  // Obtener el icono del clima si los datos están disponibles
  const weatherIcon = data?.current?.condition?.icon ?? "";

  return (
    <div className="bg-[#001324] w-full flex overflow-hidden bg-clip-padding text-white py-2 px-4 lg:p-8">
      <div className="flex flex-col justify-center lg:h-full w-2/3 absolute lg:static z-10">
        <div className="flex items-center">
          <p className="text-lg lg:text-8xl font-bold">{handleWeatherData()}</p>
          {weatherIcon && (
            <Image src={`https:${weatherIcon}`} width={100} height={100} className="w-5 h-5 lg:w-28 lg:h-28" />
          )}
        </div>
        <p className="capitalize text-xs lg:text-3xl font-semibold lg:mb-4">{time}</p>
        <p className="text-xs lg:text-2xl">{CITY}</p>
      </div>
      <div className="absolute right-0 top-0 flex justify-end pr-5 z-0 items-center w-full h-full ">
        <Moon />
      </div>
    </div>
  );
}

function Moon() {
  return (
    <div className={`${styles.night} ${styles.container} w-20 h-20 lg:w-56 lg:h-56 right-5`}>
      <span className={`${styles.moon} w-10 h-10 lg:w-24 lg:h-24`}></span>
      <span className={styles.spot1}></span>
      <span className={styles.spot2}></span>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
