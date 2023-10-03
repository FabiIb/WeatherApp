import styled from "styled-components"
import Days from "./Days"
export const StyledDays = styled(Days)`
position: relative;
min-height: 400px;
@media only screen and (min-width: 768px) {
    grid-column: span 2;
}
.card{
    position: absolute;
    max-height: calc(100% - 80px);
    box-shadow: 5px 20px 20px 0px rgba(0,0,0,0.17);
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 15px;
    &.active-0{
        border-top-left-radius: 0px;
        
    }
    background-image: linear-gradient(to bottom, #5374E7, #77B9F5);
}
.tabs{
    box-shadow: 5px 10px 20px 0px rgba(0,0,0,0.17);
    display: inline-flex;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background-color: #fff;
    height: 50%;
    & > div{
        padding: 20px 30px;
        transition: border-radius .2s linear;
    }
    .active{
        background-color: #5374E7;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        color: white
        
    }

}
.swiper{
    margin-left: auto;
margin-right: auto;
position: relative;
overflow: hidden;
list-style: none;
padding: 0;
z-index: 99;
}
.swiper-container {
    height: auto;
}
.swiper-wrapper{
    padding: 30px 0 !important;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    .swiper-slide {
        height: auto;
    }
}
.swiper-slide{
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-proprety: transform;
}
.slide-content{
    box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.17);
    margin: 0 15px;
    min-height: 150px;
    border-radius: 25px;
    text-align: center;
    argin: 0 15px;
    min-height: 150px;
    border-radius: 25px;
    text-align: center;
    padding: 20px 0;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 20px 0;
    .day{
        font-size: 22px;
        line-height: 33px;
        color: #fff;
        font-weight: 600;
        margin-bottom: 37px;
    }
    .temp{
        font-size: 42px;
        line-height: 62px;
        color: #fff;
        font-weight: 600;
        margin-bottom: 27px;
    }
}
`