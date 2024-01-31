import { Flex, Link, Icon, Box } from "@chakra-ui/react";
import { IoLogoInstagram, IoMail, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <Flex
        as="footer"
        justifyContent="space-between"
        borderTop="1px solid #c2c0bc"
        className="footer"
      >
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          fontSize="12"
          color="#AAAAAA"
        >
          © 2024 Ashish sankpal.
        </Flex>
        <Flex justifyContent="space-between">
          <Box ml="6" mr="6" color="#AAAAAAA">
            <Link href="https://www.instagram.com/the_garib_freaks/" isExternal>
              <Icon
                as={IoLogoInstagram}
                mr="8"
                ml="8"
                _hover={{ opacity: "0.7", color: "black" }}
                color="#AAAAAA"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ashish-sankpal-a02a5418b/"
              isExternal
            >
              <Icon
                as={IoLogoLinkedin}
                mr="8"
                ml="8"
                _hover={{ opacity: "0.7", color: "black" }}
                color="#AAAAAA"
              />
            </Link>
            <Link
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              isExternal
            >
              <Icon
                as={IoMail}
                mr="8"
                ml="8"
                _hover={{ opacity: "0.7", color: "black" }}
                color="#AAAAAA"
              />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
export default Footer;
