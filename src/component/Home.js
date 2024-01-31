import React from "react";
import { Box, Flex, Image, Text, Grid, Link, Icon } from "@chakra-ui/react";
import { IoLogoLinkedin, IoLogoInstagram, IoMail } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import imgg from "../images/mypic.JPG";
import "./style.css";
import cv from "../asset/Resume_024.pdf";
import { isMobile } from "react-device-detect";
import { Spinner } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Box
        className="info-box"
        direction="column"
        borderBottom="1px solid #c2c0bc"
        borderTop="1px solid #c2c0bc"
        textAlign="center"
      >
        <Flex justifyContent="center">
          <Box id="img-outside" border="1.5px solid #dfdada">
            <Image
              id="frnt-img"
              borderRadius="full"
              boxSize="120px"
              objectFit="cover"
              src={imgg}
              // alt="loading"
              userSelect="none"
              // border={"2px solid black"}
            />
          </Box>
        </Flex>
        <Box>
          <Link as={RouterLink} to="/" className="mainNme">
            Ashish Shankar Sankpal
          </Link>
          <Text className="crc">Full-Stack JavaScript Developer</Text>
        </Box>
        <Flex justifyContent="flex-end">
          <Link
            className="cv"
            href={cv}
            alt="nodata"
            download
            textDecoration="none"
            color="black"
            mr="22"
            mb="6"
          >
            <Icon as={BsDownload} mr="4" />
            Download CV
          </Link>
        </Flex>
      </Box>
      {/* <Flex justifyContent="center" border="2px solid black">
        <Grid
          templateColumns="8fr 2fr"
          gap="8"
          p="2"
          pl="14"
          pr="14"
          mt="64"
          w="70%"
          border="2px solid blue"
        >
          <Box border="2px solid red">
            <Text className="abtMe">WHO I AM ?</Text>
            <Text id="proj-fnt">
              Hello, I am an accomplished software developer with three years of
              dedicated experience in front-end development. My expertise lies
              in crafting visually appealing and highly functional user
              interfaces that enhance the overall user experience. Through a
              combination of technical skills and creative problem-solving, I
              have successfully contributed to the development of user-centric
              web applications.
            </Text>
          </Box>

          <Flex
            border="2px solid green"
            direction="column"
            alignItems="center"
            id="proj-fnt"
          >
            <Text className="contacts">Contact</Text>
            <Flex direction="column">
              <Box>
                <Link
                  isExternal
                  href="https://www.linkedin.com/in/ashish-sankpal-a02a5418b/"
                  textDecor="none"
                  color="black"
                  _hover={{ color: "#1DA1F2", opacity: "0.7" }}
                >
                  <Icon id="abc" as={IoLogoLinkedin} />
                  LinkedIn
                </Link>
              </Box>
              <Box>
                <Link
                  isExternal
                  href="https://www.instagram.com/the_garib_freaks/"
                  textDecor="none"
                  color="black"
                  _hover={{ color: "red", opacity: "0.7" }}
                >
                  <Icon id="abc" as={IoLogoInstagram} />
                  Instagram
                </Link>
              </Box>
              <Box>
                <Link
                  isExternal
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                  textDecor="none"
                  color="black"
                  _hover={{ color: "black", opacity: "0.7" }}
                >
                  <Icon id="abc" as={IoMail} />
                  Email
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Grid>
      </Flex> */}
      <Box
        display="flex"
        flexDirection={"row"}
        justifyContent={"space-around"}
        // border="2px solid black"
        mb="40"
        // className={true ? "" : "css-od0rku "}
      >
        <Box p={"10"} m="10">
          <Text className="abtMe">WHO I AM ?</Text>
          <Text id="proj-fnt">
            Hello, I am an accomplished software developer with three years of
            dedicated experience in front-end development. My expertise lies in
            crafting visually appealing and highly functional user interfaces
            that enhance the overall user experience. Through a combination of
            technical skills and creative problem-solving, I have successfully
            contributed to the development of user-centric web applications.
          </Text>
        </Box>
        <Box m={"20"}>
          {/* <Text className="">WHO I AM ?</Text> */}
          <Box>
            <Text className="abtMe">Contact</Text>
            <Link
              isExternal
              href="https://www.linkedin.com/in/ashish-sankpal-a02a5418b/"
              textDecor="none"
              color="black"
              _hover={{ color: "#1DA1F2", opacity: "0.7" }}
            >
              <Icon id="abc" as={IoLogoLinkedin} />
              LinkedIn
            </Link>
          </Box>
          <Box>
            <Link
              isExternal
              href="https://www.instagram.com/the_garib_freaks/"
              textDecor="none"
              color="black"
              _hover={{ color: "red", opacity: "0.7" }}
            >
              <Icon id="abc" as={IoLogoInstagram} />
              Instagram
            </Link>
          </Box>
          <Box>
            <Link
              isExternal
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              textDecor="none"
              color="black"
              _hover={{ color: "black", opacity: "0.7" }}
            >
              <Icon id="abc" as={IoMail} />
              Email
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Home;
