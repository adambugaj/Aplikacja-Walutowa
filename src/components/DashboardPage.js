import React from 'react';
import { connect } from 'react-redux';
import { editTransaction, filterTransaction } from '../actions/transactions';
import FilterTransaction from './FilterTransaction';
// Material design components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionName: '',
      transactionEuro: 0,
      transactionZloty: 0,
      transactionSum: 0
    }
  }

  onChangeZloty = (e) => {
    const zloty = e.target.value;
    this.props.dispatch(editTransaction( zloty ));
    this.setState(() => ({ transactionZloty: zloty }));
  };

  onChangeName = (e) => {
    const name = e.target.value;
    console.log(e.target.value)
      this.setState(() => ({ transactionName: name }));
  };

  onChangeEuro = (e) => {
    const euro = e.target.value;
    this.setState(() => ({ transactionEuro: euro }));
  };

  onSubmit = (e) => {
      e.preventDefault();
      // this.props.dispatch(filterTransaction(this.state.transactionSum);
      this.props.onSubmit({
        transactionName: this.state.transactionName,
        transactionEuro: this.state.transactionEuro,
        transactionZloty: this.state.transactionZloty,
        transactionSum: (this.state.transactionZloty * this.state.transactionEuro).toFixed(2)
      });
    };
// Interfejs aplikacji
  render() {
    return (
      <div className="content-conatainer">
        <form onSubmit={this.onSubmit}>
        <MuiThemeProvider>
          <Card>
            <CardHeader
              title="Zdefiniuj przelicznik walutowy"
            />
            <TextField
              floatingLabelText="wpisz kurs w PLN"
              className="input-group"
              type="text"
              onChange={this.onChangeZloty}
              style={{
                left: '3%'
              }}
          />
            <CardHeader
              title="Dodaj transakcję walutową"
            />
            <TextField
                floatingLabelText="wprowadź nazwę transakcji"
                type="text"
                onChange={this.onChangeName}
                style={{
                  left: '3%'
                }}
            />
            <TextField
                floatingLabelText="wprowadź kwotę w Euro"
                type="text"
                onChange={this.onChangeEuro}
                className="input-group__item"

            />
            <CardActions>
              <FlatButton type="submit" label="Submit" />
            </CardActions>
          </Card>
        </MuiThemeProvider>
        </form>
        <p>Suma wszystkich transakcji: <span>{this.props.transaction.length}</span></p>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    transaction: state.transaction
  };
};

export default connect(mapStateToProps)(DashboardPage);
