import { useContext, useCallback } from 'react'
import { Context } from '../../App'
import CardPost from './Card';
export default function Listar() {

    const [dados, setDados] = useContext(Context);

    const handleClick = useCallback(() => {
        console.log("callback")
    }, []);


    return (
        <div className="card p-2" style={{ width: "100%" }}>
            <div className="container d-inline-flex flex-wrap">

                {[...dados].map((item) => {
                    console.log(item.id);
                    return (
                        
                            
                            <CardPost key={item.id} data={item} onClick={handleClick} />
                        
                    )

                }

                )}

            </div>
        </div>
    )
}