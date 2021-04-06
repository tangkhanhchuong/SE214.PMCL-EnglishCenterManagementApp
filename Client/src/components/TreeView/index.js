import React from 'react'

import treeData from "./three_data"
import Tree from "./Tree"
import ShadowCard from 'components/Card/ShadowCard'

const TreeList = () => {
    return (
        <div className="row">
            <div className="col text-center">
                <div className="mt-3">
                    <div className="row mt-3 d-flex justify-content-center">
                        <ShadowCard className="col-lg-8 text-left text-dark border rounded">
                            <Tree data={treeData} />
                        </ShadowCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreeList;