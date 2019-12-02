import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed'
    }
];

const Footer = ({ amount, filters, changeFilter }) => (
    <div className="footer">
        <span className="amount">{`${amount} Tasks left`}</span>
        <div className="btn-group">
            {FILTERS_BTN.map(({ text, id }) => (
                <button
                    onClick={() => changeFilter(id)}
                    key={id}
                    className={id === filters ? "filter-btn active" : 'filter-btn'}
                >{text}</button>
            ))}
        </div>
    </div>
);

Footer.propTypes = {
    amount: PropTypes.number,
    filters: PropTypes.string,
    changeFilter: PropTypes.func

};

Footer.defaultProps = {
    amount: 0,
    filters: '',
    changeFilter: () => {}
};

export default Footer;