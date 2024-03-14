import React from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { CountUp } from "use-count-up";

export default function BirthdayCard() {
  const [t, i18n] = useTranslation("global");

  const getAge = () => {
    let age = moment().diff(moment([2002, 2, 20]), "years");
    return age;
  };

  const getBirthday = () => {
    let year = moment().year();
    let month = moment().month() + 1;
    let day = moment().date();

    if (month > 3 || (month === 3 && day > 20)) {
      year += 1;
    }

    let birthday = moment([year, 2, 20]);
    return birthday.diff(moment(), "days");
  };

  return (
    <div className="text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm bg-[#ff4848d3] p-4 justify-center items-center">
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <p className="text-xs md:text-lg uppercase font">
            {t("birthday.age")}
          </p>
          <p className="text-4xl md:text-8xl font-bold">
            <CountUp isCounting end={getAge()} duration={4.5} />
          </p>
          <p className="text-xs md:text-xl uppercase font-semibold text-center">
            {t("birthday.years-old")}
          </p>
        </div>
        <p className="text-sm hidden md:flex">
          {`${getBirthday()} ${t("birthday.time")}`}
        </p>
      </div>
    </div>
  );
}
