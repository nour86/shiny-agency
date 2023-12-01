import { Link } from 'react-router-dom'
import styled from 'styled-components'
import darkLogo from '../../assets/dark-logo.png'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledNav = styled.nav`
  text-align: end;
  padding: 30px;
`
const StyledLogo = styled.img`
  align-self: start;
`

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: #5843E4;`}
`
function Header() {
  return (
    <StyledHeader>
      <StyledLogo src={darkLogo} />
      <StyledNav>
        <StyledLink to="/" $isFullLink>
          Accueil
        </StyledLink>
        <StyledLink to="/survey/1">Questionnaire</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
