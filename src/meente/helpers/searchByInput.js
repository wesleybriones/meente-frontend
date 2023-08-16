
export const searchByInput = ( text = '' ) => {

    // !: recopilar la data de la base de datos   
    const data = []

    text = text.toLocaleLowerCase().trim();

    if ( text.length === 0 ) return []

    return data.filter(
        text => text.toLocaleLowerCase().includes( text )
    );
}
