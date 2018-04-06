import React from 'react';
import { connect } from 'react-redux';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionName: '',
      transactionValue: ''
    }
  }

  onChangeValue = (e) => {
    const getQ1 = e.target.value;
    console.log(getQ1);
    this.setState(() => ({ q1: getQ1 }));
  };

  onChangeName = (e) => {
    const name = e.target.value;
    console.log(name);
      this.setState(() => ({ transactionName: name }));
  };

  onChange = (e) => {
    const value = e.target.value;
    console.log(value);
    this.setState(() => ({ transactionValue: value }));
  };

  onSubmit = (e) => {
      e.preventDefault();
      console.log(this.props);
      this.props.onSubmit({
        transactionName: this.state.transactionName,
        transactionValue: this.state.transactionValue
      });
    };


  render() {
    return (
      <div>
        <p>Wprowadź wartość </p>
        <span>1E = </span>
          <input type="number" onChange={this.onChangeInput} />
        <span> PLN</span>

        <form onSubmit={this.onSubmit}>
        <p>Dodaj transakcję walutową </p>
        <span>Nazwa: </span><input type="text" onChange={this.onChangeName} /> <p></p>
        <span>Kwota w Euro  : </span><input type="text" onChange={this.onChange} />
        <button>Submit</button>
        </form>
        <p>{this.state.transactionName}</p>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    transaction: state.transactionReducer
  };
};

export default connect(mapStateToProps)(DashboardPage);
