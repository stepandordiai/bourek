import { useEffect } from "react";
import "./Appointment.scss";

const Appointment = () => {
    useEffect(() => {
        document.title = "Pepa Bourek | Jmenování";
    }, []);

    return (
        <section className="appointment">
            <h2 className="appointment__title">Jmenování</h2>
            <iframe
                className="google-calendar"
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3tHpoVbC208J_s6Dxfr_M4_8eUaqRGwFJs2RliRbGrH9rC4GvxsNZwRX7woMo1WRhB3WtdcqKS?gv=true"
                frameBorder="0"
            ></iframe>
        </section>
    );
};

export default Appointment;
