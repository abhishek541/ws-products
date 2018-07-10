import request from './request';

export let getAllProducts = () => {
    return request(
      {url:"./products.json",
       method: "GET"})
        .then(data => data = JSON.parse(data))
}
