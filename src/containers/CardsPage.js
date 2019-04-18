import React from "react";
import AllCards from './AllCards'
import AllCardsNoPlayers from './AllCardsNoPlayers'
import MyCards from './MyCards'
import UserLogin from './UserLogin'
// import App from '../App'


class CardsPage extends React.Component {

  render() {

    let renderer;

    if(this.props.loggedIn === false) {
      renderer = <UserLogin logMeIn={this.props.logMeIn}/>
    } else if (this.props.loggedIn === true) {
      if (this.props.cards.length > 0){
        renderer = <div><MyCards logMeOut={this.props.logMeOut} myCards={this.props.myCards} removeCard={this.props.removeCard} saveTeamObject={this.props.saveTeamObject}/>
                   <AllCards cards = {this.props.cards} addCardToMyCards={this.props.addCardToMyCards} getFilteredData={this.props.getFilteredData} />
                   </div>}
      else {
        renderer =  <div><MyCards myCards={this.props.myCards} removeCard={this.props.removeCard} saveTeamObject={this.props.saveTeamObject}/><AllCardsNoPlayers cards = {this.props.cards} addCardToMyCards={this.props.addCardToMyCards} getFilteredData={this.props.getFilteredData} /></div>
      }
    }

    return (
      <div className="ui container">
        {renderer}
      </div>
      )
    }
  }



export default CardsPage;
