import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

export default function Link({icon, count}) {
  return(
    <a href=''>
      <Icon name={icon}/>
      {count ? `${count} subscribers` : null}
    </a>
  )
}

Link.propTypes = {
  icon: PropTypes.string,
  count: PropTypes.number
};

Link.defaultProps = {
  icon: ''
};