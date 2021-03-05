import React from 'react'
import cities from './cities'
import {init} from './util'

interface State {
    from: string;
    to : string;
}



class SelectForm extends React.Component <{},State>{

    constructor(props : any) {
      super(props);
      this.state = {from: "ATH", to: "ATH"};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      init();
    }
  
    handleChange = (x: boolean) => (event : React.ChangeEvent) :void => {
        let target = event.currentTarget as HTMLInputElement;
        if ( x === true)
            this.setState({from: target.value});
        else
            this.setState({to: target.value});
    }
  
    handleSubmit = (event : React.FormEvent) => {
      alert('From: ' + this.state.from + ' \nTo: ' + this.state.to);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose your starting point and destination:
            <select onChange={this.handleChange(true)}>
            {cities.map((city) => (
              <option value={city.value}>{city.label}</option>
            ))}
          </select>
          <select onChange={this.handleChange(false)}>
            {cities.map((city) => (
              <option value={city.value}>{city.label}</option>
            ))}
          </select>
          </label>
          <input type="submit" value="check" />
        </form>
      );
    }
  }
  
  export {SelectForm};