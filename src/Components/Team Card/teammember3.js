import React,{Component} from "react";
import ReactDOM from "react-dom";
import {TeamCard} from "./teamCard";
import KrupeshVithlani from "../assets/img/Team/Krupesh Vithlani.jpg"
export class Teammembers3 extends Component{
    state={
        counters:[
           {id:'Priyanshu Mundra', role: 'Tech Team', github: 'https://github.com/Spyder15'},
           {id:'Susmita Bhattacharya', role: 'Content Writer', github: 'https://github.com/SB2318'},
           {id: 'Tanvi Sanghvi', role: 'Graphic Designer', github: 'http://github.com/tanvisanghvi'}
           
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
