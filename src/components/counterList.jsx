import React, { useState } from "react";
import Counter from "./counter";

const CounterList = () => {
    const initialState = [
        {id: 1, initial: 3, name: 'Ненужная вещь'}, 
        {id: 2, initial: 12, name: 'Ложка'}, 
        {id: 3, initial: 24, name: 'Вилка'},
        {id: 4, initial: 0, name: 'Тарелка'},
    ]

    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        setCounters(prevState => prevState.filter(counter => counter.id !== id))
    }

    const handleIncrement = id => {
        setCounters(prevState => {
            return prevState.map(item => {
                if (item.id === id) {
                    return {...item, initial: item.initial + 1}
                } else {
                    return item
                }
            })
        })
    }

    const handleDecrement = id => {
        setCounters(prevState => {
            return prevState.map(item => {
                if (item.id === id) {
                    return {...item, initial: item.initial - 1}
                } else {
                    return item
                }
            })
        })
    }

    return (
        <>
            {
                counters.map(count => {
                    return <Counter key={count.id} 
                                    onIncrement={handleIncrement} 
                                    onDecrement={handleDecrement} 
                                    onDelete={handleDelete} 
                                    {...count}
                            />
                })
            }
            <button className='btn btn-primary btn-sm m-2'>Сброс</button>
        </>
    )
}

export default CounterList;