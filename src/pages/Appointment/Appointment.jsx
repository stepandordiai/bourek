import { useEffect } from "react";
import "./Appointment.scss";

const Appointment = () => {
    useEffect(() => {
        document.title = "Bourek | Appointment";
    });
    return (
        <section className="appointment">
            <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3tHpoVbC208J_s6Dxfr_M4_8eUaqRGwFJs2RliRbGrH9rC4GvxsNZwRX7woMo1WRhB3WtdcqKS?gv=true"
                // style="border: 0"
                width="100%"
                height="600"
                frameBorder="0"
            ></iframe>
        </section>
    );
};

export default Appointment;
