/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { FiBook, FiHome, FiUser } from "react-icons/fi"
import book1 from '../../public/images/book1.svg'
import bookOriginals from '../../public/images/bookoriginals.svg'
import iconBook from '../../public/images/iconBook.svg'
import * as S from '../../styles/styles'
import SearchInput from '../components/SearchInput'
import { useDebounce } from '../hooks/Debounce'
import api from '../services/api'

interface Book { 
  volumeInfo: {
    imageLinks: {
      thumbnail: string;
    }
  }
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState<Book[]>([])
  console.log(books)

  const { debounce } = useDebounce();

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
          searchState={setSearch}
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
            <h1>Mehmed Al Fatih 👋</h1>
          </S.TitleHello>
          
          <S.SectionTitle>
            <h3>Discover new book</h3>
            <a href="#">More</a>
          </S.SectionTitle>
          
  
          <S.Books>
            <S.Book background="#00173D">
              <S.TextAndImage>
                <S.TextAndReadNumber>
                  <S.TextAndSubtitle>
                    <S.TitleBook>Hooked</S.TitleBook>
                    <S.SubtitleBook>Nit Eyal</S.SubtitleBook>
                  </S.TextAndSubtitle>
                  <S.ReadNumber>
                    120+ Read Now
                  </S.ReadNumber>
                </S.TextAndReadNumber>
  
                
                <Image src={book1} alt="book 1"/>
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
                    120+ Read Now
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
            
            <S.ImageDiv>
              <Image src={bookOriginals} alt="book 1"/>
            </S.ImageDiv>
  
            <h1>Originals</h1>
            <h4>by Adam Grant</h4>
            <S.IconAndChapter>
              <Image src={iconBook} alt="icon"/>
              <S.TextChapter>Chapter</S.TextChapter>
              <S.TextRed>2</S.TextRed>
              <S.TextChapter> From 9</S.TextChapter>
            </S.IconAndChapter>
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
  
        <S.TitleReviewViews>Jesse Showalter 5.2K Views 1 Week ago</S.TitleReviewViews>
  
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
          {books.map((book, item) => {
              return (
                <S.BookItem key={item}>
                  <img  
                    src={
                      `${book?.volumeInfo.imageLinks?.thumbnail 
                      ? book?.volumeInfo.imageLinks.thumbnail : 
                      'https://snack.expo.dev/dist/assets/bc351fd24f9bd32bc131f122d42c1a77.svg'}`
                    }
                  />
                </S.BookItem>
              )
          }
          )}
        </S.BookGrid>
      )}
      
      
    </S.Container>
    <S.NavigationBar>
    <S.ButtonNavigation>
      <FiHome/>
      <p>Home</p>
    </S.ButtonNavigation>
    <S.ButtonNavigation>
      <FiBook/>
      <p>Libraries</p>
    </S.ButtonNavigation>
    <S.ButtonNavigation>
      <FiUser/>
      <p>Profile</p>
    </S.ButtonNavigation>
  </S.NavigationBar>
    </>
  )
}
