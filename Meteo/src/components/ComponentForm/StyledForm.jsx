import styled from "styled-components"
import Form from "./Form"
export const StyledForm = styled(Form)`
.input{
    outline: none;
    border:none;
    background-image:none;
    background-color:transparent;
    box-shadow: none; 
    height: 100%;
    font-size: 28px;
    line-height: 42px;
    font-weight: 600;
    font-family: Poppins;
    color: #01175F;
    width: 100%;
    &::placeholder {
        font-size: 28px;
        line-height: 42px;
        font-weight: 600;
        font-family: Poppins;
        color: #B8B8B8;
    }
}
button{
    border: 0;
    outline: unset;
}
.button-search{
    min-width: 56px;
}
.input-wrapper{
    background-image:none;
    background-color: #fff;
    display: flex;
    align-items: center;
    height: 140px;
    justify-content: space-between;
    padding-left: 40px;
    margin-bottom: 20px;
}
.title-wrapper{
    padding: 20px 30px;
}
.localization-button{
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items:center;
    font-size: 28px;
    line-height: 42px;
    font-weight: 600;
    font-family: Poppins;
    color: #fff;
}
`