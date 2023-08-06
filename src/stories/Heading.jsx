import React from 'react'
import PropTypes from 'prop-types';
import './heading.css'

export const Heading = ({size, heading, ...props }) => {
    return (
        <p
            className={['storybook-heading', `storybook-heading--${size}`].join(' ')}
            {...props}
        >
            {heading}
        </p>
    )
}

Heading.propTypes = {
    /**
    * Adjust your font size here
    */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
    * head Text
    */
    heading: PropTypes.string.isRequired,
};

Heading.defaultProps = {
    size: 'medium',
};
