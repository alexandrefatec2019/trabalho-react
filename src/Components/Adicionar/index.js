import { useContext } from 'react'
import { Context } from '../../App'

export default function Adicionar() {



    const [dados, setDados] = useContext(Context);


    function HandleSubmit(e) {
        e.preventDefault();



        const data = new FormData(e.target);

        let titulo = data.get("titulo");
        let texto = data.get("texto");

        setDados([...dados, { 'id': dados.length, 'titulo': titulo, 'texto': texto }]);
    }

    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={HandleSubmit}>
                    <div className="mb-0">
                        <label className="form-label">Título</label>
                        <input name="titulo" id="titulo" type="text" className="form-control" required />
                    </div>
                    <div className="mb-0">
                        <label className="form-label">Texto</label>
                        <input name="texto" type="text" className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm mt-4">Adicionar</button>
                </form>
            </div>
        </div>
    )
}