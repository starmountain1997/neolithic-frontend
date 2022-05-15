import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MetaMaskProvider} from "metamask-react";

import reportWebVitals from "./reportWebVitals";
import Market from './components/market'
import About from './components/about'
import Account from './components/account'
import Transactions from './components/transactions'
import Stars from './components/account/Stars';
import Gallery from './components/account/Gallery';
import Messages from './components/account/Messages';
import Settings from './components/account/Settings';
import TradeDetail from "./components/transactions/TradeDetail";
import CreateSwap from "./components/create_swap";
import NewTrade from "./components/create_swap/new_trade";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MetaMaskProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>}>
                        <Route path='' element={<Market/>}/>
                        <Route path='market' element={<Market/>}/>
                        <Route path='transactions' element={<Transactions/>}/>
                        <Route path="detail" element={<TradeDetail/>}/>
                        <Route path='account' element={<Account/>}>
                            <Route path="gallery" element={<Gallery/>}/>
                            <Route path="stars" element={<Stars/>}/>
                            <Route path="messages" element={<Messages/>}/>
                            <Route path="settings" element={<Settings/>}/>
                        </Route>
                        <Route path='create_swap' element={<CreateSwap/>}/>
                        <Route path='new_trade' element={<NewTrade/>}/>
                        <Route path='about' element={<About/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </MetaMaskProvider>
    </React.StrictMode>
);
reportWebVitals();
