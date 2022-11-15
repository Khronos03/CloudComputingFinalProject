import { useEffect, useState, useCallback, useMemo } from 'react';
import { Repository } from '../Repository';
import Entrys from '../../Components/Entrys';


export default function Authentication() {

  const [user, setUser] = useState([]);
  const [pass, setPass] = useState([]);
  const [cm, setCm] = useState(false);

  const getCollections = useCallback(async () => {
    const collectionsFromRepository = await Repository.getCollections("Authentication");
    setUser(collectionsFromRepository[0].user);
    setPass(collectionsFromRepository[0].pass);
  }, []);

  useEffect(() => {
    getCollections();
  }, []);

  const handleDataSubmit = (event) => {
    event.preventDefault();

    const userI = event.target[0].value;
    const passI = event.target[1].value;

    if ((userI === user) && (passI === pass)) {
      setCm(true);
    } else {
      alert("Datos Incorrectos");
    }

  };

  return (
    <>
      {
        cm ? (<Entrys />) : (
          <form
            onSubmit={handleDataSubmit}
            className="flex cols-3"
          >
            <input
              type="text"
              name="user"
              placeholder="User"
              className="w-full p-2 font-semibold rounded-sm shadow-md text-black"
              required
            />

            <input
              type="password"
              placeholder="******************"
              name="user"
              className="w-full p-2 my-1 font-semibold rounded-sm shadow-md text-black m-4"
              required
            />

            <button className="px-2 mx-2 font-bold text-white bg-blue-700 border-2 border-blue-800 rounded-md shadow-xl hover:bg-blue-900">
              Iniciar Sesion
            </button>
          </form>
        )
      }
    </>
  );
}
