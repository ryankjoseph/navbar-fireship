
import Navbar from './components/Navbar/Navbar';
import NavItem from './components/Navbar/NavItem/NavItem';
import { ReactComponent as LogoIcon } from "./icons/logo.svg"
import { BrowserRouter as Router } from 'react-router-dom';
import DropdownMenu from './components/Navbar/DropdownMenu/DropdownMenu';
import DropdownItem from './components/Navbar/DropdownItem/DropdownItem';
function App() {
  return (
    <Router>
      <Navbar>
        {/* <NavItem icon={<LogoIcon />}>
          <DropdownMenu >
            <DropdownItem leftIcon={<LogoIcon />} description="hi" />
          </DropdownMenu>
        </NavItem>
        <NavItem icon="🚢" />
        <NavItem icon="🚢" /> */}
      </Navbar>
    </Router>
  );
}

export default App;
