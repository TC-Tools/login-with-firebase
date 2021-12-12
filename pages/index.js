import { useState } from "react"
import { onAuthWithGitHub } from "../lib/firebase"

export default function index() {
    const [user, setUser] = useState(null)

    const loginWithGitHub = () => {
        onAuthWithGitHub()
            .then(user => setUser(user))
            .catch(error => console.log(error))
    }
    console.log(user)
    return (
        <div>
            <p>Home c:</p>            
            <button onClick={loginWithGitHub}>
                Github
            </button>
        </div>
    )
}
