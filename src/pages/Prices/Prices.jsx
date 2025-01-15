import "./Prices.scss";

const Prices = () => {
    return (
        <section className="prices">
            <h3 className="prices__title">Ceny</h3>
            <h4 className="contact__form-title">Lymfodrenáž</h4>
            <table className="prices__table">
                <tbody>
                    <tr>
                        <td>1 procedůra</td>
                        <td>45 min</td>
                        <td>250 Kč</td>
                    </tr>
                    <tr>
                        <td>1 procedůra</td>
                        <td>60 min</td>
                        <td>300 Kč</td>
                    </tr>
                    <tr>
                        <td>10 procedůr</td>
                        <td>45 min</td>
                        <td>2.000 Kč</td>
                    </tr>
                    <tr>
                        <td>10 procedůr</td>
                        <td>60 min</td>
                        <td>2.400 Kč</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Prices;
