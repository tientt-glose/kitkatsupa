import React, { Component } from 'react';
import {
    CardDeck, InputGroup, InputGroupAddon, InputGroupText, Input, Button
} from 'reactstrap';
// import { Link } from 'react-router-dom';
import CourseItem from '../component/ForCourses/CourseItem';
import Header from './Header';
// import Footer from './Footer';
import * as axios from 'axios';


class CoursesListForTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            error: null,
            isLoaded: false,
            items: []
        };
        this._onSearchChanged = this._onSearchChanged.bind(this);

    }
    componentDidMount() {
        axios.get('http://kitkat-api.herokuapp.com/api/courses/anonymous')
            .then(response => {
                this.setState({ items: response.data });
                console.log(response.data);
            })
            .catch(err => console.log(err));
    }

    _onSearchChanged = (event) => {
        this.setState({ searchString: event.target.value })
    };

    render() {
        // return (
        // <ul>
        //     {this.state.items.map(item => (
        //         <li key={item.id}>
        //             {item.id} /// {item.title}
        //         </li>
        //     ))}
        // </ul>);
        const displayedProject = this.state.items.filter(
            item =>
                item.title.toLowerCase().includes(this.state.searchString.toLowerCase())
        )

        var courselist = displayedProject.map((item, id) => (
            <CourseItem
                id={item.id}
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
                        <Input placeholder="検索のためにコース名を入力してください！" enterButton onChange={this._onSearchChanged} />
                        <InputGroupAddon addonType="append">
                            <InputGroupText><span role="img" aria-labelledby="Left_Pointing_Magnifying_Glass">🔍</span></InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div>

                <div style={{ textAlign: "right", margin: 25, marginRight: 50 }}>
                    <Button color="primary">コースを登録する</Button>
                </div>

                <CardDeck style={{ margin: 15 }}>
                    {courselist}
                </CardDeck>
            </div>
        );
    }
}

export default CoursesListForTeacher;