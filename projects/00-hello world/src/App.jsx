import './App.css'
import { TwitterFollowCard } from './TwitterFolloCard'
import './index.css'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard f
                userName='MerpLab'
                name='Merp'
            />

            <TwitterFollowCard
                userName='ProfFeynman'
                name='Prof. Feynman'
                initialIsFollowing={true} />

            <TwitterFollowCard
                userName='Iron_Man'
                name='Iron Man'
            />
        </section>
    )
}