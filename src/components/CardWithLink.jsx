import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Switch,
} from "@material-tailwind/react";

import React, { useState } from "react";

export default function CardWithLink({ logo, name, description, isActive }) {
  const [isActiveState, setIsActiveState] = useState(isActive);

  return (
    <Card className="max-w-[349px] mb-0">
      <CardBody className="flex h-[100px] pt-4 pb-3">
        <img src={logo} alt={name} className="mb-0 mr-4 h-12 w-12" />
        <div>
          {" "}
          <Typography variant="h5" color="blue-gray" className="mb-0.5">
            {name}
          </Typography>
          <Typography className="leading-5 text-sm">{description}</Typography>
        </div>
      </CardBody>
      <CardFooter className="mt-0 py-3 flex justify-between ">
        <a href="#" className="inline-block">
          <Button
            size="sm"
            variant="outlined"
            className="flex items-center gap-2 rounded-full border-gray-400  "
          >
            Remove
          </Button>
        </a>
        <Switch
          ripple={false}
          checked={isActiveState}
          onClick={() => setIsActiveState(!isActiveState)}
          className="checked:bg-red-800"
          containerProps={{
            className: "w-8 h-4", // proper container dimensions
          }}
          circleProps={{
            className: "left-0.5 w-3.5 h-3.5 before:hidden border-none", // proper circle size
          }}
        />
      </CardFooter>
    </Card>
  );
}
