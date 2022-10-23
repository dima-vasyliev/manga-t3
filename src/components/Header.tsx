import { Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <Flex
      mb={5}
      height={65}
      alignItems="center"
      px={5}
      backgroundColor="gray.800"
    >
      <Link href="/">
        <Flex alignItems="center" cursor="pointer">
          <Heading color="gray.200" mr={1.5} size="lg">
            manga
          </Heading>
          <Image width={28} height={28} alt="" src="/ua-logo.svg" />
        </Flex>
      </Link>
    </Flex>
  );
}

export default Header;
