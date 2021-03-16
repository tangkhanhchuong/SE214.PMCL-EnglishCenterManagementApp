import React from 'react'
import { Card, CardText, CardTitle, CardBody } from 'reactstrap'
import { FaFile } from 'react-icons/fa'

const AssignmentContentPage = () => {
    const contents = {
        title: "Assignment 1",
        content: "This is content of the assignment 1",
        requires: [
            '5) Mặc dù SV được phép dùng lại dữ liệu (tilemap, background, thông số) từ các nguồn khác nhưng SV phải biết cách sử dụng các công cụ này. Ví dụ như dữ liệu tilemap, SV cần phải biết cách dùng công cụ Tiled để tạo ra scene mới, sửa scene cũ ...  ',
            '6) Sau khi build project/solution xong, kết quả build bắt buộc phải có 0 warnings (tất nhiên phải có 0 errors) ',
            '4) Mọi chuyển động đều phải liên quan đến thời gian dt'
        ],
        files: [
            {
                title: 'File 1',
                link: 'https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf'
            },
            {
                title: 'File 2',
                link: 'https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf'
            },
            {
                title: 'File 3',
                link: 'https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf'
            }
        ]
    }

    return (
        <div className="mt-3">
            <Card className="border rounded m-3">
                <div className="m-3">
                    <div className="m-3">
                        <CardTitle tag="h2">{contents.title}</CardTitle>
                        <CardBody>
                            <CardTitle tag="h4">Content</CardTitle>
                            <CardText className="ml-3">{contents.content}</CardText>
                            <CardTitle tag="h4">Requires</CardTitle>
                            {
                                contents.requires.map((require, index) => (
                                    <CardText className="ml-3" key={index}>{require}</CardText>
                                ))
                            }
                            <CardTitle tag="h4">Attached Files</CardTitle>
                            {
                                contents.files.map((file, index) => (
                                    <CardText className="ml-3" key={index}>
                                        <FaFile size={30} className="m-2" color="#2591ac" />
                                        <a href={file.link} target="blank" style={{ "color": "#2591ac" }}>{file.title}</a>
                                    </CardText>
                                ))
                            }
                        </CardBody>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default AssignmentContentPage
