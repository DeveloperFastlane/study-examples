import React, { useState } from 'react';
import styled from '@emotion/styled';
import TabBar from '../components/TabBar';

const Container = styled.div`
  padding: 20px;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const UserInfo = styled.div``;

const Username = styled.h2`
  margin: 0;
`;

const Bio = styled.p`
  margin: 0;
`;

const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StatItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const StatValue = styled.strong`
  display: block;
`;

const StatLabel = styled.span``;

const EditProfileButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 4px;
`;

const PostTabs = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => (props.active ? '#000' : '#ccc')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};

  &:hover {
    color: #000;
  }
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Post = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const handleEditProfile = () => {
    // Implement edit profile logic here
  };

  return (
    <div>
      <Container>
        <ProfileHeader>
          <Avatar src="https://via.placeholder.com/150" />
          <UserInfo>
            <Username>john_doe</Username>
            <Bio>Photographer and traveler</Bio>
            <Stats>
              <StatItem>
                <StatValue>150</StatValue>
                <StatLabel>Posts</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>300</StatValue>
                <StatLabel>Followers</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>200</StatValue>
                <StatLabel>Following</StatLabel>
              </StatItem>
            </Stats>
            <EditProfileButton onClick={handleEditProfile}>
              Edit Profile
            </EditProfileButton>
          </UserInfo>
        </ProfileHeader>
         <PostTabs>
          <Tab
            active={activeTab === 'posts'}
            onClick={() => setActiveTab('posts')}
          >
            Posts
          </Tab>
          <Tab
            active={activeTab === 'saved'}
            onClick={() => setActiveTab('saved')}
          >
            Saved
          </Tab>
        </PostTabs>
        {activeTab === 'posts' && (
          <Posts>
            {/* Replace the src attribute with the user's actual post image URLs */}
            <Post src="https://via.placeholder.com/300" />
            <Post src="https://via.placeholder.com/300" />
            <Post src="https://via.placeholder.com/300" />
            {/* Add more posts as needed */}
          </Posts>
        )}
        {activeTab === 'saved' && (
          <Posts>
            {/* Replace the src attribute with the user's actual saved post image URLs */}
            <Post src="https://via.placeholder.com/300" />
            <Post src="https://via.placeholder.com/300" />
            <Post src="https://via.placeholder.com/300" />
            {/* Add more saved posts as needed */}
          </Posts>
        )}
      </Container>
      <TabBar />
    </div>
  );
};

export default Profile;

