import React,{Component} from 'react';
import Title from '../../components/Title/Title';
import ShortDescription from '../../components/ShortDescription/ShortDescription';
import IMG from '../../components/IMG/IMG';
import AUX from '../../HOC/Auxiliary/Auxiliary';
import LongDescription from '../../components/LongDescription/LongDescription';
import ButtonNews from '../../UI/ButtonNews/ButtonNews';


class NewsFeed extends Component{

    
    state = {
        contents:{},
        // id: 0,
        // title: 'Title',
        // srcImage: '',
        // shortContent: 'Hello Brother',
        // longContent: 'Hello',
        longFlag: false
    }
    
    componentDidMount() {
        fetch('https://librarian.onefootball.com/es/homestream')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contents : data })
            })
            .catch(console.log)
    }

    LongContentHandler=() => {
        this.setState({
            longFlag:true
        })
    }
    RemLongContentHandler=() => {
            this.setState({
                longFlag: false
        })
    }
    

    render() {
        return (
            <AUX>
            <Title>"Hi"</Title>
            <hr></hr>
            <IMG 
            srcImage={this.state.contents} 
            shortDescription={this.state.shortContent} 
            clickDetail={this.LongContentHandler}></IMG>
            <hr></hr>
            <LongDescription show={this.state.longFlag} clickRem={this.RemLongContentHandler}>{this.state.longContent}</LongDescription>
            <ButtonNews btnType="Previous" click='hi'>Previous</ButtonNews>
            <ButtonNews btnType="Next" click='hi'>Next</ButtonNews>
            </AUX>
        )
    }
}
export default NewsFeed;