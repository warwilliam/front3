import React, { Component } from 'react'
export default class ClassComponent extends Component {
   render() {
       const {nome,estaNaLista}= this.props
       return (
           <ul>
           <li>{nome} {estaNaLista ? "está" : "não está"} convidado para a festa</li>
           </ul>
       )
       
   }
}
