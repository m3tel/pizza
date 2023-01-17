
import './App.css';
import { Routes, Route } from "react-router-dom"
import {useState, useEffect} from "react";
import {Header} from "../UI/Header/Header";
import {Main} from "../UI/Main/Main";
import {Footer} from "../UI/Footer/Footer";
import {Order} from "../components/Order/Order";
import {FooterCard} from "../UI_Cards/FooterCard/FooterCard";
import { Home } from '../Pages/Home';
import { NotFound } from '../Pages/NotFound';
import { Pizza } from '../Pages/Pizza';
import { Layout } from '../layout/Layout';
import { Basket } from '../components/Basket/Basket';
import { BasketPages } from '../Pages/Basket/BasketPages';
import { FoodOrdering } from '../Pages/FoodOrdering/FoodOrdering';
import { Accepted } from '../Pages/Accepted/Accepted';
import {ToppingToPizza} from "../components/ToppingToPizza/ToppingToPizza";


export function App() {
    return (
        <>
            <ToppingToPizza/>

         {/*<Routes>*/}
         {/*   <Route path="/" element={<Home></Home>}></Route>*/}
         {/*   /!* <Route path='/' element={<Layout></Layout>}></Route> *!/*/}
         {/*   <Route path='/basket' element={<BasketPages></BasketPages>}></Route>*/}
         {/*   <Route path='/order' element={<FoodOrdering></FoodOrdering>}></Route>*/}
         {/*   <Route path='/accepted' element={<Accepted></Accepted>}></Route>*/}
         {/*   <Route path="/pizza" element={<Pizza></Pizza>}></Route>*/}
         {/*   <Route path="*" element={<NotFound></NotFound>}></Route>*/}
         {/*</Routes>*/}
        </>
    );
}
