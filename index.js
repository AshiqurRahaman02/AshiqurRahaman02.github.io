function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

function scrollToAbout() {
	window.scrollTo({
		top: 700,
		behavior: "smooth",
	});
}

function scrollToSkills() {
	window.scrollTo({
		top: 1500,
		behavior: "smooth",
	});
}
function scrollToProjects() {
	window.scrollTo({
		top: 2550,
		behavior: "smooth",
	});
}
function scrollToStatistics() {
	window.scrollTo({
		top: 4350,
		behavior: "smooth",
	});
}
function scrollToContact() {
	window.scrollTo({
		top: 5700,
		behavior: "smooth",
	});
}

function openResumeInNewTab() {

	// Get the resume link
	const resumeLink = "./Ashiqur-Rahaman -Resume.pdf"

	// Open the resume in a new tab or window
	window.open(resumeLink, "_blank");
}

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const sendEmail = document.querySelector("#sendEmail");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const text = document.querySelector("#text");
sendEmail.addEventListener("click", (e) => {
	e.preventDefault();

	let details = {
		from: email.value,
		to: "ashiqur999999@gmail.com",
		subject: "Email from Portfolio",
		text: `${name.value} \n ${number.value} \n ${text.value} \n from ${email.value}`,
	};
	// console.log(details);
	fetch("https://tiny-lime-jay-coat.cyclic.app/send-email", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(details),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

const slider = document.querySelector("#slider");
const tags = document.querySelector("#sTags");
slider.addEventListener("click", () => {
	const computedStyle = window.getComputedStyle(slider);
	const rotation = computedStyle.getPropertyValue("rotate");

	if (rotation == "180deg") {
		slider.style.rotate = "90deg";
		tags.style.visibility = "visible";
	} else {
		slider.style.rotate = "180deg";
		tags.style.visibility = "hidden";
	}
});
