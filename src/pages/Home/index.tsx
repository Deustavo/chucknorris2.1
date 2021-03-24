import React, { useEffect, useState } from 'react';
import LogoGif from '../../img/giphy.gif';
import LoadingChuck from '../../img/head-chuck.png';
import { HomeContainer } from './style';
import api from '../../service/api';


interface IJoke{
    id: string;
    icon_url: string;
    value: string;
}

const Home: React.FC = () => {
    const [ categoriesJoke, setCategoriesJoke ] = useState([]);
    const [ allJokes, setAllJokes] = useState(false);
    const [ isLoad, setIsLoad ] = useState(false);
    const [ resultSearch, setResultSearch ] = useState<IJoke[]>([]);
    // const [ searchJoke, setSearchJoke ] = useState('');
    // const [ categorySelected, setCategorySelected ] = useState<IJoke>();


    useEffect( () => {
        api.get('jokes/categories').then(
            response => {
                setCategoriesJoke(response.data);
            }
        )
    }, [])

    async function handleJokes(e: string){
        setIsLoad(true);
        try {
            if(allJokes) {
                var response1 = await api.get(`jokes/search?query=${e}`);
                setResultSearch(response1.data.result);
                if(response1.status === 200 ){
                    setIsLoad(false);
                }
            } else {
                var response2 = await api.get(`jokes/random?category=${e}`);
                setResultSearch([response2.data]);
                if(response2.status === 200 ){
                    setIsLoad(false);
                }
            }
        } catch {
            setIsLoad(false);
            setResultSearch([]);
        } 
    }

    // async function handleJokeByCategory(e: string){
    //     setIsLoad(true);
    //     const response = await api.get(`jokes/random?category=${e}`);
    //     setCategorySelected(response.data);
    //     if( response.status === 200 ){ 
    //         setIsLoad(false);
    //     } 
    // }


    return (
        <HomeContainer>
            <img className="logo-page" src={LogoGif} alt="chuck"/>
            <h1 className="title-page">Chuck Norris Jokes</h1>

            <div className="input-group">
                <h2>Choose a joke category</h2>
                <div>
                    <select className="input-main" defaultValue="0" onChange={(e) => handleJokes(e.target.value)}>
                        <option disabled value="0"> -- select an option -- </option>
                        {categoriesJoke.map( (joke, index) => (
                            <option key={index} value={joke}>{joke}</option>
                        ))}
                    </select>
                </div>
                <div className="input-options">
                    <div onClick={() => setAllJokes(false)}>
                        <input type="radio" id="random" name="type-joke" value="random" defaultChecked/>
                        <label htmlFor="random">A random joke</label>
                    </div>
                    <div onClick={() => setAllJokes(true)}>
                        <input type="radio" id="all" name="type-joke" value="all" />
                        <label htmlFor="all">All jokes in category</label>
                    </div>
                </div>
            </div>
            
            <div className="joker-group">
                { isLoad ? <img className="loading-image rotating" src={LoadingChuck} alt="load"/> : resultSearch.map( result => (
                    <div className="joker" key={result.id}>
                        <img src={result.icon_url} alt={result.value}/>
                        <h3>{result.value}</h3>
                    </div>
                )) }
            </div>

            {/* <div className="categories">
                <h2>Random Joke</h2>
                <div>
                    <select>
                        <option>Selecione uma categoria</option>
                        {categoriesJoke.map( (joke, index) => (
                            <option key={index} value={joke} onClick={ () => handleJokeByCategory(joke) }>{joke}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <img src={categorySelected?.icon_url} alt={categorySelected?.value}/>
                    <h3>{categorySelected?.value}</h3>
                </div>
            </div> */}

            {/* <div>
                <h2>Find Joke</h2>
                <div className="input-group">
                    <input type="text" onChange={ e => setSearchJoke(e.target.value)} />
                    <button type="submit" onClick={handleJokes}> Find joke</button>
                </div>
                <p>Find results for:</p>
                <div className="joker">
                    { isLoad ? <img src={LogoGif} alt="load"/> : resultSearch.map( result => (
                        <div key={result.id}>
                            <img src={result.icon_url} alt={result.value}/>
                            <h3>{result.value}</h3>
                        </div>
                    )) }

                </div>
            </div> */}
        </HomeContainer>
    );
}

export default Home;