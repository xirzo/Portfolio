import ThemeSwitcher from '../../shared/themeSwitcher';
import './navbar.css'
import Button from '../../shared/button/button';

export interface NavbarItem {
    name: string;
    onClick: () => void;
}

export interface NavbarProps {
    items?: NavbarItem[];
}

function Navbar({ items }: NavbarProps) {
    return (
        <nav className='navbar'>
            <div className="navbar-left">
                <ThemeSwitcher />
            </div>

            <div className="navbar-center">
                {items !== undefined
                    ? (items.map(x => (
                        <Button
                            key={x.name}
                            onClick={x.onClick}
                        >
                            {x.name}
                        </Button>
                    )))
                    : <></>
                }
            </div>

            <div className="navbar-right">
            </div>
        </nav>
    )
}

export default Navbar;
