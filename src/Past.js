/**
 * Created by sbasrik on 18.01.2018.
 */

import React, {Component} from 'react';
import './Past.css';


const imageStyle = {


    position: "relative",
    float: "left",
    width: "250px",
    height: "auto",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "0",
    borderRadius: "35px",
    border: "2px solid rgba(200,200,200,0.75)",
    marginRight: "20px",
    marginBottom: "20px"
};

// #DFDFDF

export class Past extends Component{

    render(){

        return(
            <div className="container-fluid" >
                <div className="row" style={{paddingTop: "5%", paddingLeft:"15%"}}>
                    <img className="col-sm-4" style={imageStyle} src={this.props.imgSource}/>
                    <div className="col-sm-6" style={{marginLeft:"0", padding: "0"}}>
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
                        <pg
                            style={{
                                color: "#548A15",
                                fontFamily: "arial" ,
                                fontSize: "100%",
                                textAlign: "left"}}>
                            <strong>{this.props.desc}</strong>
                            <br/>
                            <span style={{color:"#373737"}}><strong>{this.props.location}</strong></span>
                        </pg>
                    </div>
                </div>
            </div>
        )
    }

}