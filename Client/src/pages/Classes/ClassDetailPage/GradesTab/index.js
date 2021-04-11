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
        { idStudent: 18520168, firstname: 'John', lastname: 'Evan', scores: { e15min1: 8, e15min2: 7.25, eMidTerm1: 8.5, eMidTerm2: 6.75, eFinalExam: 9 } },
        { idStudent: 18520010, firstname: 'Kayn', lastname: 'Smith', scores: { e15min1: 8, e15min2: 7.25, eMidTerm1: 8.5, eMidTerm2: 6.75, eFinalExam: 9 } },
        { idStudent: 18520123, firstname: 'Athena', lastname: 'Rii', scores: { e15min1: 8, e15min2: 7.25, eMidTerm1: 8.5, eMidTerm2: 6.75, eFinalExam: 9 } },
        { idStudent: 17520812, firstname: 'Chuong', lastname: 'Tang', scores: { e15min1: 8, e15min2: 7.25, eMidTerm1: 8.5, eMidTerm2: 6.75, eFinalExam: 9 } },
        { idStudent: 18521234, firstname: 'Thinh', lastname: 'Doan', scores: { e15min1: 8, e15min2: 7.25, eMidTerm1: 8.5, eMidTerm2: 6.75, eFinalExam: 9 } },
        { idStudent: 18520383, firstname: 'Toan', lastname: 'Tan', scores: { e15min1: 8, e15min2: 7.25, eMidTerm1: 8.5, eMidTerm2: 6.75, eFinalExam: 9 } },
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
        e15min1: 0.1,
        e15min2: 0.1,
        eMidTerm1: 0.2,
        eMidTerm2: 0.2,
        eFinalExam: 0.4
    }

    let processTempEditing = (indexInArray, scoreColumnName, newScore) => {
        let newScoreEditing = scoreEditing.map(a => ({ ...a }))
        newScoreEditing[indexInArray].scores[scoreColumnName] = newScore
        setScoreEditing(newScoreEditing)
    }

    let calcAverageScore = (scoreData) => {
        return (scoreData.e15min1 * scoresWeight.e15min1 +
            scoreData.e15min2 * scoresWeight.e15min2 +
            scoreData.eMidTerm1 * scoresWeight.eMidTerm1 +
            scoreData.eMidTerm2 * scoresWeight.eMidTerm2 +
            scoreData.eFinalExam * scoresWeight.eFinalExam).toFixed(2)
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

    let renderScoreTable = () => {
        if (isEdit) {
            return scoreEditing.map((scoreElm, index) => {
                return (
                    <tr className="kTable-tr-hover" key={`scoreTableRow-${index}`}>
                        <th scope="row">{scoreElm.idStudent}</th>
                        <td>{scoreElm.firstname}</td>
                        <td>{scoreElm.lastname}</td>
                        <td><Input className="kInputScore" type="number" step="0.25" onChange={(e) => processTempEditing(index, "e15min1", e.target.value)} min={0} max={10} maxLength={4} defaultValue={scoreElm.scores.e15min1}></Input></td>
                        <td><Input className="kInputScore" type="number" step="0.25" onChange={(e) => processTempEditing(index, "e15min2", e.target.value)} min={0} max={10} maxLength={4} defaultValue={scoreElm.scores.e15min2}></Input></td>
                        <td><Input className="kInputScore" type="number" step="0.25" onChange={(e) => processTempEditing(index, "eMidTerm1", e.target.value)} min={0} max={10} maxLength={4} defaultValue={scoreElm.scores.eMidTerm1}></Input></td>
                        <td><Input className="kInputScore" type="number" step="0.25" onChange={(e) => processTempEditing(index, "eMidTerm2", e.target.value)} min={0} max={10} maxLength={4} defaultValue={scoreElm.scores.eMidTerm2}></Input></td>
                        <td><Input className="kInputScore" type="number" step="0.25" onChange={(e) => processTempEditing(index, "eFinalExam", e.target.value)} min={0} max={10} maxLength={4} defaultValue={scoreElm.scores.eFinalExam}></Input></td>
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
                        <th scope="row">{scoreElm.idStudent}</th>
                        <td>{scoreElm.firstname}</td>
                        <td>{scoreElm.lastname}</td>
                        <td>{scoreElm.scores.e15min1}</td>
                        <td>{scoreElm.scores.e15min2}</td>
                        <td>{scoreElm.scores.eMidTerm1}</td>
                        <td>{scoreElm.scores.eMidTerm2}</td>
                        <td>{scoreElm.scores.eFinalExam}</td>
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
                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader><h4>All Grades</h4></CardHeader>
                            <CardBody>
                                <Row>
                                    <Col>
                                        <Card body>
                                            <Table className="kScoreTable">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>15 mins <br /> {scoresWeight.e15min1 * 100} %</th>
                                                        <th>15 mins <br /> {scoresWeight.e15min2 * 100} %</th>
                                                        <th>Mid Term <br /> {scoresWeight.eMidTerm1 * 100} %</th>
                                                        <th>Mid Term <br /> {scoresWeight.eMidTerm2 * 100} %</th>
                                                        <th>Final Exam <br /> {scoresWeight.eFinalExam * 100} %</th>
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
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }

    // if (chartMode) return <ScoreChart classId={classId} />

    return (
        <>
            <Row>
                <Col md="6" sm="12" xs="12">
                </Col>
                <Col md="6" sm="12" xs="12" className="text-right">
                    <Button color="primary" onClick={() => { setChartMode((prev) => !prev) }}>Chart</Button>
                    <Button outline color="success" className="kMargin-LeftRight-5 kBtn-WSize-75" onClick={toggleIsEdit}>
                        {isEdit ? "Save" : "Edit"}
                    </Button>

                </Col>
            </Row>

            {
                chartMode ? <GradeCharts classId={classId} /> : renderScoreView()
            }
        </>
    )
}

export default GradesTab