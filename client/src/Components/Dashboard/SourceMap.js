import React from "react";
import { VectorMap } from "react-jvectormap";

const mapData = {
  VN: 100000,
  CN: 1000,
  IN: 9900,
  SA: 86,
  EG: 70,
  SE: 0,
  FI: 0,
  FR: 0,
  US: 20
};

const handleClick = (e, countryCode) => {
  console.log(countryCode);
};

const SourceMap = () => {
  return (
    <>
      <div className="title">Real-Time</div>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" 
        zoomOnScroll={true}
        containerStyle={{
          width: "100%",
          height: "344px"
        }}
        onRegionClick={handleClick} 
        containerClassName="sourcemap"
        regionStyle={{
          initial: {
            fill: "#e3eaef",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer"
          },
        //   selected: {
        //     "fill-opacity": 0.8,
        //   },
        }}
        regionsSelectable={false}
        series={{
          regions: [
            {
              values: mapData, 
              scale: ["#146804", "#ff0000"], 
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
    </>
  );
};

export default SourceMap;
