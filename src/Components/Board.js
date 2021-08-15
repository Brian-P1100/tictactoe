import React from 'react'
import Square from './Square'
import { Container, Row, Col } from 'reactstrap';


function Board() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Square />
                    </Col>
                    <Col>
                        <Square />
                    </Col>
                    <Col>
                        <Square />
                    </Col>
                </Row>
                <Row>
                     <Col>
                        <Square />
                    </Col>
                    <Col>
                        <Square />
                    </Col>
                    <Col>
                        <Square />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Square />
                    </Col>
                    <Col>
                        <Square />
                    </Col>
                    <Col>
                        <Square />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Board
                    
