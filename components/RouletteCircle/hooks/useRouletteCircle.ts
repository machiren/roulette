import { useState } from "react";
import { SpringRef, SpringValue, useSpring } from "react-spring";
import { useLocalStorage } from "react-use";

type HookReturnType = {
  styles: {
    rotate: SpringValue<number>;
  };
  members: string[];
  selectedMember: string | null;
  memberInput: string;
  handleChangeMemberInput: (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => void;
  handleRandomizeMemberSelect: () => void;
  handleAnimationStart: () => void;
  handleAnimationFinish: () => void;
  handleMemberAdd: () => void;
  handleMemberDelete: (index: number) => void;
  handleSetMembersToLocalStorage: () => void;
  handleLoadMembersToLocalStorage: () => void;
};

export const useRouletteCircle = (): HookReturnType => {
  const styles = useSpring({
    loop: false,
    from: { rotate: 0 },
    to: { rotate: 360 },
  });

  const [membersFromLocalStorage, setMembersToLocalStorage, remove] =
    useLocalStorage<string[]>("members", []);

  // ルーレット対象のメンバー
  const [members, setMembers] = useState<string[]>([]);
  // 選ばれたメンバー
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  // メンバー入力のインプット
  const [memberInput, setMemberInput] = useState<string>("");

  const handleAnimationStart = () => {
    // Update spring with new props
    // api.start();
  };

  const handleAnimationFinish = () => {
    // Stop animation
    // api.stop();
  };

  const handleChangeMemberInput = (
    e: React.ChangeEvent<HTMLInputElement> | undefined
  ) => setMemberInput(e?.target.value || "");

  const handleRandomizeMemberSelect = () => {
    const selectedMember = members[Math.floor(Math.random() * members.length)];
    setSelectedMember(selectedMember);
  };

  const handleMemberAdd = (): void => {
    if (memberInput) setMembers([...members, memberInput]);
    setMemberInput("");
  };
  const handleMemberDelete = (index: number): void => {
    const copyMembers = [...members];
    copyMembers.splice(index, 1);
    setMembers(copyMembers);
  };

  const handleSetMembersToLocalStorage = () => {
    setMembersToLocalStorage(members);
  };

  const handleLoadMembersToLocalStorage = () => {
    if (membersFromLocalStorage) setMembers(membersFromLocalStorage);
  };

  return {
    styles,
    members,
    selectedMember,
    memberInput,
    handleChangeMemberInput,
    handleRandomizeMemberSelect,
    handleAnimationStart,
    handleAnimationFinish,
    handleMemberAdd,
    handleMemberDelete,
    handleSetMembersToLocalStorage,
    handleLoadMembersToLocalStorage,
  };
};
