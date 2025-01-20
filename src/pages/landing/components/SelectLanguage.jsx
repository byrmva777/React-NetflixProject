import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SelectLanguage() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const navigate = useNavigate();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage); 
  }, [selectedLanguage, i18n]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSignIn = () => {
    navigate("/login"); 
  };

  return (
    <div className="relative flex items-center space-x-4 z-30">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="bg-black text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none"
      >
        <option value="en">English</option>
        <option value="az">Azərbaycan</option>
        <option value="ru">Русский</option>
      </select>
      <button
        onClick={handleSignIn}
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition relative z-40"
      >
        {t("sign_in")}
      </button>
    </div>
  );
}

export default SelectLanguage;
