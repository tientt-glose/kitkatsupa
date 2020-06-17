import React, { Component } from 'react';
import {
    Card, CardText, CardSubtitle, CardBody, CardHeader
} from 'reactstrap';

class CourseItem extends Component {
    render() {
        return (
            <Card outline color="primary">
                <CardHeader><h3>{this.props.title}</h3></CardHeader>
                <CardBody>
                    <CardSubtitle>教師：{this.props.teacher_name}</CardSubtitle>
                    <CardText>内容：{this.props.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default CourseItem;
