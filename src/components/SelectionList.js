import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Container = styled.section`
  margin: 30px 0;
`

const Result = styled.article`
  margin: 15px 0;
  padding: 15px;
  background: #eee;
`

const Heading = styled.h1`
  margin: 0;
  font-family: Arial;
  font-size: 24px;
`

const ResultHeading = styled.h1`
  margin: 0;
  font-family: Arial;
  font-size: 16px;
`

const Description = styled.p`
  margin: 5px 0;
  font-family: Arial;
  font-size: 12px;
  color: #666;
`

const StatusMessage = styled.div`
  margin: 15px;
  font-family: Arial;
`

const SelectionList = ({status, items = []}) => {

  const row = item => (
    <Result key={ item.id }>
      <ResultHeading>{ item.name }</ResultHeading>
      <Description>{ item.formatted_address }</Description>
    </Result>
  )

  const showStatus = status => {
    return status === 'fetching' ? (<StatusMessage>Selectie bijwerken...</StatusMessage>) : ''
  }

  return (
    <Container>
      <Heading>Huidige selectie</Heading>

      { showStatus(status)  }

      { items.length ? items.map( item => row(item) ) : (
        <Description>Er zijn nog geen plaatsen toegevoegd.</Description>
      ) }
    </Container>
  )
}

const mapStateToProps = state => state.fetchSelection

export default connect(mapStateToProps)(SelectionList)
