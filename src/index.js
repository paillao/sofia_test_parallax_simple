// import gsap from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LocomotiveScroll from 'locomotive-scroll';
// 
// gsap.registerPlugin(ScrollTrigger);
// 
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".smooth-scroll"),
//   smooth: true,
//   tablet: { smooth: true },
//   smartphone: { smooth: true }
// });
// locoScroll.on("scroll", ScrollTrigger.update);
// 
// ScrollTrigger.scrollerProxy(".smooth-scroll", {
//   scrollTop(value) {
// 	return arguments.length
// 	  ? locoScroll.scrollTo(value, 0, 0)
// 	  : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
// 	return {
// 	  top: 0,
// 	  left: 0,
// 	  width: window.innerWidth,
// 	  height: window.innerHeight
// 	};
//   }
// 
// });
// 
// // --- RED PANEL ---
// gsap.from(".line-1", {
//   scrollTrigger: {
// 	trigger: ".line-1",
// 	scroller: ".smooth-scroll",
// 	scrub: true,
// 	start: "top bottom",
// 	end: "top top"
//   },
//   scaleX: 0,
//   transformOrigin: "left center",
//   ease: "none"
// });
// 
// // --- ORANGE PANEL ---
// gsap.from(".line-2", {
//   scrollTrigger: {
// 	trigger: ".orange",
// 	scroller: ".smooth-scroll",
// 	scrub: true,
// 	pin: true,
// 	start: "top top",
// 	end: "+=100%"
//   },
//   scaleX: 0,
//   transformOrigin: "left center",
//   ease: "none"
// });
// 
// // --- PURPLE/GREEN PANEL ---
// var tl = gsap.timeline({
//   scrollTrigger: {
// 	trigger: ".purple",
// 	scroller: ".smooth-scroll",
// 	scrub: true,
// 	pin: true,
// 	start: "top top",
// 	end: "+=100%"
//   }
// });
// 
// tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
//   .from(
// 	".line-3",
// 	{ scaleX: 0, transformOrigin: "left center", ease: "none" },
// 	0
//   )
//   .to(".purple", { backgroundColor: "#28a92b" }, 0);
// 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// 
// ScrollTrigger.refresh();

