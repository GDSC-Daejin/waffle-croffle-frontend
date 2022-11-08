import React from 'react';
import { TitleLogo, TitleName, TitleWrapper } from './MenuStyle';
import { logo } from '../../assets/ExportSvg';

const Title = () => {
  return (
    <TitleWrapper>
      <TitleLogo src={logo} />
      <TitleName>Today's Croffle</TitleName>
    </TitleWrapper>
  );
};

export default Title;
