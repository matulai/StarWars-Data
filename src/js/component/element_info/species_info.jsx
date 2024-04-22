import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import Img from "../img.jsx";

const SpeciesInfo = (props) => {
  const { actions } = useContext(Context);
  const [info, setInfo] = useState({});
  const [homeworld, setHomeworld] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await actions.getSingleData(props.category, props.uid);
      setInfo(data.properties);

      const homeworldArr = data.properties.homeworld.split("/");
      const homeworldData = await actions.getSingleData(
        "planets",
        homeworldArr[homeworldArr.length - 1]
      );
      setHomeworld(homeworldData);
    };

    fetchData();
  }, []);

  return (
    <div className="card">
      <div className="row d-flex p-2">
        <div className="col-6">
          <Img category={props.category} uid={props.uid}></Img>
        </div>
        <div className="col-6 d-flex flex-column">
          <div className="text-center">
            <h1>{info.name}</h1>
            <hr />
          </div>
          <ul>
            <li>
              <span>
                <b>Classification:</b> {info.classification}
              </span>
            </li>
            <li>
              <span>
                <b>Designation:</b> {info.designation}
              </span>
            </li>
            <li>
              <span>
                <b>Hair colors:</b> {info.hair_colors}
              </span>
            </li>
            <li>
              <span>
                <b>Eye colors:</b> {info.eye_colors}
              </span>
            </li>
            <li>
              <span>
                <b>Skin colors:</b> {info.skin_colors}
              </span>
            </li>
            <li>
              <span>
                <b>Average Height:</b> {info.average_height}cm
              </span>
            </li>
            <li>
              <span>
                <b>Average Lifespan:</b> {info.average_lifespan} years
              </span>
            </li>
            <li>
              <span>
                <b>Homeworld:</b>{" "}
                <Link to={`/planets/${homeworld?.uid}`}>
                  {homeworld?.properties?.name}
                </Link>
              </span>
            </li>
            <li>
              <span>
                <b>Language:</b> {info.language}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpeciesInfo;
