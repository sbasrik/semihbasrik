/**
 * Created by sbasrik on 18.01.2018.
 */
import './MainImage.css'
import React, { Component } from 'react';
import santaCruz from './assets/santaCruz.JPG';

export class MainImage extends Component{

    render() {
        return (
            <div className="jumbotron container-fluid padding-0" >
                <img src={santaCruz} className="img-fluid" alt="Santa Cruz" />
                <div className="container centered">
                    <h1 className="name"><strong>Hey, I'm Semih Basrık</strong></h1>
                    <hr className="jumbotron-hr"/>
                </div>
            </div>
        );
    }

}
