import React , { useState , useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Styles from '../styles/Details.css'

const Details = ( props ) => {
    const [users , setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('http://localhost:3000/users');
            setUsers(res.data);
        }

        fetchUsers();
    }, []);

    const boundary = props.location.userSelected.id
    const userId = boundary-1

    return (
      <div id='container-details'>
        {users.slice(userId, boundary).map(name =>
            <div key={name.id} id='data-container'>
                <div className='elementName'>Id:</div>
                <div className='userData'>
                  {name.id}
                </div>

                <div className='elementName'>Nome:</div>
                <div className='userData'>
                  {name.firstName} {name.lastName}
                </div>

                <div className='elementName'>E-mail:</div>
                <div className='userData'>
                  {name.email}
                </div>

                <div className='elementName'>Telefone:</div>
                <div className='userData'>
                  {name.phone}
                </div>

                
                <div className='elementName'>País:</div>
                <div className='userData' id='elementCountry'>
                  {name.address.country}
                </div>

                <div className='elementName'>Estado:</div>
                <div className='userData' id='elementState'>
                  {name.address.state}
                </div>
                
                <div className='elementName'>Cidade:</div>
                <div className='userData'>
                   {name.address.city}
                </div>
                
                <div className='elementName'>Endereço:</div>
                <div className='userData'>
                   {name.address.streetAddress}
                </div>

                <div className='elementName'>CEP:</div>
                <div className='userData'>
                  {name.address.zipCode}
                </div>

                <div className='elementName'>Latitude:</div>
                <div className='userData'>
                  {name.address.geo.latitude}º
                </div>

                <div className='elementName'>Longitude:</div>
                <div className='userData'>
                  {name.address.geo.longitude}º
                </div>
            </div>
        )}
        <Link to='/' id='link-return'>Voltar</Link>
      </div>
    );
};

export default Details;



/*
import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/users'
})


class Details extends Component {

  constructor(props){
    super(props)
    this.state = {
      userr: [],
      id: ''
    }
    
    const {
      user
    } = this.props;
    api.get('/').then(res => {
        this.setState({ userr: res.data})
    })
  }



  render() {
    return(
      <div id='container-form'>
        {this.state.userr.slice(0, 1).map(name =>
          <h2 key={name.id}>
              <a >Id: </a>{name.id}<br />
              <a >Nome: </a>{name.firstName}<br />
              <a >Sobrenome: </a>{name.lastName}<br />
              <a >E-mail: </a>{name.email}<br />
              <a >Telefone: </a>{name.phone}<br />
              <a >CEP: </a>{name.address.zipCode}<br />
              <a >Cidade: </a>{name.address.city}<br />
              <a >Endereço: </a>{name.address.streetAddress}<br />
              <a >País: </a>{name.address.country}<br />
              <a >Estado: </a>{name.address.state}<br />
              <a >Latitude: </a>{name.address.geo.latitude}<a>º</a><br />
              <a >Longitude: </a>{name.address.geo.longitude}<a>º</a><br />
          </h2>
        )}
        <Link to='/' id='link-return'>Voltar</Link>
      </div>
    )
  }
}

export default Details
*/

/*
      <div id='container-form'>
        {this.state.firstName.map(name =>
            <h2 key={name.id}>
                {name.firstName}
            </h2>
        )}
        {/*<Link to='/' id='link-return'>Voltar</Link>




*/






