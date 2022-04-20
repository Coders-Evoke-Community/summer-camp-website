import React,{Component} from "react";
import ReactDOM from "react-dom";
import {TeamCard} from "./teamCard";
import KrupeshVithlani from "../assets/img/Team/Krupesh Vithlani.jpg"
export class Teammembers4 extends Component{
    state={
        counters:[
           {id:'Tushar Gupta', role: 'Content Writer', github: 'https://github.com/Tushar-2003'},
           {id:'Anjali Sahu', role: 'Graphic Designer', github: 'https://github.com/99anjali'},
           {id: 'Kaushik Lakhani', role: 'Content Writer', github: 'https://github.com/kaal-coder'}
           
        ]
    }
    render(){
        return(
            <div class="container">
              <div class="row">
                {this.state.counters.map((counter) => (
                    <div class="col-lg-4">
                      <TeamCard
                         key={counter.id}
                         id={counter.id}
                         role = {counter.role}
                         github = {counter.github}
                         img = {counter.img}
                      ></TeamCard>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}
