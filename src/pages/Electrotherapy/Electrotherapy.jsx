import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import "./Electrotherapy.scss";

const Electrotherapy = () => {
    useEffect(() => {
        document.title = "Elektroléčba";
    }, []);

    return (
        <>
            <PageTitle title="Elektroléčba" />
            <PageInfo>
                <p>
                    Elektroléčba je část fyzikální léčby, při které je využíván
                    léčebný účinek různých forem elektrické energie.
                    Elektroterapie a elektrodiagnostika prodělaly bouřlivý vývoj
                    a v současné době je tento rozvoj dále urychlován.
                </p>
            </PageInfo>
        </>
    );
};

export default Electrotherapy;
