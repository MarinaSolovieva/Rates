import React from "react";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "./Dropdown.css"



function createDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${year}-${month}-${day}`;
}

const endDate = new Date();
const startDate = new Date();
startDate.setDate(endDate.getDate() - 6);

const DropdownMenu = ({fetchRates}) => {
    return (
        <div className="dropdown">
            <Dropdown overlay={(
                <Menu  className="dropdown-content" >
                    <Menu.Item  onClick={ () => fetchRates(145, createDate(startDate), createDate(endDate) )} key="1">USD</Menu.Item>
                    <Menu.Item  onClick={ () => fetchRates(292, createDate(startDate), createDate(endDate) )}  key="2">EURO</Menu.Item>
                    <Menu.Item  onClick={ () => fetchRates(298, createDate(startDate), createDate(endDate) )} key="3">RUB</Menu.Item>
                </Menu>
            )}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Выберите валюту <DownOutlined />
                </a>
            </Dropdown>
        </div>
    )
};


export default DropdownMenu;

