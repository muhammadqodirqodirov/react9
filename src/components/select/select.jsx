import React from "react";
import { Select as SelectEl } from "@mui/material";
import { ArrowBottom } from "../../assets/icon/arrow-bottom";
import styled, { css } from "styled-components";

export const Select = ({ menu, onChange, value, children, sx, ...props }) => {
  return (
    <StyleSelect
      menu={menu?.toString()}
      value={value}
      onChange={onChange}
      variant="outlined"
      IconComponent={(item) => (
        <ArrowBottom {...item} menu={menu ? true.toString() : ""} />
      )}
      sx={sx}
      {...props}
    >
      {children}
    </StyleSelect>
  );
};

export const StyleSelect = styled(SelectEl)`
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0;
  }
  box-shadow: "none";
  .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
  &.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
  &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
  [role="button"] {
    color: #f1f1f1;
    font-size: 16px;
    font-weight: 600;
    ${(p) =>
      p.menu &&
      css`
        color: #fb2e86;
      `}
  }
`;
