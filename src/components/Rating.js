import React from "react";

const Rating = props => {
  let rank_array = [];
  for (let index = 0; index < 5; index++)
    index < props.rank
      ? rank_array.push(
          props.clickRank ? (
            <i
              key={index}
              className="fas fa-star"
              onClick={() => props.clickRank(index + 1)}
              style={{ color: "rgba(245,197,24,1)" }}
            />
          ) : (
            <i
              key={index}
              className="fas fa-star"
              style={{ color: "rgba(245,197,24,1)" }}
            />
          )
        )
      : rank_array.push(
          props.clickRank ? (
            <i
              className="far fa-star"
              key={index}
              onClick={() => props.clickRank(index + 1)}
            />
          ) : (
            <i key={index} className="far fa-star" />
          )
        );
  return <span style={{ marginLeft: "15px" }}>{rank_array}</span>;
};

export default Rating;
