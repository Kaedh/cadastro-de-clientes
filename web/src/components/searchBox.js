import React from 'react';
import PropTypes from 'prop-types';

import '../styles/SearchBox.css';

function SearchBox({ value, onChange }) {
  return (
    <input className="search-box" type="text" placeholder="Pesquisar" value={value} onChange={onChange} />
  );
}

SearchBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

SearchBox.defaultProps = {
  value: '',
  onChange: () => {},
};

export default SearchBox;
