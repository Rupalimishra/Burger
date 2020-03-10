import React from 'react';
import './Modal.css';
import Aux from '../../../containers/hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className="Modal">
            {props.children}
        </div>
    </Aux>
);

export default modal;