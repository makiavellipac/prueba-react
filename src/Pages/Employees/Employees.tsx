import { useState, useEffect } from 'react';
import { userApi } from '../../helpers/api';
import { RandomUser } from '../../types/users';
import './Employees.scss';

const Employees = () => {
  const [users, setUsers] = useState<RandomUser[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userApi.getMultipleUsers(10);
        setUsers(data);
      } catch (err) {
        
      } 
    };

    fetchUsers();
  }, []);

  return (
    <div className="employees">
      <h1 className="employees__title">Empleados de la Galaxia</h1>
      <div className="employees__container">
        <table className="employees__table">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Ubicación</th>
              <th>Edad</th>
              <th>Nacionalidad</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.login.uuid}>
                <td>
                  <img
                    src={user.picture.thumbnail}
                    alt={`${user.name.first} ${user.name.last}`}
                  />
                </td>
                <td>
                  {user.name.title}. {user.name.first} {user.name.last}
                </td>
                <td>{user.email}</td>
                <td>
                  {user.location.city}, {user.location.country}
                </td>
                <td>{user.dob.age}</td>
                <td>{user.nat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
