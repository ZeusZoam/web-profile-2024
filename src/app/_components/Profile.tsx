import {
  faFacebook,
  faInstagram,
  

} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-light-white h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/prt.jpg"
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

      <div className="py-10 text-center ">" Turn your wounds into wisdom. "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-contract-color rounded-md">
        <p>
          <b>Age:</b> 20
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b>Suratthani
        </p>
      </div>
      <div className="p-6 mx-1 xl:mx-6 bg-contract-color rounded-md mt-2 flex-col">
        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
        <a href="https://www.facebook.com/profile.php?id=100014525536504"><span>พฤฒภณ ปริตรศิรประภา</span></a>
        <div>
          <FontAwesomeIcon icon={faInstagram} className="mr-2" />
          <a href="https://www.instagram.com/been_ryl/"><span>been_ryl</span></a>
        </div>
        <div>
        <FontAwesomeIcon icon={faPhone}  className="mr-2" />
          <span>099-4874004</span>
        </div>
      </div>

    </div>
  );
};

export default Profile;
