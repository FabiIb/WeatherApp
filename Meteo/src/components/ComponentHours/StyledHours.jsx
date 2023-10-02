import styled from "styled-components"
import Hours from "../ComponentHours/Hours"
export const StyledHours = styled(Hours)`
        .hour-item{
            display: flex;
            margin-bottom: 50px;
            color: #fff;
            position: relative;
            text-transform: lowercase;
            font-size: 20px;
            font-weight: 300;
            &::before{
                content: "";
                display: block;
                height: 20px;
                width: 20px;
                border-radius: 50%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50% , -50%);
                background-color: #fff;
            }
            & > div {
                width: 50%;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        }
        .title-wrapper{
            padding: 20px 30px;
        }
        .temp{
            font-size: 30px;
        }
        .hour-item.first{
            .temp{
                font-size: 40px;
                line-height: 20px;
                font-weight: 600;
            }
            &::before{
                height: 30px;
                width: 30px;
            }
        }
        .wrap{
            position: relative;
            &:before{
                content: "";
                display: block;
                position: absolute;
                left: 50%;
                top: 0;
                width: 100%;
                height: 45px;
                border-top-left-radius: 24px;
                border-top-right-radius: 24px;
                transform: translate(-50% ,0);
                z-index: 1;
                background-image: linear-gradient(to bottom, #5374E7, rgba(109,165,241,0));;
            }
            &:after{
                content: "";
                display: block;
                position: absolute;
                left: 50%;
                bottom: 0;
                width: 100%;
                height: 45px;
                border-bottom-left-radius: 24px;
                border-bottom-right-radius: 24px;
                transform: translate(-50% ,0);
                background-image: linear-gradient(to bottom, rgba(109,165,241,0), #689CF0);;
            }
        }
        .scrollable{
            overflow-y: hidden;
            scrollbar-width: none;
            max-height:400px;
            padding-top: 50px;
            cursor: all-scroll;
            position: relative;
            /* width: 320px; */
        }
        .now{
            text-align: center;
            font-weight: 600;
            text-transform: capitalize;
            font-size: 20px;
            color: #fff;
            margin-bottom: 10px;
        }
        .list{
            position: relative;
            &::before{
                content: "";
                display: block;
                position: absolute;
                left: 50%;
                top: 0;
                width: 8px;
                bottom: 0;
                transform: translate(-50% ,0);
                background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.3));;
                
            }
        }
    `