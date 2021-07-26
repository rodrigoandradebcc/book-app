import styled from 'styled-components';

export const Input = styled.input`
    height: 48px;
    width: 100%;

    border: none;
    background: var(--white);

    input:focus {
        border: none;
    }
`;

export const Container = styled.div`
    background: #FDFCFC;
    display: flex;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
    border-radius: 10px;
    border: none;
    height: 48px;
    width: 100%;
    
    input{
        padding: 16px 10px;
        ::placeholder{
            font-size: 16px;
            line-height: 18px;

            color: #54565A;
        }
    }

    input:focus {
        outline: none;
    }

    
`

export const ImgContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    margin-left: 16px;
`