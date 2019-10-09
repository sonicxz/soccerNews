import React,{Component} from 'react';
import Title from '../../components/Title/Title';
import ShortDescription from '../../components/ShortDescription/ShortDescription';
import IMG from '../../components/IMG/IMG';
import AUX from '../../HOC/Auxiliary/Auxiliary';
import LongDescription from '../../components/LongDescription/LongDescription';
import ButtonNews from '../../UI/ButtonNews/ButtonNews';

class NewsFeed extends Component{

    
    state = {
        counter:0,
        longFlag: false
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
    
    getSafe = (fxn, defaultVal) => {
        try {
            return fxn();
         } 
        catch (error) {
            return defaultVal;
        }
    };

    incrementCounter = () => {
        if (this.state.counter < this.props.contents.length - 1) {
            this.setState({
                counter: this.state.counter + 1
            });
        } else {
            alert("No More News");
        }
    };
    decrementCounter = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            });
        } else {
            alert("No Previous News");
        }
    };
    

    render() {
        console.log(this.state.contents)
        return (
            <AUX>
                <Title>
                {this.getSafe(
                        () => this.props.contents[this.state.counter].title,
                        "No Title"
                )}</Title>

            <hr></hr>
            
            <IMG 
            srcImage={this.getSafe(
                        () => this.props.contents[this.state.counter].images.large,
                        "../some_default_image"
                    )}
            shortDescription={this.getSafe(() => this.props.contents[this.state.counter].content_parts[this.state.counter].content, 
                <b><code>Error From API</code></b>)} 
            clickDetail={this.LongContentHandler}></IMG>

            <hr></hr>

                <LongDescription show={this.state.longFlag} clickRem={this.RemLongContentHandler}>{this.getSafe(
                    () => this.props.contents[this.state.counter].content,
                    <b><code>Error From API</code></b>
                )}
                </LongDescription>
            <ButtonNews btnType="Previous" click={this.decrementCounter}>Previous</ButtonNews>
            <ButtonNews btnType="Next" click={this.incrementCounter}>Next</ButtonNews>
            </AUX>
           )
    }
}
export default NewsFeed;