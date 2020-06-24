import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Card, CardText, CardSubtitle, CardBody, CardHeader, Popover, PopoverBody, PopoverHeader
} from 'reactstrap';

class CourseItem extends Component {
    _onClick= (event) => {
        if (!localStorage.getItem("token")) alert("アカウントにログインしてください！")
    };

    render() {
        // var permit
        // if (localStorage.getItem("token")) {
        //     permit = <Link
        //         to={{
        //             pathname: "/course-detail",
        //             state: { id: this.props.id }
        //         }}
        //     >
        //         <h3 id="Popover1">{this.props.title}</h3>
        //     </Link>
        // }
        // else {permit = <h3 id="Popover1">{this.props.title}</h3> 
        // permit=permit + <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        //     <PopoverHeader>Popover Title</PopoverHeader>
        //     <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        // </Popover>
        // }
        return (
            <Card outline color="primary">
                <CardHeader>
                    <Link
                        to={{
                            pathname: localStorage.getItem("token") ? "/course-detail" : "/",
                            state: { id: this.props.id }
                        }}
                    >
                        <h3 onClick={this._onClick}>{this.props.title}</h3>
                    </Link>
                </CardHeader>
                <CardBody>
                    <CardSubtitle>教師：{this.props.teacher_name}</CardSubtitle>
                    <CardText>内容：{this.props.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

export default CourseItem;
