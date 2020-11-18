import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://herokutuan.herokuapp.com',
    headers: {'Authorization':'Bearer ya29.a0AfH6SMC3w1tXe7lCUECmZhkZZ1tRIaeYTrcF1B9_Bk7PFJcfbuxds7nEqowZQNqBs4_JBrnA9a2dDuY_r58jnUl0zgtBUZz95iTKwlVhvVzWgpaJzsiqD7045KO-NdLCa1TT7ZhZcP6npf_Ofb_Y-fkN9ZVgGjG',
              'uid':'doannhatanh5@gmail.com',
              'access-token':'EgdDIb6jHtsvlc2yR-_3ag',
              'client':'YmpE-s7szpbWrnMl4FfPrA',
              'Content-Type': 'application/json'}
})

export default instance;