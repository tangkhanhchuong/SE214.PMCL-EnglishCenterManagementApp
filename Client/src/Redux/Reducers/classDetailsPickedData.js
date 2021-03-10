const initialState = {
    classData : []
}

const ClassDetailsPickedData = (state = initialState, action)=>{
    console.log(action);
    switch(action.type){
        case 'updateClassData' : return {classData : action.classData};
        default : return state;
    }
}

export default ClassDetailsPickedData;