import styled from "styled-components"
import MajorCity from "./MajorCity"
export const StyledMajorCity = styled(MajorCity)`
        background-size: -2;
        display: flex;
        position: relative;
        background-position: bottom;
        min-height: 400px;
        @media only screen and (min-width: 768px) {
            grid-column: span 2;
        }
        @media only screen and (min-width: 1024px) {
            grid-column: span 3;
        }
        .elevated{
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            height: 280px;
            width: 140px;
            display: flex;
            left: 46px;
            flex-direction: column;
            @media only screen and (min-width: 768px) {
                left: 20px;
            }
            @media only screen and (max-width: 1440px) {
                border-top-left-radius:0;
                border-bottom-left-radius: 0;
            }
            & > div{
                height: 50%;
                textAlign: center;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                color: #fff;
                font-size: 50px;
                font-weight: 600;
            }
        }
        .text{
            position: absolute;
            top: calc(50% - 140px);
            left: 150px;
            font-size: 20px;
            & > h1 {
                margin-top: 0;
                margin-bottom: 15px;
                font-size: 30px;
                
                
            }
            .date-string{
                margin-bottom: 15px;
               
            }
        }
    `