export const fetchUrl = () => {
    const results= 'results=5000'
    const seed = 'seed=abc'
    const URL = 'https://randomuser.me/api/?'+results+'&'+seed;
    
    return fetch(URL);
};