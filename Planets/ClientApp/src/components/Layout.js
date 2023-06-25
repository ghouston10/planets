import React, { Component } from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import background from "../assets/solarSystem.jpg";

const Test = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(33 27 31 / 73%)), url(${background});
  background-size: cover;
`;

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
        <Test>
        <Container>
          {this.props.children}
        </Container>
        </Test>
    );
  }
}
