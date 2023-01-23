import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, editService, resetServiceField} from '../actions/actionCreators';

function ServiceAdd() {
	const {fields: item, edit} = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();
        if (edit.isEdit) {
            dispatch(editService(edit.id, item.name, item.price));
        } else {
            dispatch(addService(item.name, item.price));
        }
		dispatch(resetServiceField());
	}

    const handleCancel = () => {
        dispatch(resetServiceField());
    }

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
            {edit.isEdit && <button onClick={handleCancel}>Cancel</button>}
		</form>
	);
}

export default ServiceAdd;