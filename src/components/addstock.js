import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';


export default class CreateStock extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('stocks');
    this.state = {
      title: '',
      RETURN:0,
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    var user=prompt('enter admin id');

    if(user=='1324')

    {
    const { title, RETURN } = this.state;

    this.ref.add({
      title,
      RETURN,
    }).then((docRef) => {
      this.setState({
        title: '',
        RETURN:0,
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    }
    

   else 
    {
      window.alert("YOU DONT HAVE ACCESSS")
    }
  }

  render() {
    const { title, RETURN } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD STOCK
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="NAME" />
              </div>
   
              <div class="form-group">
                <label for="author">RETURN %:</label>
                <input type="text" class="form-control" name="RETURN" value={RETURN} onChange={this.onChange} placeholder="%" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
    }
  }