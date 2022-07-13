import { style } from "@mui/system";
import React, { useEffect, useState, useContext } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import "./modal.css";
import ICON_CLOSE from "./../../assets/shop-1/close-circle-sharp.png";
import ICON_FF from "./../../assets/shop/icon-token-fifa-mini.png";

import DIAMOND from "./../../assets/shop-1/diamond.png";
import GOLD from "./../../assets/shop-1/gold.png";
import PLATIUM from "./../../assets/shop-1/platium.png";
import TOP10 from "./../../assets/shop-1/10.png";
import TOP20 from "./../../assets/shop-1/20.png";
import TOP30 from "./../../assets/shop-1/30.png";
import TOP50 from "./../../assets/shop-1/50.png";
import TOP100 from "./../../assets/shop-1/100.png";
import TOP200 from "./../../assets/shop-1/200.png";
import ALL from "./../../assets/shop-1/all.png";

import DataMeta from "./../../context/Provider";

import { CHAIN_ID } from "./../../const/const";

import { buyCard } from "./../../web3/shop.mjs";

import { isEmpty } from "lodash";

const MAP_DATA = {
  top10: { key: 10, name: "TOP 10", img: TOP10 },
  top20: { key: 20, name: "TOP 20", img: TOP20 },
  top30: { key: 30, name: "TOP 30", img: TOP30 },
  top50: { key: 50, name: "TOP 50", img: TOP50 },
  top100: { key: 100, name: "TOP 100", img: TOP100 },
  top200: { key: 200, name: "TOP 200", img: TOP200 },
  all: { key: "all", name: "ALL", img: ALL },
  diamond: { key: "diamond", name: "DIAMOND", img: DIAMOND },
  gold: { key: "gold", name: "GOLD", img: GOLD },
  platium: { key: "platium", name: "PLATIUM", img: PLATIUM },
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(11, 31, 79, 1)",
  },
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  @media (max-width: 768px) {
    width: 70vw;
    height: 40vh;
  }
`;

const Title = styled.div`
  font: normal normal bold 25px Poppins;
  color: #86c540;
  text-align: center;
  @media (max-width: 768px) {
    font: normal normal bold 16px Poppins;
  }
`;

const BtnClose = styled.img`
  width: 5%;
  height: 60%;
  &: hover {
    cursor: pointer;
  }
`;

const BtnAddClose = styled.button`
  font: normal normal bold 20px Poppins;
  padding: 3px 10px;
  color: white;
  border-style: none;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.2);
  @media (max-width: 768px) {
    font: normal normal bold 18px Poppins;
    padding: 2px 7px;
  }
`;

const ResponsiveImage = styled.img`
  width: 35%;
  height: auto;
  margin: 0px auto;
`;

const Content = styled.div`
  font: normal normal bold 14px Poppins;
  color: #86c540;
  white-space: nowrap;
  @media (max-width: 768px) {
    font: normal normal bold 12px Poppins;
  }
`;

const ResponsiveIcon = styled.img`
  width: 5%;
  height: auto;
  @media (max-width: 768px) {
    width: 10%;
  }
`;

const BtnBuy = styled.div`
  background-color: rgba(134, 197, 64, 1);
  padding: 10px 15px;
  border-radius: 4px;
  color: white;
  width: 100px;
  font: normal normal bold 12px Poppins;
  margin: 0px auto;
  text-align: center;
  @media (max-width: 768px) {
    width: 80px;
    font: normal normal bold 10px Poppins;
  }
  &: hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  text-align: center;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

function ModalBuy(props) {
  const _meta = useContext(DataMeta);
  const [amount, setAmount] = useState(1);
  const [isBuying, setIsBuying] = useState(false);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(props.isOpen);
  const [dataBuy, setDataBuy] = React.useState(props.dataBuy);

  console.log("tess meta connect->", _meta);
  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  useEffect(() => {
    setDataBuy(props.dataBuy);
    console.log("tesss databuy->", props.dataBuy);
  }, [props.dataBuy]);

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    props.onClose();
  }

  const handleMin = (e) => {
    if (amount <= 1) return;
    setAmount(amount - 1);
  };

  const handleAdd = (e) => {
    setAmount(amount + 1);
  };

  const handleChange = (e) => {
    if (Number(e.target.value) >= 0) setAmount(Number(e.target.value));
    else return;
  };

  const handleBuy = async () => {
    console.log(
      "tess param->",
      _meta.web3,
      _meta.address,
      MAP_DATA[dataBuy.key]["key"],
      amount
    );
    try {
      setIsBuying(true);
      const txi = await buyCard(
        _meta.web3,
        _meta.address,
        MAP_DATA[dataBuy.key]["key"],
        amount
      );
      console.log("tess buy", txi);
      setIsBuying(false);
    } catch (error) {
      setIsBuying(false);
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Wrapper>
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-between px-0">
                {/* <Title>TOP 10</Title> */}
                <Title>
                  {!isEmpty(dataBuy) ? MAP_DATA[dataBuy.key]["name"] : ""}
                </Title>
                <BtnClose
                  className="my-auto"
                  src={ICON_CLOSE}
                  onClick={closeModal}
                />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col">
                <ResponsiveImage
                  src={!isEmpty(dataBuy) ? MAP_DATA[dataBuy.key]["img"] : ""}
                  alt="img-box"
                />
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <ResponsiveIcon src={ICON_FF} className="me-1" />
                <Content>20</Content>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col d-flex justify-content-center">
                <BtnAddClose onClick={handleMin}>-</BtnAddClose>
                <Input
                  onChange={handleChange}
                  value={amount}
                  type="number"
                  className="mx-2"
                />
                <BtnAddClose onClick={handleAdd}>+</BtnAddClose>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                {isBuying ? (
                  <BtnBuy>
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span> Minting...</span>
                    </>
                  </BtnBuy>
                ) : _meta.isConnected && _meta.chainId === CHAIN_ID ? (
                  <BtnBuy onClick={(e) => handleBuy()}>BUY NOW</BtnBuy>
                ) : (
                  <BtnBuy style={{ opacity: 0.7 }}>BUY NOW</BtnBuy>
                )}
              </div>
            </div>
          </div>
        </Wrapper>
      </Modal>
    </div>
  );
}

export { ModalBuy };
