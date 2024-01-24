import React from "react";
import data from '../../data.json';



  console.log(data.bootcamps.header)

function Card({ title, img, hours, format, description }) {
  return (
    <>
      <h4>{title}</h4>
      <img src={img} alt="" />
      <div className="">
        <p>{hours}</p>
        <p>{format}</p>
      </div>
      <p>{description}</p>
      <p>+info</p>
    </>
  )
}


function Cards() {
  return (
    <div>
        <Card
          curse={"ddd"}
          description={"d"}
        />

        {/* <Card
          curse={data.name}
          description={data.description}
        />

        <Card
          curse={fullStack.name}
          description={fullStack.description}
        />

        <Card
          curse={marketing.name}
          description={marketing.description}
        />

        <Card
          curse={uxui.name}
          description={uxui.description}
        /> */}

    </div>
  )
}

export default Cards;
