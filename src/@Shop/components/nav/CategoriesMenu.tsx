import React from "react";

const CategoriesMenu = () => {
  return (
    <>
      <button className="fixed top-[5%] left-0 md:hidden">Open Nav</button>
      <nav className="w-full">
        <ul className="list-none">
          <li className="w-full">
            <span>parent 1</span>

            <ul className="list-none">
              <li className="w-full">child-1</li>
              <li className="w-full">child-2</li>
            </ul>
          </li>
          <li className="w-full">123ƒ</li>
        </ul>
      </nav>
    </>
  );
};

export default CategoriesMenu;
