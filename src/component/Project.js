import React from "react";
import { Flex, Box, Grid, Image, Heading, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import mypic from "../images/cab.jpg";
import shopImg from "../images/shop.jpg";
import mkyc from "../images/logoMKYC.svg";
import ekyc from "../images/phygital-logo.png";
import nriEkyc from "../images/MOSL_Log.jpg";

const Project = () => {
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
          <Link as={RouterLink} id="ashi" to="/projects" className="mainNme">
            Projects
          </Link>
        </Flex>
      </Box>

      <Box minHeight="200" mt="72">
        <Flex
          justifyContent="center"
          alignItems={"center"}
          // textAlign={"center"}
        >
          <Box
            minHeight="150"
            w="90%"
            m="9"
            p="10"
            bgColor="#f2f3f7"
            borderRadius={"10px"}
          >
            <Flex justifyContent="center" alignItems={""}>
              <Image boxSize="150px" src={mypic} />
            </Flex>
            <Flex justifyContent="center" alignItems={"center"}>
              <Heading as="h4" id="proj-nme">
                Own Cab
              </Heading>
            </Flex>

            <Text id="proj-fnt">
              {" "}
              OwnCab is a online cab booking application that can be used by
              both the passengers as well as the cab drivers. It gives the cab
              driver freedom to join the application whenever he or she wants
              and also gives freedom to customer to bargain with the fair
              prices. Online Cab Booking System specializing in Hiring cabs to
              customers. It is an online system through which customers can view
              available cabs and register the cabs.
              {/* <br /> */} {""}The passengers always want something easy, The
              Cab Booking app helps users for easy Onboardings, Quick Bookings
              Users can view the available ride option, choose destinations, get
              fare estimates, ETA and book a ride with confidence.
              {/* <br /> */}
              <Box mt="12" Border="1px solid #c2c0bc" textAlign={"center"}>
                <Link
                  textDecor="none"
                  isExternal
                  href="https://shoppzvilla.herokuapp.com/"
                >
                  VISIT SITE
                </Link>
              </Box>
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box minHeight="200" mt="72">
        <Flex
          justifyContent="center"
          alignItems={"center"}
          // textAlign={"center"}
        >
          <Box
            minHeight="150"
            w="90%"
            m="9"
            p="10"
            bgColor="#f2f3f7"
            borderRadius={"10px"}
          >
            <Flex justifyContent="center" alignItems={""}>
              <Image boxSize="150px" src={shopImg} />
            </Flex>
            <Flex justifyContent="center" alignItems={"center"}>
              <Heading as="h4" id="proj-nme">
                E-Commerce Website
              </Heading>
            </Flex>

            <Text id="proj-fnt">
              {" "}
              The web portal is developed to provide ease for the people who
              tend to shop through online sources rather than going out. Through
              this portal buyers can go through various categories and brands
              and add the product as per the convenience. I've used React Js for
              front end and Redux for state management and Node Js(ExpressJs)
              for backend and MongoDB for database.
              <Box mt="12" Border="1px solid #c2c0bc" textAlign={"center"}>
                <Link
                  textDecor="none"
                  isExternal
                  href="https://shoppzvilla.herokuapp.com/"
                >
                  VISIT SITE
                </Link>
              </Box>
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box minHeight="200" mt="72">
        <Flex
          justifyContent="center"
          alignItems={"center"}
          // textAlign={"center"}
        >
          <Box
            minHeight="150"
            w="90%"
            m="9"
            p="10"
            bgColor="#f2f3f7"
            borderRadius={"10px"}
          >
            <Flex justifyContent="center" alignItems={""}>
              <Image boxSize="150px" src={mkyc} />
            </Flex>
            <Flex justifyContent="center" alignItems={"center"}>
              <Heading as="h4" id="proj-nme">
                M-KYC (Mangal Keshav's EKYC)
              </Heading>
            </Flex>

            <Text id="proj-fnt">
              {" "}
              Developed and worked on Mangal Keshav's (Stock broker) eKYC module
              and trading web Aplication in React Js with Material UI, Redux and
              Some modules in Typescript. Experience working with Bootstrap,
              Chakra UI, MUI and lot more Responsiveness of the web application
              Implemented Input. Experience working with Bootstrap, Chakra UI,
              MUI and lot more Responsiveness of the web application Implemented
              Input.Model Validation,Data Sanity from UI. Integrated 3rd party
              JS bundles and SDK for using their Services e.g. Digio,RazorPay
              Payment Gateway , NSDL eSign Authentication and {""} {""} {""}
              Implementation.
              <Box mt="12" Border="1px solid #c2c0bc" textAlign={"center"}>
                <Link
                  textDecor="none"
                  isExternal
                  href="https://mkyc.mangalkeshav.com/mangal_keshav/signup"
                >
                  VISIT SITE
                </Link>
              </Box>
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box minHeight="200" mt="72">
        <Flex
          justifyContent="center"
          alignItems={"center"}
          // textAlign={"center"}
        >
          <Box
            minHeight="150"
            w="90%"
            m="9"
            p="10"
            bgColor="#f2f3f7"
            borderRadius={"10px"}
          >
            <Flex justifyContent="center" alignItems={""}>
              <Image className="custom-img" boxSize="150px" src={ekyc} />
            </Flex>
            <Flex justifyContent="center" alignItems={"center"}>
              <Heading as="h4" id="proj-nme">
                EKYC
              </Heading>
            </Flex>

            <Text id="proj-fnt">
              {" "}
              Developed and worked on Motilal Oswal’s eKYC module and express
              (Motilal’s franchise Clients). developed this Ekyc from scratch to
              cutting edge module with API Integration properly error handling,
              Unit testing and UI/UX part binding. handling and binding REST
              API’s through nodeJs calling and handling their response through
              redux and thunk. Intergrated 3rd party JS and SDK’s for using
              their services eg, Digio, RazorPay, GTM, CleverTap, also do Error
              Handling and Validation of the Web Application. enhancing code
              quality and solving issue is major part of works. perform sanity
              and unit tesing after the development. Guided and Mentored Junior
              React Js Developers for Developing and Designing SPA Web
              Application in ReactJs.
              <Box mt="12" Border="1px solid #c2c0bc" textAlign={"center"}>
                <Link
                  textDecor="none"
                  isExternal
                  href="https://www.motilaloswal.com/open-demat-account/?SRC=Website&pd=Header_OAO_Button"
                >
                  VISIT SITE
                </Link>
              </Box>
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box minHeight="200" mt="72" mb="72">
        <Flex
          justifyContent="center"
          alignItems={"center"}
          // textAlign={"center"}
        >
          <Box
            minHeight="150"
            w="90%"
            m="9"
            p="10"
            bgColor="#f2f3f7"
            borderRadius={"10px"}
          >
            <Flex justifyContent="center" alignItems={""}>
              <Image className="custom-img" boxSize="150px" src={nriEkyc} />
            </Flex>
            <Flex justifyContent="center" alignItems={"center"}>
              <Heading as="h4" id="proj-nme">
                Internationl EKYC for NRI
              </Heading>
            </Flex>

            <Text id="proj-fnt">
              {" "}
              Developed another Ekyc for NRI users. collaborated with business
              analysts and stakeholders to gather and analyze requirements
              specific to the NRI eKYC module. ced the front-end development
              efforts using React.js to create responsive and user-friendly
              interfaces for the NRI eKYC platform. Implemented complex user
              interactions, dynamic form components, and data visualization
              elements crucial for efficient onboarding of nonresident clients.
              corked closely with the back-end development team to integrate
              front-end components with RESTful APIs built on Node.js cntegrated
              third-party services and APIs for identity verification, document
              validation, and compliance checks within the eKYC process.
              conducted regular performance assessments of the front-end code.
              Implemented code splitting, lazy loading, and optimized rendering
              techniques to enhance application speed and responsiveness,
              ensuring a seamless user experience. carticipated in regular code
              review sessions, providing constructive feedback to peers and
              incorporating best practices.
              <Box mt="12" Border="1px solid #c2c0bc" textAlign={"center"}>
                <Link
                  textDecor="none"
                  isExternal
                  href="https://ekyc.motilaloswal.com/nri"
                >
                  VISIT SITE
                </Link>
              </Box>
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Project;
