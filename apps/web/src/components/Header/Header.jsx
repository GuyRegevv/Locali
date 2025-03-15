import React from "react";
import { fakeUserData } from "../../../../../Data/fake-data.js";
import HomeButton from "../buttons/HomeButton.jsx";
import SavedPlacesButton from "../buttons/SavedPlacesButton.jsx";
import AddListButton from "../buttons/AddListButton.jsx";
import UserLocation from "./UserLocation.jsx";
import UserDetails from "./UserDetails.jsx";
import Logo from "../Logo.jsx";

export default function Header({ onLogout }) {
  return (
    <div className="w-full">
      <header className="flex items-center px-4 py-3 bg-white relative">
        {/* Left section - Navigation buttons */}
        <div className="flex items-center space-x-2 w-1/3">
          <HomeButton />
          <SavedPlacesButton />
          <AddListButton />
        </div>

        {/* Center section - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Logo />
        </div>

        {/* Right section - User info and logout */}
        <div className="flex items-center justify-end w-2/3">
          <div className="flex items-center">
            <UserLocation location={fakeUserData[0].location} />
            <UserDetails user={fakeUserData[0]} />

            {/* Logout button with Bootstrap icon */}
            {onLogout && (
              <button
                onClick={onLogout}
                className="ml-4 p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300"
                title="Logout"
              >
                <i
                  className="bi bi-box-arrow-right"
                  style={{ fontSize: "20px" }}
                ></i>
              </button>
            )}
          </div>
        </div>
      </header>
      <div className="w-full h-px bg-gray-200"></div> {/* Thin divider line */}
    </div>
  );
}
