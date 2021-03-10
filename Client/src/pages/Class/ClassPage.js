import React from 'react';

import { Row, Col } from 'reactstrap';
import Page from 'components/Page';
import { IconWidget } from 'components/Widget';
import {

  MdSchool,

} from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import useAxios from '../../hooks/useAxios';
import courseApi from '../../api/apis/courseApi';

const WidgetPage = () => {

  const groupByKey = (list, key) => list.reduce((hash, obj) => ({ ...hash, [obj[key]]: (hash[obj[key]] || []).concat(obj) }), {});

  const [courseList] = useAxios([], courseApi.getAll);

  const groupedClassesListByCourseId = Object.values(groupByKey(courseList, "courseId"));

  return (
    <Page className="WidgetPage">
      {groupedClassesListByCourseId.map((course, index) =>
      (<div key={`groupCourse_${index}`}>
        <h2>{course[0].courseName}</h2>
        <Row>
          {course.map(
            ({ classId, description }, index) => (
              <Col key={`course_${index}`} lg={4} md={6} sm={6} xs={12} className="mb-3">
                <NavLink to={`/Class_Detail/${classId}`} style={{ textDecoration: 'none' }}>
                  <IconWidget
                    bgColor='secondary'
                    icon={MdSchool}
                    title={classId}
                    subtitle={description}

                  />
                </NavLink>

              </Col>
            )
          )}

        </Row>
      </div>)
      )}

    </Page>
  );
};

export default WidgetPage;
