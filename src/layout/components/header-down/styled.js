import { styled } from "styled-components";
import {COLORS} from "../../../config/colors";
import { Select } from "../../../components/select";

export const LogoLink=styled.a`
color: #0D0E43;
font-size: 34px;
font-weight: 700;
`

export const ToDo=styled(Select)`
    color: ${COLORS.primary };
`