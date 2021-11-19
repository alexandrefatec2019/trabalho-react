import { useContext } from 'react'
import { Context } from '../../App'

export default function Listar() {

    const [dados, setDados] = useContext(Context);


    return (
        <div className="card">
            <div className="card-body">
                {/* {JSON.stringify(dados)} */}
                <ul>
                    {[...dados].map((item) => (
                        <li key={item.id}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}