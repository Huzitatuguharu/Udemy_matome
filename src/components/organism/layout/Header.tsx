import { memo, VFC } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  Button,
  useDisclosure,
  DrawerContent
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header: VFC = memo(() => {
  // return <div style={{ height: "50px", backgroundColor: "red" }}>Header</div>;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as="nav"
        bg="teal.300"
        color="gray.100"
        align="center"
        justify="space-between"
        padding={{ base: 5, md: 6 }}
      >
        <Flex align="center" as="a" mr={10} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>

        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "lg" }}
        >
          <Box pr={5}>
            <Link>ユーザー一覧</Link>
            <Link>設定</Link>
          </Box>
        </Flex>
        <IconButton
          aria-label="メニュー"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">TOP</Button>
              <Button w="100%">ユーザー一覧</Button>
              <Button w="100%">設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
