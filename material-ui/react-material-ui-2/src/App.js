import logo from './logo.svg';
import './App.css';
import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

function CheckboxExample() {
    const [checked, setChecked] = React.useState(true);
    return (
        <div>
            <FormControlLabel
                label = 'Testing checkbox'
                control={
                    <Checkbox
                        checked={checked}
                        onChange={(e) => {
                            setChecked(e.target.checked)
                        }}
                        inputProps={{
                            'aria-label' : 'secondary checkbox'
                        }}
                    />
                }
            />

        </div>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <TextField
              variant="filled"
              color="secondary"
              type="time"
              label="Time"
          />
          <CheckboxExample/>
          <ButtonGroup variant="contained" color="primary">
              <Button
                  style={{
                      fontSize: "100"
                  }}>
                  Save
              </Button>
              <Button
                  style={{
                      fontSize: "100"
                  }}>
                  Discard
              </Button>
          </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
