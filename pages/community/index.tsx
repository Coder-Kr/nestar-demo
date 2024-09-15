import withLayoutBasic from "@/libs/components/layout/LayuotBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
   const [title, setTitle] = useState<string>("Hello");
   return (
      <div>
         COMMUNITY{" "}
         <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
            PressMe
         </button>
      </div>
   );
};

export default withLayoutBasic(Community);
