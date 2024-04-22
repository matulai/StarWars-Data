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
    <div className="card w-100">
      <div className="row d-flex p-2">
        <div className="col-auto">
          <Img category={props.category} uid={props.uid}></Img>
        </div>
        <div className="col d-flex flex-column">
          <div className="text-center">
            <h1>{info.name}</h1>
            <hr />
          </div>
          <ul>
            <li>
              <span>
                <b>Diameter:</b> {info.diameter}km
              </span>
            </li>
            <li>
              <span>
                <b>Rotation Period:</b> {info.rotation_period}h
              </span>
            </li>
            <li>
              <span>
                <b>Orbital Period:</b> {info.orbital_period} standard days
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
                <b>Surface of Water:</b> {info.surface_water}%
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanetInfo;
