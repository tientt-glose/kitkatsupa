import React, { Component } from 'react';
import {
    Card, CardText, CardDeck,
    CardSubtitle, CardBody, CardHeader, InputGroup, InputGroupAddon, InputGroupText, Input
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class CouresListForStudent extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{ margin: 50 }}>
                    <InputGroup>
                        <Input placeholder="検索のためにコース名を入力してください！" />
                        <InputGroupAddon addonType="append">
                            <InputGroupText>🔍</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div>

                <CardDeck style={{ margin: 15 }}>
                    <Card outline color="primary">
                        <CardHeader><h3>IT日本語</h3></CardHeader>
                        <CardBody>
                            <CardSubtitle>教師：Kazuki Hirata </CardSubtitle>
                            <CardText>内容：この授業では、日本で活躍できるエンジニアになるために、日本語を用いてJS言語と根本原因と報連相などのような学習を行います。</CardText>
                        </CardBody>
                    </Card>
                    <Card outline color="primary">
                        <CardHeader><h3>日本文化</h3></CardHeader>
                        <CardBody>
                            <CardSubtitle>教師：Yuko Kato</CardSubtitle>
                            <CardText>内容：日本語と日本文化につきまして十分に紹介します。</CardText>
                        </CardBody>
                    </Card>
                    <Card outline color="primary">
                        <CardHeader><h3>JavaScript</h3></CardHeader>
                        <CardBody>
                            <CardSubtitle>教師：Thinh Pham</CardSubtitle>
                            <CardText>内容：JS言語を教えます。</CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}

export default CouresListForStudent;