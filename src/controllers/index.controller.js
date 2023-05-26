import {pool} from '../db.js'

export const ping = async (req, res) => {
    //const [result] = await pool.query('SELECT "SI HAY CONEXION CON LA BD" AS result')

    try{
        const consulta = `show tables;`; 
    
     
        const [result] = await pool.query(consulta);
        res.json(result);

        }
        catch(error){
            res.json(error);
        }
    }
