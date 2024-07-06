import { useState } from "react";
import { useParams } from "react-router-dom";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import useFetchData from "../../hooks/useFetchData"; // Add this import statement
import { BASE_URL } from "./../../config";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");

  const { id } = useParams();

  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);

  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
    photo,
  } = doctor;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loader />}
        {error && <Error />}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[400px]">
                  <img src={photo} alt="" className="w-full" />
                </figure>
                <div>
                  <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    {specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                    {name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                      <img src={starIcon} alt="" />
                      {averageRating}
                    </span>
                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                      ({totalRating})
                    </span>
                  </div>
                  <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`py-2 px-5 mr-5 text-[16px] font-semibold ${
                    tab === "about"
                      ? "border-b border-solid border-primaryColor"
                      : ""
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={`py-2 px-5 mr-5 text-[16px] font-semibold ${
                    tab === "feedback"
                      ? "border-b border-solid border-primaryColor"
                      : ""
                  }`}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px]">
                {tab === "about" && <DoctorAbout />}
                {tab === "feedback" && <Feedback />}
              </div>
            </div>

            <div>
              <SidePanel />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
