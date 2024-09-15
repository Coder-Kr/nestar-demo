import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
   return (
      <>
         <Container>
            <Stack flexDirection={"column"}>HomePage</Stack>
            <Box>Popular Properties</Box>
            <Box>Top Agents</Box>
            <Box>Top Properties</Box>
            <Box>Events</Box>
         </Container>
      </>
   );
};

export default withLayoutMain(Home);
