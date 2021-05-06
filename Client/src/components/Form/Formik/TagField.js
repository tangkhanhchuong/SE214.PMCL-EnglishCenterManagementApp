import React from 'react'
import ReactDOM from 'react-dom'
import ReactTags from 'react-tag-autocomplete'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tags: [
                { id: 1, name: "Apples" },
                { id: 2, name: "Pears" }
            ],
            suggestions: [
                { id: 3, name: "Bananas" },
                { id: 4, name: "Mangos" },
                { id: 5, name: "Lemons" },
                { id: 6, name: "Apricots" }
            ]
        }

        this.reactTags = React.createRef()
    }

    onDelete(i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
    }

    onAddition(tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags })
    }

    render() {
        return (
            <ReactTags
                ref={this.reactTags}
                tags={this.state.tags}
                suggestions={this.state.suggestions}
                onDelete={this.onDelete.bind(this)}
                onAddition={this.onAddition.bind(this)} />
        )
    }
}

export default App