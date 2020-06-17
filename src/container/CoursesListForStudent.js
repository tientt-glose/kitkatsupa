import React, { Component } from 'react';
import {
    CardDeck, InputGroup, InputGroupAddon, InputGroupText, Input
} from 'reactstrap';
// import { Link } from 'react-router-dom';
import CourseItem from '../component/ForCourses/CourseItem';
import Header from './Header';
// import Footer from './Footer';
import * as axios from 'axios';


class CoursesListForStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        axios.get('http://kitkat-api.herokuapp.com/api/courses')
            .then(response => {
                this.setState({ items: response.data });
                console.log(response.data);
            })
            .catch(err => console.log(err));
    }

    render() {
        // return (
        // <ul>
        //     {this.state.items.map(item => (
        //         <li key={item.id}>
        //             {item.id} /// {item.title}
        //         </li>
        //     ))}
        // </ul>);
        var courselist = this.state.items.map((item, id) => (
            <CourseItem
                id={id}
                title={item.title}
                description={item.description}
                teacher_name={item.teacher.fullname}
            />
        ));

        return (
            <div>
                <Header />
                <div style={{ margin: 50 }}>
                    <InputGroup>
                        <Input placeholder="検索のためにコース名を入力してください！" />
                        <InputGroupAddon addonType="append">
                            <InputGroupText><span role="img" aria-labelledby="Left_Pointing_Magnifying_Glass">🔍</span></InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div>

                <CardDeck style={{ margin: 15 }}>
                    {courselist}
                </CardDeck>
            </div>
        );
    }
}

export default CoursesListForStudent;