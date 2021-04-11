import React from 'react';
import PropTypes from 'utils/propTypes';

import bn from 'utils/bemnames';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import Typography from './Typography';

const bem = bn.create('page');

const Page = ({
  title,
  breadcrumbs,
  tag: Tag,
  className,
  children,
  ...restProps
}) => {
  const classes = bem.b('px-3', className);

  return (
    <div className="m-3">
      <div className="mr-3 ml-3">
        <div className="mr-3 ml-3">
          <Tag className={classes} {...restProps}>
            <div className="mb-3">
              {/* <div className={bem.e('header')}> */}
              <div className="d-flex flex-row justify-content-between">
                <div>
                  {title && typeof title === 'string' ? (
                    <Typography type="h1" className={bem.e('title')}>
                      <strong>
                        {title}
                      </strong>
                    </Typography>
                  ) : (
                    title
                  )}

                </div>
                <div>
                  {breadcrumbs && (
                    <Breadcrumb className={bem.e('breadcrumb')}>
                      <BreadcrumbItem>Home</BreadcrumbItem>
                      {breadcrumbs.length &&
                        breadcrumbs.map(({ name, active = true }, index) => (
                          <BreadcrumbItem key={index} active={active}>
                            {name}
                          </BreadcrumbItem>
                        ))}
                    </Breadcrumb>
                  )}
                </div>
              </div>
            </div>
            <hr />
            {/* </div> */}
            {children}
          </Tag>
        </div>
      </div>
    </div >
  );
};

Page.propTypes = {
  tag: PropTypes.component,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  children: PropTypes.node,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
};

Page.defaultProps = {
  tag: 'div',
  title: '',
};

export default Page;
