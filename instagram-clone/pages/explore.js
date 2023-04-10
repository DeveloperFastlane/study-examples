import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import TabBar from '../components/TabBar';
import InfiniteScroll from 'react-infinite-scroll-component';

const Container = styled.div`
  padding: 20px;
`;

const SearchBar = styled.input`
  display: block;
  width: 100%;
  padding: 12px 20px;
  margin: 0 0 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 4px;
`;

const GridItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SearchResultList = styled.ul`
  position: absolute;
  background-color: white;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  max-height: 200px;
  overflow-y: scroll;
`;

const SearchResultItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Explore = () => {
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Replace this function with a real API call
  const fetchImages = async () => {
    const totalPages = 3;
    const pageSize = 9;
    const allImages = [
      ...Array(pageSize * totalPages)
    ].map((_, index) => `https://via.placeholder.com/150?text=${index + 1}`);

    if (page < totalPages) {
      const newImages = allImages.slice(page * pageSize, (page + 1) * pageSize);
      setImages((prevImages) => [...prevImages, ...newImages]);
      setPage(page + 1);
    } else {
      setHasMore(false);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  
    if (query.trim()) {
      // Replace this with a real API call
      const testUsers = [
        { username: 'john_doe', name: 'John Doe' },
        { username: 'jane_doe', name: 'Jane Doe' },
        { username: 'bill_smith', name: 'Bill Smith' },
      ];
  
      const testHashtags = ['#nature', '#photography', '#travel'];
  
      const filteredUsers = testUsers.filter((user) =>
        user.username.toLowerCase().includes(query.toLowerCase())
      );
  
      const filteredHashtags = testHashtags.filter((hashtag) =>
        hashtag.toLowerCase().includes(query.toLowerCase())
      );
  
      setSearchResults([...filteredUsers, ...filteredHashtags]);
    } else {
      setSearchResults([]);
    }
  };
  
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <Container>
        <SearchBar
          type="text"
          placeholder="Search for users or hashtags..."
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchResults.length > 0 && (
          <SearchResultList>
            {searchResults.map((result, index) => (
              <SearchResultItem key={index}>
                {typeof result === 'string' ? result : result.username}
              </SearchResultItem>
            ))}
          </SearchResultList>
        )}
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <Grid>
            {images.map((image, index) => (
              <GridItem key={index} src={image} alt="Thumbnail" />
            ))}
          </Grid>
        </InfiniteScroll>
      </Container>
      <TabBar />
    </div>
  );
};

export default Explore;
