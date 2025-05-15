export async function getStaticProps() {
    // ... lógica para obtener datos ...
    return {
        props: { // Este objeto 'props' se pasa al componente de la página
            datoImportante: "Información obtenida",
            listaDeItems: [1, 2, 3]
        }
    };
}
function MiPagina({ datoImportante, listaDeItems }) { // Recibe las props
    // ... usa datoImportante y listaDeItems ...
    return (
        <div>
            <p>{datoImportante}</p>
            <ul>{listaDeItems.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
    );
}
export default MiPagina;
