import React from "react"
import Jokes from "./Jokes"

function AppJokes() {
    return (
        <div className="jokes">
            <Jokes
                punchLine="It's hard to explain puns to kleptomaniacs because they always take things literally."
            />

            <Jokes
                question="Why did the chicken cross the road?"
                punchLine="To get to the other side, duh"
            />

            <Jokes
                question="Why did the cock cross the road?"
                punchLine="To get to the other cock, duh"

            />
            <Jokes
                question="Why did the piggy cross the road?"
                punchLine="To get to the other piggy, duh"

            />

            <Jokes
                question="Why did the doggo cross the road?"
                punchLine="To get to the other doggo, duh"

            />

            <Jokes
                question="Why did the chin-chila cross the road?"
                punchLine="To get to the other chin-chila, duh"

            />
        </div>
    )
}

export default AppJokes
