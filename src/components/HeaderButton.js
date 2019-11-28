import Styled from 'styled-components'
import PropTypes from 'prop-types'

const HeaderButton = Styled.button`
    background-color: rgb(23, 64, 139);
    height: 60px;
    width: 140px; @media (max-width: 600px) {
        width: 100%;
    }
    color: white;
    border: none;
    font-size: 1rem;
    font-weight: 400;
    grid-area: ${props => props.area};

    &:hover {
        background-color: rgb(12, 37, 83);
        transition: 0.7;
        border: ${props => props.border};
    }
`

HeaderButton.defaultProps = {
  border: '4px outset rgb(12, 37, 83)'
}

HeaderButton.propTypes = {
  area: PropTypes.string.isRequired
}

export default HeaderButton
