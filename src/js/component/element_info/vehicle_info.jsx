import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import Img from "../img.jsx";

const VehicleInfo = (props) => {
  const { actions } = useContext(Context);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await actions.getSingleData(props.category, props.uid);
      setInfo(data.properties);
    };

    fetchData();
  }, []);

  return (
    <div className="card">
      <div className="d-flex flex-column p-2">
        <div>
          <Img category={props.category} uid={props.uid}></Img>
        </div>
        <div className="d-flex flex-column">
          <div className="text-center">
            <h1>{info.name}</h1>
            <hr />
          </div>
          <ul>
            <li>
              <span>
                <b>Model:</b> {info.model}
              </span>
            </li>
            <li>
              <span>
                <b>Vehicle Class:</b> {info.vehicle_class}
              </span>
            </li>
            <li>
              <span>
                <b>Manufacturer:</b> {info.manufacturer}
              </span>
            </li>
            <li>
              <span>
                <b>Cost:</b> {info.cost_in_credits} credits
              </span>
            </li>
            <li>
              <span>
                <b>Crew:</b> {info.crew}
              </span>
            </li>
            <li>
              <span>
                <b>Length:</b> {info.length}m
              </span>
            </li>
            <li>
              <span>
                <b>Passengers:</b> {info.passengers}
              </span>
            </li>
            <li>
              <span>
                <b>Max Speed:</b> {info.max_atmosphering_speed}{" "}
                {info.max_atmosphering_speed?.toLowerCase() !== "n/a"
                  ? "km/h"
                  : ""}
              </span>
            </li>
            <li>
              <span>
                <b>Cargo Capacity:</b> {info.cargo_capacity}
                {info.cargo_capacity?.toLowerCase() !== "n/a" ? "t" : ""}
              </span>
            </li>
            <li>
              <span>
                <b>Consumables:</b> {info.consumables}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
