import { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import { buyTicketOperation, endGameOperation } from "./utils/operation";
import { fetchStorage } from "./utils/tzkt";

const App = () => {

  const [players, setPlayers] = useState([]);
  const [tickets, setTickets] = useState(3);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    (async () => {
      const storage = await fetchStorage();
      setPlayers(Object.values(storage.players));
      setTickets(storage.tickets_available);
    })();
  }, []);


  const onBuyTicket = async () => {
    try {
      setLoading(true);
      await buyTicketOperation();
      alert("successfull transaction !!")
    } catch (error) {
      throw error;
    }
    setLoading(false);
   
  };


  const onEndGame = async () => {
    try {
        setLoading(true);
        await endGameOperation();
        alert("successfull transaction !!")
    } catch (error) {
      throw error;
    }
    setLoading(false);
  };

  return (
    <div style={{     }} className="h-100">
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center h-100">

        <div className="py-1">Tickets remaining: {tickets}</div>
  
        {tickets > 0 ? (
          <button onClick={onBuyTicket} className="btn btn-primary btn-lg">
        
            {loading ? "Loading.." : "Buy Ticket"}
            
          </button>
        ) : (
          <button onClick={onEndGame} className="btn btn-success btn-lg">
   
            {loading ? "Loading..." : "End Game "}
            
          </button>
        )}
    
        <div className="mt-2">
          {players.map((player, index) => (
            <div key={index}>
              <b>Ticket {index + 1}:</b> {player}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
