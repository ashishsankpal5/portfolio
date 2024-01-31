import {
  Box,
  Flex,
  Link,
  Text,
  Icon,
  ChakraProvider,
  Heading,
} from "@chakra-ui/react";
import {
  IoIosMail,
  IoLogoLinkedin,
  IoLogoHtml5,
  IoLogoCss3,
} from "react-icons/io";
import { Link as RouterLink } from "react-router-dom";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiMysql, SiRedux } from "react-icons/si";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import Progress from "./Progress";
import Work from "./Work";
import "./style.css";
import "./progressStyle.css";

const Skills = () => {
  return (
    <>
      <Box
        className="info-box"
        pb="80"
        borderBottom="1px solid #c2c0bc"
        borderTop="1px solid #c2c0bc"
        textAlign="center"
      >
        <Flex justifyContent="center" alignItems="center">
          <Link as={RouterLink} id="ashi" to="/skills" className="mainNme">
            Skills
          </Link>
        </Flex>
      </Box>
      <Box
        minHeight="150"
        m="72"
        p="40"
        borderRadius={"10px"}
        bgColor="#f2f3f7"
      >
        {/* <Box> */}
        <Heading
          className="texh-box"
          textDecoration={"underline"}
          as="h5"
          id="proj-nme"
        >
          What I know
        </Heading>
        <Box className="texh-box">
          <Icon as={IoLogoJavascript} fontSize="35" color="#f0db4f" />
          <Progress done="85" />
        </Box>
        <Box className="texh-box">
          <Icon as={IoLogoReact} fontSize="35" color="#61dbfb" />
          <Progress done="90" />
        </Box>
        <Box className="texh-box">
          <Icon as={SiRedux} fontSize="35" color=" #764ABC" />
          <Progress done="80" />
        </Box>
        <Box className="texh-box">
          <Icon as={TbBrandNextjs} fontSize="35" color="#61dbfb" />
          <Progress done="90" />
        </Box>
        <Box className="texh-box">
          <Icon as={DiNodejs} fontSize="35" color="#3C873A" />
          <Progress done="90" />
        </Box>
        <Box className="texh-box">
          <Icon as={DiMongodb} fontSize="35" color="#4DB33D" />
          <Progress done="80" />
        </Box>
        <Box className="texh-box">
          <Icon as={SiMysql} fontSize="35" color="#00758F" />
          <Progress done="75" />
        </Box>
        <Box className="texh-box">
          <Icon as={IoLogoHtml5} fontSize="35" color="#E44D26" />
          <Progress done="92" />
        </Box>
        <Box className="texh-box">
          <Icon as={IoLogoCss3} fontSize="35" color="#3C99DC" />
          <Progress done="80" />
        </Box>
        <Box className="texh-box">
          <Icon as={BsFillBootstrapFill} fontSize="35" color="#0d6efd" />
          <Progress done="88" />
        </Box>
        <Work />
        {/* </Box> */}
      </Box>
      {/* <Box mt="60" className="win">
        <Flex>
          <Flex direction="column">
            <Box>
              <Text
                as="h1"
                textAlign="center"
                fontSize="20"
                fontWeight="900"
                borderBottom="1.5px solid #3c3c42"
                mb="20"
              >
                What I know
              </Text>
            </Box>
            <Box display="inline-flex">
              <Icon as={IoLogoHtml5} fontSize="35" color="#E44D26" />
              <Progress done="92" />
            </Box>
            <Box display="inline-flex">
              <Icon as={IoLogoCss3} fontSize="35" color="#3C99DC" />
              <Progress done="80" />
            </Box>
            <Box display="inline-flex">
              <Icon as={BsFillBootstrapFill} fontSize="35" color="#0d6efd" />
              <Progress done="88" />
            </Box>
            <Box display="inline-flex">
              <Icon as={IoLogoJavascript} fontSize="35" color="#f0db4f" />
              <Progress done="85" />
            </Box>
            <Box display="inline-flex">
              <Icon as={IoLogoReact} fontSize="35" color="#61dbfb" />
              <Progress done="90" />
            </Box>
            <Box display="inline-flex">
              <Icon as={DiNodejs} fontSize="35" color="#3C873A" />
              <Progress done="90" />
            </Box>
            <Box display="inline-flex">
              <Icon as={DiMongodb} fontSize="35" color="#4DB33D" />
              <Progress done="80" />
            </Box>
            <Box display="inline-flex">
              <Icon as={SiMysql} fontSize="35" color="#00758F" />
              <Progress done="75" />
            </Box>
          </Flex>
          <Work />
        </Flex>
      </Box> */}
    </>
  );
};
export default Skills;
