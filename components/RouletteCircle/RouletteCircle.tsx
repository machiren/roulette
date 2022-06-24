import {
  Box,
  Button,
  chakra,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { animated } from "react-spring";
import { useRouletteCircle } from "./hooks/useRouletteCircle";

export const RouletteCircle = () => {
  const {
    styles,
    members,
    selectedMember,
    memberInput,
    handleChangeMemberInput,
    handleRandomizeMemberSelect,
    handleMemberAdd,
    handleMemberDelete,
    handleLoadMembersToLocalStorage,
    handleSetMembersToLocalStorage,
  } = useRouletteCircle();

  const ChakraBox = chakra(animated.div);

  return (
    <React.Fragment>
      <Box w={400} mx={"auto"} mt={20}>
        <Box mb={8}>
          <Button onClick={handleRandomizeMemberSelect}>
            ランダムに1人を選ぶ
          </Button>
        </Box>
        <Box mb={8}>
          <ChakraBox
            w={400}
            h={400}
            backgroundColor="GrayText"
            borderRadius="50%"
            style={{ ...styles }}
          >
            ルーレット
          </ChakraBox>
        </Box>
        <Box mb={4}>{selectedMember || ""}</Box>
        <Box mb={8}>
          <Box mb={4}>
            <Input
              value={memberInput}
              onChange={handleChangeMemberInput}
              placeholder="名前"
              size="md"
            />
          </Box>
          <Box mb={4}>
            <Button onClick={() => handleMemberAdd()}>
              メンバーを追加する
            </Button>
          </Box>
        </Box>
        <Box mb={8}>
          <UnorderedList>
            {members.map((member, index) => (
              <ListItem key={index}>
                <Box>
                  <Text>{member}</Text>
                  <Button onClick={() => handleMemberDelete(index)}>
                    削除する
                  </Button>
                </Box>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Box>
          <Box mb={4}>
            <Button onClick={handleLoadMembersToLocalStorage}>
              保存したメンバーを読み込む
            </Button>
          </Box>
          <Box mb={4}>
            <Button onClick={handleSetMembersToLocalStorage}>
              メンバーを保存する
            </Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
