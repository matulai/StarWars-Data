import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import Img from "../img.jsx";

const PlanetInfo = (props) => {
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
                <b>Diameter:</b> {info.diameter}
                {info.diameter?.toLowerCase() !== "n/a" &&
                info.diameter?.toLowerCase() !== "unknown"
                  ? "km"
                  : ""}
              </span>
            </li>
            <li>
              <span>
                <b>Rotation Period:</b> {info.rotation_period}
                {info.rotation_period?.toLowerCase() !== "n/a" &&
                info.rotation_period?.toLowerCase() !== "unknown"
                  ? "h"
                  : ""}
              </span>
            </li>
            <li>
              <span>
                <b>Orbital Period:</b> {info.orbital_period}
                {info.orbital_period?.toLowerCase() !== "n/a" &&
                info.orbital_period?.toLowerCase() !== "unknown"
                  ? " standard days"
                  : ""}
              </span>
            </li>
            <li>
              <span>
                <b>Gravity:</b> {info.gravity}
              </span>
            </li>
            <li>
              <span>
                <b>Population:</b> {info.population}
              </span>
            </li>
            <li>
              <span>
                <b>Climate:</b> {info.climate}
              </span>
            </li>
            <li>
              <span>
                <b>Terrain:</b> {info.terrain}
              </span>
            </li>
            <li>
              <span>
                <b>Surface of Water:</b> {info.surface_water}
                {info.surface_water?.toLowerCase() !== "n/a" &&
                info.surface_water?.toLowerCase() !== "unknown"
                  ? "%"
                  : ""}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanetInfo;
