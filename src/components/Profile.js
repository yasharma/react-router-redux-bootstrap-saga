import React from 'react';
import { connect } from 'react-redux';

const Profile = ({ token, user }) => {
  /*if (!token) {
  	
    return <Redirect to="/login" />;
  }
  console.log(JSON.parse(user));*/
  return <div> You are on profile page.</div>;
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Profile);