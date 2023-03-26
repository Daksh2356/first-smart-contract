// TODO 8 - Fetch storage of the Lottery by completing fetchStorage

import axios from "axios";

export const fetchStorage = async () => {

    const res = await axios.get(`https://api.ghostnet.tzkt.io/v1/contracts/${process.env.REACT_APP_API_KEY}/storage`);
    return res.data;
};
