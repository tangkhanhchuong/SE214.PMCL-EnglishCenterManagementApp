import React from 'react'

import treeData from "./three_data"
import Tree from "./Tree"

const TreeList = () => {
    return (
        <div className="row">
            <div className="col text-center">
                <div className="mt-3">
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-lg-8 text-left text-dark border rounded">
                            <Tree data={treeData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreeList;