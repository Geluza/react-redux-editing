import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {changeEditServiceField, changeServiceField, removeService} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const filter = useSelector(state => state.serviceFilter);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = (id) => {
    const service = items.find((service) => service.id === id);
    console.log(service);
    dispatch(changeServiceField('name', service.name));
    dispatch(changeServiceField('price', service.price));
    dispatch(changeEditServiceField(service.id));
  }

  const newList = items.filter((el) => el.name.includes(filter));

  return (
    <ul>
      {newList.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id)}>&#9998;</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList;