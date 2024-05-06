import { Col, Container, Row } from 'react-bootstrap'

const Favourites = () => {
  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Saved jobs: {}</h1>
          {/* {.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))} */}
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
