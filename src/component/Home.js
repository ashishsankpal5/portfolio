import React from 'react';
import { Box, Flex, Image, Text, Grid, Link, Icon } from '@chakra-ui/react';
import { IoLogoLinkedin, IoLogoInstagram, IoMail } from 'react-icons/io5';
import { BsDownload } from 'react-icons/bs';
import { Link as RouterLink } from 'react-router-dom';
import imgg from '../images/mypic.JPG';
import './style.css';
import cv from '../asset/Resume9128.pdf';
const Home = () => {
  return (
    <>
      <Flex
        className="info-box"
        direction="column"
        // pb="50"
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
              alt="loading"
              userSelect="none"
            />
          </Box>
        </Flex>
        <Box>
          <Link as={RouterLink} to="/" className="mainNme">
            Ashish Shankar Sankpal
          </Link>
        </Box>
        <Text className="crc">Full-Stack JavaScript Developer</Text>
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
      </Flex>

      <Flex justifyContent="center">
        <Grid
          templateColumns="8fr 2fr"
          gap="8"
          p="2"
          pl="14"
          pr="14"
          mt="64"
          w="70%"
        >
          <Box>
            <Text className="abtMe">WHO I AM ?</Text>
            <Text id="proj-fnt">
              Hello! I am Ashish, a computer grad student from University of
              mumbai, who passionate to build things that lives on the internet.
              I develop exceptional websites and web apps that provide,
              pixel-perfect user interface with efficient and modern backend.
              <br />I love exploring new technologies and often amazed by the
              progress we as a human species have mad so far in the recent
              years.
              <br />I enjoyed developing products for the web, from simple
              landing pages to fully-fledged web apps.
            </Text>
          </Box>

          <Flex direction="column" alignItems="center" id="proj-fnt">
            <Text className="contacts">Contact</Text>
            <Flex direction="column">
              <Box>
                <Link
                  isExternal
                  href="https://www.linkedin.com/in/ashish-sankpal-a02a5418b/"
                  textDecor="none"
                  color="black"
                  _hover={{ color: '#1DA1F2', opacity: '0.7' }}
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
                  _hover={{ color: 'red', opacity: '0.7' }}
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
                  _hover={{ color: 'black', opacity: '0.7' }}
                >
                  <Icon id="abc" as={IoMail} />
                  Email
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};
export default Home;
