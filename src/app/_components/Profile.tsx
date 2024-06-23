import{
  faFacebook,
  faInstagram

} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-blue-100 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/profile.webp"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Pruettapon Paritsiraprapa</h1>
        <p className="text-base">Computer Engineer</p>
      </div>

      <div className="py-10 text-center ">" May the force be with you "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-blue-300 rounded-md">
        <p>
          <b>Age:</b> 20
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b>Suratthani
        </p>
        <div>
        <FontAwesomeIcon icon={faFacebook} className="mr-1" />
        <b>พฤฒภณ ปริตรศิรประภา</b>
        </div>
        <div>
        <FontAwesomeIcon icon={faInstagram} />
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
