import React from 'react';
import RemoveTransaction from './RemoveTransaction';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardText, CardActions, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Pokaż listę zapisanych transakcji
const TransactionList = (props) => {
  console.log(props);
  return (
    <div className="content-conatainer1">
      <MuiThemeProvider>
        <Card>
          <CardTitle title={`Nazwa: ${props.transactionName}`} />
          <CardText>
            <div>
              <p>Kwota w Euro: <span><strong>{props.transactionEuro}</strong> €</span></p>
              <p>Kwota w PLN: <span><strong>{props.transactionSum}</strong> zł</span></p>
            </div>
          </CardText>
          <CardActions>
            <RemoveTransaction transaction = {props}/>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    </div>
  )
}
//transaction = {props} - przenieś dane transakcji, która użytkownik chce usunac do komponentu RemoveTransaction
export default TransactionList;
