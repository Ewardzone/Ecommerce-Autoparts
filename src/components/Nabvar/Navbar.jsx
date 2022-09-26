import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import ModalCart from "./ModalCart/ModalCart";
import ModalUser from "./ModalUser/ModalUser";
import logo from "../Assets/Img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../Redux/Cart/Cart-actions";
import {
  CartNavStyled,
  LinkContainerStyled,
  ModalOverlayStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
} from "./NavbarStyles";

const Navbar = () => {
  const [openUser, setOpenUser] = useState();

  const hiddenCart = useSelector((state) => state.cart.hidden);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!hiddenCart) {
      dispatch(cartActions.toggleHiddenCart());
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <NavbarContainerStyled>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() =>
            !hiddenCart && dispatch(cartActions.toggleHiddenCart())
          }
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>{!hiddenCart && <ModalCart />}</AnimatePresence>

      <AnimatePresence>
        {openUser && <ModalUser closeModal={setOpenUser} />}
      </AnimatePresence>

      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
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
          onClick={() => dispatch(cartActions.toggleHiddenCart())}
          >
            <FaShoppingCart />
            <span>1</span>
          </LinkContainerStyled>
        </CartNavStyled>
        <UserNavStyled>
          <LinkContainerStyled
            onClick={() => {
              setOpenUser(!openUser);
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
