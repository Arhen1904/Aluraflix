import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-header);
  color: var(--color-text);
  padding: 20px;
  text-align: center;
  bottom: 0;
  width: 100%;
`;

const LogoFooter = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <LogoFooter>Aluraflix</LogoFooter>
    </StyledFooter>
  );
};

export default Footer;

