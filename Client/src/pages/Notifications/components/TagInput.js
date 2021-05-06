import React from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import './TagInput.css'

const KeyCodes = {
    comma: 188,
    enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

class TagsInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: [],
            suggestions: [...props.suggestions, { id: 'All', text: 'All' }]
        }
        this.onTagsChanged = props.onTagsChanged
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAddition = this.handleAddition.bind(this)
        this.handleDrag = this.handleDrag.bind(this)
    }

    handleDelete(i) {
        const { tags } = this.state
        this.setState({
            tags: tags.filter((tag, index) => index !== i),
        })
    }

    handleAddition(tag) {
        if (this.state.suggestions.indexOf(tag) === -1) return
        this.setState(state => {
            this.onTagsChanged([...state.tags, tag])
            return { tags: [...state.tags, tag] }
        })
    }

    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags]
        const newTags = tags.slice()

        newTags.splice(currPos, 1)
        newTags.splice(newPos, 0, tag)

        // re-render
        this.setState({ tags: newTags })
    }

    render() {
        const { tags, suggestions } = this.state

        return (
            <div>
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters}
                    inputFieldPosition="top"
                    placeholder={"Enter classes' id"}
                />
            </div>
        )
    }
}

export default TagsInput