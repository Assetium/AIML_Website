import React from "react";

const Loader = () => {
  return (
    <>
      <style>{`
                .loader {
                    width: 38px;
                    height: 38px;
                    border: 5px solid #C14511; /* Red color */
                    border-bottom-color: transparent;
                    border-radius: 50%;
                    display: inline-block;
                    box-sizing: border-box;
                    animation: rotation 1s linear infinite;
                }

                @keyframes rotation {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>

      <div className="flex justify-center ">
        <span className="loader"></span>
      </div>
    </>
  );
};

export default Loader;
