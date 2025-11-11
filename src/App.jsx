import React, { Suspense } from 'react'

var Home = React.lazy(()=>import("./Home"))


function App(){
    return(
        <div>
            <Suspense fallback = {<h1>Loading...</h1>}>
                <Home/>

            </Suspense>

        </div>
    )
}

export default App