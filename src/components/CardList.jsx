import React from "react";
import CardWithLink from "./CardWithLink";
import { FILTERCRITERIA } from "../constants";

function CardList({ data, state, dispatch }) {
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
      {state.filter === FILTERCRITERIA.ALL &&
        data.map((item, index) => (
          <CardWithLink
            key={index}
            name={item.name}
            description={item.description}
            logo={item.logo}
            isActive={item.isActive}
            state={state}
            dispatch={dispatch}
          />
        ))}
      {state.filter === FILTERCRITERIA.ACTIVE &&
        data
          .filter((item) => item.isActive)
          .map((item, index) => (
            <CardWithLink
              key={index}
              name={item.name}
              description={item.description}
              logo={item.logo}
              isActive={item.isActive}
              state={state}
              dispatch={dispatch}
            />
          ))}
      {state.filter === FILTERCRITERIA.INACTIVE &&
        data
          .filter((item) => !item.isActive)
          .map((item, index) => (
            <CardWithLink
              key={index}
              name={item.name}
              description={item.description}
              logo={item.logo}
              isActive={item.isActive}
              state={state}
              dispatch={dispatch}
            />
          ))}
    </div>
  );
}

export default CardList;
