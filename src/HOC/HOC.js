import React from "react";

const EnhancedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        render (){
            return <OriginalComponent name = "Hiren"/>
        }
    }
    return NewComponent
}   
export default EnhancedComponent;