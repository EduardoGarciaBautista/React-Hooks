import React from "react";

export const Small = React.memo(({value}) => {


    console.log('EVENT')
    return (
        <small>{value}</small>
    )
})