import { useEffect, useRef, useState } from "react";
import axios from "axios";
import classNames from "classnames";
import logo from "/bourek.png";
import "./App.css";

function App() {
	const [data, setData] = useState({
		date: "",
		info: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	const websiteIframe = useRef(null);

	useEffect(() => {
		const getData = async () => {
			setIsLoading(true);

			try {
				const response = await axios.get(import.meta.env.VITE_API_URL);
				setData(response.data);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
				setIsLoading(false);
			}
		};

		getData();
	}, []);

	// TODO: LEARN THIS
	const reloadIframe = () => {
		if (!websiteIframe.current) return;

		// SAFEST way (works with any URL)
		websiteIframe.current.src = websiteIframe.current.src;

		// If same-origin and you really want reload():
		// websiteIframe.current.contentWindow?.location.reload();
	};

	const updateData = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			// Add loading to update the data
			await new Promise((resolve) => setTimeout(resolve, 2000));
			await axios.put(import.meta.env.VITE_API_URL, data);
			const div = document.createElement("div");
			div.textContent = "Informace aktualizovány!";
			document.body.append(div);
			div.classList.add("pop-up");

			setTimeout(() => {
				div.remove();
			}, 3000);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
			reloadIframe();
		}
	};

	return (
		<div className="wrapper">
			<header>
				<p className="header__logo">
					<img width={30} height={30} src={logo} alt="" />
					<span>
						MUDr. Josef Bourek (<span className="accent-logo">admin</span>)
					</span>
				</p>
			</header>
			<div className="input-container">
				<label htmlFor="date">Zadejte požadované datum</label>
				<input
					id="date"
					type="date"
					value={data.date}
					onChange={(e) => setData({ ...data, date: e.target.value })}
				/>
			</div>
			<div className="input-container">
				<label htmlFor="text-id">Zadejte informace, které potřebujete</label>
				<textarea
					id="text-id"
					type="text"
					value={data.info || ""}
					onChange={(e) => setData({ ...data, info: e.target.value })}
					cols="30"
					rows="10"
				></textarea>
			</div>
			<button
				onClick={updateData}
				className={classNames("btn", {
					"btn--disabled": isLoading,
				})}
				disabled={isLoading}
			>
				{isLoading ? "Prosím počkejte..." : "Potvrdit"}
			</button>
			<div className="check-site-container">
				<p>Ujistěte se, že jsou informace aktualizovány.</p>
				<a href="https://www.bourek.cz/" target="_blank">
					www.bourek.cz
				</a>
			</div>
			<div className="sample">
				<p>Příklad webové stránky</p>
				{/* TODO: */}
				<div style={{ transform: "scale(0.5)", transformOrigin: "0 0" }}>
					<iframe
						ref={websiteIframe}
						style={{ width: "200%", height: "720px" }}
						src="https://bourek.cz/"
						frameborder="0"
					></iframe>
				</div>
			</div>
			<footer>
				<div className="creator">
					Created by{" "}
					<a href="https://www.heeeyooo.studio/" target="_blank">
						heeeyooo studio
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
