import React, { useState } from 'react';
import styled from '@emotion/styled';
import TabBar from '../components/TabBar';

const Container = styled.div`
  padding: 20px;
`;

const ActivityTabs = styled.div`
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

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ActivityContent = styled.div``;

const Activity = () => {
  const [activeTab, setActiveTab] = useState('you');
  const [activities] = useState([
    { type: 'like', user: 'john_doe', content: 'liked your post.' },
    { type: 'comment', user: 'jane_doe', content: 'commented on your post.' },
    { type: 'follow', user: 'bill_smith', content: 'started following you.' },
    { type: 'mention', user: 'sarah_parker', content: 'mentioned you in a post.' },
  ]);

  const filteredActivities = activities.filter((activity) => {
    if (activeTab === 'you') {
      return true;
    }
    return activity.type !== 'mention';
  });

  return (
    <div>
      <Container>
        <ActivityTabs>
          <Tab
            active={activeTab === 'you'}
            onClick={() => setActiveTab('you')}
          >
            You
          </Tab>
          <Tab
            active={activeTab === 'following'}
            onClick={() => setActiveTab('following')}
          >
            Following
          </Tab>
        </ActivityTabs>
        <ActivityList>
          {filteredActivities.map((activity, index) => (
            <ActivityItem key={index}>
              <Avatar src={`https://via.placeholder.com/150?text=${activity.user}`} />
              <ActivityContent>
                <strong>{activity.user}</strong> {activity.content}
              </ActivityContent>
            </ActivityItem>
          ))}
        </ActivityList>
      </Container>
      <TabBar />
    </div>
  );
};

export default Activity;
