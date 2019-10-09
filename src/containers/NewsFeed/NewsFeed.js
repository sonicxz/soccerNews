import React,{Component} from 'react';
import Title from '../../components/Title/Title';
import ShortDescription from '../../components/ShortDescription/ShortDescription';
import IMG from '../../components/IMG/IMG';
import AUX from '../../HOC/Auxiliary/Auxiliary';


class NewsFeed extends Component{


    state={

    }
    render() {
        return (
            <AUX>
            <Title newsTitle="Title"></Title>
            <hr></hr>
            <IMG></IMG>
            <hr></hr>
            </AUX>
        )
    }
}
export default NewsFeed;