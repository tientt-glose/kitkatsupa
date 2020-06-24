import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { IconContext } from "react-icons";

import {
    Card, CardText, CardSubtitle, CardBody, CardHeader, Button
} from 'reactstrap';
import Column from 'antd/lib/table/Column';

class CourseItem extends Component {
    _onClick = (event) => {
        if (!localStorage.getItem("token")) alert("アカウントにログインしてください！")
    };

    render() {
        //role
        var permit=null
        if (localStorage.getItem("role") === "Teacher" && !window.location.pathname.includes('/achievement')) {
            permit = <div>
                <IconContext.Provider value={{ color: "red", size: "2em" }}>
                    <div>
                        <RiDeleteBin2Line />
                    </div>
                </IconContext.Provider>
            </div>
        }

        return (
            <Card outline color="primary">
                <CardHeader style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Link
                        to={{
                            pathname: localStorage.getItem("token") ? window.location.pathname.includes('/achievement') ? "/achievement-course" : "/course-detail" : "/",
                            state: { id: this.props.id }
                        }}
                    >
                        <h3 onClick={this._onClick}>{this.props.title}</h3>
                    </Link>
                    {permit}
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
