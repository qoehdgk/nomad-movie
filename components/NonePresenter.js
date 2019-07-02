import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TINT_COLOR } from "../constants/Colors";

const NoneContainer = styled.Text`
  font-weight: 600;
  font-size: 30px;
  color: ${TINT_COLOR};
  text-align: center;
  display: ${props => (props.display ? "flex" : "none")};
`;

const NonePresenter = ({ display = false }) => (
  <NoneContainer display={display}>No Data</NoneContainer>
);

NonePresenter.propTypes = {
  display: PropTypes.bool
};

export default NonePresenter;
