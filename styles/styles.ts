import styled from 'styled-components';

export const Container = styled.main`
    position: relative;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;

    padding-bottom: 60px;
`
export const ContentHeader = styled.div`
    margin-top: 50px;
    display:flex;

    width: 100%;
    
    padding: 0 20px;

    justify-content: center;
    margin-bottom: 30px;
`

export const ContentHome = styled.div`
    

`
interface BookProps {
    background: string;
}

export const Book = styled.div<BookProps>`
    background: ${props => props.background};
    min-width: 272px;
    height: 140px;
    box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
    border-radius: 5px;

    & + &{
     margin-left: 10px;
    }
`

export const Books = styled.div`
    display: flex;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;

    margin-left: 20px;    

    margin-top: 15px;
`



export const TitleBook = styled.h1`
    font-weight: bold;
    font-size: 27px;
    line-height: 36px;

    letter-spacing: 2px;

    color: #FEFEFE;
`

export const TitleHello = styled.div`
    margin-left: 20px;
    display:flex;
    h1{
        font-size: 24px;
        line-height: 29px;
        color: #54565A;
    }

    h1:last-child {
        margin-left: 2px;
        color: #FF6978;
    }
`

export const SectionTitle = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 30px;
    padding: 0 20px;
    align-items: center;


    > h3 {
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.5px;
        color: #3F4043;
    }

    > a {
        font-size: 14px;
        line-height: 16px;
        text-align: right;
        color: #4ABDF1;
        text-decoration: none;
    }
`


export const SubtitleBook = styled.h4`
    font-size: 14px;
    line-height: 16px;

    letter-spacing: 1.28889px;

    color: #E7E7E1;
    margin-top: 5px;
`

export const ReadNumber = styled.h4`
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;

    letter-spacing: 0.020635px;

    color: #E7E7E1;
`

export const TextRed = styled.p`
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;

    letter-spacing: 0.020635px;

    color: #FF6978;
`

export const TextChapter = styled.p`
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;

    letter-spacing: 0.020635px;

    color: #2A2B26;
`



export const BookCurrent = styled.div`
    flex: 1;
    margin-right: 44px;
    height: 100px;
    background: #EEF5DB;
    padding-left: 118px;

    position: relative;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    > h4 {
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;


        color: #74776D;
        margin-top: 5px;
    }

    > h1 {
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;

        letter-spacing: 2px;
        color: #2A2B26;
        margin-top: 10px;
    }

    margin-bottom: 45px;
`

export const IconAndChapter = styled.div`
    display: flex;
    align-items: center;

    margin-top: 20px;

    p {
        margin-left: 2px;
    }
`

export const ImageDiv = styled.div`
    position: absolute;
    top: -40px;
    left: 0;
    min-width: 88px;
    min-height: 130px;
`

export const ImageReviewContainer = styled.div`
    margin-top: 16px;
    display: flex;
    flex: 1;
    padding: 0 20px;

    img {
        width: 100%;
        height: 100%;
    }
`


export const TextAndSubtitle = styled.div``

export const TextAndReadNumber = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TextAndImage = styled.div`
    display: flex;
    width: 100%;

    justify-content: space-between;
    padding: 15px 20px;

`

export const NavigationBar = styled.div`
    background: var(--white);
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 52px;
    position: fixed;
    bottom: 0;
    width: 100%;

    > button:nth-child(1) svg {
        width: 26px;
        height: 17.78px;
        margin-bottom: 10px;
    }

    > button:nth-child(2) svg {
        width: 14.4px;
        height: 18px;
        margin-bottom: 10px;
    }

    > button:nth-child(3) svg {
        width: 16px;
        height: 18px;
        margin-bottom: 10px;
    }
`

export const ButtonNavigation = styled.button`
    outline: none;
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: fit-content;
    
    &:hover {
        color: #000000;
        p, svg {
            color: #000000;
        } 
    }


    p{
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
        color: #BFBEBF;
    }

    

    svg {
        color: #BFBEBF;
    }

`

export const TitleReview = styled.h1`
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;

    margin-top: 16px;
    margin-left: 32px;

`

export const TitleReviewViews = styled.p`
    font-weight: normal;
    font-size: 10px;
    line-height: 9px;

    margin-top: 6px;

    color: rgba(106, 103, 103, 0.8);
    margin-left: 32px;

    
`

export const TextContent = styled.p`
    margin: 0 32px;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;

    margin-top: 6px;

    color: rgba(107, 107, 107, 0.8);

   
`

