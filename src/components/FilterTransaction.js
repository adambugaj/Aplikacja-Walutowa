import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardText, CardActions, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Pokazuje transakcje o największej kwocie
const FilterTransaction = (props) => {
  return (
    <div >
      <MuiThemeProvider>
        <Card className="content-conatainer_highest-value">
          <CardHeader
            title="Transakcja o największej kwocie" />
          <CardText>
            <p>Nazwa: <strong>{props.transaction[0] !== undefined && props.transaction[0].transactionName}</strong></p>
            <p>Kwota w Euro: <strong>{props.transaction[0] !== undefined && props.transaction[0].transactionEuro}</strong> €</p>
            <p>Kwota w PLN: <strong>{props.transaction[0] !== undefined && props.transaction[0].transactionHigh}</strong> zł</p>
          </CardText>
        </Card>
      </MuiThemeProvider>
    </div>
  )
}
//transaction = {props} - przenieś dane transakcji, która użytkownik chce usunac do komponentu RemoveTransaction

// Pobieramy tylko dane z props wysyłane przez główny komponent i od razu je sortujemy wg. najwyższej kwoty
const mapStateToProps = (props) => {
  console.log(props)
  return {
    transaction: props.transaction.sort((a,b) => {
          console.log(a)
          return b.transactionHigh - a.transactionHigh;
    }),
    trans: props.transaction
  };
};

export default connect(mapStateToProps)(FilterTransaction);
