import React, { Component} from 'react';
import Navigation from './navigation'

class Header extends Component {

    render() { 
        return (
        <header>
            <section>
                <Navigation />
            </section>
        </header>
         );
    }
}
 
export default Header;