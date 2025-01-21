import { useEffect } from "react";
import "./Prices.scss";

const Prices = () => {
    useEffect(() => {
        document.title = "Pepa Bourek | Ceník";
    }, []);

    return (
        <section className="prices">
            <h2 className="prices__title">Ceník</h2>
            <table className="prices__table">
                <tbody>
                    <tr>
                        <td>Laser</td>
                        <td>1 aplikace</td>
                        <td>80 Kč</td>
                    </tr>
                    <tr>
                        <td>
                            Elektroléčba
                            <br />
                            (bez doporučení)
                        </td>
                        <td></td>
                        <td>60 Kč</td>
                    </tr>
                    <tr>
                        <td>Starvac | masáž</td>
                        <td>15 min</td>
                        <td>200 Kč</td>
                    </tr>
                    <tr>
                        <td>
                            <abbr title="Léčebná tělesná výchova">LTV</abbr>
                        </td>
                        <td>
                            30 min
                            <br />
                            60 min
                        </td>
                        <td>
                            300 Kč
                            <br />
                            450 Kč
                        </td>
                    </tr>
                    <tr>
                        <td>Přístrojová lymfomasáž</td>
                        <td>
                            30 min
                            <br />
                            45 min
                            <br />
                            60 min
                        </td>
                        <td>
                            200 Kč
                            <br />
                            250 Kč
                            <br />
                            300 Kč
                        </td>
                    </tr>
                    <tr>
                        <td>10 procedur</td>
                        <td>45 min</td>
                        <td>2000 Kč</td>
                    </tr>
                    <tr>
                        <td>10 procedur</td>
                        <td>60 min</td>
                        <td>2400 Kč</td>
                    </tr>
                    <tr>
                        <td>Kinesiotape</td>
                        <td>1 cm</td>
                        <td>3 Kč</td>
                    </tr>
                    <tr>
                        <td>Cross tape</td>
                        <td>1 ks</td>
                        <td>30 Kč</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Prices;
