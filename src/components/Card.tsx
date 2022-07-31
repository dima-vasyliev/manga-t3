import { Box, BoxProps } from '@chakra-ui/react';

function Card({
  children,
  ...props
}: { children: React.ReactNode } & BoxProps) {
  return (
    <Box {...props} borderRadius={16} p={6} backgroundColor="gray.800">
      {children}
    </Box>
  );
}

export default Card;
