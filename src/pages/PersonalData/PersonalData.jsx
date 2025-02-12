import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import "./PersonalData.scss";

const PersonalData = () => {
    useEffect(() => {
        document.title = "Osobní údaje";
    }, []);

    return (
        <>
            <PageTitle title="Osobní údaje" />
            <PageInfo>
                <strong>Vážení pacienti,</strong>
                <strong>
                    Vaše osobní údaje jsou zpracovávány ve zdravotnické
                    dokumentaci v plném souladu s platnými právními předpisy
                    zejména v souladu se zákonem č. 372/2011 Sb., o zdravotních
                    službách a podmínkách jejich poskytování (zákon o
                    zdravotních službách) a jeho prováděcími předpisy.
                </strong>
                <strong>
                    Jejich zabezpečení a ochrana je zajištěna v souladu s těmito
                    předpisy i v souladu s Obecným nařízením Evropského
                    parlamentu a Rady EU 2016/679 o ochraně osobních údajů (tzv.
                    GDPR).
                </strong>
                <strong>
                    Kromě možnosti přístupu k Vašim osobním údajům námi
                    zpracovávaných, máte právo požadovat jejich opravu či
                    omezení zpracování pokud zjistíte, že jsou tyto údaje
                    nesprávné, nepřesné,změnily se atd.
                </strong>
                <strong>
                    Poskytování Vašich osobních údajů je zákonným požadavkem a
                    máte jako pacient povinnost je poskytnout, stejně jako
                    zdravotnický pracovník má právo je po Vás požadovat.
                    Odpovědnou osobou , na kterou se můžete obracet, je Váš
                    ošetřující lékař.
                </strong>
            </PageInfo>
        </>
    );
};

export default PersonalData;
