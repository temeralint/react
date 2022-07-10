const Counter = ({onDelete, onIncrement, onDecrement, ...count}) => {
	const {id, name, initial} = count

	const getBadgeClasses = () => {
		let classes = 'badge m-2'
		classes += initial === 0 ? ' bg-warning' : ' bg-primary'
		return classes
	}

	return (
		<div>
			<span>{name}</span>
			<span className={getBadgeClasses()}>{initial === 0 ? 'empty' : initial}</span>
			<button className='btn btn-primary btn-sm m-2' onClick={() => onIncrement(id)}>+</button>
			<button className='btn btn-primary btn-sm m-2' onClick={() => onDecrement(id)}>-</button>
			<button className='btn btn-danger btn-sm m-2' onClick={() => onDelete(id)}>delete</button>
		</div>
	)
}

export default Counter;