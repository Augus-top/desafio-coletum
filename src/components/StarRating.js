import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRatingComponent from 'react-star-rating-component';


const StyledStar = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
`

const Layout = styled.div`
  font-size: 1.0em;
  
  @media (min-width: 1024px) { 
    font-size: 1.5em;
  }
`;

export default class StarRating extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;
    
    return (                
      <Layout>
        <StarRatingComponent 
          name="starRating" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
          renderStarIcon={() => <StyledStar icon="star"/>}
          emptyStarColor={'#9b9da0'}
        />
      </Layout>
    );
  }
}