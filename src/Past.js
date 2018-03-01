/**
 * Created by sbasrik on 18.01.2018.
 */

import React, {Component} from 'react';
import './Past.css';
import {withGetScreen} from 'react-getscreen'

const imageStyle = {

    position: "relative",
    float: "left",
    width: "90%",
    height: "250px",
    padding: "0",
    borderRadius: "35px",
    border: "2px solid rgba(200,200,200,0.75)",
    marginLeft: "10px",
    marginRight: "0px",
    marginBottom: "20px"
};

// #DFDFDF

export class Past extends Component{

    render(){
        return(
            <div  >
                <div className="row content" style={{paddingTop: "2%", paddingBottom: "2%"}}>
                   <div className="col-sm-2"></div>
                    <img className="col-sm-3" style={imageStyle} src={this.props.imgSource} alt="logo"/>
                    <div className="col-sm-6" style={{marginLeft:"4%", padding: "0"}}>
                        <p
                            style={{
                            color: "#2C6CC5",
                            fontFamily: "arial" ,
                            fontSize: "120%",
                            textAlign: "left"}}>
                                <a href={this.props.headingLink} target="_blank" rel="noopener noreferrer" className="card-link">
                                    {this.props.heading}
                                </a>
                        </p>
                        <p
                            style={{
                                color: "#548A15",
                                fontFamily: "arial" ,
                                fontSize: "100%",
                                textAlign: "left"}}>
                            <strong>{this.props.desc}</strong>
                            <br/>
                            <span style={{color:"#373737"}}><strong>{this.props.location}</strong></span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withGetScreen(Past);