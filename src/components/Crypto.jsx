import React from "react";

const Crypto = ({ data }) => {
  return (
    <>
      {data &&
        data.map((response) => (
          <div
            key={response.uuid}
            style={{
              background: response.color ? response.color + "50" : "#33333350",
            }}
            className="coin-box"
          >
            <img src={response.iconUrl} alt="coin" />
            <span>{response.name}</span>
            <p style={{ color: response.change > 0 ? `#06FF00` : `#FF1818` }}>
              change is : {response.change}
            </p>
          </div>
        ))}
    </>
  );
};

export default Crypto;
