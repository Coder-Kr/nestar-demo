import withLayoutBasic from "@/libs/components/layout/LayuotBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
   const [title, setTitle] = useState<string>("Hello");
   const device = useDeviceDetect();

   if (device === "mobile") {
      return <Stack>COMMUNITY Mobile</Stack>;
   } else {
      return (
         <div>
            <div style={{ margin: "20px 0" }}>
               <Stack className="container">COMMUNITY</Stack>
            </div>
         </div>
      );
   }
};

export default withLayoutBasic(Community);
