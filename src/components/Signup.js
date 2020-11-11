import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Styles from '../styles/Signup.css'

class Signup extends Component {

  constructor(props){
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: {
        zipCode: '',
        city: '',
        streetAddress: '',
        country: '',
        state: '',
        geo:{
          latitude: '',
          longitude: ''          
        }
      }
    }
  }

  eventHandler = e => {
    if ( e.target.className == 'normal' )
      this.setState({
        [e.target.name]: e.target.value
      })

    if ( e.target.name == 'country' ) {
      this.setState({
        address: {
          zipCode: this.state.address.zipCode,
          city: this.state.address.city,
          streetAddress: this.state.address.streetAddress,
          country: e.target.value,
          state: this.state.address.state,
          geo: {
            latitude: this.state.address.geo.latitude,
            longitude: this.state.address.geo.longitude
          }
        }
      })
    }

    if ( e.target.name == 'state' ) {
      this.setState({
        address: {
          zipCode: this.state.address.zipCode,
          city: this.state.address.city,
          streetAddress: this.state.address.streetAddress,
          country: this.state.address.country,
          state: e.target.value,
          geo: {
            latitude: this.state.address.geo.latitude,
            longitude: this.state.address.geo.longitude
          }
        }
      })
    }

    if ( e.target.name == 'city' ) {
      this.setState({
        address: {
          zipCode: this.state.address.zipCode,
          city: e.target.value,
          streetAddress: this.state.address.streetAddress,
          country: this.state.address.country,
          state: this.state.address.state,
          geo: {
            latitude: this.state.address.geo.latitude,
            longitude: this.state.address.geo.longitude
          }
        }
      })
    }

    if ( e.target.name == 'streetAddress' ) {
      this.setState({
        address: {
          zipCode: this.state.address.zipCode,
          city: this.state.address.city,
          streetAddress: e.target.value,
          country: this.state.address.country,
          state: this.state.address.state,
          geo: {
            latitude: this.state.address.geo.latitude,
            longitude: this.state.address.geo.longitude
          }
        }
      })
    }

    if ( e.target.name == 'zipCode' ) {
      this.setState({
        address: {
          zipCode: e.target.value,
          city: this.state.address.city,
          streetAddress: this.state.address.streetAddress,
          country: this.state.address.country,
          state: this.state.address.state,
          geo: {
            latitude: this.state.address.geo.latitude,
            longitude: this.state.address.geo.longitude
          }
        }
      })
    }

    if ( e.target.name == 'latitude' ) {
      this.setState({
        address: {
          zipCode: this.state.address.zipCode,
          city: this.state.address.city,
          streetAddress: this.state.address.streetAddress,
          country: this.state.address.country,
          state: this.state.address.state,
          geo: {
            latitude: e.target.value,
            longitude: this.state.address.geo.longitude
          }
        }
      })
    }

    if ( e.target.name == 'longitude' ) {
      this.setState({
        address: {
          zipCode: this.state.address.zipCode,
          city: this.state.address.city,
          streetAddress: this.state.address.streetAddress,
          country: this.state.address.country,
          state: this.state.address.state,
          geo: {
            latitude: this.state.address.geo.latitude,
            longitude: e.target.value
          }
        }
      })
    }
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('http://localhost:3000/users' , this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      address: {
        zipCode,
        city,
        streetAddress,
        country,
        state,
        geo:{
          latitude,
          longitude         
        }
      }
    } = this.state

    return(
      <div id='container-form'>
        <form onSubmit={this.submitHandler} id='form'>
          <h1>Informações Pessoais</h1>
          <div className='div-input'>
            <label htmlFor="name-input">Nome</label>
            <input 
              type="text"
              id='fName-input'
              className='normal'
              name='firstName'
              value={firstName}
              onChange={this.eventHandler}
            />
          </div>

          <div className='div-input'>
            <label htmlFor="lName-input">Sobrenome</label>
            <input 
              type="lastName"
              id='lName-input'
              className='normal'
              name='lastName'
              value={lastName}
              onChange={this.eventHandler}
            />
          </div>

          <div className='div-input'>
          <label htmlFor="email-input">E-mail</label>
            <input 
              type="text"
              id='email-input'
              className='normal'
              name='email'
              value={email}
              onChange={this.eventHandler}
            />
          </div>
          
          <div className='div-input'>
          <label htmlFor="phone-input">Telefone</label>
            <input 
              type="text"
              id='phone-input'
              className='normal'
              name='phone'
              value={phone}
              onChange={this.eventHandler}
            />
          </div>

          <h1 id='h1-2'>Endereço</h1>
          <div className='div-input'>
          <label htmlFor="country-input">País</label>
            <input
              type="text"
              id='country-input'
              className='address'
              name='country'
              value={country}
              onChange={this.eventHandler}
            />
          </div>

          <div className='div-input'>
          <label htmlFor="state-input">Estado</label>
            <input
              type="text"
              id='state-input'
              className='address'
              name='state'
              value={state}
              onChange={this.eventHandler}
            />
          </div>

          <div className='div-input'>
          <label htmlFor="city-input">Cidade</label>
            <input
              type="text"
              id='city-input'
              name='city'
              value={city}
              onChange={this.eventHandler}
            />
          </div>

          <div className='div-input'>
          <label htmlFor="sAddress-input">Endereço</label>
            <input
              type="text"
              id='sAddress-input'
              name='streetAddress'
              value={streetAddress}
              onChange={this.eventHandler}
            />
          </div>

          <div className='div-input'>
          <label htmlFor="zipCode-input">CEP</label>
            <input
              type="text"
              id='zipCode-input'
              name='zipCode'
              value={zipCode}
              onChange={this.eventHandler}
            />
          </div>

          <div className='div-input'>
          <label htmlFor="latitude-input">Latitude</label>
            <input
              type="text"
              id='latitude-input'
              className='geo'
              name='latitude'
              value={latitude}
              onChange={this.eventHandler}
            />
          </div>

          <div className='div-input'>
          <label htmlFor="longitude-input">Longitude</label>
            <input
              type="text"
              id='longitude-input'
              className='geo'
              name='longitude'
              value={longitude}
              onChange={this.eventHandler}
            />
          </div>

          <button type='submit' id='btn-submit'>EFETUAR CADASTRO</button>
        </form>

        <Link to='/' id='link-return-signup'>Voltar</Link>
      </div>
    )
  }
}

export default Signup
