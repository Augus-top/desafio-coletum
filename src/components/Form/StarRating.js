import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
  return {
    rating: state.formValues.starRating
  }
};

class StarRating extends React.Component {

  handleStarClick(nextValue, prevValue, name) {
    this.props.dispatch({type: 'SET_STAR_RATING', starRating: nextValue});
  }

  render() {    
    return (                
      <Layout>
        <StarRatingComponent 
          name="starRating" 
          starCount={5}
          value={this.props.rating}
          onStarClick={this.handleStarClick.bind(this)}
          renderStarIcon={() => <StyledStar icon="star"/>}
          emptyStarColor={'#9b9da0'}
        />
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(StarRating);