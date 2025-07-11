import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Switch,
} from "@material-tailwind/react";

export default function CardWithLink({
  logo,
  name,
  description,
  isActive,
  state,
  dispatch,
}) {
  return (
    <Card
      className={`max-w-[349px] mb-0 transition-colors duration-300 ${
        state.isDarkMode
          ? "bg-[#1e2435] border-gray-500"
          : "bg-white border-gray-200"
      }`}
    >
      <CardBody className="flex h-[100px] pt-4 pb-3">
        <img src={logo} alt={name} className="mb-0 mr-4 h-12 w-12" />
        <div>
          <Typography
            variant="h5"
            className={`mb-0.5 transition-colors duration-300 ${
              state.isDarkMode ? "text-white" : "text-blue-gray-900"
            }`}
          >
            {name}
          </Typography>
          <Typography
            className={`leading-5 text-sm transition-colors duration-300 ${
              state.isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {description}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="mt-0 py-3 flex justify-between">
        <Button
          size="sm"
          variant="outlined"
          className={`flex items-center gap-2 rounded-full transition-colors duration-300 ${
            state.isDarkMode
              ? "border-gray-500 text-gray-300 hover:bg-gray-700"
              : "border-gray-400 text-gray-800 hover:bg-gray-50"
          }`}
          onClick={() =>
            dispatch({ type: "REMOVE_EXTENSION", payload: { name } })
          }
        >
          Remove
        </Button>
        <Switch
          ripple={false}
          defaultChecked={isActive}
          onClick={() => dispatch({ type: "TOGGLE_ACTIVE", payload: { name } })}
          className="checked:bg-red-800"
          containerProps={{
            className: "w-8 h-4",
          }}
          circleProps={{
            className: "left-0.5 w-3.5 h-3.5 before:hidden border-none",
          }}
        />
      </CardFooter>
    </Card>
  );
}
