import React, { useState, useEffect, useRef } from 'react';
import { AiFillHome } from "react-icons/ai"; // Example icon component
import { Chip } from "@nextui-org/react"; // Example Chip component

const CustomTab = () => {
  // Example array of tab data
  const tabs = [
    { title: 'Home', icon: <AiFillHome />, href: '#home', notifications: 2 },
    { title: 'Projects', icon: <AiFillHome />, href: '#projects', notifications: 5 },
    { title: 'Contact', icon: <AiFillHome />, href: '#contact', notifications: 0 },
  ];

  // State to track the active tab
  const [activeTab, setActiveTab] = useState(tabs[0].href);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);

  useEffect(() => {
    const activeIndex = tabs.findIndex(tab => tab.href === activeTab);
    const activeTabElement = tabRefs.current[activeIndex];

    if (activeTabElement) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth
      });
    }
  }, [activeTab, tabs]);

  // Handle tab click
  const handleTabClick = (href, index) => {
    setActiveTab(href);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex justify-center space-x-4 bg-gray-100 p-4">
      {tabs.map((tab, index) => (
        <a
          key={index}
          href={tab.href}
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleTabClick(tab.href, index);
          }}
          ref={(el) => (tabRefs.current[index] = el)}
          className={`flex items-center space-x-2 p-2 transition-colors ${
            activeTab === tab.href ? 'text-black' : 'text-gray-600'
          }`}
        >
          <div>{tab.icon}</div>
          <span>{tab.title}</span>
          {tab.notifications > 0 && (
            <Chip size="sm" variant="faded">
              {tab.notifications}
            </Chip>
          )}
        </a>
      ))}
      <div
        className="absolute bottom-0 h-1 bg-green-500 transition-all duration-300"
        style={{ left: `${indicatorStyle.left}px`, width: `${indicatorStyle.width}px` }}
      />
    </div>
  );
};

export default CustomTab;
