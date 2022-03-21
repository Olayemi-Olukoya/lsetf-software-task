import React from 'react'
import styled from "styled-components"

function Card() {
  return (
    <>
        <CardHolder>
            This is Card
        </CardHolder>
    </>
  )
}

export default Card

const CardHolder = styled.div`
height: 80vh;
width: 100%;
background-color: red;
`