import * as React from 'react';
import styled from '@emotion/styled';

const BlueUl = styled.ul`
 color: red;
`

export class ErrorPage extends React.Component<{}, {}> {

  render() {
    return <div className='loading' style={{backgroundColor: 'blue'}}>
      i am from react
      <BlueUl>
        <li>Hello in react using angular sass</li>
      </BlueUl>
    </div>;
  }

}
