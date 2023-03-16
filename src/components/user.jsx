import './style.css'
import { NavLink } from 'react-router-dom'

const User = ({ data, id }) => {
  let imgSrc = data.picture.large;
  let fullname = `${data.name.title} ${data.name.first} ${data.name.last}`;
  let email = data.email
  let phone = data.phone
  let username = data.login.username
  let gender = data.gender
  
  
  return (
    <div className="user">
      <figure>
        <img src={imgSrc} />
      </figure>
      <h3>{fullname}</h3>
      <h3>@{username}</h3>
       <h3>{phone} </h3>
      <h3>{gender}</h3>
      <div>
         <NavLink to={`${id+1}`} > Check Profile </NavLink>
      </div>
    </div>
  );
};

 
export default User;