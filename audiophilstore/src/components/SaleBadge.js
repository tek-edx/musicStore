import React from 'react';
import styled from 'styled-components';

function SaleBadge() {
    return (
        <SaleBadgeStyle>
        <div>
            Sale
         </div>
        </SaleBadgeStyle>
    )
};


const SaleBadgeStyle = styled.div`
position: absolute;
min-height: 50px;
min-width: 50px;


top: 10px;
right: 10px;
text-align: center ;
display: flex;
justify-content: center;
align-items: center;



border-radius: 50%;
background-color: pink;
}
`
export default SaleBadge

