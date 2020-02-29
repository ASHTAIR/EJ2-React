import React from 'react';

class ValidationComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let res = "";
        let len = this.props.long;

        if (len>5) {
            res = "Texto demasiado largo";
        } else {
            res = "Texto demasiado corto";
        }
        return (
            <div className="ValidationComponent">
                <p>{res}</p>
            </div>
        )
    }
};

export default ValidationComponent;