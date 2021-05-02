import React from "react";
import './components/index.css';
import Header from './components/header';
import { connect } from "react-redux";



const App =() => {
    return (
        <div className='container'>
            <Header /> 
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        current: state.shop.currentItem,
    };
};

export default connect(mapStateToProps)( App);