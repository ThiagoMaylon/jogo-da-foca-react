export const Corpo = ({jogadasErradas}) => {
    return(
        <>
            {jogadasErradas >= 1 (
                <div className="cabeca">
                    {jogadasErradas >= 2 (
                        <div className="tronco">
                            {jogadasErradas >= 3 (
                                <div className="braco-esquedo">
                                    {jogadasErradas >= 4 (
                                    <div className="braco-direito">
                                        {jogadasErradas >= 5 (
                                            <div className="perna-esqueda">
                                                {jogadasErradas >= 6 (
                                                    <div className="perna-direta">

                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </>
    )
} 