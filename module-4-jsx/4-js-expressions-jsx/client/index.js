import React from 'react';
import ReactDOM from 'react-dom';


/* CONDITIONAL RENDERING - EXAMPLE 1*/
let GreetingUser = () => {
    return (<div>Welcome</div>)
}
//var GreetingUser2 = (<div>Welcome</div>);
let GreetingGuest = () => {
    return (<div>Please, Log in!</div>)
}
//var GreetingGuest2 = (<div>Please, Log in!</div>);
let Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <GreetingUser/>
    }else{
        return <GreetingGuest/>
    }
}
// let Greeting2 = (props) => {
//     const isLoggedIn = props.isLoggedIn;
//     if(isLoggedIn){
//         return GreetingUser2
//     }else{
//         return GreetingGuest2
//     }
// }
//ReactDOM.render(<Greeting isLoggedIn={false} />, document.getElementById("app"));



/***********************************************************/
/***********************************************************/
/************************ EXAMPLE 2 ************************/
/***********************************************************/
/***********************************************************/


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

//ReactDOM.render(<LoginControl />,document.getElementById('app'));


/***********************************************************/
/***********************************************************/
/************************ EXAMPLE 3 ************************/
/***********************************************************/
/***********************************************************/

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('app')
);