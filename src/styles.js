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
  /* background-image: url("https://images.hdqwalls.com/wallpapers/milky-way-galaxy-universe-space-4k-5q.jpg"); */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1027%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M819.597%2c382.789C843.997%2c383.974%2c865.63%2c367.779%2c877.509%2c346.432C889.057%2c325.68%2c888.29%2c300.754%2c876.818%2c279.96C864.916%2c258.386%2c844.22%2c242.359%2c819.597%2c241.462C793.421%2c240.508%2c766.197%2c251.99%2c754.666%2c275.508C744.025%2c297.211%2c758.157%2c320.565%2c770.673%2c341.243C782.547%2c360.861%2c796.693%2c381.677%2c819.597%2c382.789' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M543.461%2c429.352C586.429%2c431.311%2c630.932%2c419.212%2c654.735%2c383.385C681.037%2c343.796%2c685.913%2c291.779%2c662.25%2c250.558C638.497%2c209.181%2c591.052%2c186.184%2c543.461%2c189.547C500.699%2c192.569%2c470.206%2c227.403%2c450.578%2c265.515C432.832%2c299.972%2c429.36%2c340.264%2c448.475%2c373.981C467.847%2c408.152%2c504.222%2c427.563%2c543.461%2c429.352' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M155.737%2c413.198C175.93%2c412.161%2c194.802%2c401.966%2c204.283%2c384.106C213.243%2c367.227%2c208.343%2c347.755%2c199.458%2c330.836C189.707%2c312.27%2c176.706%2c291.943%2c155.737%2c291.669C134.493%2c291.391%2c120.823%2c311.39%2c109.991%2c329.667C98.851%2c348.464%2c87.214%2c370.417%2c97.709%2c389.581C108.46%2c409.213%2c133.383%2c414.346%2c155.737%2c413.198' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M434.55 173.25 a150.62 150.62 0 1 0 301.24 0 a150.62 150.62 0 1 0 -301.24 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1015.345%2c104.002C1039.15%2c105.92%2c1061.678%2c91.925%2c1073.611%2c71.238C1085.535%2c50.565%2c1085.739%2c24.477%2c1072.77%2c4.443C1060.744%2c-14.133%2c1037.474%2c-18.708%2c1015.345%2c-18.768C993.079%2c-18.828%2c967.93%2c-15.476%2c957.38%2c4.132C947.138%2c23.167%2c960.5%2c44.304%2c971.35%2c62.998C982.135%2c81.581%2c993.928%2c102.276%2c1015.345%2c104.002' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M726.279%2c385.851C784.032%2c389.943%2c850.316%2c381.862%2c878.971%2c331.552C907.46%2c281.532%2c880.061%2c220.841%2c847.17%2c173.599C819.495%2c133.848%2c774.7%2c113.449%2c726.279%2c112.236C675.249%2c110.958%2c620.569%2c123.427%2c594.421%2c167.267C567.783%2c211.928%2c580.104%2c267.753%2c606.965%2c312.281C632.832%2c355.162%2c676.325%2c382.312%2c726.279%2c385.851' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M225.47 542.96 a120.69 120.69 0 1 0 241.38 0 a120.69 120.69 0 1 0 -241.38 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M647.65 235.02 a144.34 144.34 0 1 0 288.68 0 a144.34 144.34 0 1 0 -288.68 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1103.188%2c434.356C1120.741%2c434.989%2c1139.204%2c428.96%2c1147.767%2c413.625C1156.172%2c398.572%2c1150.006%2c380.763%2c1141.477%2c365.781C1132.829%2c350.589%2c1120.662%2c335.808%2c1103.188%2c335.316C1085.057%2c334.805%2c1069.37%2c347.437%2c1060.97%2c363.513C1053.166%2c378.45%2c1055.227%2c396.119%2c1063.855%2c410.596C1072.259%2c424.699%2c1086.782%2c433.764%2c1103.188%2c434.356' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M775.97 383.92 a94.57 94.57 0 1 0 189.14 0 a94.57 94.57 0 1 0 -189.14 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1181.44 35.39 a124.41 124.41 0 1 0 248.82 0 a124.41 124.41 0 1 0 -248.82 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M488.575%2c152.621C523.238%2c153.371%2c560.351%2c146.171%2c578.764%2c116.793C598.115%2c85.919%2c593.869%2c45.993%2c574.908%2c14.878C556.714%2c-14.978%2c523.513%2c-32.538%2c488.575%2c-31.204C455.756%2c-29.951%2c429.432%2c-7.348%2c412.951%2c21.061C396.4%2c49.592%2c388.462%2c84.437%2c404.9%2c113.033C421.381%2c141.705%2c455.512%2c151.906%2c488.575%2c152.621' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1.145%2c588.484C21.766%2c587.277%2c39.253%2c575.006%2c49.796%2c557.243C60.596%2c539.048%2c64.224%2c517.127%2c54.72%2c498.223C44.203%2c477.303%2c24.56%2c460.573%2c1.145%2c460.471C-22.414%2c460.368%2c-41.453%2c477.357%2c-53.247%2c497.752C-65.057%2c518.175%2c-70.609%2c543.344%2c-58.479%2c563.579C-46.61%2c583.379%2c-21.901%2c589.832%2c1.145%2c588.484' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M430.66 450.03 a144.31 144.31 0 1 0 288.62 0 a144.31 144.31 0 1 0 -288.62 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M495.705%2c336.291C533.903%2c335.506%2c565.351%2c308.715%2c583.346%2c275.012C600.252%2c243.35%2c600.64%2c205.265%2c582.064%2c174.553C564.106%2c144.862%2c530.393%2c129.221%2c495.705%2c130.109C462.556%2c130.958%2c434.417%2c150.77%2c416.679%2c178.787C397.359%2c209.301%2c385.401%2c246.465%2c401.597%2c278.746C419.27%2c313.97%2c456.304%2c337.1%2c495.705%2c336.291' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1027'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
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
