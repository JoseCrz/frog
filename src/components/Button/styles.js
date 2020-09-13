import styled from 'styled-components'

export const StyledButton = styled.button`
  background: ${({ isPrimary }) => isPrimary ? 'var(--text-color)' : 'transparent'};
  color: ${({ isPrimary }) => isPrimary ? 'white' : 'var(--text-color)'};
  border: 2px solid var(--text-color);
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 900;
  width: 100%;
  height: 50px;
  margin: 0 0 16px 0;
`
