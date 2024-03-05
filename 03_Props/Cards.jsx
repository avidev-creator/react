import React from "react";

function Cards({ newArr, newObj, newImg }) {
  console.log(newArr, newObj, newImg);

  return (
    <>
      <ul>
        {newArr.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>Cards</h2>
      <p>{newArr[0]}</p>
      <p>{newObj["username"]}</p>
      <p>{newObj.age}</p>
      <div>
        <div className="relative h-[400px] w-[300px] rounded-md">
          <img
            src={newImg}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              {newObj["username"]}
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              Hello My Age Is : {newObj.age}
            </p>
            <p>Card Number : {newArr[0]}</p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              View Profile &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
