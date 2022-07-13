import React, { useContext, useState }
from "react";
import styled from "styled-components";
import ICON_FF from "./../../assets/shop/icon-token-fifa-mini.png";
import { buyCard }
from "./../../web3/shop.mjs";
import meta from "./../../context/Provider";
import { CHAIN_ID }
from "./../../const/const";
import { HeaderShop }
from "./HeaderShop";

import I1 from "./../../assets/market/Real/1x/1.png";
import I2 from "./../../assets/market/Real/1x/2.png";
import I3 from "./../../assets/market/Real/1x/3.png";
import I4 from "./../../assets/market/Real/1x/4.png";
import I5 from "./../../assets/market/Real/1x/5.png";
import I6 from "./../../assets/market/Real/1x/6.png";
import I7 from "./../../assets/market/Real/1x/7.png";
import I8 from "./../../assets/market/Real/1x/8.png";
import I9 from "./../../assets/market/Real/1x/9.png";
import I10 from "./../../assets/market/Real/1x/10.png";
import I11 from "./../../assets/market/Real/1x/11.png";
import I12 from "./../../assets/market/Real/1x/12.png";
import I13 from "./../../assets/market/Real/1x/13.png";
import I14 from "./../../assets/market/Real/1x/14.png";
import I15 from "./../../assets/market/Real/1x/15.png";
import I16 from "./../../assets/market/Real/1x/16.png";
import I17 from "./../../assets/market/Real/1x/17.png";
import I18 from "./../../assets/market/Real/1x/18.png";
import I19 from "./../../assets/market/Real/1x/19.png";
import I20 from "./../../assets/market/Real/1x/20.png";
import I21 from "./../../assets/market/Real/1x/21.png";
import I22 from "./../../assets/market/Real/1x/22.png";
import I23 from "./../../assets/market/Real/1x/23.png";
import I24 from "./../../assets/market/Real/1x/24.png";
import I25 from "./../../assets/market/Real/1x/25.png";
import I26 from "./../../assets/market/Real/1x/26.png";
import I27 from "./../../assets/market/Real/1x/27.png";
import I28 from "./../../assets/market/Real/1x/28.png";
import I29 from "./../../assets/market/Real/1x/29.png";
import I30 from "./../../assets/market/Real/1x/30.png";
import "./body.css";

import { ModalBuy }
from "./modal";

const Wrapper = styled.div``;



