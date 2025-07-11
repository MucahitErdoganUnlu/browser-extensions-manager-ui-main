import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import { act, useState } from "react";

import { FILTERCRITERIA } from "../constants";

export default function TransparentTabs({ state, dispatch }) {
  return (
    <div className="flex justify-between">
      <Typography
        variant="h3"
        className={`ml-5 transition-colors duration-300 ${
          state.isDarkMode ? "text-white" : "text-blue-gray-900"
        }`}
      >
        Extensions List
      </Typography>
      <Tabs value={state.filter} className="max-w-[40rem]">
        <TabsHeader
          className="bg-transparent"
          indicatorProps={{
            className: "shadow-none !bg-transparent p-0",
          }}
        >
          {Object.values(FILTERCRITERIA).map((value) => (
            <Tab
              key={value}
              value={value}
              onClick={() => {
                dispatch({ type: "SET_FILTER", payload: { filter: value } });
              }}
              className={`rounded-full mr-2 px-4 py-1 transition-colors duration-300
                ${
                  state.filter === value
                    ? "bg-red-800 text-white"
                    : state.isDarkMode
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    : "bg-white text-gray-800 hover:bg-gray-100"
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
