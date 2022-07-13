import React, { useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import ICON_FF from "./../../assets/shop/icon-token-fifa-mini.png";
import { buyCard } from "./../../web3/shop.mjs";
import meta from "./../../context/Provider";
import { CHAIN_ID } from "./../../const/const";
import { HeaderShop } from "./HeaderShop";
import I3 from "./../../assets/market/Real/1x/3.png";
import I4 from "./../../assets/market/Real/1x/4.png";
import "./body.css";
import Axios from "axios";
import { ModalBuy } from "./modal";

const Wrapper = styled.div``;


function Rois(data) {
    const [roi, setRoi] = useState(0);
    const urlInfoNft = "http://staging.maketplace.fifafootball.io/v1/info-nft/" + data.data;
    async function getItem() {
        try {
            await Axios.get(urlInfoNft, {
                headers: {
                },
            }).then((e) => {
                setRoi(e.data.nft.roi);
            }).catch((err) => console.log("Err: ", err));
        } catch (e) {
            console.log(e);
        }
    }
    getItem();
    return (<span>{roi}</span>);
}
const BodyShop = () => {


    const baseUrl = "http://staging.maketplace.fifafootball.io/v1/marketplace/auction?limit=10";
    const _meta = useContext(meta);
    const [response, setResponse] = useState([]);
    const [items, setItems] = useState([]);
    const [keyWord, setKeyWord] = useState("");
    const [soft, setSoft] = useState("");
    const [url, setUrl] = useState(baseUrl);
    const [newUrl, setNewUrl] = useState(baseUrl);
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        const ur = baseUrl;
        if (searchParams.get("soft")) {
            setNewUrl(ur + "&soft=" + searchParams.get("soft"));
        } else {
            setNewUrl(ur + "&soft=LatestDesc");
        }

    });
    function keyWordChange(event) {
        if (event.target.value) {
            setUrl(newUrl + "&cardId=" + event.target.value);
        } else {
            setUrl(newUrl);
        }

        console.log(url);
    }
    ;
    useEffect(() => {
        async function getItems() {
            try {
                await Axios.get(url, {
                    headers: {
                    },
                }).then((e) => {
                    setItems(e.data.items);
                    console.log(e.data.items);
                    setResponse(e.data);
                }).catch((err) => console.log("Err: ", err));
            } catch (e) {
                console.log(e);
            }
        }
        getItems();
    }, [url]);

    //xử lú model
    const [isBuying, setIsBuying] = useState(false);
    const [dataBuy, setDataBuy] = useState({});
    const [isLoading, setIsLoading] = useState([
        false,
        false,
        false,
        false,
        false,
    ]);
    const handleBuyCard = async (_topKey, _amount, index) => {
        let _isLoading = [false, false, false, false, false];
        _isLoading[index] = true;
        setIsLoading(_isLoading);
        try {
            const txi = await buyCard(_meta.web3, _meta.address, _topKey, _amount);
            setIsLoading([false, false, false, false, false]);
        } catch (error) {
            _isLoading[index] = false;
            setIsLoading([false, false, false, false, false]);
        }
    };
    const handleBuy = (_dataBuy) => {
        setIsBuying(true);
        setDataBuy(_dataBuy);
    };
    const handleClose = () => {
        setIsBuying(false);
    };







    return (
        <Wrapper>
            <HeaderShop />
            <div className="container">
                <div className="l-content-flex">
                    <div className="l-main">
                        <div className="c-filter">
                            <ul>
                                <li> </li> <li> </li> <li> </li><li> </li>
                                <li>
                                    <div className="c-filter__group is-dropdown-smart">
                                        <button className="btn btn-outline-light btn-block js-dropdown-smart-mobile" type="button"><span>New NFT</span></button>
                                        <div className="c-dropdown-menu">
                                            <div className="c-dropdown-menu__inner">
                                                <button className="c-dropdown-menu__close js-dropdown-smart-close" type="button"><i className="icon24-close-circle"></i></button>
                                                <ul>
                                                    <li><a href={window.location.origin + '/market?soft=Latest'}>Latest</a></li>
                                                    <li><a href={window.location.origin + '/market?soft=LowestCurrentPrice'}>Lowest Current Price</a></li>
                                                    <li><a href={window.location.origin + '/market?soft=HighestCurrentPrice'}>Highest Current Price</a></li>
                                                    <li><a href="#"></a></li>
                                                    <li><a href="#"></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="c-filter__group"><i className="icon24-search-white"></i>
                                        <input className="form-control" type="text" placeholder="Name" onChange={keyWordChange}></input>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="c-card-grid is-slot-normal">
                            <ul>
                                {items ? items.map((item) => (
                                    <li key={item._id} >
                                        <div className="c-card-item is-market" onClick={(e) =>
                                            handleBuy({
                                                key: item._id, price: 9999, item: item
                                            })
                                        }>
                                            <div className="c-card-item__bg"><img src={'https://fifafootball.s3.ap-southeast-1.amazonaws.com/all/TheCauThu_All+2/' + item.category[0] + '.png'} alt="bg"></img></div>
                                            <div className="c-card-item__content">
                                                <div className="c-card-item__text">
                                                    <p className="is-small">#{item._id.substring(0, 2)}...{item._id.slice(- 7)} &nbsp;</p>
                                                </div>
                                                <div className="c-card-item__text">
                                                    <p className="is-small"><span>FIFA:</span>
                                                        <Rois key={item._id} data={item.ids[0]} />
                                                    </p>
                                                </div>
                                            </div><br />
                                            <div className="c-card-item__coint"><i className="icon30-coin"></i>{item.duration}</div>
                                        </div>
                                    </li>
                                )) : ""}

                            </ul>
                        </div>

                        {/* <div className="b-page">
         <ul className="pagination justify-content-center">
         <li className="page-item disabled"><span className="page-link"><i className="icon16-arrow-left"></i></span></li>
         <li className="page-item"><a className="page-link" href="#">1</a></li>
         <li className="page-item"><a className="page-link" href="#">2</a></li>
         <li className="page-item active"><span className="page-link">3</span></li>
         <li className="page-item"><a className="page-link" href="#">4</a></li>
         <li className="page-item"><a className="page-link" href="#">...</a></li>
         <li className="page-item"><a className="page-link" href="#">22</a></li>
         <li className="page-item"><a className="page-link" href="#"><i className="icon16-arrow-right"></i></a></li>
         </ul>
         </div> */}

                    </div>


                </div>
            </div>
            <ModalBuy
                isOpen=
                {isBuying}
                dataBuy={dataBuy}
                onClose={(e) => handleClose()}
            />
        </Wrapper>
    );
};
export { BodyShop }
    ;
