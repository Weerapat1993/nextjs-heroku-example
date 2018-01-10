import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { todoActions } from '../redux/todo'
import TodoItem from './TodoItem'

class Todo extends React.Component {
	state = {
		text: ''
	}

	componentDidMount () {
		this.props.addTodo('Its works')
	}
	

	addTodos = e => {
		e.preventDefault()

		this.props.addTodo(this.state.text)
		this.setState({ text: '' })
	}

	removeTodo = todo => {
		this.props.removeTodo(todo)
	}

	render() {
		const { title } = this.props
		return (
			<div className="mdl-card mdl-shadow--2dp">
				<div className='mdl-card__title'>
					{title}
				</div>
				<form onSubmit={this.addTodos}>
					<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
						<input
							type="text"
							value={this.state.text}
							onInput={e => this.setState({ text: e.target.value })}
							className="mdl-textfield__input"
							id="input"
						/>
						<label className="mdl-textfield__label" htmlFor="input">
							What must be done?
						</label>
					</div>
				</form>

				<ul>
					{this.props.todo.map((item, i) => (
						<TodoItem key={i} todo={item} remove={this.removeTodo} />
					))}
				</ul>
				<style>{`
						form {
							background: #fff;
							padding: 10px;
						}
						ul {
							min-height: 100px;
							margin: 0;
							padding: 0;
							text-align: left;
							list-style: none;
						}
						ul li {
							padding: 10px;
							background: #FFF;
							border-bottom: 1px solid #EEE;
						}
						ul li:nth-child(2n) {
							background: #EEF6FF;
						}
						ul li:last-child {
							border-bottom: none;
						}
						.mdl-card {
							margin: auto;
							transition: all .3s;
							transform: translateY(100px);
						}
					`}</style>
				<div className="mdl-card__actions">
					<Link href='/' >
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
							Home
						</button>
					</Link>
					<Link href='/about' >
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
							About
						</button>
					</Link>
					<Link href='/contact' >
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
							Contact
						</button>
					</Link>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
  todo: state.todo.todos,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addTodo: text => dispatch(todoActions.addTodo(text)),
  removeTodo: todo => dispatch(todoActions.removeTodo(todo)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo)