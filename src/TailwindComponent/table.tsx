import React from "react";

export default function Table(props:string) {
    const {price} = props
  return (
    <div>
      <div className=" bg-slate-300 p-9 w-90 h-80 text-center">
        <h3 className="">Category</h3>
        <span className="font-bold">FONT END DEVELOPER</span>
        <p className="">
          sadjadjaskadjsakajksjkdaksdjsakdjasdsaj
          kdajdsajkasjadajskdajkdasjkdajskdajsdajs
        </p>
      </div>
      <div className="bg-gray-50 max-h-max footer" style={{flexDirection:'row' }}>
        <p>{price}</p>
        <button className="bg-red-500 border-dashed">mua hàng</button>
      </div>
    </div>
  );
}
