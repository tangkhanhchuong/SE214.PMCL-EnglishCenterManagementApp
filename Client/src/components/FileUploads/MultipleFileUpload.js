import React, { Component } from 'react'
import { Label } from 'reactstrap'

import fileIcon from 'assets/img/icons/file_icon.png'

class MultipleFileUpload extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        const newFile = e.target.files

        if (!newFile) return

        this.fileArray.push({ url: URL.createObjectURL(newFile[0]), name: newFile[0].name })

        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
    }

    generateFileName(name, maxLength = 6) {
        if (name.length > maxLength) return name.substring(0, maxLength) + "..."
        return name
    }

    render() {
        return (
            <>
                <div className="form-group d-flex flex-row border rounded pt-3" style={{ "minHeight": "100px" }}>
                    {(this.fileArray || []).map((file, index) => (
                        <div key={index} className="d-flex flex-column align-items-center ml-3">
                            <img src={fileIcon} alt="" width="50px" />
                            <Label>{this.generateFileName(file.name)}</Label>
                        </div>
                    ))}
                </div>
                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>
            </>
        )
    }
}

export default MultipleFileUpload