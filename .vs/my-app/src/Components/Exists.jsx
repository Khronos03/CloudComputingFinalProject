import React from "react";

export const Exists = {

  methodTest: (dat1, dat2) => {

    return (
            <form
            className="flex cols-3"
          >
            <input
              type="text"
              name="x"
              placeholder={dat1}
              className="w-full p-2 font-semibold rounded-sm shadow-md text-black"
              required
            />
    
            <button className="px-2 mx-2 font-bold text-white bg-blue-700 border-2 border-blue-800 rounded-md shadow-xl hover:bg-blue-900">
              {dat2}
            </button>
          </form>
        );
  },

};