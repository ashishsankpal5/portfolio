import { Box, Flex, Link, Text, Icon, ChakraProvider } from '@chakra-ui/react';
import {
  IoIosMail,
  IoLogoLinkedin,
  IoLogoHtml5,
  IoLogoCss3,
} from 'react-icons/io';
import { IoLogoJavascript, IoLogoReact } from 'react-icons/io5';
import { SiMysql } from 'react-icons/si';
import { DiNodejs, DiMongodb } from 'react-icons/di';
import { BsFillBootstrapFill } from 'react-icons/bs';
import Progress from './Progress';
import './style.css';
import './progressStyle.css';

const Skills = () => {
  return (
    <>
      <Box mt="60" className="win">
        <Flex justifyContent="center">
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
        </Flex>
        <Flex justifyContent="center">
          <ChakraProvider>
            <Flex direction="column">
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
          </ChakraProvider>
        </Flex>
      </Box>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        id="proj-fnt"
        mt="100"
      >
        <Text className="contacts" borderBottom="1.5px solid #3c3c42">
          Get in touch
        </Text>
        <Flex direction="column">
          <Box>
            <Link
              isExternal
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              textDecor="none"
              color="black"
              _hover={{ color: '#1DA1F2', opacity: '0.7' }}
            >
              <Icon id="abc" as={IoIosMail} />
              ashishsankpal5@gmail.com
            </Link>
          </Box>
          <Box>
            <Link
              isExternal
              href="https://www.linkedin.com/in/ashish-sankpal-a02a5418b/"
              textDecor="none"
              color="black"
              _hover={{ color: '#1DA1F2', opacity: '0.7' }}
            >
              <Icon id="abc" as={IoLogoLinkedin} />
              ashish sankpal
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
export default Skills;
