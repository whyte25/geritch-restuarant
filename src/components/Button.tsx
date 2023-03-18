import React, { ReactNode } from "react";

interface ChildrenProp {
  children: ReactNode;
}

function Button({ children }: ChildrenProp) {
  return (
    <div className="bg-light-cream py-2 px-4 text-center text-black-alt text-1xl">
      {children}
    </div>
  );
}

export default Button;
