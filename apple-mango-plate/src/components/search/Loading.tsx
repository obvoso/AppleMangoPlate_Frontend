import React from "react";

export default function Loading() {
  const arr = [...new Array(10)];

  return (
    <div className="p-5  md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 ">
        {arr.map((idx) => (
          <div className="shadow-lg border-2 rounded-lg p-5" key={idx}>
            <div className="overflow-hidden">
              <div className={"skeleton w-[350px] h-[200px] rounded mb-6"} />
            </div>
            <button className={"skeleton w-[40%] h-[25px] rounded mb-2"} />
            <p className={"skeleton w-[100%] h-[14px] rounded mb-2"} />
            <p className={"skeleton w-[100%] h-[14px] rounded mb-2"} />
          </div>
        ))}
      </div>
    </div>
  );
}
