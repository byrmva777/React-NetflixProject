import React from 'react';

function FooterItem({ items }) {
  return (
    <div className="flex gap-3 justify-between flex-row pt-[40px] pb-[40px] text-[#FFFFFFB2] underline">
      {
        items.map((group, index) => (
          <div key={index} className="flex flex-col gap-2 font-normal font-roboto text-base">
            {group.map((item) => (
              <div key={item.id}>{item.link}</div>
            ))}
          </div>
        ))
      }
    </div>
  );
}

export default FooterItem;