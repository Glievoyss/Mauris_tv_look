import axios from 'axios';

axios.defaults.baseURL = 'http://api.tvmaze.com/schedule';

const GetImgList = SearchDate => {
  const country = `?country=US`;
  const searchQweryDate = `&date=${SearchDate}`;
  return axios.get(country + searchQweryDate);
};

export default GetImgList;
