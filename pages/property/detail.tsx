import withLayoutBasic from "@/libs/components/layout/LayuotBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container } from "@mui/material";

const PropertyDetail = () => {
   const device = useDeviceDetect();
   if (device === "mobile") {
      return <Container>PropertyDetail Mobile</Container>;
   } else {
      return <Container>PropertyDetail</Container>;
   }
};

export default withLayoutBasic(PropertyDetail);
