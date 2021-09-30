import React, { useState,useEffect } from 'react';
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <Container fluid style={{marginBottom: "50px"}}>
    <Menu fixed='top' inverted>
        <Link to='/'>
        <Menu.Item name='home'>
          Home
        </Menu.Item>
        </Link>

        <Link to='/product_list'>
        <Menu.Item name='products'>
          Products
        </Menu.Item></Link>

        <Menu.Menu position='right'>
         <Link to='/shopping_cart'>
          <Menu.Item name='shopping_cart'>
            Shopping Cart
          </Menu.Item>
          </Link>

          <Link to='/login'>
          <Menu.Item name='login'>
            Login
          </Menu.Item>
          </Link>
        </Menu.Menu>
    </Menu>
    </Container>
    )
}