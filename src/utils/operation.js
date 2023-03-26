// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation

import { tezos } from "./tezos";

export const buyTicketOperation = async () => {
    try {
        const contract = await tezos.wallet.at(process.env.REACT_APP_API_KEY);
        const op = await contract.methods.buy_ticket().send({
            amount:1,
            mutez:false
        })
        await op.confirmation(1);
    } catch (err) {
        throw err;
    }
  
};

// TODO 10 - Call end_game entrypoint in the Lottery contract by completing endGameOperation

export const endGameOperation = async () => {
try{

    const contract = await tezos.wallet.at(process.env.REACT_APP_API_KEY);
    const randomNumber = Math.random(Math.random()*1000)
    const op = await contract.methods.end_game(randomNumber).send()
    await op.confirmation(1);
}
    catch( err) {
    throw err;
}
};
