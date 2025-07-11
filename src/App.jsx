import React, { useEffect, useState } from "react";
import CardWithLink from "./components/CardWithLink";
import TransparentTabs from "./components/TransparentTabs";
import NavbarDefault from "./components/NavbarDefault";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <NavbarDefault isDarkMode={false} />
        <TransparentTabs />
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
          {data.map((item, index) => (
            <CardWithLink
              key={index}
              name={item.name}
              description={item.description}
              logo={item.logo}
              isActive={item.isActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
