import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);

  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(200px);

  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);

  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);

  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const ContainerDetails = styled.section`
    height: 100vh;
    background: #FFFCF9;
    position: relative;
`

export const HeaderRectangle = styled.header`
    height: 282px;
    background: #FFF6E5;
    border-radius: 0 0 100px 0;
    position: relative;
    
    animation: ${slideDown} 0.8s ease-out;
    
    > svg{
        margin: 55px 0 0 32px;
    }
`

export const ImageDiv = styled.div`
    position: absolute;
    right: 50%;
    top: 70%;
    transform: translate(50%, -50%);
    width: 151px;
    height: 234px;

    filter: drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5));
    
    img {
        width: 100%;
        height: 100%;
    }

`

export const Text = styled.div`
    margin: 20px;

    animation: ${slide} 1.6s ease-out;

`


export const TitleBook = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1.5px;

    color: #36383A;
    margin: 67px 0 8px;

`

export const SubTitle = styled.p`
    font-weight:   500;
    font-size: 16px;
    line-height: 19px;

    letter-spacing: 0.670588px;

    color: #FF6978;
`

export const TextResume = styled.div`
    margin-top: 10px;

    font-size: 14px;
    line-height: 25px;

    letter-spacing: 0.2px;

    color: rgba(49, 49, 49, 0.6);
`


export const MenuBottom = styled.div`
    position: fixed;
    right: 20px;
    left: 20px;
    bottom: 54px;

    background: #FFFFFF;
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
    border-radius: 2px;

    color: #EAEAEA;

    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;

    animation: ${slideUp} 1s ease-out;
`

export const BtnMenu = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 56px;

    outline: none;
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    display: flex;


    svg{
        color: #CFCBD2;
    }

    > p {
        margin-left: 10px;

        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;

        letter-spacing: 1px;

        color: #3F4043
    }
   
`

export const ImageDivHeader = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`


export const CircleBookImg1 = styled.div`
    position: absolute;

    img {
        width: 63px;
        height: 63px;
    }

    z-index: -1;
    top: 31px;
    left: -38px;
`

export const CircleBookImg2 = styled.div`
    position: absolute;

    z-index: -1;
    top: 2px;
    right: -9px;
`

export const CircleBookImg3 = styled.div`
    position: absolute;
    z-index: -1;
    bottom: 32px;
    right: -24px;
`

export const CircleBookRed = styled.div`
    position: absolute;

    z-index: -1;
    top: 41px;
    left: -65px;
`

