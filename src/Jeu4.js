import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cheval from './images/cheval.jpg';
import bouton from './images/bouton.png';
import ct from './images/ct.svg';
import pn from './images/pn.svg';

import'./jeu4.css';



class Jeu4 extends Component {
    render() {
        return (
            <div class="toto">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={cheval}
                            alt="First slide"
                        />
                       
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={bouton}
                            alt="Third slide"
                        />

                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={ct}
                            alt="Third slide"
                        />

                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={pn}
                            alt="Third slide"
                        />

                        
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}


export default Jeu4;