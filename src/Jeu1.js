import React, { Component } from 'react';
import interact from 'interactjs';
import './Jeu1.css';
import cheval from './images/cheval.jpg';
import pn from './images/pn.svg';
import back1 from './images/back1.svg';

class Jeu1 extends Component {

    dragMoveListener(event) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
    }

    componentDidMount() {
        interact('.draggable')
            .draggable({
                // enable inertial throwing
                inertia: true,
                // keep the element within the area of it's parent
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                        endOnly: true
                    })
                ],
                // enable autoScroll
                autoScroll: true,

                // call this function on every dragmove event
                onmove: this.dragMoveListener,
                // call this function on every dragend event
                onend: function (event) {
                    var textEl = event.target.querySelector('p')

                    textEl && (textEl.textContent =
                        'moved a distance of ' +
                        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                            Math.pow(event.pageY - event.y0, 2) | 0))
                            .toFixed(2) + 'px')
                }
            })
        window.dragMoveListener = this.dragMoveListener
    }

    render() {
        return (
           
           
            
            <div id="conteneur1">                
                <h2> Remettre les nombres dans l'ordre de 1 à 3</h2>

                  
                <div id="box1"></div>

                <div id="box2"></div>

                <div id="box2"></div>

                <div id="drag-1" class="draggable"></div>

                <div id="drag-2" class="draggable"></div>
                
                <div id="drag-3" class="draggable"></div>
                

               
            </div>
               
    
        );
    }
}





export default Jeu1;