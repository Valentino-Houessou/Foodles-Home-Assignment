import { Icon, IconButton } from "@chakra-ui/react";
import React from "react";
import { CustomIconButtonType } from "../utils/types";

interface CustomIconButtonProps {
  buttonIconData: CustomIconButtonType;
}

export const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  buttonIconData,
}) => {
  const { bgColor, ariaLabel, handleClick, iconColor, icon } = buttonIconData;
  const isDisable = buttonIconData.isDisable || false;
  
  return (
    <IconButton
      bg={bgColor}
      minW={7}
      h={7}
      borderRadius={4}
      _hover={{ opacity: "0.5" }}
      aria-label={ariaLabel}
      onClick={handleClick}
      isDisabled={isDisable}
      icon={<Icon w={5} h={5} color={iconColor} as={icon} />}
    />
  );
};
