import { GoMarkGithub } from 'react-icons/go';
import { SiStackoverflow } from 'react-icons/si';
import { Icon, Flex, Link, Heading } from '@chakra-ui/react';

const Work = () => {
  return (
    <>
      <Flex
        className="icons"
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      >
        <Flex display="flex" direction="column">
          <Heading
            as="h1"
            className="contacts"
            textAlign="center"
            borderBottom="1.5px solid black"
            mb="6"
          >
            My Works
          </Heading>
          <Link isExternal href="https://github.com/ashishsankpal5">
            <Icon
              as={GoMarkGithub}
              _hover={{ color: ' #4c4c4c' }}
              fontSize="large"
              m="8"
            />
            GitHub
          </Link>
          <Link
            isExternal
            href="https://stackoverflow.com/users/16222952/ashish"
          >
            <Icon
              as={SiStackoverflow}
              _hover={{ color: '#ef8236' }}
              fontSize="large"
              m="8"
            />
            Stack Overflow
          </Link>
        </Flex>
      </Flex>
    </>
  );
};
export default Work;
