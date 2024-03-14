import React from "react";
import styles from "@/styles/AboutCard.module.css";
import Image from "next/image";

import me from "@/assets/images/me.webp";
import { useTranslation } from "react-i18next";

export default function AboutCard() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="relative col-span-3 aspect-square md:aspect-auto md:row-span-2 bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl overflow-hidden">
      <div className={styles.water}></div>
      <Image
        src={me}
        alt="Fernando San Gabriel"
        className="absolute bottom-[-10%] -right-1/4 w-8/12 md:h-full md:auto object-contain -z-0 hidden md:flex"
        width="512"
        height="512"
        draggable="false"
        placeholder="blur"
        loading="eager"
        priority
      />

      <div className="h-full md:w-8/12 absolute top-0 left-0 p-4 md:p-8 flex flex-col justify-start  md:justify-end">
        <h1 className="text-3xl md:text-xl lg:text-5xl font-bold text-white mb-4 md:mb-5">
          👋 {i18n.language === "es" ? "Hola, soy" : "Hi, I'm"} Fernando (Retro)
        </h1>
        <p className="text-md md:text-lg lg:text-2xl text-white">
          {i18n.language === "es" ? (
            <>
              Soy <b>Ingeniero en Software y Mecatronico</b> con experiencia en <b>Desarrollo de Redes Neuronales</b>.
              Soy bueno en <b>Logica matematica</b> y <b>Desarrollo de Software</b>, así como en{" "}
              <b>Lenguajes de alto rendimiento.</b> Me encanta aprender cosas nuevas y experimentar
              con nuevas tecnologías. Tengo buen ojo para los detalles y siempre
              pongo todo de mi en mi trabajo.
            </>
          ) : (
            <>
              I am a <b>Software Engineer</b> with experience in <b>Development of Neural Networks</b>.
              I&apos;m good at <b>Mathematical Logic</b> and <b>Software Development</b>, as well as{" "}
              <b>High-performance Programming Languages</b>. I love learning new things and experimenting
              with new technologies. I have a good eye for details and I always
              put my all into my work.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
