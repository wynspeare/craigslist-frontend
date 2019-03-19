import React, { Component } from 'react';
// import { Card, CardBody, Button, CardHeader, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class PostTeaser extends Component {

  render() {
    return (
      <div>
          <strong>{ this.props.post_title }</strong>



        {/* <Card style={{ marginTop: '10px', borderRadius: "0" }}>
          <CardHeader>
            { this.props.createdDate ? <span className="date">{ this.props.createdDate.slice(0, 10) }</span> : null }
            <strong>{ this.props.title }</strong> 
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg={10} sm={12}>
                <span className="paragraph-text">{ this.props.abstract }</span>
              </Col>
              <Col lg={2} sm={12}>
                <Button style={{ borderRadius: "0", float: "right" }} size="sm">

                  <Link className="view-button-text" to={`/articles/${this.props.id}`}> 
                    Read More 
                  </Link>
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card> */}
      </div>
    )
  }
}

export default PostTeaser;
