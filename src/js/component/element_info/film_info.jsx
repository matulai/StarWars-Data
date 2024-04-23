import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import Img from "../img.jsx";

const FilmInfo = (props) => {
  const { actions } = useContext(Context);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await actions.getSingleData(props.category, props.uid);
      setInfo(data);
    };

    fetchData();
  }, []);

  return (
    <div className="card">
      <div className="row d-flex p-2">
        <div className="col-lg-6 col-md-11 col-sm-11 mx-auto">
          <Img category={props.category} uid={props.uid}></Img>
        </div>
        <div className="col-lg-6 col-md-11 col-sm-11 d-flex flex-column justify-content-between">
          <div className="text-center">
            <h2>Episode {info.properties?.episode_id}:</h2>
            <h1 className="fw-lighter lh-sm">{info.properties?.title}</h1>
            <hr />
          </div>
          <div className="text-center">
            <span>
              {info.properties?.opening_crawl
                .split("\r\n\r\n")
                .map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                    {index !== array.length - 1 && <br />}
                  </React.Fragment>
                ))}
            </span>
          </div>
          <div className="d-flex flex-column">
            <hr />
            <span>
              <b>Release date:</b> {info.properties?.release_date}
            </span>
            <span>
              <b>Director:</b> {info.properties?.director}
            </span>
            <span>
              <b>Producers:</b> {info.properties?.producer}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmInfo;
