import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Adicional from './Adicional';
function ContentWrapper(){
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">

                    <TopBar />
                    <ContentRowTop />
                    <Adicional />
                    <Footer />

                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;