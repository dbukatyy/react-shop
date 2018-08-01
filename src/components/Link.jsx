import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

export default function Link({icon, count, handleClick}) {
  return(
    <a href=''>
      <Icon name={icon} onClick={handleClick}/>
      {count ? `${count} subscribers` : null}
    </a>
  )
}

Link.propTypes = {
  icon: PropTypes.string,
  count: PropTypes.number,
  handleClick: PropTypes.func
};

Link.defaultProps = {
  icon: ''
};