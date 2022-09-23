import React, {useState} from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
} from "./NavbarStyles";
import { HiHome } from "react-icons/hi";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import ModalCart from "./ModalCart/ModalCart";
import ModalUser from "./ModalUser/ModalUser";
import logo from "../Assets/Img/logo.png"

const Navbar = () => {

  const [openModal, setOpenModal] = useState()
  const [openUser, setOpenUser] = useState()
  return (
    <NavbarContainerStyled>
      <AnimatePresence>
       {openModal && <ModalCart closeModal={setOpenModal} />}
       {openUser && <ModalUser closeModal={setOpenUser}/>} 
      </AnimatePresence>
      
      <div>
        <Link to="/">
          <img
            src={logo} alt= "logo"
          />
        </Link>
      </div>
      <LinksContainerStyled>
        <Link to="/">
          <LinkContainerStyled home>
            <HiHome />
          </LinkContainerStyled>
          Home
        </Link>
        <CartNavStyled>
          <LinkContainerStyled
          onClick={
            () => {
              setOpenModal
              (true)
            }
          }
          >
            <FaShoppingCart />
            <span>1</span>
          </LinkContainerStyled>
        </CartNavStyled>
        <UserNavStyled
        closeModal={setOpenModal}
        >
          <LinkContainerStyled
          onClick={() => {
            setOpenUser(!openUser)
          }}
          >
            <span>Hola! Eduardo</span>
            <FaUserAlt />
          </LinkContainerStyled>
        </UserNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
