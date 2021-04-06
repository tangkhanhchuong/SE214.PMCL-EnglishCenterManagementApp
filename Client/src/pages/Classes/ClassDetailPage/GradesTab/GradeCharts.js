import React from 'react'

import { getColor } from 'utils/colors'
import { randomNum } from 'utils/demos'

import { Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const SCORE_RANGE = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]

const scoreData = [
    { idStudent: 18520168, firstname: 'John', lastname: 'Evan', scores: { e15min1: 8, e15min2: 5.75, eMidTerm1: 7, eMidTerm2: 3, eFinalExam: 9 } },
    { idStudent: 18520010, firstname: 'Kayn', lastname: 'Smith', scores: { e15min1: 6, e15min2: 8, eMidTerm1: 5, eMidTerm2: 6, eFinalExam: 6 } },
    { idStudent: 18520123, firstname: 'Athena', lastname: 'Rii', scores: { e15min1: 9, e15min2: 9, eMidTerm1: 5, eMidTerm2: 4, eFinalExam: 8 } },
    { idStudent: 17520812, firstname: 'Chuong', lastname: 'Tang', scores: { e15min1: 7, e15min2: 7.25, eMidTerm1: 8.75, eMidTerm2: 7.75, eFinalExam: 7.5 } },
    { idStudent: 18521234, firstname: 'Thinh', lastname: 'Doan', scores: { e15min1: 4, e15min2: 8.5, eMidTerm1: 6, eMidTerm2: 8, eFinalExam: 4.5 } },
    { idStudent: 18520383, firstname: 'Toan', lastname: 'Tan', scores: { e15min1: 5, e15min2: 6, eMidTerm1: 10, eMidTerm2: 9.5, eFinalExam: 6 } },
    { idStudent: 18520168, firstname: 'John', lastname: 'Evan', scores: { e15min1: 8, e15min2: 5.75, eMidTerm1: 7, eMidTerm2: 3, eFinalExam: 9 } },
    { idStudent: 18520010, firstname: 'Kayn', lastname: 'Smith', scores: { e15min1: 6, e15min2: 8, eMidTerm1: 5, eMidTerm2: 6, eFinalExam: 6 } },
    { idStudent: 18520123, firstname: 'Athena', lastname: 'Rii', scores: { e15min1: 9, e15min2: 9, eMidTerm1: 5, eMidTerm2: 4, eFinalExam: 8 } },
    { idStudent: 17520812, firstname: 'Chuong', lastname: 'Tang', scores: { e15min1: 7, e15min2: 7.25, eMidTerm1: 8.75, eMidTerm2: 7.75, eFinalExam: 7.5 } },
    { idStudent: 18521234, firstname: 'Thinh', lastname: 'Doan', scores: { e15min1: 4, e15min2: 8.5, eMidTerm1: 6, eMidTerm2: 8, eFinalExam: 4.5 } },
    { idStudent: 18520383, firstname: 'Toan', lastname: 'Tan', scores: { e15min1: 5, e15min2: 6, eMidTerm1: 10, eMidTerm2: 9.5, eFinalExam: 6 } },
]

let calcIndexOfScore = (num) => Math.floor(num / 0.5) + 1

const GetDataSet = (arrayScoreData) => {
    let dataSets = {}
    let labelNames = { e15min1: "15mins 1", e15min2: "15mins 2", eMidTerm1: "Mid Term 1", eMidTerm2: "Mid Term 2", eFinalExam: "Final Exam" }
    let colors = { e15min1: "primary", e15min2: "secondary", eMidTerm1: "success", eMidTerm2: "info", eFinalExam: "danger" }

    // Init frame of dataSet

    for (const property in labelNames) {
        dataSets[property] = {
            label: labelNames[property],
            backgroundColor: getColor(colors[property]),
            borderColor: getColor(colors[property]),
            borderWidth: 1,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            fill: false
        }
    }


    for (const dataElm of arrayScoreData) {
        for (const property in dataElm.scores) {
            dataSets[property].data[calcIndexOfScore(dataElm.scores[property])] += 1
        }
    }
    return dataSets
}

const genLineData = (moreData = {}, moreData2 = {}) => {

    let data = GetDataSet(scoreData) // Obj contains objs

    return {
        labels: SCORE_RANGE,
        datasets: Object.keys(data).map((k) => data[k])

    }
}

const genPieData = () => {
    return {
        datasets: [
            {
                data: [randomNum(), randomNum(), randomNum(), randomNum(), randomNum()],
                backgroundColor: [
                    getColor('primary'),
                    getColor('secondary'),
                    getColor('success'),
                    getColor('info'),
                    getColor('danger'),
                ],
                label: 'Dataset 1',
            },
        ],
        labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
    }
}

const GradeCharts = ({ classId }) => {

    return (
        <>
            <h2>{`${classId} Score Table`}</h2>
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Bar</CardHeader>
                        <CardBody>
                            <Bar data={genLineData()} />
                        </CardBody>
                    </Card>
                </Col>

                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Line</CardHeader>
                        <CardBody>
                            <Line data={genLineData({ fill: false }, { fill: false })} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Stacked Line</CardHeader>
                        <CardBody>
                            <Line
                                data={genLineData()}
                                options={{
                                    scales: {
                                        xAxes: [
                                            {
                                                scaleLabel: {
                                                    display: true,
                                                    labelString: 'Month',
                                                },
                                            },
                                        ],
                                        yAxes: [
                                            {
                                                stacked: true,
                                                scaleLabel: {
                                                    display: true,
                                                    labelString: 'Value',
                                                },
                                            },
                                        ],
                                    },
                                }}
                            />
                        </CardBody>
                    </Card>
                </Col>

                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Combo Bar / Line</CardHeader>
                        <CardBody>
                            <Bar data={genLineData({ type: 'line', fill: false })} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Pie</CardHeader>
                        <CardBody>
                            <Pie data={genPieData()} />
                        </CardBody>
                    </Card>
                </Col>

                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Doughnut</CardHeader>
                        <CardBody>
                            <Doughnut data={genPieData()} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Polar</CardHeader>
                        <CardBody>
                            <Polar data={genPieData()} />
                        </CardBody>
                    </Card>
                </Col>

                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Radar</CardHeader>
                        <CardBody>
                            <Radar data={genLineData()} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default GradeCharts
