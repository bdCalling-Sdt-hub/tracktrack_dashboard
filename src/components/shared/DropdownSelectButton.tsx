import { Dropdown, Menu } from "antd"
import { SelectButtonProps } from "../../Types/PageProps"
import { IoIosArrowDown } from "react-icons/io";


const DropdownSelectButton = ({ handler, options, text, width }: SelectButtonProps) => {
    const menu = (
        <Menu>
            {options.map((option) => (
                <Menu.Item key={option.key} onClick={() => handler(option?.value)}>
                    {option.label}
                </Menu.Item>
            ))}
        </Menu>
    );
    return (
        <div className="center-center">
            <p style={{
                width: width || '100px',
                justifyContent: 'center',
                padding: '4px',
            }} className="sidebar-button-black whitespace-nowrap hover:bg-[var(--black-700)] hover:text-[var(--white-600)]">{text || 'insert your text'}</p>
            <Dropdown overlay={menu} placement="bottom">
                <button style={{
                    width: '30px',
                    padding: '3px',
                    justifyContent: 'center'
                }} className="sidebar-button-black"><IoIosArrowDown size={24} /></button>
            </Dropdown>
        </div>
    )
}

export default DropdownSelectButton
