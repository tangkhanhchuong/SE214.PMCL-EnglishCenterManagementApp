import React from 'react'
import PropTypes from 'utils/propTypes'

import { Media, Button } from 'reactstrap'

const statusMap = {
  open: 'info',
  closed: 'muted',
  pending: 'success',
}

const NoticeItem = ({ title, content, posted_at, ...restProps }) => {

  return (
    <div {...restProps}>
      <Media className="m-2">
        <Media body>
          <p className="text-muted m-0">
            <small><i>{posted_at}</i></small>
          </p>
          <Media heading tag="h6" className="m-0">
            <b>{title}</b>
          </Media>
        </Media>
      </Media>
      <Media>
        <p className="text-muted">{content}</p>
      </Media>
      <hr />
    </div>
  )
}


export default NoticeItem
