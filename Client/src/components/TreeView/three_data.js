

const treeData = [
    {
        key: "0",
        label: "Documents",
        type: "folder",
        title: "Documents Folder",
        children: [
            {
                key: "0-0",
                label: "Document 1-1",
                type: "folder",
                title: "Documents Folder",
                children: [
                    {
                        key: "0-1-0",
                        label: "Document-0-1.doc",
                        type: "file",
                        link: "https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf",
                        title: "Documents File",
                    },
                    {
                        key: "0-1-1",
                        label: "Document-0-1.doc",
                        type: "text",
                        title: "Documents File",
                        content: "Đây là các điểm mấu chốt cần nhớ khi làm đồ án. Các em tuyệt đối không được vi phạm. Nếu vi phạm - dù là nhỏ nhất - sẽ bị 0đ ngay lập tức. Danh sách các điều này sẽ được cập nhật dần dần qua các bài học"
                    },
                    {
                        key: "0-1-2",
                        label: "Document-0-2.doc",
                        type: "file",
                        link: "https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf",
                        title: "Documents File",
                    },
                    {
                        key: "0-1-3",
                        label: "Document-0-3.doc",
                        type: "file",
                        link: "https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf",
                        title: "Documents File",
                    },
                    {
                        key: "0-1-4",
                        label: "Document-0-4.doc",
                        type: "file",
                        link: "https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf",
                        title: "Documents File",
                    },
                ],
            },
        ],
    },
    {
        key: "1",
        label: "Desktop",
        type: "folder",
        title: "Desktop Folder",
        children: [
            {
                key: "1-0",
                label: "document1.doc",
                type: "file",
                title: "Documents Folder",
            },
            {
                key: "0-0",
                label: "documennt-2.doc",
                type: "file",
                title: "Documents Folder",
            },
        ],
    },
    {
        key: "2",
        label: "Downloads",
        type: "file",
        title: "Downloads Folder"
    },
]

export default treeData