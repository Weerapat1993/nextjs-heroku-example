import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { App, Fork, Todo } from '../components'
import configureStore from '../redux/store'
import { todoActions } from '../redux/todo'

class Contact extends React.Component {
  static async getInitialProps({ store }) {
    if(!store.getState().todo.star) {
      await store.dispatch(todoActions.getStar())
    }
    return { 
      stars: store.getState().todo.star
    }
	}

	render() {
		const { stars } = this.props
		return (
			<App>
				<Fork stars={stars} />
				<div>
          <Todo title='Contact' />  
				</div>
			</App>
		)
	}
}

export default withRedux(configureStore)(Contact)