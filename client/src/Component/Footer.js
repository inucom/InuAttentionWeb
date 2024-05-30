import React from 'react';

const Footer = () => {
    return (
        <footer >
            <hr className="divider"/>
            <div className="mx-auto text-center">

                    &copy; {new Date().getFullYear()} InuAttention. All rights reserved.

            </div>

        </footer>
    );
}

export default Footer;
