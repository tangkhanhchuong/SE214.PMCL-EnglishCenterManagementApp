import React from 'react';
import checkboxes from './checkboxes';
import Checkbox from './CheckBox';

class CheckBoxContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedItems: new Map(),
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }

    render() {
        return (
            <div>
                {
                    checkboxes.map(item => (
                        <label key={item.key} className="mr-3 ml-3">
                            <Checkbox
                                name={item.name}
                                checked={this.state.checkedItems.get(item.name)}
                                onChange={this.handleChange}
                            />
                            {item.name}
                        </label>
                    ))
                }
            </div>
        );
    }
}

export default CheckBoxContainer;