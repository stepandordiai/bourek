import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import "./Laser.scss";

const Laser = () => {
    useEffect(() => {
        document.title = "Laser";
    }, []);

    return (
        <>
            <PageTitle title="Laser" />
            <PageInfo>
                <p>
                    Laser je světlo zesilované pomocí stimulované emise záření.
                    Podstatu tohoto záření objasnily zákony kvantové fyziky.
                    První podnět k hlubšímu studiu kvantové teorie dal Albert
                    Einstein. V případě laseru se jedná o koherentní
                    monochromatické záření v oblasti mikrovln, popřípadě
                    viditelného záření.
                </p>
            </PageInfo>
        </>
    );
};

export default Laser;
