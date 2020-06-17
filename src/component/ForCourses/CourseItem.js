import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Card, CardText, CardSubtitle, CardBody, CardHeader
} from 'reactstrap';

class CourseItem extends Component {
    render() {
        return (
            <Card outline color="primary">
                <CardHeader><Link to={`/detailCourse`}><h3>{this.props.title}</h3></Link></CardHeader>
                <CardBody>
                    <CardSubtitle>教師：{this.props.teacher_name}</CardSubtitle>
                    <CardText>内容：{this.props.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default CourseItem;
