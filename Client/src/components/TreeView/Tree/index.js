import {
    FaFolder,
    FaFolderOpen,
    FaFile
} from 'react-icons/fa'

import React, { useState } from "react";
import { CardText } from "reactstrap"
import "./index.css";


const Tree = ({ data = [] }) => {
    return (
        <div className="d-tree">
            <ul className="d-flex d-tree-container flex-column">
                {data.map((tree, index) => (
                    <TreeNode node={tree} key={index} />
                ))}
            </ul>
        </div>
    );
};

const TreeNode = ({ node }) => {
    const iconSize = 30

    const [childVisible, setChildVisiblity] = useState(false);

    const hasChild = !!node.children;

    const generateIcon = ({ type, folderOpened = false }) => {
        if (type === "file") return <FaFile size={iconSize} />
        if (folderOpened) return <FaFolderOpen size={iconSize} />
        return <FaFolder size={iconSize} />
    }

    const generateContent = ({ file }) => {
        if (file.content)
            return file.content
        return (
            <>
                {generateIcon({ type: node.type, folderOpened: hasChild && childVisible })}
                <a className="ml-2" style={{ "color": "black" }} href={node.link} target="_blank">{node.label}</a>
            </>
        )
    }

    return (
        <li className="d-tree-node border-0">
            <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
                <div className="col d-tree-head">
                    {generateContent({ file: node })}
                </div>
            </div>

            {hasChild && childVisible && (
                <div className="d-tree-content">
                    <ul className="d-flex d-tree-container flex-column">
                        <Tree data={node.children} />
                    </ul>
                </div>
            )}
        </li>
    );
};

export default Tree;