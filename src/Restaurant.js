import React from 'react';


function Restaurant(props) {
    return (
        <div>
        <h3><b> Today, we have in main menu {props.dishName } and in dessert {props.dessert}</b></h3>

        {/* <h1> Today, we have in dessert menu {props.dessert}</h1> */}
        </div>
    )
}
export default Restaurant;