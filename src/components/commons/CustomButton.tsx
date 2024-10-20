import { Button } from "@styles/commons/button.style";

import type { FC } from "react";

interface CustomButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const CustomButton: FC<CustomButtonProps> = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default CustomButton;
