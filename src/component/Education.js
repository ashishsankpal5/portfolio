import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import './style.css';

const Education = () => {
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
          <Link as={RouterLink} id="ashi" to="/education" className="mainNme">
            Education
          </Link>
        </Flex>
      </Box>

      <Box minHeight="200" mt="72">
        <Flex justifyContent="center">
          <Box minHeight="150" w="70%" m="9" p="10" bgColor="#f2f3f7">
            <Text id="edu-name" display="inline-flex" fontWeight="bold">
              Under-Graduation at Vishwaniketan's iMEET -{' '}
              <Text> (2017 - 2020) </Text>
            </Text>
            <Text id="edu-para" color="gray" fontSize="small">
              I have completed my under-graduation studies with major in
              (Computer Engineering). I have taken courses like OOPs, DSA,
              Computer Networks, Computer Hardware and Maintenance(CHM),etc over
              the years and have better understanding of these subjects. along
              with I've participate in some college events like
              hackathon,Webinar and also attent some workshops. I also
              participate in college sports events and won some price also.
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Box
            minHeight="150"
            w="70%"
            m="9"
            p="10"
            id="sec-para"
            bgColor="#f2f3f7"
          >
            <Text display="inline-flex" fontWeight="bold" id="edu-name">
              Diploma at Bharti Vidyapeeth College of Engineering{' '}
              <Text> (2013 - 2017) </Text>
            </Text>
            <Text id="edu-para" color="gray" fontSize="small">
              I also completed my Diploma studies with major in (Computer
              Technology) with the (First Class). During diploma I've worked on
              some projects with a team of 4, which proves that I am a team
              player and worked under pressure. along with I participate in
              college events also.
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Box
            minHeight="150"
            w="70%"
            m="9"
            p="10"
            id="sec-para"
            bgColor="#f2f3f7"
          >
            <Text display="inline-flex" fontWeight="bold" id="edu-name">
              Primary and Higher Education - <Text>2013 </Text>
            </Text>
            <Text id="edu-para" color="gray" fontSize="small">
              I've done my Higher Education with major subjects as Physics,
              Chemistry, Biology and Maths with good score.During my school
              time, I have developed interest in solving complex problem which
              helped me to improve my understanding of any problem and also my
              mathematical skills to actually solve the problems.
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Education;
