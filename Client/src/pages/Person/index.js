import React from 'react';

import { Row, Col } from 'reactstrap';
import Page from 'components/Page';
import { IconWidget } from 'components/Widget';
import { iconPersonData } from 'demos/classData.js';
import { NavLink } from 'react-router-dom';

const WidgetPage = () => {
  return (
    <Page
      className="WidgetPage"
    >
      <h2>Person Management</h2>
      <Row>
        {iconPersonData.map(
          ({ bgColor, icon, title, subtitle, to, ...restProps }, index) => (
            <Col key={index} lg={4} md={6} sm={6} xs={12} className="mb-3">
              <NavLink to={`/Person_Management/${to}`} style={{ textDecoration: 'none' }}>
                <IconWidget
                  bgColor={bgColor}
                  icon={icon}
                  title={title}
                  subtitle={subtitle}
                  {...restProps}
                />
              </NavLink>

            </Col>
          )
        )}
      </Row>


    </Page>
  );
};

export default WidgetPage;
