import Axios from "axios";
import { TOKEN } from "./../const/const";

const postData = async (url, params = {}) => {
  const _data = null;
  await Axios.post(
    url,
    {
      ...params,
    },
    {
      headers: {
        Authorization: `token ${TOKEN}`,
        accept: "application/json",
      },
    }
  )
    .then((e) => {
      _data = e.data;
      console.log(_data);
    })
    .catch((err) => console.log("Err: ", err));
  return _data;
};

const getData = async (url) => {
  await Axios.get(url, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  })
    .then((e) => {
      _data = e.data;
      console.log(_data);
    })
    .catch((err) => console.log("Err: ", err));
};
