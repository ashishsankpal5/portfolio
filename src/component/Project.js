import React from 'react';
import { Flex, Box, Grid, Image, Heading, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import mypic from '../images/cab.jpg';
import shopImg from '../images/shop.jpg';

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
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Box minH="460" w="50%">
          <Grid templateColumns="1fr 5fr" borderBottom="1.5px solid #c2c0bc">
            <Flex direction="column" justifyContent="center">
              <Image boxSize="150px" src={mypic} />
            </Flex>
            <Flex direction="column" p="15">
              <Heading as="h4" id="proj-nme">
                Own Cab
              </Heading>
              <Text id="proj-fnt">
                {' '}
                OwnCab is a online cab booking application that can be used by
                both the passengers as well as the cab drivers. It gives the cab
                driver freedom to join the application whenever he or she wants
                and also gives freedom to customer to bargain with the fair
                prices. Online Cab Booking System specializing in Hiring cabs to
                customers. It is an online system through which customers can
                view available cabs and register the cabs.
                <br />
                The passengers always want something easy, The Cab Booking app
                helps users for easy Onboardings, Quick Bookings Users can view
                the available ride option, choose destinations, get fare
                estimates, ETA and book a ride with confidence.
              </Text>
            </Flex>
          </Grid>
        </Box>
        <Box minH="460" w="50%">
          <Grid templateColumns="1fr 5fr" borderBottom="1.5px solid #c2c0bc">
            <Flex direction="column" justifyContent="center">
              <Image boxSize="150px" src={shopImg} />
            </Flex>
            <Flex direction="column" p="15">
              <Heading as="h4" id="proj-nme">
                E-Commerce Website
              </Heading>
              <Text id="proj-fnt">
                {' '}
                The web portal is developed to provide ease for the people who
                tend to shop through online sources rather than going out.
                Through this portal buyers can go through various categories and
                brands and add the product as per the convenience.
                <br />
                <Box mt="12" Border="1px solid #c2c0bc">
                  <Link
                    textDecor="none"
                    isExternal
                    href="https://shoppzvilla.herokuapp.com/"
                  >
                    VISIT SITE
                  </Link>
                </Box>
              </Text>
            </Flex>
          </Grid>
        </Box>
      </Flex>
    </>
  );
};
export default Project;
