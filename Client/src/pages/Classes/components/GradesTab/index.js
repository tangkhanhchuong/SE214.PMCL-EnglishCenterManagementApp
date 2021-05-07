import Page from 'components/Page'
import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Row, Table, Button, Input } from 'reactstrap'
import { NavLink, useLocation } from 'react-router-dom'
import {
    MdArrowForward
} from 'react-icons/md'
import GradeCharts from './GradeCharts'

const tableTypes = ['', '']

const GradesTab = (props) => {
    const [chartMode, setChartMode] = useState(false)

    const location = useLocation().pathname
    const classId = location.split('/')[2]


    let [isEdit, setIsEdit] = useState(false)
    let [scoreDetails, setScoreDetail] = useState([
        { student_id: 18520168, name: 'John', scores: { midterm1: 8, midterm2: 9.5, final: 10 } },
        { student_id: 18520138, name: 'Andy', scores: { midterm1: 2, midterm2: 9.5, final: 8 } },
        { student_id: 18520128, name: 'Chuong', scores: { midterm1: 4, midterm2: 7.5, final: 10 } },
        { student_id: 18520158, name: 'Lisa', scores: { midterm1: 8, midterm2: 8, final: 9 } },
        { student_id: 18520198, name: 'Jacob', scores: { midterm1: 10, midterm2: 8.5, final: 9 } },
    ])
    let [scoreEditing, setScoreEditing] = useState([])

    const toggleIsEdit = () => {
        setIsEdit(prevState => {
            if (prevState == false) {
                setScoreEditing(scoreDetails.map(a => JSON.parse(JSON.stringify(a))))
            } else {
                setScoreDetail(scoreEditing.map(a => JSON.parse(JSON.stringify(a))))
            }
            return !prevState
        })
    }

    let scoresWeight = {
        midterm1: 0.2,
        midterm2: 0.3,
        final: 0.5
    }

    let processTempEditing = (indexInArray, scoreColumnName, newScore) => {
        let newScoreEditing = scoreEditing.map(a => ({ ...a }))
        newScoreEditing[indexInArray].scores[scoreColumnName] = newScore
        setScoreEditing(newScoreEditing)
    }

    let calcAverageScore = (scoreData) => {
        return (scoreData.midterm1 * scoresWeight.midterm1 +
            scoreData.midterm2 * scoresWeight.midterm2 +
            scoreData.final * scoresWeight.final).toFixed(2)
    }

    let compareFinalScore = (scoreData, index) => {
        let oldScore = calcAverageScore(scoreDetails[index].scores)
        let newScore = calcAverageScore(scoreData, scoresWeight)
        let result
        if (oldScore === newScore) {
            result = oldScore
        } else {
            let fontColor = newScore > oldScore ? "green" : "red"
            result = <>{oldScore} <font color={fontColor} > <MdArrowForward /> {newScore} </font></>
        }
        return result
    }

    const renderScoreTable = () => {
        if (isEdit) {
            return scoreEditing.map((scoreElm, index) => {
                return (
                    <tr className="kTable-tr-hover" key={`scoreTableRow-${index}`}>
                        <th scope="row">{scoreElm.student_id}</th>
                        <td>{scoreElm.name}</td>
                        <td><Input className="kInputScore" type="number" step="0.25" onChange={(e) => processTempEditing(index, "midterm1", e.target.value)} min={0} max={10} maxLength={4} defaultValue={scoreElm.scores.midterm1}></Input></td>
                        <td><Input className="kInputScore" type="number" step="0.25" onChange={(e) => processTempEditing(index, "midterm2", e.target.value)} min={0} max={10} maxLength={4} defaultValue={scoreElm.scores.midterm2}></Input></td>
                        <td><Input className="kInputScore" type="number" step="0.25" onChange={(e) => processTempEditing(index, "final", e.target.value)} min={0} max={10} maxLength={4} defaultValue={scoreElm.scores.final}></Input></td>
                        <td>
                            {
                                compareFinalScore(scoreElm.scores, index)

                            }

                        </td>
                    </tr>
                )
            })
        }
        else {
            return scoreDetails.map((scoreElm, index) => {
                return (
                    <tr className="kTable-tr-hover" key={`scoreTableRow-${index}`}>
                        <th scope="row">{scoreElm.student_id}</th>
                        <td>{scoreElm.name}</td>
                        <td>{scoreElm.scores.midterm1}</td>
                        <td>{scoreElm.scores.midterm2}</td>
                        <td>{scoreElm.scores.final}</td>
                        <td>
                            {
                                calcAverageScore(scoreElm.scores)
                            }

                        </td>
                    </tr>
                )
            })
        }
    }

    const renderScoreView = () => {
        return (
            <>
                <CardBody>
                    <Row>
                        <Col>
                            <Card body>
                                <Table className="kScoreTable">
                                    <thead>
                                        <tr>
                                            <th>Student Id</th>
                                            <th>Name</th>
                                            <th>Middle Term 1<br /> ({scoresWeight.midterm1 * 100} %)</th>
                                            <th>Middle Term 2<br /> ({scoresWeight.midterm2 * 100} %)</th>
                                            <th>Final Exam <br /> ({scoresWeight.final * 100} %)</th>
                                            <th>Average <br /> Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            renderScoreTable()
                                        }
                                    </tbody>
                                </Table>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </>
        )
    }

    // if (chartMode) return <ScoreChart classId={classId} />

    return (

        <Card className="mb-3">
            {/* <Row>
                <Col md="6" sm="12" xs="12">
                </Col>
                <Col md="6" sm="12" xs="12" className="text-right">
                    <Button color="primary" onClick={() => { setChartMode((prev) => !prev) }}>Chart</Button> 
                    <Button outline color="success" className="kMargin-LeftRight-5 kBtn-WSize-75" onClick={toggleIsEdit}>
                        {isEdit ? "Save" : "Edit"}
                    </Button>

                </Col>
            </Row>*/}

            <Row>
                <Col>
                    <CardHeader className='d-flex flex-row justify-content-between'>
                        <h4>All Grades</h4>
                        <Button outline color="success" className="kMargin-LeftRight-5 kBtn-WSize-75" onClick={toggleIsEdit}>
                            {isEdit ? "Save" : "Edit"}
                        </Button>
                    </CardHeader>
                    {renderScoreView()}
                </Col>
            </Row>
        </Card>
    )
}

export default GradesTab