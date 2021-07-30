/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { IoMdArrowBack } from "react-icons/io";  
import { GetServerSideProps } from 'next';
import { destroyCookie, parseCookies } from 'nookies';
import React, { useState } from 'react';
import { Book } from '.';
import * as S from '../../styles/details';
import Router from 'next/router'
import { setCookie } from 'nookies'
import { useCallback } from "react";
import { BsBook } from "react-icons/bs";
import { RiHeadphoneFill } from "react-icons/ri";
import { IoShareOutline } from "react-icons/io5";
import circleDetails from '../../public/images/circleDetails.svg'
import circleBook1 from '../../public/images/circleBook1.svg'
import circleRed from '../../public/images/circleRed.svg'
import bookImg2 from '../../public/images/bookImg2.svg'
import bookImg3 from '../../public/images/bookImg3.svg'

import Image from "next/image";

interface DetailsProps { 
    book: Book;
}

export default function Details(props: DetailsProps) {
    const { book } = props
    const [bookActive, setBookActive] = useState<Book>(book)

    function setStateCookie(book: Book | {}){
        setCookie(null, 'book', JSON.stringify(book), {
          maxAge: 86400,
          path: '/'
        })
    }

    useCallback(() => {
        setStateCookie({});
    }, [])

    return (
        <S.ContainerDetails>
        
        <S.MenuBottom>
            <S.BtnMenu>
                <BsBook size={20}/>
                <p>Read</p>
            </S.BtnMenu>
            |
            <S.BtnMenu>
                <RiHeadphoneFill size={20}/>
                <p>Listen</p>
            </S.BtnMenu>  
            |
            <S.BtnMenu>
                <IoShareOutline size={20}/>
                <p>Share</p>
            </S.BtnMenu>
        </S.MenuBottom>

        <S.HeaderRectangle>
            <S.ImageDivHeader>
                <Image src={circleDetails} alt="circle" />
            </S.ImageDivHeader>
            <IoMdArrowBack size={24} onClick={() => {
                Router.push({
                    pathname: '/',
                })
                destroyCookie(null, 'book')
            }}/>
            <S.ImageDiv>
                <img src={bookActive ? bookActive.volumeInfo?.imageLinks?.thumbnail : 'https://snack.expo.dev/dist/assets/bc351fd24f9bd32bc131f122d42c1a77.svg'} />
                <S.CircleBookImg1>
                    <Image src={circleBook1} alt="circle" />
                </S.CircleBookImg1>
                <S.CircleBookRed>
                    <Image src={circleRed} alt="circle" />
                </S.CircleBookRed>
                <S.CircleBookImg2>
                    <Image src={bookImg2} alt="circle" />
                </S.CircleBookImg2>
                <S.CircleBookImg3>
                    <Image src={bookImg3} alt="circle" />
                </S.CircleBookImg3>
            </S.ImageDiv>
        </S.HeaderRectangle>
        <S.Text>
            <S.TitleBook>{ bookActive.volumeInfo?.title }</S.TitleBook>
            <S.SubTitle>
                {bookActive.volumeInfo?.authors ? bookActive.volumeInfo.authors[0] : ''}
            </S.SubTitle>
            {bookActive.searchInfo?.textSnippet ? (
                <S.TextResume
                dangerouslySetInnerHTML={{ __html: bookActive.searchInfo.textSnippet }}
                />
            ) : ''}
        </S.Text>
        
        </S.ContainerDetails>

        
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { book } = parseCookies(ctx);
    

    return {
        props: {
            book: book ? JSON.parse(book) : '',
        }
    }
}

