import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #dbd0d0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
`;
export const Navbar = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;
export const NavLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  :hover,
  :focus {
    text-decoration: none;
  }
`;
export const NavbarButton = styled(NavLink)`
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  cursor:pointer;
  :hover {
    color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  }
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
`;
export const Input = styled.input`
  margin: 1rem 1rem;
  font-size: 16px;
  line-height: 1.5;
  border: none;
  background: #ffffff;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='%23838D99' d='M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z'></path></svg>");
  background-repeat: no-repeat;
  background-position: 10px 10px;
  background-size: 20px 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  width: 300px;
  padding: 0.5em 1em 0.5em 2.5em;
`;
