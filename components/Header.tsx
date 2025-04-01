import { auth } from "@/auth";
import React from "react";

const Header = async () => {
  const session = await auth();
  return (
    <div>
      <h1>Header</h1>
      <p>Welcome {session?.user?.name}</p>
    </div>
  );
};

export default Header;
