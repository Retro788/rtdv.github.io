import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import styles from "@/styles/TimeCard.module.css";

const WEATHER_API_KEY = "4b4fc56eb5fe4d4db39175636241203";
const CITY = "Xalapa";

export default function DayComponent() {
  const { data, isLoading } = useSWR(
    `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${CITY}&aqi=no`,
    (url) => axios.get(url).then((res) => res.data)
  );

  const [time, setTime] = useState("");

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Bogota",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
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
    <div className="bg-[#089cffa4] w-full flex overflow-hidden bg-clip-padding text-white py-2 px-4 md:p-8">
      <div className="flex flex-col w-2/3 absolute z-10">
        <div className="flex items-center">
          <p className="text-base md:text-4xl font-bold">{handleWeatherData()}</p>
          {weatherIcon && (
            <Image src={`https:${weatherIcon}`} width={100} height={100} className="w-5 h-5 md:w-28 md:h-28" />
          )}
        </div>
        <p className="capitalize text-xs md:text-lg font-semibold md:mb-4">{time}</p>
        <p className="text-xs md:text-lg">Xalapa</p>
      </div>
      <div className="absolute right-0 top-0 flex justify-end pr-5 z-0 items-center w-full h-full ">
        <Sun />
      </div>
    </div>
  );
}

function Sun() {
  return (
    <div className={`${styles.hot} ${styles.container} w-20 h-20 md:w-56 md:h-56 right-5`}>
      <span className={`${styles.sun} w-10 h-10 md:w-24 md:h-24`}></span>
      <span className={styles.sunx}></span>
    </div>
  );
}
