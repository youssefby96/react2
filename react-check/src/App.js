import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
return (
    <div className="App">
    <form className="form-inline">
        <div className="form-group mb-2">
        <label for="staticEmail2" className="sr-only">Email</label>
        <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
        </div>
        <div className="form-group mx-sm-3 mb-2">
        <label for="inputPassword2" className="sr-only">Password</label>
        <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
    </form>
    <form>
        <div className="form-group row">
        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
        </div>
        </div>
        <div className="form-group row">
        <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
        </div>
        </div>
        <fieldset className="form-group">
        <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
            <div className="col-sm-10">
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                <label className="form-check-label" for="gridRadios1">
                First radio
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                <label className="form-check-label" for="gridRadios2">
                Second radio
                </label>
            </div>
            <div class="form-check disabled">
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
                <label className="form-check-label" for="gridRadios3">
                Third disabled radio
                </label>
            </div>
            </div>
        </div>
        </fieldset>
        <div className="form-group row">
        <div className="col-sm-2">Checkbox</div>
        <div className="col-sm-10">
            <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1"/>
            <label className="form-check-label" for="gridCheck1">
                Example checkbox
            </label>
            </div>
        </div>
        </div>
        <div className="form-group row">
        <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
        </div>
    </form>
    
    <form>
        <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
);
}

export default App;
