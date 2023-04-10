import React from 'react';
import styled from '@emotion/styled';
import { FiHome, FiSearch, FiPlusSquare, FiHeart, FiUser } from 'react-icons/fi';
import Link from 'next/link';

const TabBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  height: 60px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
`;

const TabIcon = styled.div`
  font-size: 24px;
  color: #555;
`;

const TabBar = () => {
  return (
    <TabBarContainer>
      <Link href="/home">
        <TabIcon>
          <FiHome />
        </TabIcon>
      </Link>
      <Link href="/explore">
        <TabIcon>
          <FiSearch />
        </TabIcon>
      </Link>
      <Link href="/new-post">
        <TabIcon>
          <FiPlusSquare />
        </TabIcon>
      </Link>
      <Link href="/activity">
        <TabIcon>
          <FiHeart />
        </TabIcon>
      </Link>
      <Link href="/profile">
        <TabIcon>
          <FiUser />
        </TabIcon>
      </Link>
    </TabBarContainer>
  );
};

export default TabBar;