const BodyShop = () => {
    const _meta = useContext(meta);
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
                                    <li>
                                        <div className="c-filter__group is-dropdown-smart">
                                            <button className="btn btn-outline-light btn-block js-dropdown-smart-mobile" type="button"><span>TOP</span></button>
                                            <div className="c-dropdown-menu">
                                                <div className="c-dropdown-menu__inner">
                                                    <button className="c-dropdown-menu__close js-dropdown-smart-close" type="button"><i className="icon24-close-circle"></i></button>
                                                    <ul>
                                                        <li><a href="#">All</a></li>
                                                        <li><a href="#">TOP 10</a></li>
                                                        <li><a href="#">TOP 20</a></li>
                                                        <li><a href="#">TOP 30</a></li>
                                                        <li><a href="#">TOP 50</a></li>
                                                        <li><a href="#">TOP 100</a></li>
                                                        <li><a href="#">TOP 200</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-filter__group is-dropdown-smart">
                                            <button className="btn btn-outline-light btn-block js-dropdown-smart-mobile" type="button"><span>New NFT</span></button>
                                            <div className="c-dropdown-menu">
                                                <div className="c-dropdown-menu__inner">
                                                    <button className="c-dropdown-menu__close js-dropdown-smart-close" type="button"><i className="icon24-close-circle"></i></button>
                                                    <ul>
                                                        <li><a href="#">New NFT</a></li>
                                                        <li><a href="#">View More</a></li>
                                                        <li><a href="#">Big Discounts</a></li>
                                                        <li><a href="#">Incremental Price</a></li>
                                                        <li><a href="#">Gradual Discounts</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-filter__group"><i className="icon24-search-white"></i>
                                            <input className="form-control" type="text" placeholder="Name"></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-filter__group"><i className="icon24-search-white"></i>
                                            <input className="form-control" type="text" placeholder="Footbal Club"></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-filter__group"><i className="icon24-search-white"></i>
                                            <input className="form-control" type="text" placeholder="Player Statistics"></input>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-filter__group"><i className="icon24-search-white"></i>
                                            <input className="form-control" type="text" placeholder="Position"></input>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="c-card-grid is-slot-normal">
                                <ul>
                                    <li>
                                        <div className="c-card-item is-market">
                                            <div className="c-card-item__bg"><img src={I1} alt="bg"></img></div>
                                            <div className="c-card-item__person"><img src={I2} alt="person"></img></div><a className="c-card-item__link" href="#" data-toggle="modal" data-target="#modalBuyer"></a>
                                            <div className="c-card-item__index">85</div>
                                            <div className="c-card-item__content">
                                                <div className="c-card-item__text">
                                                    <p className="is-small">#1021112661</p>
                                                    <p><span>FIFA:</span>
                                                        360/72H
                                                    </p>
                                                </div>
                                                <div className="c-card-item__coint"><i className="icon30-coin"></i>20</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-card-item is-market">
                                            <div className="c-card-item__bg"><img src={I3} alt="bg"></img></div>
                                            <div className="c-card-item__person"><img src={I4} alt="person"></img></div><a className="c-card-item__link" href="#" data-toggle="modal" data-target="#modalBuyer"></a>
                                            <div className="c-card-item__index">88</div>
                                            <div className="c-card-item__content">
                                                <div className="c-card-item__text">
                                                    <p className="is-small">#1021112661</p>
                                                    <p><span>FIFA:</span>
                                                        360/72H
                                                    </p>
                                                </div>
                                                <div className="c-card-item__coint"><i className="icon30-coin"></i>20</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-card-item is-market">
                                            <div className="c-card-item__bg"><img src={I5} alt="bg"></img></div>
                                            <div className="c-card-item__person"><img src={I6} alt="person"></img></div><a className="c-card-item__link" href="#" data-toggle="modal" data-target="#modalBuyer"></a>
                                            <div className="c-card-item__index">103</div>
                                            <div className="c-card-item__content">
                                                <div className="c-card-item__text">
                                                    <p className="is-small">#1021112661</p>
                                                    <p><span>FIFA:</span>
                                                        360/72H
                                                    </p>
                                                </div>
                                                <div className="c-card-item__coint"><i className="icon30-coin"></i>20</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-card-item is-market">
                                            <div className="c-card-item__bg"><img src={I7} alt="bg"></img></div>
                                            <div className="c-card-item__person"><img src={I8} alt="person"></img></div><a className="c-card-item__link" href="#" data-toggle="modal" data-target="#modalBuyer"></a>
                                            <div className="c-card-item__index">103</div>
                                            <div className="c-card-item__content">
                                                <div className="c-card-item__text">
                                                    <p className="is-small">#1021112661</p>
                                                    <p><span>FIFA:</span>
                                                        360/72H
                                                    </p>
                                                </div>
                                                <div className="c-card-item__coint"><i className="icon30-coin"></i>20</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-card-item is-market">
                                            <div className="c-card-item__bg"><img src={I9} alt="bg"></img></div>
                                            <div className="c-card-item__person"><img src={I10} alt="person"></img></div><a className="c-card-item__link" href="#" data-toggle="modal" data-target="#modalBuyer"></a>
                                            <div className="c-card-item__index">88</div>
                                            <div className="c-card-item__content">
                                                <div className="c-card-item__text">
                                                    <p className="is-small">#1021112661</p>
                                                    <p><span>FIFA:</span>
                                                        360/72H
                                                    </p>
                                                </div>
                                                <div className="c-card-item__coint"><i className="icon30-coin"></i>20</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-card-item is-market">
                                            <div className="c-card-item__bg"><img src={I11} alt="bg"></img></div>
                                            <div className="c-card-item__person"><img src={I12} alt="person"></img></div><a className="c-card-item__link" href="#" data-toggle="modal" data-target="#modalBuyer"></a>
                                            <div className="c-card-item__index">97</div>
                                            <div className="c-card-item__content">
                                                <div className="c-card-item__text">
                                                    <p className="is-small">#1021112661</p>
                                                    <p><span>FIFA:</span>
                                                        360/72H
                                                    </p>
                                                </div>
                                                <div className="c-card-item__coint"><i className="icon30-coin"></i>20</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-card-item is-market">
                                            <div className="c-card-item__bg"><img src={I13} alt="bg"></img></div>
                                            <div className="c-card-item__person"><img src={I14} alt="person"></img></div><a className="c-card-item__link" href="#" data-toggle="modal" data-target="#modalBuyer"></a>
                                            <div className="c-card-item__index">110</div>
                                            <div className="c-card-item__content">
                                                <div className="c-card-item__text">
                                                    <p className="is-small">#1021112661</p>
                                                    <p><span>FIFA:</span>
                                                        360/72H
                                                    </p>
                                                </div>
                                                <div className="c-card-item__coint"><i className="icon30-coin"></i>20</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-card-item is-market">
                                            <div className="c-card-item__bg"><img src={I15} alt="bg"></img></div>
                                            <div className="c-card-item__person"><img src={I16} alt="person"></img></div><a className="c-card-item__link" href="#" data-toggle="modal" data-target="#modalBuyer"></a>
                                            <div className="c-card-item__index">83</div>
                                            <div className="c-card-item__content">
                                                <div className="c-card-item__text">
                                                    <p className="is-small">#1021112661</p>
                                                    <p><span>FIFA:</span>
                                                        360/72H
                                                    </p>
                                                </div>
                                                <div className="c-card-item__coint"><i className="icon30-coin"></i>20</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-card-item is-market">
                                            <div className="c-card-item__bg"><img src={I17} alt="bg"></img></div>
                                            <div className="c-card-item__person"><img src={I18} alt="person"></img></div><a className="c-card-item__link" href="#" data-toggle="modal" data-target="#modalBuyer"></a>
                                            <div className="c-card-item__index">105</div>
                                            <div className="c-card-item__content">
                                                <div className="c-card-item__text">
                                                    <p className="is-small">#1021112661</p>
                                                    <p><span>FIFA:</span>
                                                        360/72H
                                                    </p>
                                                </div>
                                                <div className="c-card-item__coint"><i className="icon30-coin"></i>20</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-card-item is-market">
                                            <div className="c-card-item__bg"><img src={I19} alt="bg"></img></div>
                                            <div className="c-card-item__person"><img src={I20} alt="person"></img></div><a className="c-card-item__link" href="#" data-toggle="modal" data-target="#modalBuyer"></a>
                                            <div className="c-card-item__index">98</div>
                                            <div className="c-card-item__content">
                                                <div className="c-card-item__text">
                                                    <p className="is-small">#1021112661</p>
                                                    <p><span>FIFA:</span>
                                                        360/72H
                                                    </p>
                                                </div>
                                                <div className="c-card-item__coint"><i className="icon30-coin"></i>20</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-card-item is-market">
                                            <div className="c-card-item__bg"><img src={I21} alt="bg"></img></div>
                                            <div className="c-card-item__person"><img src={I22} alt="person"></img></div><a className="c-card-item__link" href="#" data-toggle="modal" data-target="#modalBuyer"></a>
                                            <div className="c-card-item__index">99</div>
                                            <div className="c-card-item__content">
                                                <div className="c-card-item__text">
                                                    <p className="is-small">#1021112661</p>
                                                    <p><span>FIFA:</span>
                                                        360/72H
                                                    </p>
                                                </div>
                                                <div className="c-card-item__coint"><i className="icon30-coin"></i>20</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-card-item is-market">
                                            <div className="c-card-item__bg"><img src={I23} alt="bg"></img></div>
                                            <div className="c-card-item__person"><img src={I24} alt="person"></img></div><a className="c-card-item__link" href="#" data-toggle="modal" data-target="#modalBuyer"></a>
                                            <div className="c-card-item__index">97</div>
                                            <div className="c-card-item__content">
                                                <div className="c-card-item__text">
                                                    <p className="is-small">#1021112661</p>
                                                    <p><span>FIFA:</span>
                                                        360/72H
                                                    </p>
                                                </div>
                                                <div className="c-card-item__coint"><i className="icon30-coin"></i>20</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="b-page">
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
                            </div>
                        </div>
            
            
                    </div>
                </div>
                <ModalBuy
                    isOpen={isBuying}
                    dataBuy={dataBuy}
                    onClose={(e) => handleClose()}
                    />
            </Wrapper>
            );
};

export { BodyShop };
