import './index.css'

export default function Card_Post({ data }) {
    const { id, titulo, texto, curtida } = data;

    const estrela = `${process.env.PUBLIC_URL}\\estrela.png`;
    const estrelaApagada = `${process.env.PUBLIC_URL}\\estrela-apagada.png`;


    return (
        <>

            <div className="card cardBlog  m-1" style={{ width: "18rem", backgroundColor: "#A2A7AB" }}>
                <div className="card-header h6">
                    {id}
                </div>

                <div className="card-body h6">
                    {texto}

                </div>
                <div className="card-footer">
                    {
                        Array(curtida ? curtida : 0).fill(1).map((el, i) =>
                            <img key={i} style={{ height: 30, width: 30 }} src={estrela} alt="" />
                        )
                    }

                    {
                        Array(curtida ? 5 - curtida : 5).fill(1).map((el, i) =>
                            <img key={i} style={{ height: 30, width: 30 }} src={estrelaApagada} alt="" />
                        )
                    }
                </div>
            </div>
        </>
    )
}