import React from "react";

import Aux from '../../containers/hoc/Aux';
import './Layout.css';
//import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
    <Aux>
        {/* <div>Toolbar, sideDrawer, Backdrop</div> */}
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);
 export default layout;