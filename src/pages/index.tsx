/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Router from 'next/router'
import { setCookie } from 'nookies'
import { useCallback, useState } from 'react'
import { FiBook, FiHome, FiUser } from "react-icons/fi"
import book1 from '../../public/images/book1.svg'
import homeCircleHead from '../../public/images/homeCircleHead.svg'
import circleHooked from '../../public/images/circleHooked.svg'
import line from '../../public/images/line.svg'
import bookOriginals from '../../public/images/bookoriginals.svg'
import triangle from '../../public/images/triangle.svg'
import iconBook from '../../public/images/iconBook.svg'
import homeCircle from '../../public/images/homeCircle.svg'
import smallCircle from '../../public/images/smallCircle.svg'
import circleLargeHooked from '../../public/images/CircleLargeHooked.svg'
import graph from '../../public/images/graph.svg'
import bye from '../../public/images/bye.svg'
import * as S from '../../styles/styles'
import SearchInput from '../components/SearchInput'
import { useDebounce } from '../hooks/Debounce'
import api from '../services/api'
export interface Book {
  searchInfo: {
    textSnippet: string;
  } 
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      thumbnail: string;
    }
  }
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([])

  const { debounce } = useDebounce();

  function setStateCookie(book: Book){
    setCookie(null, 'book', JSON.stringify(book), {
      maxAge: 86400,
      path: '/'
    })
  }

  const updateBookList = useCallback(
    (name?: string) => {
      try {
        if(name !== ''){
          api.get(`/volumes?q=${name}`)
          .then(response => {
            setBooks(response.data.items);
          }) 
        }else{
          setBooks([]);
        }
      } catch (error) {
        console.log('error',error);
      }
    },
    [],
  )

  async function filterBooks(name?: string): Promise<void> {
    updateBookList(String(name));
  }

  return (
    <>
      <S.Container>
      <S.ContentHeader>
        <SearchInput
          filterBooks={filterBooks}
          debounce={debounce}
          name="search" 
          placeholder="Search book"
        />
      </S.ContentHeader>
      {books.length === 0 ? (
        (
          <>
            <S.ContentHome>
          <S.TitleHello>
            <h1>Hi,</h1>
            <h1>Mehmed Al Fatih</h1>
            <div>
              <Image src={bye} alt="bye"/>
            </div>
          </S.TitleHello>
          
          <S.SectionTitle>
            <h3>Discover new book</h3>
            <a href="#">More</a>
          </S.SectionTitle>
          
  
          <S.Books>
            <S.HomeCircleHead>
              <Image src={homeCircleHead} />
            </S.HomeCircleHead>
          
            <S.Book background="#00173D">
              <S.TextAndImage>
                <S.TextAndReadNumber>
                  <S.TextAndSubtitle>
                    <S.TitleBook>Hooked</S.TitleBook>
                    <S.SubtitleBook>Nir Eyal</S.SubtitleBook>
                  </S.TextAndSubtitle>
                  <S.ReadNumber>
                    <Image src={graph} alt="graph"/>
                    <p>120+ Read Now</p>
                  </S.ReadNumber>
                </S.TextAndReadNumber>                

              <S.ImgCircle>
                <S.ImageDivTriangle>
                  <Image src={triangle} alt="book 1"/>
                </S.ImageDivTriangle>
                <S.CircleHookedImg>
                  <Image src={circleHooked} />
                </S.CircleHookedImg>
                <S.LineImgHooked>
                  <Image src={line} />
                </S.LineImgHooked>
                <Image src={book1} alt="book 1"/>
              </S.ImgCircle>
              </S.TextAndImage>
            </S.Book>
  
            <S.Book background="#451475">
              <S.TextAndImage>
                <S.TextAndReadNumber>
                  <S.TextAndSubtitle>
                    <S.TitleBook>The One Thing</S.TitleBook>
                    <S.SubtitleBook>Garry Kellerl</S.SubtitleBook>
                  </S.TextAndSubtitle>
                  <S.ReadNumber>
                  <Image src={graph} alt="graph"/>

                  <p>90+ Read Now</p>
                  </S.ReadNumber>
                </S.TextAndReadNumber>
  
                
              </S.TextAndImage>
            </S.Book>
          </S.Books>
  
          <S.SectionTitle>
            <h1>Currently Reading</h1>
            <a href="#">All</a>
          </S.SectionTitle>
  
  
          <S.BookCurrent>
            <S.BookCurrentBox>
              <S.HomeCircleImg>
                <Image src={homeCircle} alt="circle" />
              </S.HomeCircleImg>
              
              <S.ImgCircleSmall>
                <Image src={smallCircle} alt="book 1"/>
              </S.ImgCircleSmall>

              <S.Line>
                <Image src={line} alt="line"/>
              </S.Line>  
              <h1>Originals</h1>
              <h4>by Adam Grant</h4>
              <S.IconAndChapter>
                <Image src={iconBook} alt="icon"/>
                <S.TextChapter>Chapter</S.TextChapter>
                <S.TextRed>2</S.TextRed>
                <S.TextChapter> From 9</S.TextChapter>
              </S.IconAndChapter>
            </S.BookCurrentBox>

            <S.ImageDiv>
              <Image src={bookOriginals} alt="book 1"/>
            </S.ImageDiv>

            
          </S.BookCurrent>
  
  
          <S.SectionTitle>
            <h1>Reviews of The Days</h1>
            <a href="#">All Video</a>
          </S.SectionTitle>
  
        <S.ImageReviewContainer>
          <img src="/images/review.svg" alt="Image" />
        </S.ImageReviewContainer>
  
  
        <S.TitleReview>
          Don’t Make Me Think  - Steve Krug
        </S.TitleReview>
  
        <S.TitleReviewViews>
          <span>Jesse Showalter</span>
          <span>5.2K Views</span>
          <span>1 Week ago</span>    
        </S.TitleReviewViews>
  
        <S.TextContent>
          "Don't Make Me Think" by Steve Krug is one of the first books 
          I read when I was getting into digital design. It helped me move
          from designing things that just "look nice" to designing things 
          that are usable, useful, memorable and simple to learn and use. 
        </S.TextContent>
        
        </S.ContentHome>
          </>
        )
      ) : (
        <S.BookGrid>
          {books.map((book: Book, item) => {
              return (
                <S.BookItem key={item} onClick={() => {
                    setStateCookie(book);
                    Router.push({
                      pathname: '/details',
                    })
                }}>
                  <div>
                    <img  
                      src={
                        `${book?.volumeInfo.imageLinks?.thumbnail 
                        ? book?.volumeInfo.imageLinks.thumbnail : 
                        'https://snack.expo.dev/dist/assets/bc351fd24f9bd32bc131f122d42c1a77.svg'}`
                      }
                    />
                  </div>
                  
                  <p>{book.volumeInfo.title}</p>
                  <p>{book.volumeInfo.authors && `by ${book.volumeInfo.authors[0]}`}</p>
                </S.BookItem>
              )
          }
          )}
          
        </S.BookGrid>
      )}
      
    </S.Container>
    <S.NavigationBar>
      <S.ButtonNavigation>
        <FiHome size={20} />
        <p>Home</p>
      </S.ButtonNavigation>
      <S.ButtonNavigation>
        <FiBook size={20}/>
        <p>Libraries</p>
      </S.ButtonNavigation>
      <S.ButtonNavigation>
        <FiUser size={20}/>
        <p>Profile</p>
      </S.ButtonNavigation>
    </S.NavigationBar>
    </>
  )
}
