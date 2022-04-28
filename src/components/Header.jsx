import React, { useState } from 'react'
import PropTypes from 'prop-types'
import i18n from 'i18next';

const Header = ({logo='FEEDBACK UI'}) => {
  const [code, setCode] = useState('uz');
  const handleChange = (e) => setCode(e.target.value)
  i18n.changeLanguage(code)
  return (
    <header>
        <div className="container d-flex justify-content-around">
            <h2>
                {logo}
            </h2>

            <select className='form-select w-50' value={code} onChange={handleChange}>
              {['uz', 'en'].map((item) => (
                <option value={item} key={item}>{item}</option>
              ))}
            </select>
        </div>
    </header>
  )
}

Header.propTypes = {
    logo: PropTypes.string
}

export default Header