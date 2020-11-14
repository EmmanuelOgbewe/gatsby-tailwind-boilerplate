import React from "react"
import styled from "styled-components"
import tw from 'twin.macro';


export default function Home() {

  return <Wrapper>
            Hello World!
        </Wrapper>
}

const Wrapper = styled.div`
  background-color: whitesmoke;
  ${tw`h-screen flex items-center justify-center`}
`






