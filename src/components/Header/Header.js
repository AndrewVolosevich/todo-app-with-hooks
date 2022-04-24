import React from 'react';
import {Typography} from "antd";

const {Title} = Typography;

const Header = ({title}) => {
  return (
    <div>
      <Title italic underline level={3}>{title}</Title>
    </div>
  );
};

export default Header;