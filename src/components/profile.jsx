import React, { useEffect, useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import axiosInstance from '../utils/axiosInstance';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axiosInstance
        .get('http://localhost:8080/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row className="mt-5">
      <Col className="text-center"> 
          <h1>Profile</h1>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>First Name:</strong>
        </Col>
        <Col>{user.firstName}</Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Last Name:</strong>
        </Col>
        <Col>{user.lastName}</Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Email:</strong>
        </Col>
        <Col>{user.email}</Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>User Name:</strong>
        </Col>
        <Col>{user.username}</Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Address:</strong>
        </Col>
        <Col>{user.address}</Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Role:</strong>
        </Col>
        <Col>{user.role}</Col>
      </Row>
    </Container>
  );
};

export default Profile;
