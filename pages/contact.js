import React from 'react'
import withRedux from 'next-redux-wrapper'
import { App, Fork, Todo } from '../components'
import configureStore from '../redux/store'
import { todoActions } from '../redux/todo'
import { nextStore } from '../utils'

class Contact extends React.Component {
  static async getInitialProps({ store }) {
		const { dispatch, getState } = store
		// componentDidMount
    if(!nextStore(getState).todo.star) {
      await dispatch(todoActions.getStar())
		}
		// mapStateToProps
    return { 
      stars: nextStore(getState).todo.star,
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