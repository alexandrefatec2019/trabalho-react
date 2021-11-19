import { useContext } from 'react'
import { Context, Blog } from '../../App'

export default function Adicionar() {



    const [dados, setDados] = useContext(Context);

    function HandleSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        setDados(...dados, [data]);
        Blog.
        console.log(data.get('titulo'));


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
                    <button type="submit" className="btn btn-primary btn-sm">Adicionar</button>
                </form>
            </div>
        </div>
    )
}