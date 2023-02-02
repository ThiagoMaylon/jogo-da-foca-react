export const Corpo = ({erros}) => {

    const divs = [];
    for (let index = 0; index < erros; index++) {
        divs.push(<div key={index} className={`corpo corpo-${index}`}>i</ div>)
    }

    return <>{divs}</>
} 