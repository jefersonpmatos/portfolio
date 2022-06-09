import styled from "styled-components";

export const Wrapper = styled.body`
  margin: 0;
  padding: 0;
  color: #242424;
  font-family: sans-serif;
  word-wrap: break-word;
  overflow-wrap: break-word;
  width: 100%;
  margin: 0 auto;
`;

export const Main = styled.main`
  display: block;
  background-color: #fff;
`;

export const Header = styled.header`
  display: flex;
  justify-content: right;
  height: 50px;
  background-color: #000;
`;

export const Navbar = styled.nav`
  display: flex;
  margin-right: 50px;

  ul {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  li {
    color: #fff;
    text-transform: capitalize;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const HomeParallax = styled.section`
  background-image: url("https://images.hdqwalls.com/wallpapers/milky-way-galaxy-universe-space-4k-5q.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh !important;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -web-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  h1,
  h2 {
    text-align: center;
    z-index: 50;
    text-transform: uppercase;
  }
`;
export const SkillsParallax = styled.section`
  background-image: url("https://images.hdqwalls.com/download/galaxy-fire-5k-sg-1920x1080.jpg");
  background-size: 400% 400%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh !important;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -web-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  h1,
  h2 {
    text-align: center;
    z-index: 50;
    text-transform: uppercase;
  }
`;

export const ContactParallax = styled.section`
  background-image: url("https://images.hdqwalls.com/wallpapers/sky-bridge-nebula-fv.jpg");
  background-size: 400% 400%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh !important;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -web-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  h1,
  h2 {
    text-align: center;
    z-index: 50;
    text-transform: uppercase;
  }
`;

export const PageProfile = styled.section`
  height: 100vh;
  padding: 40px 0;
  background: transparent;
`;

export const PageProjects = styled.section`
  height: 120vh;
  padding: 40px 0;
  background: transparent;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  min-height: 50px;
  color: #fff;
`;
