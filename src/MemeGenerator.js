import React from "react"

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            //loading: false
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        //     this.setState({ loading: true })
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json()) //changes the returned promise into a Javascript object? upon which we call the json method
            .then(response => {  //then get the actual response that will be useful to us
                const { memes } = response.data  //then pull the memes array from response.data
                //console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        // get a random int (index in the array)
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        // get the meme from that index
        // set 'randomImg' to the '.url' of the random item i grabbed
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText} //setting value to its value in state makes it a controlled form
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}



export default MemeGenerator