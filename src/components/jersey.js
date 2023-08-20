import React from "react";
export default function Jersey(props) {
  return (
    <div className="jersey">
      <img src={"../images/" + props.item.img} />
      <h3 className="title pt-3">{props.item.title}</h3>
      <h3 className="py-3">${props.item.price}</h3>
      <button type="submit" className="detail ">
        DETAIL
      </button>
    </div>
  );
}
