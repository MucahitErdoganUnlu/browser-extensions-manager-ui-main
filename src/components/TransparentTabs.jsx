import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import { act, useState } from "react";

export default function TransparentTabs() {
  const [activeTab, setActiveTab] = useState("All");
  const data = ["All", "Active", "Inactive"];

  return (
    <div className="flex justify-between">
      <Typography variant="h3" color="blue-gray" className="ml-5">
        Extensions List
      </Typography>
      <Tabs value={activeTab} className="max-w-[40rem]">
        <TabsHeader
          className="bg-transparent"
          indicatorProps={{
            className: "shadow-none !bg-transparent p-0",
          }}
        >
          {data.map((value) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`rounded-full mr-2 px-4 py-1 transition-colors duration-300
                ${
                  activeTab === value
                    ? "bg-red-800 text-white"
                    : "bg-white text-gray-800"
                }`}
            >
              {value}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
    </div>
  );
}
