import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import Img from "../img.jsx";

const CharacterInfo = (props) => {
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
    <div className="card w-100">
      <div className="row d-flex p-2">
        <div className="col-auto">
          <Img category={props.category} uid={props.uid}></Img>
        </div>
        <div className="col d-flex flex-column justify-content-between">
          <div className="text-center">
            <h1>{info.name}</h1>
            <hr />
          </div>
          <div className="d-flex flex-column">
            <h4 className=" text-center text-decoration-underline">
              Appearance
            </h4>
            <span>
              <b>Hair color:</b> {info.hair_color}
            </span>
            <span>
              <b>Eye color:</b> {info.eye_color}
            </span>
            <span>
              <b>Skin color:</b> {info.skin_color}
            </span>
          </div>
          <hr />
          <div className="d-flex flex-column">
            <h4 className=" text-center text-decoration-underline">
              Dimensions
            </h4>
            <span>
              <b>Height:</b> {info.height}cm
            </span>
            <span>
              <b>Weihgt:</b> {info.mass}kg
            </span>
          </div>
          <hr />
          <div className="d-flex flex-column">
            <h4 className=" text-center text-decoration-underline">Other</h4>
            <span>
              <b>Year of Birth:</b> {info.birth_year}
            </span>
            <span>
              <b>Homeworld:</b>{" "}
              <Link to={`/planets/${homeworld?.uid}`}>
                {homeworld?.properties?.name}
              </Link>
            </span>
            <span>
              <b>Gender:</b> {info.gender}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
