import Image from 'next/image';
import { InputHTMLAttributes } from 'react';
import { Container, Input, ImgContainer } from './styles';
import searchIcon from '../../../public/images/searchIcon.svg'

interface InternalProps {
  internalFunction: (item: string) => Promise<void>;
  event?: React.ChangeEvent<HTMLInputElement>;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  debounce({ internalFunction, event }: InternalProps): void;
  filterBooks(name?: string): Promise<void>
}

function SearchInput({debounce, filterBooks: filterUsers, ...rest}:InputProps) {
  return (
    <Container>
      <ImgContainer>
        <Image src={searchIcon} alt="book 1"/>
      </ImgContainer>
      <Input  
          {...rest} 
          onChange={(event) => debounce({
                internalFunction: filterUsers,
                event,
          })}
          placeholder="Search book"
      />
    </Container>
  );
};

export default SearchInput;
