import React from 'react'
import { connect } from 'react-redux'



const SelectionList = ({status, items = []}) => {

  const row = item => (
    <article key={ item.id }>
      <h3>{ item.name }</h3>
    </article>
  )

  return (

    <section>
      { items.map( item => row(item) ) }
    </section>
  )
}

const mapStateToProps = (state) => {
  return state.fetchSelection
}


export default connect(mapStateToProps)(SelectionList)
