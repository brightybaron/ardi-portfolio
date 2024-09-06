import { useState, useEffect } from "react";

import Isotope from "isotope-layout";

export default function NavFilter() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("*");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const iso = new Isotope(".konten", {
        itemSelector: ".nav-content",
        masonry: {
          columnWidth: "",
        },
      });

      iso.arrange({ filter: selectedFilter });
      return () => {
        iso.destroy();
      };
    }
  }, [selectedFilter]);

  const handleClick = (index: number, filter: string) => {
    setActiveTab(index);
    setSelectedFilter(filter);
  };
  const tabs = [
    { name: "everything", filter: "*" },
    { name: "photos", filter: ".photos" },
    { name: "projects", filter: ".projects" },
    { name: "posts", filter: ".posts" },
  ];

  return (
    <>
      {tabs.map((tab, index) => (
        <button
          key={index}
          id={`${tab.name}-tab`}
          className={`tab-button capitalize text-xs ${
            activeTab === index ? "text-gray-900 font-bold" : "text-gray-500"
          }`}
          onClick={() => handleClick(index, tab.filter)}
        >
          {tab.name}
        </button>
      ))}
    </>
  );
}
