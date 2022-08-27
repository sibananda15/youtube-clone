import React from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CategoriesBar from "../../categoriesBar/CategoriesBar";
import Video from "../../video/Video";

export default function HomeScreen() {
  return (
    <>
      <Container>
        <CategoriesBar />
        <Row>
          {[...new Array(20)].map(() => (
            <>
              <Col lg={3} md={4}>
                <Video/>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}
